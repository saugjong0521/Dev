import { useEffect, useState } from "react"
import { addReview, getReview } from "../api/Firebase";


export default function ProductReview({productId}){

    const [review, setReview] = useState([]);
    const [newReview, setNewReview] = useState('')

    useEffect(()=> {
        getReview(productId)
        .then((review)=>{
            setReview(review.sort((a,b)=>b.timestamp))
        })
        .catch((error)=>{
            console.error(error)
        })
    },[productId])

    const handleReview = async () => {
        try {
            const user = 'user';
            await addReview(productId, user, newReview);
            setNewReview('');
            getReview(productId).then(setReview);
        } catch(error){
            console.log(error);
        }
    }

    return(

        <div>
            <h3>review</h3>
            <ul>
                {review && review.slice(0,5).map((el, idx) => (
                    <li>{el.text}</li>
                ))}
            </ul>

            <input 
                type="text"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
            />
            <button onClick={handleReview}>작성하기</button>
        </div>

    )

}
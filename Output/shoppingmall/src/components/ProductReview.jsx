import { useEffect, useState } from "react"
import { addReview, getReview } from "../api/Firebase";

export default function ProductReview({productId}){

    const [review, setReview] = useState([]);
    const [newReview, setNewReview] = useState('')

    useEffect(()=> {
        getReview(productId)
        .then(setReview)
        .catch((error)=>{
            console.error(error)
        })
    },[productId])

    const handleReview = async (e) => {
        e.preventDefault();
        try {
            const user = 'user';
            const timestamp = Date.now();
            await addReview(productId, user, newReview, timestamp);
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
                    <li key={idx}>{el.text}</li>
                ))}
            </ul>

            <form onSubmit={handleReview}>
                <input 
                    type="text"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button type="submit">작성하기</button>
            </form>
        </div>
    )
}
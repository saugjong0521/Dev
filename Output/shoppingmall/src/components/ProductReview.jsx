import { useState } from "react"


export default function ProductReview({productId}){

    const [review, setReview] = useState([]);
    const [newReview, setNewReview] = useState('')

    return(

        <div>
            <h3>review</h3>
            <ul>
                {review && review.map((el, idx) => (
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
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
        </div>

    )

}
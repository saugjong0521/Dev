

export default function BoardListItem({post}){
    return(
        <li>
            <p>{post.title}</p>
            <p>{post.date}</p>
        </li>
    )
}
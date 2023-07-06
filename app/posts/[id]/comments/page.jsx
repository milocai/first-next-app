
const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        // cache: 'no-store',
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json())
}


export default async function Comments ({params}){
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <small><i>by: {comment.email}</i></small>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
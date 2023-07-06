import Link from "next/link"
import styles from "./SinglePost.module.css"

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        // cache: 'no-store',
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json())
}

export default async function Post({ children, params }) {
    const { id } = params 
    const post = await fetchSinglePost(id)

    return (
        <article className={styles.post}>
            <h1>Post { id }: <i style={{ color: 'orange' }}>{post.title}</i></h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            { children }
        </article>
    )
}
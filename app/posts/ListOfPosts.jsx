import Link from "next/link"
import { LikeButton } from "./LikeButton"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        
        // cache: 'no-store',
    
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json())
}

export default async function ListOfPosts() {
    const posts = await fetchPosts()


    return (
        posts.slice(0, 5).map(post => (
            <article key={post.id}>
                <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                    <h2 style={{ color: 'orange' }}>{post.title}</h2>
                    <p>{post.body}</p>
                </Link>
                <LikeButton id={ post.id }/>
            </article>
        ))
    )
}
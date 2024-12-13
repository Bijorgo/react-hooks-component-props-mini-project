import Article from "./Article"

export default function ArticleList({posts}){
    return(
            <main>
                {posts.map( post => (
                    <li key={post.id}>
                        <Article  title={post.title} date={post.date} preview={post.preview}/>
                    </li>
                ))}
            </main>
    )
}


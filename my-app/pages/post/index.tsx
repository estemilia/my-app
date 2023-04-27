import { loadPosts } from '../../lib/load-posts'
import Header from '../../components/header'
import Link from 'next/link'
import { PostsProps } from '../../interface'


export default function Posts(props:PostsProps) {
    const { posts } = props
    
    return (
        <main
          className={`items-center justify-between p-24`}>
          <Header />
          <div
            className="w-full justify-center">
            <h1>
              글들~
            </h1>
            
            <ul>
              {posts && posts.map((post) => (
                  <li key={`post-${post.id}`}>
                    <Link href={`/post/${post.id}/${encodeURIComponent(post.slug)}`}>
                      {post.title}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        </main>
    )
}



export async function getStaticProps() {//페이지마다
    const posts = await loadPosts()
    
    return {
        props: { posts }
    }
}

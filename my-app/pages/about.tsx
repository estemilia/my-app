import { useState, useEffect, ReactNode } from 'react'
import Header from '../components/header'
import useSWR from 'swr'
import { PostsProps } from '../interface'


// https://swr.vercel.app/ko
// https://nextjs.org/docs/basic-features/data-fetching/client-side

const fetcher =  (url: any) => fetch(url).then((res) => res.json());

function Profile() {
    const {data, error, isLoading} = useSWR('https://api.github.com/repos/vercel/swr', fetcher)

    if (error) {
        return (
            <h1>An error has ocurred</h1>
        )
    }
    

    if (isLoading) {
        return (
            <h1>Loading.....</h1>
        )
    }
    

    return (
        <div>
          <h1>
            {data.name}
          </h1>
          <p>{data.description}</p>
          <strong>👁 {data.subscribers_count}</strong>{" "}
          <strong>✨ {data.stargazers_count}</strong>{" "}
          <strong>🍴 {data.forks_count}</strong>
        </div>
    )
}

export default function About(props:PostsProps) {
    const { posts } = props

    return (
        <main
          className={'items-center justify-between'}>
          <Header />

          <div
            className="w-full justify-center">
            <p>
              어바웃 페이지 글씨가 NotoSans체로 설정되었을까?
              설정되었구만!
            </p>
            <Profile />
            <ul>
              {posts && posts.map((post) => (
                  <li key={`post-${post.id}`}>{post.title}</li>
              ))}
            </ul>
           </div>
        </main>
    )
}


//getStaticProps 와 getServerSideProps를 함께 사용하지 못함
async function getServerSideProps() {
    // const res = await fetch('https://.../data')
    // const data = await res.json()
    const posts = [{id: 1, title: '아이고', slug: 'aa'}, {id: 2, title: '개발새발', slug: 'bb'}]
    
    return {
        props: { posts }
    }

}

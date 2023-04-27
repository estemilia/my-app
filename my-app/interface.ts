import { ReactNode } from 'react'

interface Post {
          id: number;
          title: string;
          slug: string;
}

interface PostsProps {
          children?: ReactNode;
          posts: ReadonlyArray<Post>;
}


export type {
       PostsProps,
       Post
}
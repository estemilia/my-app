import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

export default function Index({post}) {
    const router = useRouter()
    const id = router.query.id as string
    const comment = router.query.comment as string
    
    return (
        <main
          className={`items-center justify-between`}>
          
          <p>id: {id}</p>
          <p>comment: {comment}</p>
        </main>
    )
}


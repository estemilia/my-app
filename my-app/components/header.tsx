import Link from 'next/link'

export default function Header() {
    return (
        <header>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>about</Link>
            </li>
            <li>
              <Link href='/post'>posts</Link>
            </li>
          </ul>
        </header>
    )
}
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/profile/1">User 1</Link>
        </li>
        <li>
          <Link href="/profile/2">User 2</Link>
        </li>
      </ul>
    </main>
  )
}

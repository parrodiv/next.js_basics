import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>
       This is the about page
      </p>
      <Link href="/"> Back to homepage</Link>
    </>
  )
}

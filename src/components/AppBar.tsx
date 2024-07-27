import Link from 'next/link'
import SigninBtn from './SigninBtn'

export default function AppBar() {
  return (
    <header className="flex justify-between">
      <div className="flex gap-5">
        <Link href={'/'}>Home Page</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>
      <SigninBtn />
    </header>
  )
}

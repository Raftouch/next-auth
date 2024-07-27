import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function SigninBtn() {
  const { data: session } = useSession()

  return (
    <div>
      {session && session.user ? (
        <div>
          <p>{session.user.name}</p>
          <Link href={'/api/auth/signout'}>Sign Out</Link>
        </div>
      ) : (
        <div>
          <Link href={'/api/auth/signin'}>Sing In</Link>
          <Link href={'/signup'}>Sing Up</Link>
        </div>
      )}
    </div>
  )
}

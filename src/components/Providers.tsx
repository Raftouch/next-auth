'use client'

import { SessionProvider } from 'next-auth/react'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  // react context API provider
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers

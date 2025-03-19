import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  // Hidrasyon uyumsuzluğunu önlemek için
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
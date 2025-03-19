import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/theme-provider'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              ModernUI
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
              Ana Sayfa
            </Link>
            <Link href="/components" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
              Bileşenler
            </Link>
            <Link href="/docs" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
              Dokümantasyon
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
              Hakkında
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
                Ana Sayfa
              </Link>
              <Link href="/components" className="block text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
                Bileşenler
              </Link>
              <Link href="/docs" className="block text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
                Dokümantasyon
              </Link>
              <Link href="/about" className="block text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition">
                Hakkında
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
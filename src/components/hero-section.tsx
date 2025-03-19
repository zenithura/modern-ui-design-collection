import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Arka plan */}
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 z-0"
      >
        {/* Dekoratif şekiller */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-300/20 dark:bg-secondary-600/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Içerik */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          style={{ y: textY, opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
          >
            Modern UI Tasarım Koleksiyonu
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Projelerinizi bir sonraki seviyeye taşımak için güzel, duyarlı ve
            animasyonlu UI bileşenleri koleksiyonu.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium shadow-lg shadow-primary-500/20 dark:shadow-primary-700/20"
              href="/components"
            >
              Keşfet
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 shadow-lg"
              href="/docs"
            >
              Dokümantasyon
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Aşağı kaydırma işareti */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center items-start p-1"
        >
          <motion.div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
import { motion } from 'framer-motion'

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Arka plan */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 z-0">
            {/* Dekoratif şekiller */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white opacity-10" />
              <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-white opacity-10" />
              <div className="absolute bottom-0 right-20 w-40 h-40 rounded-full bg-white opacity-10" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                }}
                className="absolute top-1/4 left-1/3 w-60 h-60 rounded-full bg-white"
              />
            </div>
          </div>
          
          {/* İçerik */}
          <div className="relative z-10 py-16 px-6 md:py-24 md:px-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white max-w-3xl mx-auto"
            >
              Web projelerinizi modern ve etkileyici UI bileşenleriyle yükseltin
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Kullanımı kolay, performanslı ve göz alıcı bileşenlerle modern web deneyimleri oluşturun.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white text-primary-600 font-medium shadow-xl shadow-primary-700/20"
                href="/docs/getting-started"
              >
                Hemen Başla
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-transparent text-white border border-white/30 font-medium backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                href="https://github.com/zenithura/modern-ui-design-collection"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub'da İncele
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 text-white/80 flex items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Tamamen Duyarlı</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>TypeScript ile Yazıldı</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Açık Kaynak</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
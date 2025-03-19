import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type CardProps = {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay: number
}

function Card({ title, description, icon, color, delay }: CardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Arkaplan renk geçişi */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${color} blur-sm -z-10`} />
      
      {/* İçerik */}
      <div className="mb-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 w-fit">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      
      <div className="mt-auto pt-4">
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary-500 dark:text-primary-400 font-medium"
          >
            Detaylı Bilgi
          </motion.button>
          
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700"
            whileHover={{ 
              rotate: 45,
              backgroundColor: '#38bdf8',
              transition: { duration: 0.2 }
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-500 dark:text-gray-400 group-hover:text-white"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function CardGallery() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
          >
            Modern Bileşen Koleksiyonu
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Projelerinizi güzelleştirmek için tasarlanmış modern ve şık bileşenler
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Animasyonlu Butonlar"
            description="Kullanıcı etkileşimlerini zenginleştiren modern animasyonlu butonlar."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
              </svg>
            }
            color="from-primary-400/20 to-primary-600/20"
            delay={0.1}
          />
          
          <Card
            title="Shimmer Efektleri"
            description="İçerik yüklenirken göz alıcı shimmer efektleri ile kullanıcı deneyimini geliştirin."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-500">
                <path d="M6 18h8"></path>
                <path d="M3 22h18"></path>
                <path d="M18 15l3-9a5.002 5.002 0 0 0-3.917-6.79A5 5 0 0 0 12 9v0a5 5 0 0 0-3.908-4.75A5.002 5.002 0 0 0 3 11l3 9"></path>
                <path d="M9 15l1.5-5"></path>
                <path d="M15 15l-1.5-5"></path>
              </svg>
            }
            color="from-secondary-400/20 to-secondary-600/20"
            delay={0.2}
          />
          
          <Card
            title="3D Dönüşümler"
            description="Derinlik ve perspektif ile kullanıcılarınızı şaşırtacak 3D dönüşüm efektleri."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" y1="22" x2="12" y2="12"></line>
              </svg>
            }
            color="from-blue-400/20 to-blue-600/20"
            delay={0.3}
          />
          
          <Card
            title="Gradyan Arka Planlar"
            description="Modern ve şık gradyan arka planlar ile projelerinizin görünümünü iyileştirin."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
                <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
                <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
              </svg>
            }
            color="from-pink-400/20 to-pink-600/20"
            delay={0.4}
          />
          
          <Card
            title="Duyarlı Kartlar"
            description="Her ekran boyutuna uyum sağlayan modern ve duyarlı kart bileşenleri."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            }
            color="from-orange-400/20 to-orange-600/20"
            delay={0.5}
          />
          
          <Card
            title="Gelişmiş Formlar"
            description="Kullanıcı dostu, erişilebilir ve modern tasarımlı form bileşenleri."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            }
            color="from-green-400/20 to-green-600/20"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}
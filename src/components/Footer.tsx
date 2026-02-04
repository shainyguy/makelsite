import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function Footer() {
  return (
    <footer className="bg-makel-dark text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-makel-red/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                className="w-12 h-12 bg-makel-red rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Zap className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-2xl font-bold group-hover:text-makel-red transition-colors">MAKEL</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ведущий производитель электроустановочных изделий. 
              Качество, проверенное временем.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Главная' },
                { to: '/products', label: 'Продукция' },
                { to: '/partners', label: 'Партнеры' },
                { to: '/about', label: 'О компании' },
                { to: '/contact', label: 'Контакты' },
              ].map((link) => (
                <motion.li key={link.to} whileHover={{ x: 5 }}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-makel-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Product Series */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-6">Серии продукции</h4>
            <ul className="space-y-3">
              {['Lunis', 'Lilium', 'Karea', 'Defne', 'Manolya'].map((series) => (
                <motion.li key={series} whileHover={{ x: 5 }}>
                  <Link 
                    to="/products" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {series}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-makel-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">г. Москва, ул. Примерная, д. 1</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-makel-red flex-shrink-0" />
                <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +7 (495) 123-45-67
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-makel-red flex-shrink-0" />
                <a href="mailto:partners@makel.ru" className="text-gray-400 hover:text-white transition-colors text-sm">
                  partners@makel.ru
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MAKEL. Все права защищены.
          </p>
          <motion.p 
            className="text-gray-500 text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-makel-red rounded-full animate-pulse" />
            Только для B2B партнеров
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

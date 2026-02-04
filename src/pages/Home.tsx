import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_BG = 'https://messages-prod.27c852f3500f38c1e7786e2c9ff9e48f.r2.cloudflarestorage.com/019bb2d7-868e-7aff-bc9f-9c3a2c7a32d1/1769521216242-019bffaa-e3a2-7e45-a608-d10f6d949855.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=af634fe044bd071ab4c5d356fdace60f%2F20260128%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260128T102441Z&X-Amz-Expires=3600&X-Amz-Signature=32ababbd95842a72d82d4bfe96edf8c0fb1be1bb080a1ef8106a1757a239481a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject';

const advantages = [
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Все изделия проходят многоступенчатый контроль качества и соответствуют международным стандартам',
  },
  {
    icon: Truck,
    title: 'Надежная логистика',
    description: 'Собственный склад в Москве. Оперативная доставка по всей России',
  },
  {
    icon: Award,
    title: 'Более 40 лет опыта',
    description: 'Один из крупнейших производителей электроустановочных изделий в мире',
  },
  {
    icon: Users,
    title: 'B2B партнерство',
    description: 'Выгодные условия сотрудничества для дистрибьюторов и розничных сетей',
  },
];

const partners = [
  'ВсеИнструменты',
  'Петрович',
  'Русский Свет',
  'ТД Электротехмонтаж',
];

const productCategories = [
  { name: 'Выключатели', count: '500+' },
  { name: 'Розетки', count: '400+' },
  { name: 'Удлинители', count: '150+' },
  { name: 'Электрощиты', count: '80+' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-makel-dark/90 via-makel-dark/70 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="w-2 h-2 bg-makel-red rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Только B2B партнерство
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Электроустановочные изделия{' '}
              <motion.span 
                className="text-makel-red"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                премиум
              </motion.span>{' '}
              качества
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-8 leading-relaxed"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Станьте партнером MAKEL — ведущего производителя выключателей, розеток и электрооборудования. 
              Выгодные условия для дистрибьюторов и торговых сетей.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-makel-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-500/25"
                >
                  Стать партнером
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Смотреть каталог
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Partners Ticker */}
      <section className="bg-gray-100 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-500 font-medium whitespace-nowrap">Нам доверяют:</span>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
              {partners.map((partner, index) => (
                <motion.span 
                  key={partner} 
                  className="text-gray-700 font-semibold text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, color: '#e31e24' }}
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-makel-dark mb-4">
              Почему выбирают MAKEL
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы предлагаем надежное партнерство и качественную продукцию для вашего бизнеса
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group cursor-pointer"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-makel-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-makel-red transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-7 h-7 text-makel-red group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-semibold text-makel-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-makel-dark mb-6">
                Широкий ассортимент продукции
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Более 1000 наименований электроустановочных изделий в различных сериях и цветовых решениях. 
                От классических до современных дизайнерских коллекций.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {productCategories.map((category, index) => (
                  <motion.div 
                    key={category.name} 
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span 
                      className="text-2xl font-bold text-makel-red"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {category.count}
                    </motion.span>
                    <p className="text-gray-600">{category.name}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-makel-red font-semibold"
                >
                  Перейти в каталог
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg" 
                  alt="Продукция MAKEL" 
                  className="rounded-2xl shadow-2xl"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-makel-red text-white p-6 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  whileHover={{ rotate: 5 }}
                >
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm opacity-80">товаров</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-makel-dark relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #e31e24 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Готовы стать нашим партнером?
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Оставьте заявку и наш менеджер свяжется с вами для обсуждения условий сотрудничества
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-makel-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-500/25"
              >
                Отправить заявку
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Индивидуальные условия',
              'Маркетинговая поддержка',
              'Обучение персонала',
              'Техническая документация',
            ].map((item, index) => (
              <motion.div 
                key={item} 
                className="flex items-center gap-2 text-white/80"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#fff' }}
              >
                <CheckCircle className="w-5 h-5 text-makel-red" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

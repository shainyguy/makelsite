import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Handshake, BookOpen, Headphones, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const currentPartners = [
  {
    name: 'ВсеИнструменты',
    description: 'Крупнейший интернет-магазин инструментов и оборудования',
    type: 'Интернет-ритейл',
  },
  {
    name: 'Петрович',
    description: 'Федеральная сеть строительных магазинов',
    type: 'Розничная сеть',
  },
  {
    name: 'Русский Свет',
    description: 'Ведущий поставщик светотехники и электрооборудования',
    type: 'Дистрибьютор',
  },
  {
    name: 'ТД Электротехмонтаж',
    description: 'Крупнейший электротехнический дистрибьютор России',
    type: 'Дистрибьютор',
  },
];

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: 'Высокая маржинальность',
    description: 'Конкурентные закупочные цены и привлекательная розничная наценка',
  },
  {
    icon: Package,
    title: 'Складская программа',
    description: 'Более 1000 SKU в наличии на складе в Москве для оперативной отгрузки',
  },
  {
    icon: Handshake,
    title: 'Гибкие условия',
    description: 'Индивидуальные условия оплаты и отсрочки для надежных партнеров',
  },
  {
    icon: BookOpen,
    title: 'Маркетинговая поддержка',
    description: 'POS-материалы, обучающие материалы и совместные рекламные кампании',
  },
  {
    icon: Headphones,
    title: 'Персональный менеджер',
    description: 'Закрепленный менеджер для оперативного решения всех вопросов',
  },
  {
    icon: Building2,
    title: 'Эксклюзивные права',
    description: 'Возможность получения эксклюзивных прав на регион или серию',
  },
];

const partnerTypes = [
  {
    title: 'Дистрибьюторы',
    description: 'Оптовые поставки для региональной дистрибуции',
    features: ['Максимальные скидки', 'Эксклюзив на регион', 'Маркетинговый бюджет'],
  },
  {
    title: 'Розничные сети',
    description: 'Поставки в сети строительных и электротехнических магазинов',
    features: ['Прямые поставки', 'VMI программы', 'Мерчендайзинг'],
  },
  {
    title: 'Интернет-магазины',
    description: 'Контент и интеграции для онлайн-продаж',
    features: ['API интеграция', 'Контент-пакеты', 'Дропшиппинг'],
  },
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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Partners() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <motion.section 
        className="bg-makel-dark py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Партнерская программа
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Присоединяйтесь к сети партнеров MAKEL и получите доступ к премиальной продукции 
            на выгодных условиях
          </motion.p>
        </div>
      </motion.section>

      {/* Current Partners */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-makel-dark mb-4">
              Наши партнеры
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы гордимся сотрудничеством с ведущими компаниями на рынке
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-makel-red/10 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building2 className="w-8 h-8 text-makel-red" />
                </motion.div>
                <motion.span 
                  className="text-xs font-medium text-makel-red bg-makel-red/10 px-2 py-1 rounded-full inline-block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                >
                  {partner.type}
                </motion.span>
                <h3 className="text-xl font-semibold text-makel-dark mt-3 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-makel-dark mb-4">
              Форматы сотрудничества
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем различные форматы партнерства в зависимости от вашей бизнес-модели
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-makel-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <h3 className="text-2xl font-bold text-makel-dark mb-3 relative z-10">{type.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{type.description}</p>
                <ul className="space-y-3 relative z-10">
                  {type.features.map((feature, fIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIndex * 0.1 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-makel-red rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-makel-dark mb-4">
              Преимущества партнерства
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы создаем условия для взаимовыгодного и долгосрочного сотрудничества
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all group cursor-pointer"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-makel-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-makel-red transition-colors duration-300"
                  whileHover={{ rotate: 15 }}
                >
                  <benefit.icon className="w-6 h-6 text-makel-red group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-makel-dark mb-2 group-hover:text-makel-red transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-makel-dark relative overflow-hidden">
        {/* Animated circles */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-makel-red/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-72 h-72 bg-makel-red/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
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
            Начните сотрудничество сегодня
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Заполните заявку и наш менеджер свяжется с вами для обсуждения условий партнерства
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-makel-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-500/25"
            >
              Оставить заявку
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

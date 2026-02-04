import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, Users, Factory, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '40+', label: 'Лет опыта' },
  { value: '80+', label: 'Стран экспорта' },
  { value: '1000+', label: 'Наименований' },
  { value: '50М+', label: 'Изделий в год' },
];

const values = [
  {
    icon: Award,
    title: 'Качество',
    description: 'Международные сертификаты качества и соответствие стандартам ГОСТ и EN',
  },
  {
    icon: Globe,
    title: 'Глобальное присутствие',
    description: 'Экспорт в более чем 80 стран мира, представительства на 5 континентах',
  },
  {
    icon: Factory,
    title: 'Собственное производство',
    description: 'Современные производственные мощности и полный цикл изготовления',
  },
  {
    icon: Users,
    title: 'Клиентоориентированность',
    description: 'Индивидуальный подход к каждому партнеру и гибкие условия работы',
  },
];

const timeline = [
  { year: '1977', event: 'Основание компании MAKEL в Турции' },
  { year: '1990', event: 'Начало экспорта в страны Европы' },
  { year: '2000', event: 'Выход на российский рынок' },
  { year: '2010', event: 'Открытие представительства в Москве' },
  { year: '2020', event: 'Расширение складской программы в России' },
  { year: '2024', event: 'Запуск новых серий Lilium и Karea' },
];

const certifications = [
  'ISO 9001:2015',
  'ГОСТ Р',
  'CE',
  'EAC',
  'RoHS',
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

export function About() {
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
            О компании MAKEL
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Более 40 лет мы создаем качественные электроустановочные изделия, 
            которым доверяют миллионы людей по всему миру
          </motion.p>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="text-4xl sm:text-5xl font-bold text-makel-red mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-makel-dark mb-6">
                Наша история
              </h2>
              <motion.p 
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                MAKEL — один из крупнейших мировых производителей электроустановочных изделий, 
                основанный в 1977 году. За более чем 40 лет работы компания прошла путь от 
                небольшого семейного предприятия до глобального бренда с экспортом в более 
                чем 80 стран мира.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                На российском рынке мы работаем с 2000 года и за это время завоевали доверие 
                крупнейших торговых сетей и дистрибьюторов. Наша продукция представлена в 
                магазинах ВсеИнструменты, Петрович, Русский Свет и других ведущих компаний.
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Мы специализируемся исключительно на B2B сотрудничестве, обеспечивая нашим 
                партнерам качественную продукцию, конкурентные цены и надежную логистику.
              </motion.p>
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
                <img
                  src="https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg"
                  alt="Продукция MAKEL"
                  className="rounded-2xl shadow-xl"
                />
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-makel-red/20 rounded-2xl -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                />
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-makel-red/30 rounded-full -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: 'spring' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-makel-dark text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ключевые этапы развития
          </motion.h2>
          
          <div className="relative">
            {/* Center line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 hidden md:block"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <motion.div 
                      className="bg-gray-50 rounded-xl p-6 inline-block hover:shadow-lg transition-shadow cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <span className="text-2xl font-bold text-makel-red">{item.year}</span>
                      <p className="text-gray-700 mt-2">{item.event}</p>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="w-4 h-4 bg-makel-red rounded-full relative z-10 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Наши ценности
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Принципы, которые лежат в основе нашей работы
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 flex gap-6 hover:shadow-xl transition-all group cursor-pointer"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-makel-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-makel-red transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-7 h-7 text-makel-red group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-makel-dark mb-2 group-hover:text-makel-red transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-makel-dark mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Сертификаты и стандарты
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Вся наша продукция сертифицирована и соответствует международным стандартам качества
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full hover:bg-green-50 hover:shadow-md transition-all cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </motion.div>
                <span className="font-medium text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-makel-dark relative overflow-hidden">
        {/* Animated gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #e31e24 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
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
            Хотите узнать больше?
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Свяжитесь с нами для получения подробной информации о компании и условиях сотрудничества
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
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

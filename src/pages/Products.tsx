import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const productSeries = [
  {
    id: 'lunis',
    name: 'Lunis',
    description: 'Современная серия с минималистичным дизайном и мягкой подсветкой',
    category: 'premium',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'manolya',
    name: 'Manolya',
    description: 'Классическая серия с элегантными формами для любого интерьера',
    category: 'standard',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'defne',
    name: 'Defne',
    description: 'Бюджетная серия с отличным соотношением цены и качества',
    category: 'economy',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'lilium',
    name: 'Lilium',
    description: 'Изысканная серия с плавными линиями и премиальной отделкой',
    category: 'premium',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'lilium-kare',
    name: 'Lilium Kare',
    description: 'Квадратные формы серии Lilium для современных интерьеров',
    category: 'premium',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'lilium-nature',
    name: 'Lilium Nature',
    description: 'Эко-серия с натуральными текстурами и природными оттенками',
    category: 'premium',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'lilium-nature-kare',
    name: 'Lilium Nature Kare',
    description: 'Сочетание природных мотивов и геометрических форм',
    category: 'premium',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'karea',
    name: 'Karea',
    description: 'Универсальная серия с чистыми линиями и надежной конструкцией',
    category: 'standard',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'karea-line',
    name: 'Karea Line',
    description: 'Расширенная линейка Karea с дополнительными опциями',
    category: 'standard',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'karea-rizz',
    name: 'Karea Rizz',
    description: 'Стильная интерпретация классической серии Karea',
    category: 'standard',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'outdoor',
    name: 'Наружные розетки и выключатели',
    description: 'Решения для наружного монтажа и сложных условий эксплуатации',
    category: 'special',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'waterproof',
    name: 'Влагозащищенные изделия',
    description: 'IP44 и выше для ванных комнат, кухонь и наружного использования',
    category: 'special',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    description: 'Вилки, рамки, колодки и другие комплектующие',
    category: 'accessories',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/aksessuary-i-komplektuyuschie-dlya-elektriki-i-elektromontazha/1518459/1200x800/71375167.jpg',
  },
];

const categories = [
  { id: 'all', name: 'Все серии' },
  { id: 'premium', name: 'Премиум' },
  { id: 'standard', name: 'Стандарт' },
  { id: 'economy', name: 'Эконом' },
  { id: 'special', name: 'Специальные' },
  { id: 'accessories', name: 'Аксессуары' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? productSeries 
    : productSeries.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <motion.section 
        className="bg-makel-dark py-20 overflow-hidden"
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
            Каталог продукции
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Широкий ассортимент электроустановочных изделий для B2B партнеров. 
            Выключатели, розетки, рамки и аксессуары.
          </motion.p>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div 
            className="flex items-center gap-4 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-makel-red text-white shadow-lg shadow-red-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow group"
                  whileHover={{ y: -8 }}
                  custom={index}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-makel-dark group-hover:text-makel-red transition-colors">
                        {product.name}
                      </h3>
                      <motion.span 
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          product.category === 'premium' ? 'bg-amber-100 text-amber-700' :
                          product.category === 'standard' ? 'bg-blue-100 text-blue-700' :
                          product.category === 'economy' ? 'bg-green-100 text-green-700' :
                          product.category === 'special' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {categories.find(c => c.id === product.category)?.name}
                      </motion.span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-makel-red font-medium group/link"
                    >
                      <span>Запросить прайс</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-makel-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Нужен полный каталог с ценами?
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Оставьте заявку и мы отправим вам полный каталог продукции с оптовыми ценами для партнеров
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-makel-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-500/25"
            >
              Запросить каталог
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

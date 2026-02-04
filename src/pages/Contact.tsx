import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Замените на ваш Telegram Bot Token и Chat ID
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';

interface FormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  message: string;
}

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

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    name: '',
    phone: '',
    email: '',
    city: '',
    businessType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const message = `
🔔 *Новая заявка с сайта MAKEL*

🏢 *Компания:* ${formData.company}
👤 *Контактное лицо:* ${formData.name}
📱 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email}
📍 *Город:* ${formData.city}
🏪 *Тип бизнеса:* ${formData.businessType}

💬 *Сообщение:*
${formData.message || 'Не указано'}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          name: '',
          phone: '',
          email: '',
          city: '',
          businessType: '',
          message: '',
        });
      } else {
        // Для демо режима показываем успех
        setSubmitStatus('success');
        setFormData({
          company: '',
          name: '',
          phone: '',
          email: '',
          city: '',
          businessType: '',
          message: '',
        });
      }
    } catch {
      // Для демо режима показываем успех
      setSubmitStatus('success');
      setFormData({
        company: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        businessType: '',
        message: '',
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'partners@makel.ru',
      link: 'mailto:partners@makel.ru',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: '#',
    },
  ];

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-makel-red focus:ring-2 focus:ring-makel-red/20 outline-none transition-all duration-300 hover:border-gray-400";

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
            Стать партнером
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Заполните форму и наш менеджер свяжется с вами для обсуждения условий сотрудничества
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-makel-dark mb-8">
                Контактная информация
              </h2>
              
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                    variants={fadeInUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-makel-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-makel-red transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-makel-red group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="font-medium text-makel-dark group-hover:text-makel-red transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div 
                className="mt-8 p-6 bg-makel-dark rounded-2xl text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {/* Animated background */}
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-makel-red/20 rounded-full blur-2xl"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <h3 className="font-semibold mb-2 relative z-10">Только B2B</h3>
                <p className="text-gray-400 text-sm relative z-10">
                  Мы работаем только с юридическими лицами и индивидуальными предпринимателями. 
                  Для розничных покупок обратитесь к нашим партнерам.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
                whileHover={{ y: -5 }}
              >
                <h2 className="text-2xl font-bold text-makel-dark mb-8">
                  Заявка на сотрудничество
                </h2>

                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div 
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-green-800">Заявка отправлена!</p>
                        <p className="text-sm text-green-600">Мы свяжемся с вами в ближайшее время</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <AlertCircle className="w-6 h-6 text-red-600" />
                      <div>
                        <p className="font-medium text-red-800">Ошибка отправки</p>
                        <p className="text-sm text-red-600">Попробуйте позже или свяжитесь с нами по телефону</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Название компании *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClasses}
                        placeholder="ООО Компания"
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Контактное лицо *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClasses}
                        placeholder="Иван Иванов"
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClasses}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClasses}
                        placeholder="email@company.ru"
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Город *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={inputClasses}
                        placeholder="Москва"
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тип бизнеса *
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className={inputClasses}
                      >
                        <option value="">Выберите тип</option>
                        <option value="distributor">Дистрибьютор</option>
                        <option value="retail">Розничная сеть</option>
                        <option value="online">Интернет-магазин</option>
                        <option value="wholesale">Оптовая компания</option>
                        <option value="other">Другое</option>
                      </select>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClasses} resize-none`}
                      placeholder="Расскажите о вашей компании и интересующей продукции..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <input
                      type="checkbox"
                      required
                      id="privacy"
                      className="mt-1 w-4 h-4 text-makel-red rounded border-gray-300 focus:ring-makel-red cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                      Я согласен на обработку персональных данных в соответствии с{' '}
                      <a href="#" className="text-makel-red hover:underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-makel-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/25"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.svg 
                            className="w-5 h-5" 
                            viewBox="0 0 24 24"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </motion.svg>
                          Отправка...
                        </>
                      ) : (
                        <>
                          Отправить заявку
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

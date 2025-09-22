'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  Headphones
} from 'lucide-react';

const Services = () => {
  const serviceHighlights = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Service",
      description: "আমাদের দক্ষ পেশাদার টিম",
      color: "bg-blue-500"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Quick Delivery",
      description: "দ্রুত এবং নির্ভরযোগ্য সেবা",
      color: "bg-green-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure & Reliable",
      description: "নিরাপদ এবং বিশ্বস্ত সমাধান",
      color: "bg-purple-500"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24/7 Support",
      description: "যেকোনো সময় সাহায্যের জন্য",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { number: "500+", label: "সন্তুষ্ট গ্রাহক" },
    { number: "50+", label: "সফল প্রকল্প" },
    { number: "5+", label: "বছরের অভিজ্ঞতা" },
    { number: "24/7", label: "গ্রাহক সেবা" }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            কেন আমাদের বেছে নিবেন?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            আমরা গুণগত সেবা এবং গ্রাহক সন্তুষ্টির জন্য প্রতিশ্রুতিবদ্ধ
          </p>
        </motion.div>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className={`${service.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform`}>
                <div className="w-8 h-8 md:w-12 md:h-12">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 md:mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base lg:text-lg opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
              বিশেষ সেবাসমূহ
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 md:p-8"
            >
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                আইনী সেবা
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">গভর্নমেন্ট লাইসেন্স ও রেজিস্ট্রেশন</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">এনবিআর সংক্রান্ত সেবা</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">ই-কমার্স সংক্রান্ত সেবা</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 md:p-8"
            >
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                টেকনোলজি সেবা
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">কম্পিউটার ও সফটওয়্যার সার্ভিসিং</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">ক্যাশ মেমো, ভিজিটিং কার্ড</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">ডিজিটাল মার্কেটিং/ অ্যাপ সাপোর্ট</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

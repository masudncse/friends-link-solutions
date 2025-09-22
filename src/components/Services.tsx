'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  Star,
  TrendingUp,
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">কেন আমাদের বেছে নিবেন?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমরা গুণগত সেবা এবং গ্রাহক সন্তুষ্টির জন্য প্রতিশ্রুতিবদ্ধ
          </p>
        </motion.div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">বিশেষ সেবাসমূহ</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">আইনী সেবা</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>গভর্নমেন্ট লাইসেন্স ও রেজিস্ট্রেশন</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>এনবিআর সংক্রান্ত সেবা</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ই-কমার্স সংক্রান্ত সেবা</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">টেকনোলজি সেবা</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>কম্পিউটার ও সফটওয়্যার সার্ভিসিং</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ক্যাশ মেমো, ভিজিটিং কার্ড</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ডিজিটাল মার্কেটিং/ অ্যাপ সাপোর্ট</span>
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

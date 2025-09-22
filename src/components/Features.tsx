'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Building, 
  Globe, 
  Computer, 
  CreditCard, 
  Shield,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "TIN (ই-রিটার্ন)/ BIN নিবন্ধন ও রিটার্ন",
      description: "ট্যাক্স আইডেন্টিফিকেশন নাম্বার এবং বিজনেস আইডেন্টিফিকেশন নাম্বার সেবা"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "ট্রেড লাইসেন্স",
      description: "ব্যবসায়িক লাইসেন্স এবং নবায়ন সেবা"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IRC/ERC",
      description: "আমদানি ও রপ্তানি রেজিস্ট্রেশন সার্টিফিকেট"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "কোনাটাই/ চুক্তিপত্র বিষয়",
      description: "আইনি চুক্তি এবং দলিল প্রস্তুতি"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ব্যাংক লোন",
      description: "ব্যাংক লোনের জন্য সহায়তা এবং পরামর্শ"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "অডিট রিপোর্ট",
      description: "প্রফেশনাল অডিট এবং একাউন্টিং সেবা"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "কোম্পানী আইন",
      description: "কোম্পানি রেজিস্ট্রেশন এবং আইনি সেবা"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ওয়েবসাইট ডেভেলপমেন্ট",
      description: "আধুনিক এবং রেস্পন্সিভ ওয়েবসাইট তৈরি"
    },
    {
      icon: <Computer className="w-8 h-8" />,
      title: "কম্পিউটার, ল্যাপটপ ও প্রিন্টার সার্ভিসিং",
      description: "হার্ডওয়্যার মেরামত এবং রক্ষণাবেক্ষণ সেবা"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            আমরা বিভিন্ন ধরনের প্রফেশনাল সেবা প্রদান করি যা আপনার ব্যবসা এবং ব্যক্তিগত প্রয়োজন মেটাতে সাহায্য করবে
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

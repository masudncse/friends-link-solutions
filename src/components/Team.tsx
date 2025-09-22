'use client';

import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "মোহাম্মদ রশিদুল ইসলাম",
      designation: "প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক",
      image: "/api/placeholder/300/300",
      bio: "১০+ বছরের অভিজ্ঞতা সহ ব্যবসায়িক পরামর্শ ও সেবা প্রদানে দক্ষ",
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/rashidul', icon: <Facebook size={20} /> },
        { platform: 'linkedin', url: 'https://linkedin.com/in/rashidul', icon: <Linkedin size={20} /> },
        { platform: 'email', url: 'mailto:rashidul@friendslinksolution.com', icon: <Mail size={20} /> },
        { platform: 'phone', url: 'tel:+8801737230912', icon: <Phone size={20} /> }
      ]
    },
    {
      id: 2,
      name: "ফাতেমা খাতুন",
      designation: "আইনি পরামর্শদাতা",
      image: "/api/placeholder/300/300",
      bio: "কোম্পানি আইন, TIN/BIN রেজিস্ট্রেশন ও সরকারি সেবায় বিশেষজ্ঞ",
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/fatema', icon: <Facebook size={20} /> },
        { platform: 'linkedin', url: 'https://linkedin.com/in/fatema', icon: <Linkedin size={20} /> },
        { platform: 'email', url: 'mailto:fatema@friendslinksolution.com', icon: <Mail size={20} /> },
        { platform: 'whatsapp', url: 'https://wa.me/8801721050669', icon: <MessageCircle size={20} /> }
      ]
    },
    {
      id: 3,
      name: "আব্দুল করিম হাসান",
      designation: "প্রযুক্তি বিশেষজ্ঞ",
      image: "/api/placeholder/300/300",
      bio: "কম্পিউটার সার্ভিসিং, ওয়েবসাইট ডেভেলপমেন্ট ও আইটি সাপোর্টে দক্ষ",
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/karim', icon: <Facebook size={20} /> },
        { platform: 'twitter', url: 'https://twitter.com/karim', icon: <Twitter size={20} /> },
        { platform: 'linkedin', url: 'https://linkedin.com/in/karim', icon: <Linkedin size={20} /> },
        { platform: 'email', url: 'mailto:karim@friendslinksolution.com', icon: <Mail size={20} /> }
      ]
    },
    {
      id: 4,
      name: "নাসির উদ্দিন আহমেদ",
      designation: "একাউন্টিং ও অডিট বিশেষজ্ঞ",
      image: "/api/placeholder/300/300",
      bio: "অডিট রিপোর্ট, একাউন্টিং সেবা ও আর্থিক পরামর্শে অভিজ্ঞ",
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/nasir', icon: <Facebook size={20} /> },
        { platform: 'linkedin', url: 'https://linkedin.com/in/nasir', icon: <Linkedin size={20} /> },
        { platform: 'email', url: 'mailto:nasir@friendslinksolution.com', icon: <Mail size={20} /> },
        { platform: 'phone', url: 'tel:+8801677179645', icon: <Phone size={20} /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'hover:bg-blue-600';
      case 'twitter':
        return 'hover:bg-sky-500';
      case 'linkedin':
        return 'hover:bg-blue-700';
      case 'email':
        return 'hover:bg-red-600';
      case 'phone':
        return 'hover:bg-green-600';
      case 'whatsapp':
        return 'hover:bg-green-600';
      default:
        return 'hover:bg-gray-600';
    }
  };

  return (
    <section id="team" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            আমাদের দল
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            দক্ষ ও অভিজ্ঞ পেশাদারদের নিয়ে গঠিত আমাদের টিম আপনার সেবায় নিয়োজিত
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            >
              {/* Profile Image */}
              <div className="relative mb-4 md:mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl md:text-4xl font-bold text-gray-600">
                    {member.name.split(' ')[0].charAt(0)}
                    {member.name.split(' ')[1]?.charAt(0)}
                  </div>
                </div>
                
                {/* Online Status Indicator */}
                <div className="absolute bottom-1 right-6 md:bottom-2 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full border-2 md:border-4 border-white"></div>
              </div>

              {/* Member Info */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2 md:mb-3 text-sm md:text-base leading-tight">
                  {member.designation}
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-2 md:space-x-3">
                {member.socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.platform === 'email' || social.platform === 'phone' ? '_self' : '_blank'}
                    rel={social.platform === 'email' || social.platform === 'phone' ? '' : 'noopener noreferrer'}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-gray-200 text-gray-600 p-2 rounded-full transition-colors ${getSocialColor(social.platform)} hover:text-white`}
                  >
                    <div className="w-4 h-4 md:w-5 md:h-5">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">15+</div>
              <p className="text-blue-100 text-sm md:text-base">বছরের সম্মিলিত অভিজ্ঞতা</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">500+</div>
              <p className="text-blue-100 text-sm md:text-base">সফল প্রকল্প</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">98%</div>
              <p className="text-blue-100 text-sm md:text-base">গ্রাহক সন্তুষ্টি</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">24/7</div>
              <p className="text-blue-100 text-sm md:text-base">সাপোর্ট সেবা</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center px-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h3>
          <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            আপনার ব্যবসার জন্য সঠিক সমাধান পেতে আমাদের দক্ষ টিমের সাথে কথা বলুন
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow text-sm md:text-base"
          >
            যোগাযোগ করুন
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "TIN/BIN Registration & Services",
      subtitle: "আমরা টিআইএন, ভ্যাট, এনবিআর এবং কোম্পানী সম্পর্কিত সকল ধরনের কনসালটেশনাল সার্ভিস দিয়ে থাকি",
      image: "/api/placeholder/1200/600",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "IRC/ERC & Trade License",
      subtitle: "ব্যবসার জন্য প্রয়োজনীয় সকল লাইসেন্স এবং রেজিস্ট্রেশন সেবা",
      image: "/api/placeholder/1200/600",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Computer & IT Services",
      subtitle: "কম্পিউটার, ল্যাপটপ ও প্রিন্টার সার্ভিসিং এবং আইটি সাপোর্ট",
      image: "/api/placeholder/1200/600",
      gradient: "from-green-600 to-blue-600"
    },
    {
      id: 4,
      title: "Online Services & Solutions",
      subtitle: "অনলাইন সেবা এবং ডিজিটাল সমাধানের জন্য আমাদের সাথে যোগাযোগ করুন",
      image: "/api/placeholder/1200/600",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`}
        >
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative h-full flex items-center justify-center px-4 py-20 md:py-0">
            <div className="container mx-auto text-center text-white max-w-6xl">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
              >
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto bg-white text-gray-800 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Phone size={18} className="md:w-5 md:h-5" />
                  Contact Us
                </button>
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Mail size={18} className="md:w-5 md:h-5" />
                  Get Quote
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 lg:p-3 rounded-full transition-colors z-10"
      >
        <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 lg:p-3 rounded-full transition-colors z-10"
      >
        <ChevronRight size={20} className="lg:w-6 lg:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

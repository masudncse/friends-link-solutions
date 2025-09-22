'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "মোহাম্মদ রহিম",
      position: "ব্যবসায়ী",
      company: "রহিম ট্রেডার্স",
      rating: 5,
      text: "Friends Link Solutions এর সেবা অসাধারণ। তারা আমার TIN রেজিস্ট্রেশন খুব দ্রুত এবং সহজভাবে সম্পন্ন করেছে। অত্যন্ত পেশাদার এবং বিশ্বস্ত সেবা।",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "ফাতেমা খাতুন",
      position: "উদ্যোক্তা",
      company: "খাতুন এন্টারপ্রাইজ",
      rating: 5,
      text: "আমার কোম্পানির ট্রেড লাইসেন্স এবং IRC সার্টিফিকেটের জন্য তাদের সাহায্য নিয়েছিলাম। খুবই সন্তোষজনক সেবা পেয়েছি। সময়মতো কাজ শেষ করেছে।",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "আব্দুল করিম",
      position: "দোকান মালিক",
      company: "করিম স্টোর",
      rating: 5,
      text: "তাদের কম্পিউটার সার্ভিসিং সেবা নিয়ে খুবই খুশি। আমার ল্যাপটপ ঠিক করে দিয়েছে এবং দাম খুবই যুক্তিসঙ্গত ছিল। ধন্যবাদ Friends Link Solutions!",
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "নাসির উদ্দিন",
      position: "ব্যাংক কর্মকর্তা",
      company: "স্ট্যান্ডার্ড ব্যাংক",
      rating: 5,
      text: "অডিট রিপোর্ট এবং একাউন্টিং সেবার জন্য তাদের সাথে কাজ করেছি। খুবই দক্ষ এবং অভিজ্ঞ টিম। সবসময় গুণগত সেবা দেয়।",
      image: "/api/placeholder/80/80"
    },
    {
      id: 5,
      name: "সালমা বেগম",
      position: "ব্যবসায়ী",
      company: "সালমা ফ্যাশন হাউস",
      rating: 5,
      text: "ওয়েবসাইট ডেভেলপমেন্ট সেবা নিয়ে অত্যন্ত সন্তুষ্ট। আধুনিক এবং সুন্দর ওয়েবসাইট তৈরি করে দিয়েছে। গ্রাহক সেবা চমৎকার।",
      image: "/api/placeholder/80/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">গ্রাহকদের মতামত</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের সেবা নিয়ে গ্রাহকদের অভিজ্ঞতা এবং মতামত জানুন
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-blue-600 mb-6" />
                
                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 mb-1">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">গ্রাহক সন্তুষ্টি</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">সন্তুষ্ট গ্রাহক</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">গ্রাহক সেবা</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

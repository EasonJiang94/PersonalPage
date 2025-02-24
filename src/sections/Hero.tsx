// src/sections/Hero.tsx
"use client";
import React from 'react';
import {motion} from 'framer-motion';
import { personalInfo } from '@/data/personalInfo';

const Hero = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.img
          src="/images/profile.jpg"
          alt="Yi-Hsin (Eason) Chiang"
          className="w-40 h-40 rounded-full shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalInfo.title}
        </motion.h2>
        <motion.p
          className="text-lg max-w-xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I am a passionate software engineer specializing in AI systems development and cloud solutions. With experience in building scalable AI SaaS platforms and advanced computer vision models, I thrive in solving complex technical challenges.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.png" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <img src="/images/email-icon.png" alt="Email" className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

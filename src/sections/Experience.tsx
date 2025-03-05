// src/sections/Experience.tsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-blue-500 pl-4"
              onClick={() => setSelectedExperience(index)}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-gray-600">{experience.company} - {experience.period}</p>
              {selectedExperience === index && (
                <div className="mt-4 space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <p key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{responsibility}</span>
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// src/sections/Education.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { education } from '@/data/education';

const Education = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school} - {edu.period}</p>
              <div className="mt-2 space-y-2">
                {edu.details.map((detail, idx) => (
                  <p key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
              {edu.image && edu.image !== "" && (
                <div className="mt-4">
                  <Image
                    src={edu.image}
                    alt={`${edu.school} visualization`}
                    width={400}
                    height={200}
                    className="rounded-lg w-2/3 object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

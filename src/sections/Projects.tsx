// src/sections/Projects.tsx
"use client";
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg shadow-lg p-6 cursor-pointer 
                         hover:shadow-xl transition-all duration-300 relative
                         border border-gray-100 hover:border-blue-200"
              onClick={() => setSelectedProject(index)}
              whileHover={{ scale: 1.02 }}
            >
              {project.image && project.image !== "" && (
                <div className="mb-4 relative h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              <div className="absolute top-4 right-4 text-gray-400 
                            group-hover:text-blue-500 transition-colors">
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-semibold mb-2 pr-8 
                           group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>

              <div className="mt-4 text-sm text-gray-400 group-hover:text-blue-500 
                            transition-colors flex items-center gap-1">
                <span>Click to view details</span>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {projects[selectedProject].title}
              </h3>
              <div className="space-y-4">
                {projects[selectedProject].challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
              {projects[selectedProject].image && projects[selectedProject].image !== "" && (
                <div className="mt-6">
                  <Image
                    src={projects[selectedProject].image!}
                    alt={projects[selectedProject].title}
                    width={600}
                    height={300}
                    className="rounded-lg w-full object-contain"
                  />
                </div>
              )}
              <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg
                           hover:bg-blue-600 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

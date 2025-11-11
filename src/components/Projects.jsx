import React, { useState } from 'react';
import { ExternalLink, Star, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  
  // State untuk menyimpan current image index setiap project
  const [projectImageIndices, setProjectImageIndices] = useState(
    portfolioData.projects.map(() => 0)
  );

  const projects = portfolioData.projects;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Image navigation untuk individual project
  const nextProjectImage = (projectIndex) => {
    setProjectImageIndices(prev => {
      const newIndices = [...prev];
      const project = projects[projectIndex];
      newIndices[projectIndex] = (newIndices[projectIndex] + 1) % project.images.length;
      return newIndices;
    });
  };

  const prevProjectImage = (projectIndex) => {
    setProjectImageIndices(prev => {
      const newIndices = [...prev];
      const project = projects[projectIndex];
      newIndices[projectIndex] = (newIndices[projectIndex] - 1 + project.images.length) % project.images.length;
      return newIndices;
    });
  };

  const goToProjectImage = (projectIndex, imageIndex) => {
    setProjectImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[projectIndex] = imageIndex;
      return newIndices;
    });
  };

  const openLightbox = (projectIndex, imageIndex = projectImageIndices[projectIndex]) => {
    setLightboxProjectIndex(projectIndex);
    setLightboxImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    const project = projects[lightboxProjectIndex];
    setLightboxImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevLightboxImage = () => {
    const project = projects[lightboxProjectIndex];
    setLightboxImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToLightboxImage = (index) => {
    setLightboxImageIndex(index);
  };

  return (
    <section id="proyek" className="py-32 px-4 bg-base-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="divider divider-secondary w-32 mx-auto"></div>
          <p className="text-xl text-base-content/70">Showcasing my development journey</p>
        </div>

        {/* Single Tab - My Projects */}
        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed bg-base-100 shadow-xl p-1">
            <a className="tab tab-lg tab-active font-bold text-lg">
              My Projects
            </a>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 btn btn-circle glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 btn btn-circle glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="w-full flex-shrink-0">
                  <div className="card card-glass shadow-2xl border-0 rounded-3xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Image Section */}
                      <div className="relative h-80 lg:h-96 overflow-hidden bg-base-300">
                        {/* Current Image Display */}
                        <div className="relative w-full h-full">
                          <img 
                            src={project.images[projectImageIndices[projectIndex]]} 
                            alt={`${project.title} - Image ${projectImageIndices[projectIndex] + 1}`}
                            className="w-full h-full object-cover cursor-pointer transition-opacity duration-300"
                            onClick={() => openLightbox(projectIndex)}
                          />
                          
                          {/* Zoom Button */}
                          <button 
                            onClick={() => openLightbox(projectIndex)}
                            className="absolute top-4 left-4 btn btn-circle btn-sm glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                          >
                            <ZoomIn className="w-4 h-4" />
                          </button>
                          
                          {/* Image Counter */}
                          <div className="absolute bottom-4 left-4">
                            <div className="badge badge-outline badge-lg glass-effect border-white/20">
                              {projectImageIndices[projectIndex] + 1} / {project.images.length}
                            </div>
                          </div>

                          {/* Image Navigation Arrows - Only show if multiple images */}
                          {project.images.length > 1 && (
                            <>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevProjectImage(projectIndex);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextProjectImage(projectIndex);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </>
                          )}

                          {/* Image Indicators */}
                          {project.images.length > 1 && (
                            <div className="absolute bottom-4 right-4 flex gap-2">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    goToProjectImage(projectIndex, index);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === projectImageIndices[projectIndex] 
                                      ? 'bg-primary w-4' 
                                      : 'bg-white/50 hover:bg-white/80'
                                  }`}
                                />
                              ))}
                            </div>
                          )}

                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-6 right-6 z-10">
                              <div className="badge badge-primary gap-2 py-3 px-4 border-0 shadow-lg">
                                <Star className="w-4 h-4" />
                                Featured
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="card-body p-8 lg:p-12 justify-center bg-gradient-to-br from-base-100 to-base-200">
                        <div className="space-y-6">
                          {/* Title & Category */}
                          <div>
                            <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-gradient-primary">
                              {project.title}
                            </h3>
                            <div className="badge badge-secondary badge-lg py-3 px-4 border-0 mb-2">
                              {project.category.toUpperCase()} PROJECT
                            </div>
                            <div className="text-sm text-base-content/60">
                              {project.year}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-lg lg:text-xl leading-relaxed text-base-content/80">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="space-y-3">
                            <div className="text-sm font-semibold text-base-content/60">
                              Technologies Used:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, i) => (
                                <div 
                                  key={i} 
                                  className="badge badge-outline badge-lg py-3 px-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                                >
                                  {tech}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Rating & Action */}
                          <div className="flex items-center justify-between pt-4">
                            <div className="rating rating-sm">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <input 
                                  key={i} 
                                  type="radio" 
                                  className="mask mask-star-2 bg-primary" 
                                  defaultChecked={i === 5} 
                                  disabled 
                                />
                              ))}
                            </div>
                            <a 
                              href={project.link} 
                              className="btn btn-primary btn-lg gap-3 glass-effect border-primary/50 hover:border-primary hover:scale-105 transition-all"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Project
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-base-content/30 hover:bg-base-content/50'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <div className="badge badge-outline badge-lg py-3 px-4 glass-effect">
              {currentSlide + 1} / {projects.length}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox/Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-16 right-0 z-50 btn btn-circle glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Navigation Arrows */}
            <button 
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 btn btn-circle glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 btn btn-circle glass-effect border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="flex flex-col items-center">
              {/* Lightbox Image */}
              <div className="relative w-full flex items-center justify-center mb-4">
                <img 
                  src={projects[lightboxProjectIndex].images[lightboxImageIndex]} 
                  alt={`${projects[lightboxProjectIndex].title} - Image ${lightboxImageIndex + 1}`}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Lightbox Image Indicators */}
              <div className="flex justify-center gap-3 mb-4">
                {projects[lightboxProjectIndex].images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToLightboxImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === lightboxImageIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Lightbox Info */}
              <div className="text-center">
                <div className="badge badge-outline badge-lg glass-effect border-white/20 mb-2">
                  {lightboxImageIndex + 1} / {projects[lightboxProjectIndex].images.length}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {projects[lightboxProjectIndex].title}
                </h3>
                <p className="text-white/70">
                  {projects[lightboxProjectIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-3 h-3 bg-primary rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-secondary rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Projects;
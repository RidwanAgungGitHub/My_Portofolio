import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = portfolioData.skills;

  // Pastikan data ada sebelum render
  if (!skillCategories || skillCategories.length === 0) {
    return (
      <section id="skill" className="py-32 px-4 bg-base-100">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4">Skills & Technologies</h2>
          <p className="text-xl text-base-content/70">No skills data available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skill" className="py-32 px-4 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="divider divider-accent w-32 mx-auto"></div>
          <p className="text-xl text-base-content/70">My technical arsenal and competencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`card shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${category.borderColor} bg-base-200/50 backdrop-blur-sm hover:scale-105 group`}
            >
              <div className="card-body p-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-base-content">{category.title}</h3>
                    <div className="text-sm text-base-content/60">
                      {category.skills?.length || 0} skills
                    </div>
                  </div>
                </div>

                {/* Skills List - Updated dengan background putih */}
                <div className="flex flex-wrap gap-2">
                  {category.skills?.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="badge badge-lg py-3 px-4 border-0 bg-white text-gray-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 font-medium border border-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 flex items-center justify-between text-xs text-base-content/60">
                  <span>Proficiency</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div 
                        key={star}
                        className={`w-2 h-2 rounded-full ${
                          star <= (index % 5) + 1 
                            ? `bg-gradient-to-r ${category.color}` 
                            : 'bg-base-content/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <div className="card card-glass shadow-2xl border border-white/10 max-w-4xl mx-auto">
            <div className="card-body py-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-lg text-base-content/80 leading-relaxed">
                Dengan fondasi yang kuat dalam pengembangan web modern dan tools productivity, 
                saya terus mengembangkan skill baru dan mengikuti perkembangan teknologi terbaru. 
                Selalu bersemangat untuk belajar dan beradaptasi dengan tantangan baru.
              </p>
              <div className="flex justify-center gap-4 mt-6 flex-wrap">
                <div className="badge badge-primary badge-lg py-4 px-6 border-0 text-lg">
                  {skillCategories.reduce((total, category) => total + (category.skills?.length || 0), 0)}+ Skills
                </div>
                <div className="badge badge-secondary badge-lg py-4 px-6 border-0 text-lg">
                  {skillCategories.length} Categories
                </div>
                <div className="badge badge-accent badge-lg py-4 px-6 border-0 text-lg">
                  Always Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-primary rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-secondary rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Skills;
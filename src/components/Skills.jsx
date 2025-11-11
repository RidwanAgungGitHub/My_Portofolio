import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skill" className="py-32 px-4 bg-base-100">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">Technical Skills</h2>
          <div className="divider divider-accent w-32 mx-auto"></div>
          <p className="text-xl text-base-content/70">Expertise that delivers results</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-base-content/60">Expert Level</p>
                  </div>
                  <div className="text-3xl font-black text-primary">{skill.level}%</div>
                </div>
                <progress 
                  className={`progress progress-primary w-full h-3`} 
                  value={skill.level} 
                  max="100"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
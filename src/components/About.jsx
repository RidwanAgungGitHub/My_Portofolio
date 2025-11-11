import React from 'react';
import { Github, Linkedin, Mail, Star, Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="tentang" className="py-32 px-4 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
          </div>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>
          <p className="text-2xl text-base-content/70 mt-6 font-light">Fresh Graduate dengan Passion Teknologi Tinggi</p>
        </div>
        
        {/* Premium Card Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Content - 8 columns */}
          <div className="lg:col-span-8">
            <div className="card card-glass shadow-2xl hover:shadow-glow transition-all duration-500 border border-white/10 hover:border-primary hover:border-opacity-30">
              <div className="card-body p-8 md:p-12">
                <div className="space-y-8">
                  {/* Introduction Paragraph */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-3 h-24 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="text-xl md:text-2xl leading-relaxed text-base-content/90">
                        Halo! Saya adalah seorang fresh graduate Informatika dengan minat besar di bidang Web Development, baik frontend, backend, maupun full-stack. Saya memiliki pengalaman dalam mengembangkan aplikasi web, mengelola data, serta membangun integrasi API.
                      </p>
                    </div>
                  </div>

                  {/* Experience Paragraph */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-3 h-24 bg-gradient-to-b from-secondary to-accent rounded-full mt-2"></div>
                    <div>
                      <p className="text-xl md:text-2xl leading-relaxed text-base-content/90">
                        Selama masa studi, saya terbiasa bekerja dalam tim, berkomunikasi secara efektif, dan menyelesaikan proyek dengan penuh tanggung jawab. Saya juga aktif di berbagai kepanitiaan kampus yang membantu saya mengasah kemampuan dalam organisasi, manajemen waktu, dan kolaborasi lintas divisi.
                      </p>
                    </div>
                  </div>

                  {/* Personal Qualities */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-3 h-24 bg-gradient-to-b from-accent to-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-xl md:text-2xl leading-relaxed text-base-content/90">
                        Saya adalah pribadi yang selalu ingin belajar hal baru, cepat beradaptasi, dan berorientasi pada solusi. Dengan semangat untuk terus berkembang, saya siap berkontribusi di dunia Web Development dan menghadirkan inovasi melalui teknologi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievement Highlight */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
                      <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-gradient-primary">Ready for New Challenges!</h4>
                      <p className="text-base md:text-lg text-base-content/80">Excited to start my professional journey and bring fresh perspectives to your team.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Stats - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Stats Card */}
            <div className="card card-glass shadow-2xl border border-white/10 hover:border-secondary hover:border-opacity-30 transition-all duration-300">
              <div className="card-body p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gradient-primary mb-6 text-center">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { icon: Award, label: "Status", value: "Fresh Graduate", color: "from-primary to-secondary" },
                    { icon: Users, label: "Team Experience", value: "Project Teams", color: "from-secondary to-accent" },
                    { icon: Clock, label: "Adaptability", value: "Fast Learner", color: "from-accent to-primary" },
                    { icon: Target, label: "Focus Area", value: "Web Development", color: "from-primary to-accent" }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors">
                      <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg shadow-md`}>
                        <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs md:text-sm text-base-content/60">{stat.label}</div>
                        <div className="font-semibold text-sm md:text-base text-base-content/90">{stat.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="card card-glass shadow-2xl border border-white/10 hover:border-accent hover:border-opacity-30 transition-all duration-300">
              <div className="card-body p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gradient-accent mb-6 text-center">Let's Connect</h3>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {[
                    { icon: Github, label: "GitHub", href: "#", color: "hover:bg-primary" },
                    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-secondary" },
                    { icon: Mail, label: "Email", href: "#", color: "hover:bg-accent" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border-2 border-base-300 bg-base-200/50 transition-all duration-300 group ${social.color} hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="p-2 md:p-3 rounded-lg bg-base-300 group-hover:bg-white transition-colors">
                        <social.icon className="w-5 h-5 md:w-6 md:h-6 text-base-content group-hover:text-base-100 transition-colors" />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-base-content/70 group-hover:text-base-100 transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-secondary rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default About;
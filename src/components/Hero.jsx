import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const handleDownloadCV = () => {
    // Logic untuk download CV
    alert('Downloading CV...');
  };

  return (
    <section id="beranda" className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 relative overflow-hidden flex items-center justify-center pt-16">
      {/* Animated Gradient Background - Hitam & Abu bergantian */}
      <div className="absolute inset-0 bg-gradient-animate opacity-90"></div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]"></div>
      
      {/* Premium Floating Elements - Warna tema */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="w-7 h-7 bg-gradient-to-r from-accent to-primary rounded-full blur-sm"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Premium Avatar Section */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative group">
              <div className="w-36 h-36 md:w-56 md:h-56 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-base-100 shadow-2xl hover:scale-105 transition-all duration-500 bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full bg-base-100 rounded-full flex items-center justify-center text-5xl md:text-7xl backdrop-blur-sm">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="badge badge-primary badge-lg shadow-xl gap-2 px-4 py-3 border-0 bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  Available for Work
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Typography */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-tight">
              Hello, I'm
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight tracking-wide">
              Ridwan Agung Sukmawijaya
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <p className="text-2xl md:text-4xl font-light text-primary/80 italic">
                Web Developer
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-10 md:mb-14">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-base-content/80 max-w-4xl mx-auto leading-relaxed px-6 glass-effect rounded-2xl py-6 backdrop-blur-sm border border-white/10">
              Lulusan <span className="text-primary font-semibold">Informatika</span> dengan spesialisasi dalam 
              <span className="text-primary font-semibold"> Web Development</span>, berpengalaman dalam 
              pengembangan aplikasi dan integrasi API 
            </p>
          </div>
          
          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 px-4">
            <button 
              onClick={handleDownloadCV}
              className="btn btn-lg gap-3 bg-gradient-to-r from-primary to-secondary border-0 text-white hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl px-8 py-4 text-lg font-semibold rounded-2xl"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="btn btn-lg btn-outline gap-3 border-2 border-primary/50 text-primary hover:bg-primary hover:text-white hover:border-primary transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-4 justify-center items-center">
            <div className="h-px bg-gradient-to-r from-transparent via-base-content/30 to-transparent flex-1"></div>
            <p className="text-base-content/60 text-sm font-medium">Connect with me</p>
            <div className="h-px bg-gradient-to-r from-transparent via-base-content/30 to-transparent flex-1"></div>
          </div>
          
          <div className="flex gap-4 justify-center mt-6">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl glass-effect border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-base-content/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
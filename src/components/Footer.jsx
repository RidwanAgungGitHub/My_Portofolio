import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <p className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Portfolio
        </p>
        <p className="text-lg">Crafting Digital Excellence Since 2019</p>
        <p className="text-base-content/60">© 2024 - Made with <Heart className="inline w-4 h-4 text-red-500" /> using React, Tailwind CSS & DaisyUI</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="btn btn-ghost btn-circle btn-lg">
            <Github className="w-6 h-6" />
          </a>
          <a className="btn btn-ghost btn-circle btn-lg">
            <Linkedin className="w-6 h-6" />
          </a>
          <a className="btn btn-ghost btn-circle btn-lg">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
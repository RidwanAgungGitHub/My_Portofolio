import { 
  Github, Linkedin, Mail, ExternalLink, Code, Palette, 
  Smartphone, Award, Briefcase, Coffee, Users, Star, 
  ChevronRight, Download, Send, Heart, Sparkles,
  MapPin, Phone, Calendar, Zap, Target, Globe 
} from 'lucide-react';

export const portfolioData = {
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce enterprise dengan fitur AI recommendation, real-time analytics, dan payment gateway terintegrasi. Dibangun dengan teknologi modern untuk pengalaman belanja yang optimal.',
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      category: 'web',
      link: '#',
      featured: true,
      year: '2024'
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan drag-drop interface, real-time collaboration, dan automated notifications. Memudahkan tim dalam mengorganisir pekerjaan sehari-hari.',
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80'
      ],
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'PWA'],
      category: 'web',
      link: '#',
      featured: false,
      year: '2023'
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'Mobile application untuk melacak aktivitas fitness, pola makan, dan progress kesehatan. Terintegrasi dengan wearable devices dan health APIs.',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80'
      ],
      tech: ['React Native', 'Python', 'PostgreSQL', 'GraphQL'],
      category: 'mobile',
      link: '#',
      featured: true,
      year: '2023'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard analytics untuk media sosial dengan visualisasi data real-time, scheduling posts, dan performance tracking across multiple platforms.',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
      ],
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
      category: 'web',
      link: '#',
      featured: false,
      year: '2024'
    },
    {
      title: 'Food Delivery Service',
      description: 'Aplikasi delivery makanan dengan fitur GPS tracking, real-time order updates, dan integrated payment system. User-friendly interface untuk pengalaman yang seamless.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80'
      ],
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
      category: 'mobile',
      link: '#',
      featured: true,
      year: '2024'
    }
  ],
  skills: [
    { name: 'React.js', level: 95, icon: <Code className="w-6 h-6" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 88, icon: <Code className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
    { name: 'TypeScript', level: 85, icon: <Code className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500' },
    { name: 'MongoDB', level: 82, icon: <Code className="w-6 h-6" />, color: 'from-green-500 to-lime-500' },
    { name: 'UI/UX Design', level: 78, icon: <Palette className="w-6 h-6" />, color: 'from-purple-400 to-pink-500' },
    { name: 'Mobile Development', level: 75, icon: <Smartphone className="w-6 h-6" />, color: 'from-orange-400 to-red-500' }
  ],
};
import { 
  Github, Linkedin, Mail, ExternalLink, Code, Palette, 
  Smartphone, Award, Briefcase, Coffee, Users, Star, 
  ChevronRight, Download, Send, Heart, Sparkles,
  MapPin, Phone, Calendar, Zap, Target, Globe, Database, Cpu
} from 'lucide-react';

export const portfolioData = {
  projects: [
    {
      title: 'Distribusi Musik',
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
      title: 'Sistem Presensi Siswa Online',
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
      title: 'Sistem Pembookingan Lapak Online',
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
      title: 'Sistem Rekomendasi Jurusan Untuk Siswa Baru',
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
      title: 'Sistem Prediksi Penjualan Mainan',
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
    },
    {
      title: 'Platfrom Booking Pelayanan Salon Kecantikan',
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
    },
    {
      title: 'Sistem Manajemen Stok Bengkel',
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
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        "HTML", "CSS", "Bootstrap", "Tailwind CSS", 
        "JavaScript", "Laravel", "React", "Express JS"
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: [
        "MySQL", "PostgreSQL", "XAMPP", "phpMyAdmin"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        "Manajemen Waktu", "Kerja Tim", 
        "Komunikasi", "Problem Solving",
        "Dokumentasi Teknis"
      ]
    },
    {
      title: "Office Tools",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        "Microsoft Office", "Google Workspace",
        "Google Docs", "Google Sheets",
        "Google Slides"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      skills: [
        "Figma", "Adobe XD", "Prototyping",
        "User Research", "Wireframing"
      ]
    },
    {
      title: "Other Technologies",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      skills: [
        "RESTful APIs", "Git & GitHub",
        "Command Line", "Agile Methodology"
      ]
    }
  ]
};
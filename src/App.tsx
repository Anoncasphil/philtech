import { useEffect, useMemo, useState } from 'react'
import {
  Home,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  FileText,
  Code,
  Database,
  Facebook,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Shield,
  Cloud,
  Cpu,
  Users,
  BookOpen,
  CheckCircle,
} from 'lucide-react'

type TabKey = 'home' | 'projects' | 'experience' | 'education' | 'contact'

 function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home')
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const tabs = useMemo(
    () => [
      { key: 'home' as const, label: 'Home', icon: Home },
      { key: 'projects' as const, label: 'Projects', icon: Briefcase },
      { key: 'experience' as const, label: 'Experience', icon: Code },
      { key: 'education' as const, label: 'Education', icon: GraduationCap },
      { key: 'contact' as const, label: 'Contact', icon: Mail },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Outer layout: left sidebar, main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-4 lg:gap-6">
        {/* Left sidebar */}
        <aside className="col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <div className="sticky top-6 space-y-4 lg:space-y-6">
            {/* Brand */}
            <img 
              src="/logo_philtech_forlight.svg" 
              alt="Philtech logo" 
              className={`w-28 md:w-32 h-auto ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
            />

            {/* Nav */}
            <nav className="flex flex-col gap-1">
              {tabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={
                    'group inline-flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ' +
                    (activeTab === key
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800')
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium hidden sm:inline">{label}</span>
                </button>
              ))}
            </nav>


            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-800 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10">
          <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
            {activeTab === 'home' && (
              <div className="space-y-8">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* First Column - Profile Picture */}
                  <div className="w-full h-72 lg:h-80">
                    <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
                    <img 
                      src="/picture.png" 
                      alt="Antoine Philipp Ochea" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  </div>
                  
                  {/* Second and Third Columns - Content */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                      <span className="text-gray-900 dark:text-white">
                        Antoine Philipp Ochea
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Web Developer</p>
                    <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                      BSIT Student at National University Fairview<br />
                      Specializing in Mobile & Internet Technology
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start gap-3">
                      <a 
                        href="https://github.com/Anoncasphil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/antoinephil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://facebook.com/antoinephil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="mailto:antoineochea0321@gmail.com"
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                 {/* Status Cards - Minimalistic Design */}
                 <div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                       <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Status</h3>
                       <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Student Developer</p>
                       <p className="text-sm text-gray-600 dark:text-gray-300">Seeking internship opportunities</p>
                     </div>
                     
                     <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                       <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Location</h3>
                       <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Caloocan City</p>
                       <p className="text-sm text-gray-600 dark:text-gray-300">Philippines</p>
                     </div>
                     
                     <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                       <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Focus</h3>
                       <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Web Development</p>
                       <p className="text-sm text-gray-600 dark:text-gray-300">Full-Stack Solutions</p>
                     </div>
                   </div>
                 </div>

                 {/* About Section */}
                 <div>
                   <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">About Me</h2>
                   <div className="prose prose-gray dark:prose-invert max-w-none">
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                       I'm a passionate BSIT student at National University Fairview, specializing in Mobile & Internet Technology. 
                       My journey into development began with curiosity about how websites and applications work, 
                       and it has evolved into a deep passion for creating innovative solutions.
                     </p>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                       I've built several projects including a comprehensive Resort Reservation System, IoT-based water monitoring platform, 
                       and inventory management systems. I'm always eager to learn new technologies and take on challenging projects.
                     </p>
                   </div>
                 </div>

                {/* Skills Section */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg flex flex-col">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Frontend Development
                      </h3>
                      <div className="flex flex-wrap gap-3 flex-1">
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-react-original text-3xl text-blue-500"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-typescript-plain text-3xl text-blue-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-javascript-plain text-3xl text-yellow-500"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-css3-plain text-3xl text-blue-500"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-html5-plain text-3xl text-orange-500"></i>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg flex flex-col">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Backend Development
                      </h3>
                      <div className="flex flex-wrap gap-3 flex-1">
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-nodejs-plain text-3xl text-green-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-php-plain text-3xl text-purple-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-python-plain text-3xl text-blue-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-cplusplus-plain text-3xl text-blue-700"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-mysql-plain text-3xl text-orange-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-mongodb-plain text-3xl text-green-600"></i>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg flex flex-col">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Tools & Technologies
                      </h3>
                      <div className="flex flex-wrap gap-3 flex-1">
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-git-plain text-3xl text-orange-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-docker-plain text-3xl text-blue-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-arduino-plain text-3xl text-green-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-vscode-plain text-3xl text-blue-600"></i>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <i className="devicon-linux-plain text-3xl text-gray-600 dark:text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    I'm a passionate student developer from the Philippines, specializing in full-stack development. 
                    Currently seeking internship opportunities to grow and contribute to innovative projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab('projects')}
                      className="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Briefcase className="h-4 w-4" />
                      View My Work
                    </button>
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Projects</h2>
                  <p className="text-gray-600 dark:text-gray-400">A collection of my recent work and projects</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Learnify - PDF Study Generator',
                      img: '/learnify.jpg',
                      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
                      href: 'https://learnify-pink.vercel.app/',
                      desc: 'AI-powered study companion with PDF Study Reviewer, AI Text Detector, and Resume Maker. Built with React, Tailwind CSS, and Gemini API, with more tools coming soon.'
                    },
                    {
                      title: 'IoT Water Monitoring Dashboard',
                      img: '/iot.png',
                      tech: ['PHP', 'MySQL', 'Arduino', 'C++', 'JavaScript'],
                      href: 'https://waterquality.triple7autosupply.com/',
                      desc: 'Real-time monitoring platform for water quality parameters including turbidity, TDS, pH, and temperature with automated control systems.'
                    },
                    {
                      title: 'Resort Reservation System',
                      img: '/reservationresort.png',
                      tech: ['PHP', 'MySQL', 'JavaScript', 'Docker'],
                      href: 'https://example.com',
                      desc: 'Complete reservation management system for eco-resorts featuring booking management, availability tracking, and administrative tools.'
                    },
                    {
                      title: 'Triple 7 Auto Supply Website',
                      img: '/personalizedwebsite.png',
                      tech: ['PHP', 'MySQL', 'JavaScript', 'Git'],
                      href: 'https://triple7autosupply.com/',
                      desc: 'Business website with integrated inventory management system for automotive parts supplier, featuring product catalog and contact management.'
                    },
                  ].map((project, index) => (
                    <article
                      key={project.title}
                      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 overflow-hidden flex flex-col h-full"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 text-sm font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 group/link rounded-lg shadow-sm hover:shadow-md"
                        >
                          <span>View Project</span>
                          <FileText className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Work Experience</h2>
                  <p className="text-gray-600 dark:text-gray-400">My professional journey and achievements</p>
                </div>
                
                <div className="space-y-6">
                  {/* Personal Project */}
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <Code className="h-6 w-6 text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Learnify Web App Creator</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4" />
                              <span>Personal Project</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>Oct 2025</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Built an AI-powered study companion featuring PDF Study Reviewer, AI Text Detector, and Resume Maker, with more tools planned. Implemented using React, TypeScript, Tailwind CSS, and Gemini API with a minimalist, responsive UI.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">React</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">TypeScript</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Tailwind CSS</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Gemini API</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <Code className="h-6 w-6 text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Reservation System Developer (Capstone)</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4" />
                              <span>National University Fairview</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>Mar 2025</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Developed a comprehensive resort reservation system with advanced booking management, payment processing, and administrative features. Built full-stack application using Node.js and MySQL with secure payment gateway integration and responsive admin dashboard with real-time analytics.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Node.js</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">MySQL</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">React</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Payment Gateway</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Admin Panel</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Social Media Manager</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4" />
                              <span>Codability Tech Student Organization</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>2023</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Led social media strategy and content creation for tech events, significantly improving organization visibility and event attendance. Increased social media engagement by 150% and organized 8+ tech events successfully.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Social Media</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Content Creation</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Event Management</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Community Building</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">School Event Volunteer</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4" />
                              <span>National University Fairview</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>Jan 2023</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Supported various university events including tech conferences, career fairs, and academic competitions. Assisted in logistics for 12+ university events and coordinated with 50+ student volunteers.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Event Coordination</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Logistics</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Team Management</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Customer Service</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">IT Intern</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4" />
                              <span>Hytec Power Inc.</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>2022</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Trained in robotics using VEX VR. Learned robot programming and automation concepts, and completed hands-on simulations and challenges while assisting with day-to-day IT tasks.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Network Administration</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">System Testing</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">Documentation</span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">IT Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education & Certifications</h2>
                  <p className="text-gray-600 dark:text-gray-400">My academic background and professional certifications</p>
                </div>
                
                <div className="space-y-8">
                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Education
                    </h3>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-gray-900 dark:text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Bachelor of Science in Information Technology</h4>
                              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin className="h-4 w-4" />
                                <span>National University Fairview</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="h-4 w-4" />
                              <span>2022 - 2026</span>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Specializing in Mobile & Internet Technology. Focus on web development, mobile applications, 
                            and emerging technologies. Maintaining strong academic performance while building practical 
                            projects and gaining hands-on experience.
                          </p>
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Expected Graduation: 2026</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Certifications
                    </h3>
                    <div className="grid gap-4">
                      {/* Cybersecurity Certifications */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Shield className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Introduction to Pen Testing for Cybersecurity Professionals</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2025</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Shield className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Ethical Hacking: Scanning Networks</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      {/* AI & Salesforce */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Agentforce Unlocked: Learning the Salesforce AI Service Platform</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2025</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Certified</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">AI in Connected Products (AIoT)</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">AI in Risk Management and Fraud Detection</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      {/* IoT & Cloud */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">IoT Foundations: Operating Systems Fundamentals</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2023</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cloud className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Azure Storage Essential Training</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2023</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cloud className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Cloud Storage Concepts: Services, Cost Control, and Security</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Cloud className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Microsoft Azure: Networking Concepts</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2023</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</p>
                          </div>
                        </div>
                      </div>

                      {/* Leadership & Soft Skills */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Leadership Skills for the Future</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Leading with a Growth Mindset</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Holding Yourself Accountable</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2023</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Developing Emotional Intelligence to Further Diversity, Equity, and Inclusion</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Diversity, Inclusion, and Belonging</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      {/* Technical Skills */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Getting Started with Professional Scrum</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Understanding Manual Testing</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Excel: Tips and Tricks</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">2023</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-900 dark:hover:border-white transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-gray-900 dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Working with Computers and Devices</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Learning</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
                  <p className="text-gray-600 dark:text-gray-400">Let's discuss your next project or just say hello!</p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Mail className="h-5 w-5 text-gray-900 dark:text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                            <a 
                              href="mailto:antoineochea0321@gmail.com" 
                              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                            >
                              antoineochea0321@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Github className="h-5 w-5 text-gray-900 dark:text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                            <a 
                              href="https://github.com/Anoncasphil" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                            >
                              github.com/Anoncasphil
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Linkedin className="h-5 w-5 text-gray-900 dark:text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                            <a 
                              href="https://www.linkedin.com/in/antoinephil" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                            >
                              linkedin.com/in/antoinephil
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <Twitter className="h-5 w-5 text-gray-900 dark:text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Twitter</p>
                            <a 
                              href="https://x.com/zyukirax" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                            >
                              @zyukirax
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        I typically respond to emails within 24 hours. For urgent matters, feel free to reach out on social media!
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send a Message</h3>
                      <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Name
                            </label>
                            <input 
                              id="name"
                              type="text" 
                              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white transition-colors" 
                              placeholder="Your name" 
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Email
                            </label>
                            <input 
                              id="email"
                              type="email" 
                              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white transition-colors" 
                              placeholder="your@email.com" 
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Subject
                          </label>
                          <input 
                            id="subject"
                            type="text" 
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white transition-colors" 
                            placeholder="What's this about?" 
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Message
                          </label>
                          <textarea 
                            id="message"
                            rows={6}
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white transition-colors resize-none" 
                            placeholder="Tell me about your project or just say hello..."
                          />
                        </div>
                      </form>
                    </div>

                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 dark:bg-white px-6 py-3 text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2"
                    >
                      <Mail className="h-5 w-5" /> 
                      Send Message
                  </button>
                  </div>
                </div>
                </div>
              </div>
            )}
          </section>
        </main>

      </div>

    </div>
  )
}

export default App

"use client"

import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import toast, { Toaster } from "react-hot-toast"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TypeAnimation } from "react-type-animation"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import convo from "./assets/convo.jpg"
import convo4 from "./assets/convo4.jpg"
import medal from "./assets/medal.jpg"
import travel from "./assets/travel.jpg"
import best from "./assets/best.jpg"
import edge from "./assets/edge.jpg"
import village from "./assets/village.jpg"
import learnverselogo from "./assets/learnverselogo.jpg"
import Lottie from "lottie-react"
import animationData from "./assets/animation.json"
import animationData2 from "./assets/edu.json"
import animationData3 from "./assets/animation3.json"
import SAP1 from "./assets/certi/SAP2.png"
import SAP6 from "./assets/certi/SAP6.png"
import SAP11 from "./assets/certi/SAP11.png"
import { DiVisualstudio } from "react-icons/di"

import { FaExternalLinkAlt ,FaWhatsapp } from "react-icons/fa"
// Import icons
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiSap,
  SiJavascript,
  SiCplusplus,
  SiJquery,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiOracle,
  SiAngular,
  SiFramer,
  SiCloudinary,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiRender,
  SiAndroidstudio,
  SiCoursera,
  SiLinkedin,
} from "react-icons/si"

import { BiLogoVisualStudio } from "react-icons/bi"
import { TbBrandCSharp } from "react-icons/tb"

import {
  FaJava,
  FaAward,
  FaMedal,
  FaCertificate,
  FaCheckCircle,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaExpand,
  FaTimes,
  FaPhone,
} from "react-icons/fa"

// Technology icons for TechRow
import { Atom, Type, Server, Database, Cloud, GitBranch, Figma, Palette, Layers, Package, Code } from "lucide-react"

import { NavLink, useLocation } from "react-router-dom"

// Custom hook for animations
const useAnimationVariants = () => {
  return {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, type: "spring", stiffness: 120 },
    },
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  }
}

// Education data
const educationData = [
  {
    degree: "Master of Science - IT",
    institution: "Charotar University of Science and Technology",
    period: "Aug 2024 - Present",
    location: "Anand, India",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Bhagwan Mahavir University",
    period: "Aug 2021 - Jun 2024",
    location: "Surat, India",
    details: "CGPA: 9.06",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Bhakti International School",
    period: "Jun 2020 - May 2021",
    location: "Surat, India",
    details: "Percentage: 75.6%",
  },
  {
    degree: "Secondary (10th)",
    institution: "Bhakti International School",
    period: "Jun 2018 - Mar 2019",
    location: "Surat, India",
    details: "Percentage: 70%",
  },
]

// Technology data for TechRow
const technologies = [
  {
    name: "React",
    icon: Atom,
    color: "#61DAFB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: Atom,
    color: "#61DAFB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: Code,
    color: "#F7DF1E",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: Type,
    color: "#3178C6",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "#90EE90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: Server,
    color: "#000000",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "#50C878",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: Database,
    color: "#00758F",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Firebase",
    icon: Cloud,
    color: "#FFA000",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    color: "#38B2AC",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Framer Motion",
    icon: Layers,
    color: "#E3B8FF",
    logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
  },
  {
    name: "Bootstrap",
    icon: Layers,
    color: "#7952B3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "AngularJS",
    icon: Code,
    color: "#DD0031",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Zustand",
    icon: GitBranch,
    color: "#8E44AD",
    logo: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
  },
  {
    name: "PHP",
    icon: Code,
    color: "#777BB4",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  { name: "ASP.NET", icon: Code, color: "#512BD4", logo: "https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg" },
  {
    name: "Clerk Auth",
    icon: Server,
    color: "#5F45FF",
    logo: "https://avatars.githubusercontent.com/u/80131353?s=200&v=4",
  },
  {
    name: "Git",
    icon: GitBranch,
    color: "#F05032",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Postman",
    icon: Package,
    color: "#FF6C37",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "VS Code",
    icon: Code,
    color: "#007ACC",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Android Studio",
    icon: Code,
    color: "#3DDC84",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Figma",
    icon: Figma,
    color: "#A020F0",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
]

// Education Item Component
const EducationItem = ({ item, isLast, isActive }) => (
  <div className="relative pl-8">
    {/* Timeline Line */}
    {!isLast && <div className="absolute top-2 left-[7px] w-px h-full bg-gray-600" />}

    {/* Timeline Dot */}
    <div className="absolute top-0 left-0">
      <motion.div
        className={`w-4 h-4 rounded-full border-2 border-gray-600 z-10 ${isActive ? "bg-blue-500" : "bg-gray-400"}`}
        whileHover={{ scale: 1.5, backgroundColor: "#60A5FA" }}
        transition={{ duration: 0.3 }}
      />
    </div>

    {/* Content */}
    <motion.div
      className="pb-12"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-xs sm:text-sm text-gray-400 mb-1 font-outfit">{item.period}</p>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-outfit">{item.degree}</h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 font-outfit">{item.institution}</p>
      <p className="text-sm text-gray-400 font-outfit">{item.location}</p>
      {item.details && <p className="text-sm text-gray-400 mt-2 font-outfit">{item.details}</p>}
    </motion.div>
  </div>
)

// Tech Item Component
const TechItem = ({ tech }) => (
  <div className="flex items-center space-x-2">
    {tech.logo && (
      <img
        src={tech.logo || "/placeholder.svg"}
        alt={`${tech.name} logo`}
        className={`w-6 h-6 rounded-full ${tech.name === "Express.js" ? "bg-white p-1" : ""}`}
      />
    )}
    <span className="whitespace-nowrap text-gray-200 text-sm font-bold uppercase font-poppins tracking-widest">
      {tech.name}
    </span>
  </div>
)

// Tech Row Component
const TechRow = () => (
  <div className="flex items-center gap-x-10">
    {technologies.map((tech, index) => (
      <TechItem key={index} tech={tech} />
    ))}
  </div>
)

// Technology Strip Component
const TechnologyStrip = () => {
  return (
    <section
      id="technologies"
      className="relative w-full overflow-hidden bg-zinc-900/55 py-6 border-t-4 border-b-4 border-[#9732e08f]"
    >
      <div className="marquee flex min-w-max gap-x-20">
        <TechRow />
        <TechRow />
        <TechRow />
      </div>
      <style>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

// Education Component
const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number.parseInt(entry.target.dataset.index, 10))
          }
        })
      },
      { threshold: 0.8 },
    )

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="education" className="py-24 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex justify-center items-center">
               <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
                    <Lottie animationData={animationData2} loop={true} className="w-full h-full" />
                  </div>
            </div>
            <div>
              <motion.h2
                className="text-[40px] sm:text-5xl md:text-6xl font-extrabold text-left mb-12 sm:mb-14 md:mb-16 leading-tight"
                style={{ fontFamily: "'Iceland', sans-serif" }}
                initial={{ opacity: 1, y: 0 }}
              >
                <span
                    className= "text-white"
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                Education{" "}
                </span>
                <motion.span
  className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic"
  // animate={{
  //   textShadow: [
  //     "0 0 16px #a21caf, 0 0 32px #a21caf", // purple-700
  //     "0 0 16px #db2777, 0 0 32px #db2777", // pink-600
  //     "0 0 16px #a21caf, 0 0 32px #a21caf", // purple-700
  //   ],
  // }}
  // transition={{
  //   duration: 2,
  //   repeat: Number.POSITIVE_INFINITY,
  //   ease: "easeInOut",
  // }}
>
  Experience
</motion.span>
              </motion.h2>

              {educationData.map((item, index) => (
                <div key={index} ref={(el) => (refs.current[index] = el)} data-index={index}>
                  <EducationItem
                    item={item}
                    isLast={index === educationData.length - 1}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Loader Component
const Loader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
  >
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
  </motion.div>
)

const Intro = ({ onComplete }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesConfig = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "attract" },
        resize: true,
      },
      modes: {
        push: { quantity: 3 },
        attract: { distance: 200, duration: 0.5, factor: 2 },
      },
    },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: isDarkMode ? ["#d946ef", "#06b6d4", "#facc15"] : ["#6366f1", "#ec4899", "#0ea5e9"] },
      shape: { type: ["circle", "triangle"] },
      size: {
        value: { min: 1, max: 4 },
        animation: { enable: true, speed: 3, minimumValue: 0.3, sync: false },
      },
      opacity: {
        value: 0.6,
        animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
      },
      links: {
        enable: true,
        distance: 120,
        color: isDarkMode ? "#f472b6" : "#8b5cf6",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
    },
    detectRetina: true,
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-40 flex items-center justify-center ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      } overflow-x-hidden`}
      style={{ minHeight: "100vh" }}
    >
      {/* Particles Background */}
      <Particles id="intro-particles" init={particlesInit} options={particlesConfig} className="fixed inset-0 z-0" />

      {/* Centered animated intro text */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-iceland"
          style={{
            color: isDarkMode ? "#fff" : "#111",
            textShadow:
              "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
          }}
        >
          Hello, I am Parthiv.
        </h1>
        <TypeAnimation
          sequence={[
            500,
            "Full-Stack Developer",
            500,
            "",
            500,
            "Gold Medalist",
            500,
            "",
            500,
            "Certified SAP Developer",
            500,
            "",
            0,
            () => {
              setTimeout(onComplete, 500)
            },
          ]}
          wrapper="h2"
          cursor={true}
          repeat={0}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          style={{
            fontFamily: "'Lancelot', cursive",
            textShadow: "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(236,72,153,0.2)",
          }}
        />
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
    const [activeSection, setActiveSection] = useState("home")
const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentMedalIndex, setCurrentMedalIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const [expandedCertificate, setExpandedCertificate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isIntro, setIsIntro] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(() => !!location.state?.fromProject)

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const variants = useAnimationVariants()
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []); 

  // Particles configuration
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesConfig = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "attract" },
        resize: true,
      },
      modes: {
        push: { quantity: 3 },
        attract: { distance: 200, duration: 0.5, factor: 2 },
      },
    },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: isDarkMode ? ["#d946ef", "#06b6d4", "#facc15"] : ["#6366f1", "#ec4899", "#0ea5e9"] },
      shape: { type: ["circle", "triangle"] },
      size: {
        value: { min: 1, max: 4 },
        animation: { enable: true, speed: 3, minimumValue: 0.3, sync: false },
      },
      opacity: {
        value: 0.6,
        animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
      },
      links: {
        enable: true,
        distance: 120,
        color: isDarkMode ? "#f472b6" : "#8b5cf6",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
    },
    detectRetina: true,
  }

  const skills = [
    // 🌐 Frontend Frameworks & Libraries
    { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
    { name: "AngularJS", icon: <SiAngular size={24} color="#DD0031" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={24} color="#7952B3" /> },
    { name: "jQuery", icon: <SiJquery size={24} color="#0769AD" /> },
    { name: "Framer Motion", icon: <SiFramer size={24} color="#0055FF" /> },

    // 💻 Programming Languages
    { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
    { name: "Java", icon: <FaJava size={24} color="#007396" /> },
    { name: "C++", icon: <SiCplusplus size={24} color="#00599C" /> },
    { name: "C#", icon: <TbBrandCSharp size={24} color="#239120" /> },
    { name: "PHP", icon: <SiPhp size={24} color="#777BB4" /> },

    // 🛠️ Backend & Server Technologies
    { name: "Node.js", icon: <SiNodedotjs size={24} color="#339933" /> },
    { name: "Express.js", icon: <SiExpress size={24} color="#38B2AC" /> },
    { name: "ASP.NET", icon: <SiDotnet size={24} color="#512BD4" /> },

    // 🗃️ Databases
    { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
    { name: "Firebase", icon: <SiFirebase size={24} color="#FFCA28" /> },
    { name: "Oracle", icon: <SiOracle size={24} color="#F80000" /> },

    // ☁️ Cloud & SaaS Services
    { name: "SAP", icon: <SiSap size={24} color="#0FAAFF" /> },
    { name: "Cloudinary", icon: <SiCloudinary size={24} color="#3448C5" /> },

    // 🎨 UI/UX & Design Tools
    { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },

    // 🧩 Development Tools & IDEs
    { name: "VS Code", icon: <BiLogoVisualStudio size={24} color="#007ACC" /> },
    { name: "Visual Studio", icon: <DiVisualstudio size={24} color="#5C2D91" /> },
    { name: "Android Studio", icon: <SiAndroidstudio size={24} color="#3DDC84" /> },
    { name: "Postman", icon: <SiPostman size={24} color="#FF6C37" /> },
    { name: "Git", icon: <SiGit size={24} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={24} color="#38B2AC" /> },

    // 🚀 Deployment & Hosting
    { name: "Netlify", icon: <SiNetlify size={24} color="#00C7B7" /> },
    { name: "Vercel", icon: <SiVercel size={24} color="#38B2AC" /> },
    { name: "Render", icon: <SiRender size={24} color="#46E3B7" /> },

    // 🌐 Web Basics
    { name: "HTML5", icon: <SiHtml5 size={24} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={24} color="#1572B6" /> },
  ]

  // Image carousel data
  const imageCarousel = [
    {
      image: convo,
      text: "I Code",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      image: best,
      text: "I Learn",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      image: travel,
      text: "I Travel",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/50",
    },
  ]

  // Medal carousel data for card slider
  const medalCards = [
    {
      id: 1,
      image: medal,
      title: "Gold Medal for 1st Rank in BCA",
      gradient: "from-yellow-400/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
    },
    {
      id: 2,
      image: convo,
      title: "Me with medal",
      gradient: "from-blue-400/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      id: 3,
      image: convo4,
      title: "CR patil and me",
      gradient: "from-purple-400/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
  ]

  // Projects data
  const featuredProjects = [
    {
      title: "LearnVerse",
      description:
        "Full-stack MERN-based learning platform with user authentication, gamified badge rewards, animated UI, and responsive layout.",
      stack: ["React", "Node.js", "MongoDB", "Express", "Zustand", "Tailwind CSS"],
      image: learnverselogo,
      emoji: "📘",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Village Chef",
      description:
        "Real-time food ordering web app built in PHP with Razorpay payment gateway and PHPMailer for order notifications.",
      stack: ["PHP", "MySQL", "Razorpay", "PHPMailer", "Bootstrap"],
      image: village,
      emoji: "🍽️",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Edge e-Bulletin",
      description:
        "Android + PHP-based university news system with real-time Firebase sync, mobile notifications, and a web-based admin dashboard.",
      stack: ["Android (Java)", "PHP", "Firebase Realtime DB", "Bootstrap"],
      image: edge,
      emoji: "📰",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ]

  // Comprehensive certifications data
  const certifications = [
    // SAP Certifications
    {
      id: 1,
      title: "SAP Certified Associate – Back-End Developer – ABAP Cloud",
      issuer: "SAP",
      category: "SAP Certifications",
      image: SAP1,
      url: "https://www.credly.com/badges/dcf5d3dc-0a23-47ef-9470-ef85e0ffa55a/linked_in?t=swtg7q",
      icon: <SiSap size={24} color="#0FAAFF" />,
      date: "2025",
      score: "84%",
      description:
        "Comprehensive certification covering ABAP Cloud development, RESTful services, and modern SAP development practices.",
      skills: ["ABAP Cloud", "RESTful Services", "SAP BTP", "Core Data Services"],
    },
    {
      id: 6,
      title: "SAP Technology Consultant Hands-on Project",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP6,
      url: "https://www.coursera.org/account/accomplishments/records/KEAHX12H1LS0",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description: "Capstone project applying real-world SAP knowledge in a business context.",
      skills: ["SAP Practice", "Client Demo", "Project Simulation"],
    },
    {
      id: 11,
      title: "Introduction to Agile Development and Scrum",
      issuer: "Coursera",
      category: "Software Development & Engineering",
      image: SAP11,
      url: "https://www.credly.com/badges/eea3c732-cc90-472d-972b-1dae4acec258/linked_in_profile",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description: "Covers Agile methodologies, Scrum ceremonies, and team roles.",
      skills: ["Agile", "Scrum", "Teamwork"],
    },
  ]
  // Auto-cycle images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCarousel.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Auto-cycle medal cards
  useEffect(() => {
    const medalInterval = setInterval(() => {
      setCurrentMedalIndex((prev) => (prev + 1) % medalCards.length)
    }, 4000)
    return () => clearInterval(medalInterval)
  }, [])

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Update current time for India
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const indiaTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now)
      setCurrentTime(`India — ${indiaTime} IST`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (location.state?.fromProject) {
      setIsLoading(false)
      setIsIntro(false)
      setIsContentVisible(true)
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
      }, 0)
    } else if (location.state?.fromCert) {
      setIsLoading(false)
      setIsIntro(false)
      setIsContentVisible(true)
      setTimeout(() => {
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" })
      }, 0)
    } else if (location.state?.section) {
      setIsLoading(false)
      setIsIntro(false)
      setIsContentVisible(true)
      setTimeout(() => {
        document.getElementById(location.state.section)?.scrollIntoView({ behavior: "smooth" })
      }, 0)
    } else if (!isContentVisible) {
      const loadingTimer = setTimeout(() => {
        setIsLoading(false)
        setIsIntro(true)
      }, 500)
      return () => clearTimeout(loadingTimer)
    }
  }, [location, isContentVisible])

  useEffect(() => {
    if (isLoading || isIntro) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isLoading, isIntro])

  const handleIntroComplete = () => {
    setIsIntro(false)
    setIsContentVisible(true)
  }

  const navItems = ["Home", "About", "Education", "Projects","Achievements","Internship", "Contact"]
  // Handle navigation and scrolling
  const handleNavClick = (section) => {
    const sectionId = section.toLowerCase()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      {isIntro && <Intro onComplete={handleIntroComplete} />}
      {isContentVisible && (
        <div
          className={`min-h-screen ${
            isDarkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
          } overflow-x-hidden relative`}
        >
          {/* Particles Background */}
          <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="fixed inset-0 z-0" />

          {/* Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled ? `${isDarkMode ? "bg-slate-900/90" : "bg-white/90"} backdrop-blur-md` : "bg-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-iceland tracking-wide"
                >
                  PARTHIV SHINGALA
                </motion.div>

                <div
                  className={`hidden md:flex items-center space-x-1 ${
                    isDarkMode ? "bg-slate-800/50" : "bg-white/50"
                  } backdrop-blur-sm rounded-full px-6 py-2`}
                >
                  {navItems.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-slate-700/50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      } transition-all duration-200`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item)
                      }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    onClick={() => {
  console.log("Connecting via WhatsApp");
  toast('Opening WhatsApp...', {
    icon: <FaWhatsapp color={isDarkMode ? '#3b82f6' : '#60a5fa'} />,
    style: {
      borderRadius: '10px',
      background: isDarkMode ? '#1e293b' : '#f1f5f9',
      color: isDarkMode ? '#f1f5f9' : '#1e293b'
    }
  });
  setTimeout(() => {
    window.open("https://wa.me/919727181143?text=Hi%20Parthiv!", "_blank");
  }, 1000);
}}
                  >
                    Let's Connect
                  </motion.button>
                </div>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`md:hidden p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-100"
                  } transition-colors`}
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span
                      className={`block w-5 h-0.5 ${
                        isDarkMode ? "bg-white" : "bg-gray-900"
                      } transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
                    />
                    <span
                      className={`block w-5 h-0.5 ${
                        isDarkMode ? "bg-white" : "bg-gray-900"
                      } mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                      className={`block w-5 h-0.5 ${
                        isDarkMode ? "bg-white" : "bg-gray-900"
                      } mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
                    />
                  </div>
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`md:hidden ${isDarkMode ? "bg-slate-900/95" : "bg-white/95"} backdrop-blur-md border-t ${
                    isDarkMode ? "border-slate-800" : "border-gray-200"
                  }`}
                >
                  <div className="px-4 py-4 space-y-2">
                    {navItems.map((item) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`block px-4 py-2 rounded-lg ${
                          isDarkMode
                            ? "text-gray-300 hover:text-white hover:bg-slate-800"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        } transition-colors`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)} // Only close the menu
                      >
                        {item}
                      </motion.a>
                    ))}
                    <button
                      className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      onClick={() => {
  toast('Opening WhatsApp...', {
    icon: <FaWhatsapp color={isDarkMode ? '#3b82f6' : '#60a5fa'} />,
    style: {
      borderRadius: '10px',
      background: isDarkMode ? '#1e293b' : '#f1f5f9',
      color: isDarkMode ? '#f1f5f9' : '#1e293b'
    }
  });
  setTimeout(() => {
    window.open("https://wa.me/919727181143?text=Hi%20Parthiv!", "_blank");
  }, 1000);
}}
                    >
                      Let's Connect
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-0">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
              className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <motion.h1
                {...variants.fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                style={{ fontFamily: "'Iceland', sans-serif" }}
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Passionate Developer: Transforming{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Academic Excellence{" "}
                </span>
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  into{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Software Mastery
                </span>
              </motion.h1>

              {/* Profile Section */}
              <motion.div
                {...variants.fadeInUp}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 font-outfit"
              >
                <span className={`text-xl sm:text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Hello, I'm
                </span>
                <span className={`text-xl sm:text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Parthiv Shingala
                </span>
                <div className="flex-shrink-0 min-w-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <img
                    src={best || "/placeholder.svg"}
                    alt="Parthiv Shingala"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "block"
                    }}
                  />
                  <span className="text-white font-bold text-lg hidden">PS</span>
                </div>
                <span className={`text-xl sm:text-2xl ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Full‑Stack Developer
                </span>
              </motion.div>

              <motion.p
                {...variants.fadeInUp}
                transition={{ delay: 0.8 }}
                className={`text-lg sm:text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-12 max-w-2xl mx-auto font-outfit`}
              >
                MERN, PHP, SAP‑Certified • Transforming complex business requirements into elegant, scalable solutions
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                {...variants.fadeInUp}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-white font-outfit"
                  onClick={() => {
  toast('Opening WhatsApp...', {
    icon: <FaWhatsapp color={isDarkMode ? '#3b82f6' : '#60a5fa'} />,
    style: {
      borderRadius: '10px',
      background: isDarkMode ? '#1e293b' : '#f1f5f9',
      color: isDarkMode ? '#f1f5f9' : '#1e293b'
    }
  });
  setTimeout(() => {
    window.open("https://wa.me/919727181143?text=Hi%20Parthiv!", "_blank");
  }, 1000);
}}
                >
                  Let's Connect
                  <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                <motion.button
  type="button"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
  }}
  whileTap={{ scale: 0.95 }}
  className={`flex items-center px-6 py-3 border ${
    isDarkMode
      ? "border-gray-600 text-gray-300 hover:text-white hover:border-gray-500"
      : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400"
  } rounded-full transition-all duration-300 font-outfit`}
  onClick={() => {
    toast('Opening email...', {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      style: {
        borderRadius: '10px',
        background: isDarkMode ? '#1e293b' : '#f1f5f9',
        color: isDarkMode ? '#f1f5f9' : '#1e293b'
      }
    });
    setTimeout(() => {
      window.open("mailto:parthivshingala@gmail.com", "_blank");
    }, 1000);
  }}
>
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
  parthivshingala@gmail.com
</motion.button>
              </motion.div>
            </motion.div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side - Text Content */}
                <motion.div {...variants.fadeInLeft} viewport={{ once: true }} className="flex-1 lg:pr-8">
                  {/* Top Label */}
                  <motion.div
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center px-4 py-2 rounded-full ${
                      isDarkMode
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-100 border-purple-200 text-purple-600"
                    } text-sm font-medium mb-6 border font-outfit`}
                  >
                    More About Me
                  </motion.div>

                  {/* Large Heading */}
                  <motion.h2
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-[50px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
                    style={{ fontFamily: "'Iceland', sans-serif" }}
                  >
                    <span
                      className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                      style={{
                        textShadow:
                          "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      Hi there! I'm{}
                    </span>{" "}
                    <span className="bg-gradient-to-r  from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                      Parthiv
                    </span>
                  </motion.h2>

                  {/* Paragraphs */}
                  <div
                    className={`space-y-6 ${isDarkMode ? "text-light-gray" : "text-gray-600"} text-lg leading-relaxed font-outfit`}
                  >
                    <motion.p {...variants.fadeInUp} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                      I'm Parthiv Shingala, a passionate full-stack developer turning complex ideas into powerful web
                      applications. With a Gold Medal in BCA and SAP Certification, I specialize in creating scalable,
                      user-focused solutions using MERN, PHP, and Firebase.
                    </motion.p>

                    <motion.p {...variants.fadeInUp} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                      Outside of code, I explore design, follow tech trends, and enjoy deep work sessions with music.
                      I'm constantly curious and believe in evolving both professionally and personally.
                    </motion.p>

                    <motion.p
                      {...variants.fadeInUp}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className={`${isDarkMode ? "text-white" : "text-gray-900"} font-semibold font-outfit`}
                    >
                      I wake up every day eager to build something meaningful.
                    </motion.p>
                  </div>

                  {/* Social Links */}
<motion.div
  {...variants.fadeInUp}
  viewport={{ once: true }}
  transition={{ delay: 0.7 }}
  className="flex items-center space-x-4 mt-8"
>
  {[
    { href: "https://github.com/Parthiv30", icon: SiGithub, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/parthiv-shingala-933224322/",
      icon: SiLinkedin,
      label: "LinkedIn"
    },
  ].map((social, index) => (
    <motion.button
      key={index}
      type="button"
      onClick={() => {
        toast(`Opening ${social.label}...`, {
          icon: <social.icon className="w-5 h-5" />,
          style: {
            borderRadius: '10px',
            background: isDarkMode ? '#1e293b' : '#f1f5f9',
            color: isDarkMode ? '#f1f5f9' : '#1e293b'
          }
        });
        setTimeout(() => {
          window.open(social.href, "_blank");
        }, 1000);
      }}
      whileHover={{
        scale: 1.1,
        y: -2,
        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10"
          : "bg-white/50 border-gray-200/50 hover:border-purple-500/50 hover:bg-purple-500/10"
      } backdrop-blur-sm rounded-full border transition-all duration-300`}
    >
      <social.icon
        className={`w-6 h-6 ${
          isDarkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-600 hover:text-purple-500"
        } transition-colors`}
      />
    </motion.button>
  ))}
</motion.div>
                </motion.div>

                {/* Right Side - Animated Image Carousel */}
                <motion.div
                  {...variants.fadeInRight}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col items-center lg:items-end"
                >
                  <div className="relative w-80 h-96 mb-8">
                    {/* Background Cards */}
                    <motion.div
                      {...variants.scaleIn}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className={`absolute inset-0 ${
                        isDarkMode ? "bg-slate-800/30" : "bg-white/30"
                      } backdrop-blur-sm rounded-xl border ${
                        isDarkMode ? "border-slate-700/50" : "border-gray-200/50"
                      } transform rotate-[-12deg] shadow-2xl`}
                    />

                    <motion.div
                      {...variants.scaleIn}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className={`absolute inset-2 bg-gradient-to-br ${imageCarousel[currentImageIndex].gradient} backdrop-blur-sm rounded-xl border border-purple-500/30 transform rotate-[6deg] shadow-xl transition-all duration-1000`}
                    />

                    {/* Main Image */}
                    <motion.div
                      {...variants.scaleIn}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)",
                      }}
                      className={`absolute inset-4 rounded-xl overflow-hidden shadow-2xl border-2 ${imageCarousel[currentImageIndex].borderColor} cursor-pointer transition-all duration-1000`}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={imageCarousel[currentImageIndex].image}
                          alt="Parthiv Shingala"
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.8 }}
                        />
                      </AnimatePresence>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                    />

                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
                    />
                  </div>

                  {/* Changing Text Below Images */}
                  <motion.div
                    className="text-center"
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3
                      className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic"
                      style={{ fontFamily: "'Iceland', sans-serif" }}
                    >
                      {imageCarousel[currentImageIndex].text}
                    </h3>
                  </motion.div>

                  {/* Image Indicators */}
                  <div className="flex space-x-2 mt-4">
                    {imageCarousel.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-purple-500 scale-125"
                            : `${isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technology Strip - INTEGRATED BEFORE FOOTER */}
          <TechnologyStrip />

          {/* Education Section - INTEGRATED */}
          <Education />

          {/* Skills Section */}
          <section id="skills" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div {...variants.fadeInUp} viewport={{ once: true }} className="text-center mb-16">
                <motion.div
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full ${
                    isDarkMode
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-100 border-purple-200 text-purple-600"
                  } text-sm font-medium mb-8 tracking-widest uppercase border font-outfit`}
                >
                  MY SKILLS
                </motion.div>

                <motion.h2
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-[50px] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                  style={{ fontFamily: "'Iceland', sans-serif" }}
                >
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    The Secret{" "}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                    Sauce
                  </span>
                </motion.h2>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                {...variants.staggerContainer}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    {...variants.scaleIn}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.6,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-700 text-white hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20"
                        : "bg-white border-gray-200 text-gray-900 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
                    } border px-3 py-2 rounded-xl shadow-md hover:shadow-purple-500/30 transition-all duration-300 text-center font-medium cursor-pointer flex items-center justify-center font-outfit`}
                  >
                    <div className="mr-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                    <span className="text-sm sm:text-base">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div {...variants.fadeInUp} viewport={{ once: true }} className="text-center mb-16">
                <motion.div
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full ${
                    isDarkMode
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-100 border-purple-200 text-purple-600"
                  } text-sm font-medium mb-8 tracking-widest uppercase border`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Featured Projects
                </motion.div>

                <motion.h2
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-[50px] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                  style={{ fontFamily: "'Iceland', sans-serif" }}
                >
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    My Recent{" "}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic ">
                    Work
                  </span>
                </motion.h2>

                <motion.p
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto font-outfit`}
                >
                  Here are some of the projects I've worked on, showcasing my skills in full-stack development, mobile
                  applications, and enterprise solutions.
                </motion.p>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8,
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: "0 25px 50px rgba(168, 85, 247, 0.2)",
                    }}
                    className={`group ${
                      isDarkMode
                        ? "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50"
                        : "bg-white/50 border-gray-200/50 hover:border-purple-500/50"
                    } backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300`}
                  >
                    {/* Project Image */}
                    <div
                      className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <motion.h3
                        className={`text-xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        } mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 font-outfit`}
                      >
                        {project.title}
                      </motion.h3>

                      <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4 leading-relaxed font-outfit`}
                      >
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            {...variants.scaleIn}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.2 + techIndex * 0.1,
                              duration: 0.3,
                            }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(168, 85, 247, 0.2)",
                            }}
                            className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 cursor-default font-outfit"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg font-outfit"
                      >
                        <NavLink to={`/ProjectShowcase/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          <span className="flex items-center justify-center">
                            View Project
                            <svg
                              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </NavLink>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Excellence & Recognition Section */}
          <section id="achievements" className="py-20 px-6 sm:px-8 lg:px-16 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full ${
                    isDarkMode
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-100 border-purple-200 text-purple-600"
                  } text-sm font-medium mb-8 tracking-widest uppercase border`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Achievements & Certifications
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                 className="text-[50px] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                  style={{ fontFamily: "'Iceland', sans-serif" }}
                >
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Excellence &{" "}
                  </span>
                  <span
                    className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "700",
                    }}
                  >
                    Recognition
                  </span>
                </motion.h2>
              </motion.div>

              {/* Gold Medal Achievement Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-20"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Medal Carousel */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex-1 flex justify-center"
                  >
                    <div className="relative w-[400px] h-64 flex items-center justify-center">
                      {/* Glowing Background */}
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-yellow-400/30 rounded-2xl blur-2xl"
                      />

                      {/* Carousel Images */}
                      {medalCards.map((medal, index) => {
                        const leftIndex = (currentMedalIndex - 1 + medalCards.length) % medalCards.length
                        const rightIndex = (currentMedalIndex + 1) % medalCards.length
                        let variant
                        if (index === leftIndex) variant = "left"
                        else if (index === currentMedalIndex) variant = "center"
                        else if (index === rightIndex) variant = "right"
                        else variant = "hidden"

                        return (
                          <motion.div
                            key={medal.id}
                            variants={{
                              left: {
                                x: -96,
                                scale: 0.8,
                                opacity: 0.5,
                                zIndex: 1,
                              },
                              center: { x: 0, scale: 1, opacity: 1, zIndex: 2 },
                              right: {
                                x: 96,
                                scale: 0.8,
                                opacity: 0.5,
                                zIndex: 1,
                              },
                              hidden: { opacity: 0, scale: 0.5 },
                            }}
                            initial="hidden"
                            animate={variant}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-2"
                            style={{ borderColor: medal.borderColor }}
                          >
                            <img
                              src={medal.image || "/placeholder.svg"}
                              alt={medal.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = "none"
                                e.target.nextSibling.style.display = "flex"
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 hidden items-center justify-center">
                              <FaMedal size={80} className="text-white drop-shadow-2xl" />
                            </div>
                          </motion.div>
                        )
                      })}

                      {/* Medal Indicators */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {medalCards.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentMedalIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentMedalIndex
                                ? "bg-yellow-500 scale-125 shadow-lg"
                                : `${isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Medal Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex-1 text-center lg:text-left"
                  >
                    <motion.h3
                      className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent font-outfit"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      🏆 Gold Medal for 1st Rank in BCA
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed max-w-lg font-outfit`}
                    >
                      Received from{" "}
                      <span className={`${isDarkMode ? "text-white" : "text-gray-900"} font-semibold`}>
                        Bhagwan Mahavir University
                      </span>{" "}
                      for achieving 1st Rank in Bachelor of Computer Applications with a{" "}
                      <span className="text-yellow-400 font-bold">CGPA of 9.06</span>
                    </motion.p>

                    {/* Achievement Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      className="flex flex-wrap gap-4 mt-8"
                    >
                      <div
                        className={`${
                          isDarkMode ? "bg-slate-800/50" : "bg-white/50"
                        } backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30`}
                      >
                        <span className="text-yellow-400 font-bold text-lg font-outfit">9.06</span>
                        <p
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}
                        >
                          CGPA
                        </p>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "bg-slate-800/50" : "bg-white/50"
                        } backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30`}
                      >
                        <span className="text-yellow-400 font-bold text-lg font-outfit">1st</span>
                        <p
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}
                        >
                          Rank
                        </p>
                      </div>
                      <div
                        className={`${
                          isDarkMode ? "bg-slate-800/50" : "bg-white/50"
                        } backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30`}
                      >
                        <span className="text-yellow-400 font-bold text-lg font-outfit">BCA</span>
                        <p
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}
                        >
                          Degree
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Certificates Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mb-12"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className={`text-2xl font-outfit sm:text-3xl font-bold text-center mb-12 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Professional Certifications
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.03,
                        y: -10,
                        boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)",
                      }}
                      className={`group ${
                        isDarkMode
                          ? "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50"
                          : "bg-white/50 border-gray-200/50 hover:border-purple-500/50"
                      } backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer min-h-[500px]`}
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      {/* Certificate Image - Increased height */}
                      <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = "none"
                            e.target.nextSibling.style.display = "flex"
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 hidden items-center justify-center">
                          <FaCertificate size={80} className="text-purple-400" />
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            {cert.category.split(" ")[0]}
                          </span>
                        </div>

                        {/* Score Badge (if available) */}
                        {cert.score && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                              {cert.score}
                            </span>
                          </div>
                        )}

                        {/* Hover Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent flex items-end justify-center pb-4"
                        >
                          <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            Click to view details
                          </span>
                        </motion.div>
                      </div>

                      {/* Certificate Content - Adjusted for increased height */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3
                                className={`text-lg font-bold ${
                                  isDarkMode ? "text-white" : "text-gray-900"
                                } mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 font-outfit`}
                              >
                                {cert.title}
                              </h3>
                              <div className="flex items-center mb-3">
                                <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                                  {cert.icon}
                                </div>
                                <div>
                                  <p
                                    className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-sm font-medium font-outfit`}
                                  >
                                    {cert.issuer}
                                  </p>
                                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-xs font-outfit`}>
                                    {cert.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Skills Tags */}
                          {cert.skills && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-md text-xs font-medium border border-purple-500/20 font-outfit"
                                >
                                  {skill}
                                </span>
                              ))}
                              {cert.skills.length > 3 && (
                                <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded-md text-xs font-medium font-outfit">
                                  +{cert.skills.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* View Certificate Button */}
                        <motion.button
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg font-outfit"
                        >
                          <span className="flex items-center justify-center">
                            <FaAward className="mr-2" size={16} />
                            View Certificate
                            <FaExternalLinkAlt
                              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              size={12}
                            />
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* View All Certificates Button */}
              <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 1, duration: 0.6 }}
  className="text-center"
>
  <motion.button
    whileHover={{
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-white font-outfit"
    onClick={() => {
      toast('Navigating to All Certifications...', {
        icon: "🎓",
        style: {
          borderRadius: '10px',
          background: isDarkMode ? '#1e293b' : '#f1f5f9',
          color: isDarkMode ? '#f1f5f9' : '#1e293b'
        }
      });
      setTimeout(() => {
        navigate("/AllCertifications");
      }, 1000);
    }}
  >
    <span>View All Certifications →</span>
  </motion.button>
</motion.div>
            </div>
          </section>

          {/* SAP x EduNet Internship Section */}
          <section id="internship" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div {...variants.fadeInUp} viewport={{ once: true }} className="text-center mb-16">
                <motion.div
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full ${
                    isDarkMode
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-blue-100 border-blue-200 text-blue-600"
                  } text-sm font-medium mb-8 tracking-widest uppercase border`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Professional Experience
                </motion.div>

                <motion.h2
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-[50px] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                  style={{ fontFamily: "'Iceland', sans-serif" }}
                >
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    SAP x{" "}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                    EduNet
                  </span>
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {" "}
                    Internship
                  </span>
                </motion.h2>

                <motion.p
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-blue-300 font-medium font-outfit"
                >
                  Empowered by the Educate to Employ (E2E) Program
                </motion.p>
              </motion.div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side - Description */}
                <motion.div
                  {...variants.fadeInLeft}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 text-center lg:text-left"
                >
                  <motion.h3
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6 font-outfit`}
                  >
                    Enterprise Learning Experience
                  </motion.h3>

                  <div
                    className={`space-y-6 font-outfit ${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg leading-relaxed`}
                  >
                    <motion.p {...variants.fadeInUp} viewport={{ once: true }} transition={{ delay: 1 }}>
                      I got an internship opportunity through the{" "}
                      <span className="text-blue-400 font-semibold">SAP-backed Educate to Employ (E2E) initiative</span>
                      , facilitated by <span className="text-purple-400 font-semibold">EduNet Foundation</span>. During
                      this internship, I gained hands-on experience with industry-relevant skills such as business
                      process understanding, professional communication, and workplace readiness.
                    </motion.p>

                    <motion.p {...variants.fadeInUp} viewport={{ once: true }} transition={{ delay: 1.2 }}>
                      Gained hands-on training in{" "}
                      <span className={`${isDarkMode ? "text-white" : "text-gray-900"} font-semibold`}>
                        SAP backend fundamentals
                      </span>
                      , business process understanding, and software integration methodologies.
                    </motion.p>

                    <motion.p
                      {...variants.fadeInUp}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 }}
                      className={`${isDarkMode ? "text-white" : "text-gray-900"} font-semibold`}
                    >
                      Successfully cleared the{" "}
                      <span className="text-blue-400 font-semibold">
                        SAP Certified Associate – Back-End Developer – ABAP Cloud
                      </span>{" "}
                      exam with an overall score of <span className="text-green-400 font-semibold">84%</span>.
                    </motion.p>
                  </div>

                  {/* Success Badge */}
                  <motion.div
                    {...variants.scaleIn}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 }}
                    className="mt-8"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                      }}
                      className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 font-semibold font-outfit"
                    >
                      <FaCheckCircle size={20} className="mr-3 text-green-400" />
                      SAP Certified Associate – Back-End Developer
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Right Side - Logo Cards */}
                <motion.div
                  {...variants.fadeInRight}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex-1 flex flex-col sm:flex-row gap-8 justify-center items-center"
                >
                  {/* SAP Logo Card */}
                  <a href="https://www.sap.com/" target="_blank" rel="noreferrer">
                    <motion.div
                      {...variants.scaleIn}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        boxShadow: "0 25px 50px rgba(15, 170, 255, 0.3)",
                      }}
                      className={`group ${
                        isDarkMode
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-blue-500/50"
                          : "bg-white/40 border-gray-200/50 hover:border-blue-500/50"
                      } backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 mb-4 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="SAP Logo"
                            className="w-full h-full object-contain rounded-lg"
                            onError={(e) => {
                              e.target.style.display = "none"
                              e.target.nextSibling.style.display = "flex"
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg hidden items-center justify-center">
                            <SiSap size={48} className="text-blue-400" />
                          </div>
                        </div>
                        <h4
                          className={`text-xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-2 group-hover:text-blue-400 transition-colors font-outfit`}
                        >
                          SAP
                        </h4>
                        <p
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}
                        >
                          Enterprise Solutions
                        </p>
                      </div>
                    </motion.div>
                  </a>

                  <motion.h2
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
                    style={{ fontFamily: "'Tangerine', cursive" }}
                  >
                    <p
                      className="text-white-500"
                      style={{
                        textShadow:
                          "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {" "}
                      X
                    </p>
                  </motion.h2>

                  {/* EduNet Logo Card */}
                  <a href="https://edunetfoundation.org/" target="_blank" rel="noreferrer">
                    <motion.div
                      {...variants.scaleIn}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: -2,
                        boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)",
                      }}
                      className={`group ${
                        isDarkMode
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-purple-500/50"
                          : "bg-white/40 border-gray-200/50 hover:border-purple-500/50"
                      } backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 mb-4 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="EduNet Logo"
                            className="w-full h-full object-contain rounded-lg"
                            onError={(e) => {
                              e.target.style.display = "none"
                              e.target.nextSibling.style.display = "flex"
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg hidden items-center justify-center">
                            <FaGraduationCap size={48} className="text-purple-400" />
                          </div>
                        </div>
                        <h4
                          className={`text-xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-2 group-hover:text-purple-400 transition-colors font-outfit`}
                        >
                          EduNet Foundation
                        </h4>
                        <p
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}
                        >
                          Education Partner
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div {...variants.fadeInUp} viewport={{ once: true }} className="text-center mb-16">
                <motion.div
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  
                  className={`inline-flex items-center px-4 py-2 rounded-full ${
                    isDarkMode
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-100 border-purple-200 text-purple-600"
                  } text-sm font-medium mb-8 tracking-widest uppercase border font-outfit`}
                >
                  Get In Touch
                </motion.div>

                <motion.h2
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-[50px] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                  style={{ fontFamily: "'Iceland', sans-serif" }}
                >
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Let's{" "}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                    Connect
                  </span>
                </motion.h2>

                <motion.p
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto mb-4 font-outfit`}
                >
                  I'd love to hear about your next project or opportunity
                </motion.p>

                <motion.p
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-purple-300 font-medium italic font-outfit"
                >
                  "Open for job opportunities, collaborations, or just a friendly chat."
                </motion.p>
              </motion.div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side - Animated Avatar */}
                <motion.div
                  {...variants.fadeInLeft}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 flex justify-center lg:justify-start"
                >
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
                    <Lottie animationData={animationData3} loop={true} className="w-full h-full" />
                  </div>
                </motion.div>

                {/* Right Side - Contact Details */}
                <motion.div
                  {...variants.fadeInRight}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex-1 space-y-8"
                >
                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Email */}
                    <motion.div
                      {...variants.fadeInUp}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)",
                      }}
                      className={`flex items-center p-6 ${
                        isDarkMode
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-purple-500/50"
                          : "bg-white/40 border-gray-200/50 hover:border-purple-500/50"
                      } backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer group`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300"
                      >
                        <FaEnvelope size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <h3
                          className={`text-lg font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-1 group-hover:text-purple-300 transition-colors font-outfit`}
                        >
                          Email
                        </h3>
                        <p
                          className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}  font-outfit`}
                        >
                          parthivshingala@gmail.com
                        </p>
                      </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                      {...variants.fadeInUp}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)",
                      }}
                      className={`flex items-center p-6 ${
                        isDarkMode
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-purple-500/50"
                          : "bg-white/40 border-gray-200/50 hover:border-purple-500/50"
                      } backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer group`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300"
                      >
                        <FaMapMarkerAlt size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <h3
                          className={`text-lg font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-1 group-hover:text-blue-300 transition-colors font-outfit`}
                        >
                          Location
                        </h3>
                        <p
                          className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} font-outfit`}
                        >
                          India
                        </p>
                      </div>
                    </motion.div>

                    {/* Timezone */}
                    <motion.div
                      {...variants.fadeInUp}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)",
                      }}
                      className={`flex items-center p-6 ${
                        isDarkMode
                          ? "bg-slate-800/40 border-slate-700/50 hover:border-purple-500/50"
                          : "bg-white/40 border-gray-200/50 hover:border-purple-500/50"
                      } backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer group`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300"
                      >
                        <FaClock size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <h3
                          className={`text-lg font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-1 group-hover:text-green-300 transition-colors font-outfit`}
                        >
                          Timezone
                        </h3>
                        <p
                          className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} font-outfit`}
                        >
                          {currentTime}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <motion.div
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 }}
                    className="pt-6"
                  >
                    <h3
                      className={`text-xl font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      } mb-6 text-center lg:text-left font-outfit`}
                    >
                      Connect with me
                    </h3>
                    <div className="flex justify-center lg:justify-start space-x-4">
                      {[
    { href: "https://github.com/Parthiv30", icon: SiGithub, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/parthiv-shingala-933224322/",
      icon: SiLinkedin,
      label: "LinkedIn"
    },
  ].map((social, index) => (
    <motion.button
      key={index}
      type="button"
      onClick={() => {
        toast(`Opening ${social.label}...`, {
          icon: <social.icon className="w-5 h-5" />,
          style: {
            borderRadius: '10px',
            background: isDarkMode ? '#1e293b' : '#f1f5f9',
            color: isDarkMode ? '#f1f5f9' : '#1e293b'
          }
        });
        setTimeout(() => {
          window.open(social.href, "_blank");
        }, 1000);
      }}
      whileHover={{
        scale: 1.1,
        y: -2,
        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10"
          : "bg-white/50 border-gray-200/50 hover:border-purple-500/50 hover:bg-purple-500/10"
      } backdrop-blur-sm rounded-full border transition-all duration-300`}
    >
      <social.icon
        className={`w-6 h-6 ${
          isDarkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-600 hover:text-purple-500"
        } transition-colors`}
      />
    </motion.button>
  ))}
                    </div>
                  </motion.div>

                  {/* Get In Touch Button */}
                  <motion.div
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 }}
                    className="pt-6"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
  toast('Opening Email...', {
    icon: <FaEnvelope color="#EA4335" />,
    style: {
      borderRadius: '10px',
      background: isDarkMode ? '#1e293b' : '#f1f5f9',
      color: isDarkMode ? '#f1f5f9' : '#1e293b'
    }
  });
  setTimeout(() => {
    window.open("mailto:parthivshingala@gmail.com", "_blank");
  }, 1000);
}}
                      className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg flex items-center justify-center group text-white font-outfit"
                    >
                      <FaPaperPlane
                        size={20}
                        className="mr-3 group-hover:translate-x-1 transition-transform duration-300"
                      />
                      Get In Touch
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          

          {/* Footer */}
          <footer
            className={`py-16 border-t ${
              isDarkMode ? "border-slate-800 bg-slate-900/80" : "border-gray-200 bg-gray-50/80"
            } backdrop-blur-sm relative z-10`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0">
                  <h3
                    className={`text-2xl font-outfit font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Let's work together
                  </h3>
                  <p
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} font-outfit`}
                  >
                    Ready to bring your ideas to life?
                  </p>
                  <a
                    href="tel:+919727181143"
                    className="mt-2 flex items-center space-x-2 text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors font-outfit"
                  >
                    <FaPhone className="text-purple-400 -scale-x-100" />
                    <span>+91 97271 81143</span>
                  </a>
                </div>

                <div className="flex items-center space-x-6">
  {[
    {
      href: "mailto:parthivshingala@gmail.com",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: "Email",
    },
    {
      href: "https://github.com/Parthiv30",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/parthiv-shingala-933224322",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      label: "LinkedIn",
    },
  ].map((social, index) => (
    <motion.button
      key={index}
      type="button"
      onClick={() => {
        toast(`Opening ${social.label}...`, {
          icon: (
            <svg className="w-5 h-5" fill={social.href.includes("mailto") ? "none" : "currentColor"} stroke={social.href.includes("mailto") ? "currentColor" : "none"} viewBox="0 0 24 24">
              <path
                strokeLinecap={social.href.includes("mailto") ? "round" : undefined}
                strokeLinejoin={social.href.includes("mailto") ? "round" : undefined}
                strokeWidth={social.href.includes("mailto") ? 2 : undefined}
                d={social.icon}
              />
            </svg>
          ),
          style: {
            borderRadius: '10px',
            background: isDarkMode ? '#1e293b' : '#f1f5f9',
            color: isDarkMode ? '#f1f5f9' : '#1e293b'
          }
        });
        setTimeout(() => {
          window.open(social.href, "_blank");
        }, 1000);
      }}
      whileHover={{ scale: 1.05 }}
      className={`p-3 ${isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-gray-100"} rounded-full transition-colors`}
    >
      <svg
        className="w-6 h-6"
        fill={social.href.includes("mailto") ? "none" : "currentColor"}
        stroke={social.href.includes("mailto") ? "currentColor" : "none"}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap={social.href.includes("mailto") ? "round" : undefined}
          strokeLinejoin={social.href.includes("mailto") ? "round" : undefined}
          strokeWidth={social.href.includes("mailto") ? 2 : undefined}
          d={social.icon}
        />
      </svg>
    </motion.button>
  ))}
</div>
              </div>

              <div
                className={`mt-12 pt-8 border-t ${
                  isDarkMode ? "border-slate-800" : "border-gray-200"
                } flex flex-col md:flex-row items-center justify-between`}
              >
                <p
                  className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}
                >
                  © 2024 Parthiv Shingala. All rights reserved.
                </p>
                <p
                  className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm mt-4 md:mt-0 font-outfit`}
                >
                  {currentTime}
                </p>
              </div>
            </div>
          </footer>

          {/* Certificate Modal with Custom Scrollbar */}
          <AnimatePresence>
            {selectedCertificate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => {
                  setSelectedCertificate(null)
                  setIsImageExpanded(false)
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`${
                    isDarkMode ? "bg-slate-800" : "bg-white"
                  } rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl custom-scrollbar`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header - Clickable image for full view */}
                  <div className="relative">
                    <div
                      className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center cursor-pointer group"
                      onClick={() => {
                        setExpandedCertificate(selectedCertificate)
                        setSelectedCertificate(null)
                        setIsImageExpanded(true)
                      }}
                    >
                      <img
                        src={selectedCertificate.image || "/placeholder.svg"}
                        alt={selectedCertificate.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = "none"
                          e.target.nextSibling.style.display = "flex"
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 hidden items-center justify-center">
                        <FaCertificate size={120} className="text-purple-400" />
                      </div>

                      {/* Expand overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <FaExpand className="text-white" size={24} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setSelectedCertificate(null)
                        setIsImageExpanded(false)
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    >
                      <FaTimes size={16} />
                    </motion.button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2
                          className={`text-2xl sm:text-3xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-3 font-outfit`}
                        >
                          {selectedCertificate.title}
                        </h2>
                        <div className="flex items-center mb-4">
                          <div className="mr-4">{selectedCertificate.icon}</div>
                          <div>
                            <p
                              className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg font-medium font-outfit`}
                            >
                              {selectedCertificate.issuer}
                            </p>
                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm font-outfit`}>
                              Issued in {selectedCertificate.date}
                            </p>
                          </div>
                        </div>
                      </div>

                      {selectedCertificate.score && (
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400 mb-1">{selectedCertificate.score}</div>
                          <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Score</div>
                        </div>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="mb-6">
                      <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-colors font-outfit cursor-pointer">
                        {selectedCertificate.category}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h3
                        className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} mb-3 font-outfit`}
                      >
                        About this Certification
                      </h3>
                      <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed font-outfit`}
                      >
                        {selectedCertificate.description}
                      </p>
                    </div>

                    {/* Skills */}
                    {selectedCertificate.skills && (
                      <div className="mb-8">
                        <h3
                          className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4 font-outfit`}
                        >
                          Skills Covered
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedCertificate.skills.map((skill, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-colors font-outfit cursor-pointer"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
  type="button"
  whileHover={{
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
  }}
  whileTap={{ scale: 0.98 }}
  className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-white text-center font-outfit"
  onClick={() => {
    toast('Opening certificate...', {
      icon: <FaExternalLinkAlt className="mr-2" size={18} />,
      style: {
        borderRadius: '10px',
        background: isDarkMode ? '#1e293b' : '#f1f5f9',
        color: isDarkMode ? '#f1f5f9' : '#1e293b'
      }
    });
    setTimeout(() => {
      window.open(selectedCertificate.url, "_blank");
    }, 1000);
  }}
>
  <span className="flex items-center justify-center">
    <FaExternalLinkAlt className="mr-3" size={18} />
    View Certificate
  </span>
</motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedCertificate(null)
                          setIsImageExpanded(false)
                        }}
                        className={`px-6 py-4 ${
                          isDarkMode
                            ? "bg-slate-700 hover:bg-slate-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                        } rounded-xl font-semibold transition-all duration-300 font-outfit`}
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Full Screen Image Modal */}
          <AnimatePresence>
            {isImageExpanded && expandedCertificate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
                onClick={() => {
                  setIsImageExpanded(false)
                  setExpandedCertificate(null)
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={expandedCertificate.image || "/placeholder.svg"}
                    alt={expandedCertificate.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setIsImageExpanded(false)
                      setExpandedCertificate(null)
                    }}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <FaTimes size={20} />
                  </motion.button>

                  {/* Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{expandedCertificate.title}</h3>
                    <p className="text-gray-300 text-sm">
                      {expandedCertificate.issuer} • {expandedCertificate.date}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <ToastContainer position="bottom-center" autoClose={1000} />
        </div>
      )}
    </>
  )
}

export default Portfolio

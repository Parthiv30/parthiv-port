"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { SiSap, SiCoursera, SiGoogle, SiBmcsoftware } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import {
  FaCertificate,
  FaAward,
  FaTimes,
  FaExternalLinkAlt,
  FaFilter,
  FaSearch,
  FaArrowLeft,
  FaExpand,
  FaPhone
} from "react-icons/fa";
import SAP1 from "./assets/certi/SAP Certified Associate.png";
import SAP2 from "./assets/certi/SAP2.png";
import SAP3 from "./assets/certi/SAP3.png";
import SAP4 from "./assets/certi/SAP4.png";
import SAP5 from "./assets/certi/SAP5.png";
import SAP6 from "./assets/certi/SAP6.png";
import SAP7 from "./assets/certi/SAP7.png";
import SAP8 from "./assets/certi/SAP8.png";
import SAP9 from "./assets/certi/SAP9.png";
import SAP10 from "./assets/certi/SAP10.png";
import SAP11 from "./assets/certi/SAP11.png";
import SAP12 from "./assets/certi/SAP12.png";
import SAP13 from "./assets/certi/SAP13.png";
import SAP14 from "./assets/certi/SAP14.png";
import SAP15 from "./assets/certi/SAP15.png";
import SAP16 from "./assets/certi/SAP16.png";
import SAP17 from "./assets/certi/SAP17.png";
import SAP18 from "./assets/certi/SAP18.png";
import SAP19 from "./assets/certi/SAP19.png";
import SAP20 from "./assets/certi/SAP20.png";
import SAP21 from "./assets/certi/SAP21.png";
import SAP22 from "./assets/certi/SAP22.png";
import SAP23 from "./assets/certi/SAP23.png";
import SAP24 from "./assets/certi/SAP24.png";
import { NavLink, useParams, useNavigate } from "react-router-dom";
// Custom hook for animations (matching your portfolio)
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
  };
};

const AllCertifications = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedCertificate, setExpandedCertificate] = useState(null);
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const variants = useAnimationVariants();

  // Particles configuration (matching your portfolio)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDarkMode
          ? ["#8b5cf6", "#ec4899", "#06b6d4"]
          : ["#6366f1", "#d946ef", "#0ea5e9"],
      },
      links: {
        color: isDarkMode ? "#8b5cf6" : "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

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
      skills: [
        "ABAP Cloud",
        "RESTful Services",
        "SAP BTP",
        "Core Data Services",
      ],
    },
    {
      id: 2,
      title: "Discovering SAP Business Technology Platform",
      issuer: "SAP",
      category: "SAP Certifications",
      image: SAP2,
      url: "https://www.credly.com/badges/c3a7101a-035d-4d0a-8885-0ed303869c17/linked_in_profile",
      icon: <SiSap size={24} color="#0FAAFF" />,
      date: "2025",
      description:
        "Introduction to the SAP BTP environment, services, and development tools.",
      skills: ["SAP BTP", "SAP Services"],
    },
    {
      id: 3,
      title: "Implementing an SAP Solution",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP3,
      url: "https://www.coursera.org/account/accomplishments/records/HAJ72542IFUJ",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Hands-on skills to implement SAP solutions effectively in a business scenario.",
      skills: ["SAP Solutions", "Implementation", "Business Analysis"],
    },
    {
      id: 4,
      title: "Designing an SAP Solution",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP4,
      url: "https://www.coursera.org/account/accomplishments/records/1WIQOH5IZ1IH",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Design methodologies and SAP architecture principles for solution building.",
      skills: ["Solution Design", "SAP Architecture"],
    },
    {
      id: 5,
      title: "SAP Technology Consultant Specialization",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP5,
      url: "https://www.coursera.org/account/accomplishments/specialization/K1L20V18D6UK",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Professional-level SAP specialization for technology consulting and client deployment.",
      skills: ["Consulting", "SAP Solutions", "Client Readiness"],
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
      description:
        "Capstone project applying real-world SAP knowledge in a business context.",
      skills: ["SAP Practice", "Client Demo", "Project Simulation"],
    },
    {
      id: 7,
      title: "SAP Customer Engagement and Discovery",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP7,
      url: "https://www.coursera.org/account/accomplishments/records/SKSY5L6DZWNX",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Certification focused on pre-sales, requirement gathering, and client engagement for SAP projects.",
      skills: ["Customer Discovery", "Client Communication"],
    },
    {
      id: 8,
      title: "SAP Professional Fundamentals",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP8,
      url: "https://www.coursera.org/account/accomplishments/records/D3GO2DI4WKWS",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Covers the basics of professional SAP roles and responsibilities in an enterprise.",
      skills: ["SAP Basics", "Professionalism", "Workplace Readiness"],
    },
    {
      id: 9,
      title: "Becoming an SAP Professional",
      issuer: "Coursera",
      category: "SAP Certifications",
      image: SAP9,
      url: "https://www.coursera.org/account/accomplishments/records/53C5VZVSBVMQ",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Overview of career opportunities and pathways in SAP ecosystem.",
      skills: ["SAP Career", "SAP Roles"],
    },
    {
      id: 26,
      title: "Understanding the Enterprise Systems Environment",
      issuer: "SAP",
      category: "SAP Certifications",
      image: SAP21,
      url: "https://www.coursera.org/account/accomplishments/verify/UOB0T0MF9O9S",
      icon: <SiSap size={24} color="#0FAAFF" />,
      date: "2025",
      description:
        "Certification for completing an online non-credit course on Enterprise Systems Environment.",
      skills: ["Enterprise Systems", "SAP"],
    },

    // Software Development & Engineering
    {
      id: 10,
      title: "Software Engineering Essentials",
      issuer: "Coursera",
      category: "Software Development & Engineering",
      image: SAP10,
      url: "https://www.credly.com/badges/f5556808-ef01-47da-93bf-7995983605a2/linked_in_profile",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Foundational course on software engineering principles and best practices.",
      skills: ["Software Engineering", "Best Practices"],
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
      description:
        "Covers Agile methodologies, Scrum ceremonies, and team roles.",
      skills: ["Agile", "Scrum", "Teamwork"],
    },
    {
      id: 12,
      title: "Git and GitHub Essentials",
      issuer: "Coursera",
      category: "Software Development & Engineering",
      image: SAP12,
      url: "https://www.credly.com/badges/a182f19c-1310-489e-a7e3-998ab9351177/linked_in_profile",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Hands-on course to master version control using Git and GitHub.",
      skills: ["Git", "GitHub", "Version Control"],
    },
    {
      id: 27,
      title: "Introduction to Software, Programming, and Databases",
      issuer: "IBM",
      category: "Software Development & Engineering",
      image: SAP20,
      url: "https://www.coursera.org/account/accomplishments/verify/7OO7LXDIM26W",
      icon: <SiBmcsoftware size={24} color="#0066CC" />,
      date: "2025",
      description:
        "Certification for completing an online non-credit course on Software, Programming, and Databases.",
      skills: ["Software Engineering", "Programming", "Databases"],
    },
    {
      id: 28,
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      category: "Software Development & Engineering",
      image: SAP19,
      url: "https://www.coursera.org/account/accomplishments/verify/TN13CS1YV3E1",
      icon: <SiBmcsoftware size={24} color="#0066CC" />,
      date: "2025",
      description:
        "Certification for completing an online non-credit course on Software Engineering.",
      skills: ["Software Engineering"],
    },

    // Professional & Soft Skills
    {
      id: 13,
      title: "Adaptability and Resiliency",
      issuer: "Coursera",
      category: "Professional & Soft Skills",
      image: SAP13,
      url: "https://www.coursera.org/account/accomplishments/records/JDFS1C10REYE",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Building skills to adapt and thrive in challenging environments.",
      skills: ["Adaptability", "Resilience", "Mindset"],
    },
    {
      id: 14,
      title: "Critical Thinking Skills for the Professional",
      issuer: "Coursera",
      category: "Professional & Soft Skills",
      image: SAP14,
      url: "https://www.coursera.org/account/accomplishments/records/SIJ1YQ6ZKE6O",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "Analytical thinking and decision-making in professional scenarios.",
      skills: ["Critical Thinking", "Decision-Making", "Problem Solving"],
    },
    {
      id: 15,
      title: "Professional Skills for the Workplace Specialization",
      issuer: "Coursera",
      category: "Professional & Soft Skills",
      image: SAP15,
      url: "https://www.coursera.org/account/accomplishments/specialization/NARAYJOD8F8X",
      icon: <SiCoursera size={24} color="#0056D3" />,
      date: "2025",
      description:
        "A series of courses focused on communication, teamwork, and digital skills.",
      skills: ["Communication", "Teamwork", "Workplace Tools"],
    },
    {
      id: 16,
      title: "Collaborating with Microsoft Teams",
      issuer: "Microsoft",
      category: "Professional & Soft Skills",
      image: "/placeholder.svg?height=300&width=400",
      url: "#",
      icon: <FaMicrosoft color="#00A4EF" />,
      date: "2024",
      description:
        "Using Microsoft Teams effectively for collaboration and productivity.",
      skills: ["Collaboration", "Microsoft Tools"],
    },
    {
      id: 17,
      title: "Communicate Effectively",
      issuer: "Google",
      category: "Professional & Soft Skills",
      image: SAP16,
      url: "#",
      icon: <SiGoogle size={24} color="#4285F4" />,
      date: "2024",
      description:
        "Improve speaking, listening, and interpersonal communication skills.",
      skills: ["Communication", "Interpersonal", "Public Speaking"],
    },
    {
      id: 29,
      title: "Applied Digital Skills - Certificate of Completion",
      issuer: "Grow with Google",
      category: "Professional & Soft Skills",
      image: SAP17,
      url: "",
      icon: <SiGoogle size={24} color="#4285F4" />,
      date: "2024",
      description:
        "Certification for completing the Communicate Effectively at Work course.",
      skills: ["Communication Skills", "Workplace Effectiveness"],
    },
    {
      id: 30,
      title: "Certificate of Completion - Collections in Java",
      issuer: "Great Learning Academy",
      category: "Software Development & Engineering",
      image: SAP22,
      url: "https://www.mygreatlearning.com/certificate/FPKHFQSS",
      icon: <FaGreaterThan size={24} color="#00AEEF" />,
      date: "2024",
      description:
        "Certification for successfully completing a free online course on Collections in Java.",
      skills: ["Java", "Collections"],
    },
    {
      id: 31,
      title: "Certificate of Completion - Multithreading in Java",
      issuer: "Great Learning Academy",
      category: "Software Development & Engineering",
      image: SAP24,
      url: "https://www.mygreatlearning.com/certificate/KDIUKYFH",
      icon: <FaGreaterThan size={24} color="#00AEEF" />,
      date: "2024",
      description:
        "Certification for successfully completing a free online course on Multithreading in Java.",
      skills: ["Java", "Multithreading"],
    },
    {
      id: 32,
      title: "Certificate of Completion - JDBC in Java",
      issuer: "Great Learning Academy",
      category: "Software Development & Engineering",
      image: SAP23,
      url: "https://www.mygreatlearning.com/certificate/FFURQIIZ",
      icon: <FaGreaterThan size={24} color="#00AEEF" />,
      date: "2024",
      description:
        "Certification for successfully completing a free online course on JDBC in Java.",
      skills: ["Java", "JDBC"],
    },
    {
      id: 33,
      title: "Emotional and Social Intelligence",
      issuer: "University of California, Davis",
      category: "Professional & Soft Skills",
      image: SAP18,
      url: "https://www.coursera.org/account/accomplishments/verify/4X3T909TM3G1",
      icon: <FaAward size={24} color="#FFD700" />,
      date: "2025",
      description:
        "Certification for completing an online non-credit course on Emotional and Social Intelligence.",
      skills: ["Emotional Intelligence", "Social Intelligence"],
    },
  ];

  const filterCategories = [
    "All",
    "SAP Certifications",
    "Software Development & Engineering",
    "Professional & Soft Skills",
  ];

  const navItems = ["Home", "About", "Projects", "Contact"];

  // Handle navigation and scrolling
  const handleNavClick = (section) => {
    navigate("/", { state: { section: section.toLowerCase() } });
  };

  // Filter certifications based on selected filter and search term
  const filteredCertifications = certifications.filter((cert) => {
    const matchesFilter =
      selectedFilter === "All" || cert.category === selectedFilter;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills?.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update current time for India
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const indiaTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setCurrentTime(`India — ${indiaTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isImageExpanded) {
          setIsImageExpanded(false);
        } else if (selectedCertificate) {
          setSelectedCertificate(null);
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isImageExpanded, selectedCertificate]);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      } overflow-x-hidden relative`}
    >
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${isDarkMode ? "#1e293b" : "#f1f5f9"};
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7c3aed, #db2777);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #8b5cf6 ${isDarkMode ? "#1e293b" : "#f1f5f9"};
        }
      `}</style>

      {/* Particles Background (matching your portfolio) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="fixed inset-0 z-0"
      />

      {/* Navigation (exact copy from your portfolio) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? `${
                isDarkMode ? "bg-slate-900/90" : "bg-white/90"
              } backdrop-blur-md`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              PS
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
                    e.preventDefault();
                    handleNavClick(item);
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
                onClick={() =>
                  window.open(
                    "https://wa.me/919727181143?text=Hi%20Parthiv!",
                    "_blank"
                  )
                }
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
                  } transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 ${
                    isDarkMode ? "bg-white" : "bg-gray-900"
                  } mt-1 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 ${
                    isDarkMode ? "bg-white" : "bg-gray-900"
                  } mt-1 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
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
              className={`md:hidden ${
                isDarkMode ? "bg-slate-900/95" : "bg-white/95"
              } backdrop-blur-md border-t ${
                isDarkMode ? "border-slate-800" : "border-gray-200"
              }`}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`block px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-slate-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    } transition-colors`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </a>
                ))}
                <button
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Let's Connect
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Main Heading */}
          <motion.h1
            {...variants.fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span
              className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
              }}
            >
              All{" "}
            </span>
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                fontStyle: "italic",
              }}
            >
              Certifications
              {/* Shimmer effect */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            {...variants.fadeInUp}
            transition={{ delay: 0.8 }}
            className={`text-lg sm:text-xl ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-12 max-w-2xl mx-auto font-outfit`}
          >
            A comprehensive collection of my professional certifications
            spanning SAP technologies, software development, and essential soft
            skills.
          </motion.p>

          {/* Search Bar - Fixed search icon */}
          <motion.div
            {...variants.fadeInUp}
            transition={{ delay: 1 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <FaSearch
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-purple-400" : "text-purple-500"
                } z-10`}
                size={16}
              />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 ${
                  isDarkMode
                    ? "bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-400"
                    : "bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500"
                } backdrop-blur-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            {...variants.staggerContainer}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filterCategories.map((category, index) => (
              <motion.button
                key={category}
                {...variants.scaleIn}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : `${
                        isDarkMode
                          ? "bg-slate-800/50 border-slate-700/50 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10"
                          : "bg-white/50 border-gray-200/50 text-gray-600 hover:text-gray-900 hover:border-purple-500/50 hover:bg-purple-500/10"
                      } backdrop-blur-sm border`
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <FaFilter className="inline-block mr-2" size={14} />
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications Grid - Increased card height */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCertifications.map((cert, index) => (
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
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
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
                            } mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2`}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {cert.title}
                          </h3>
                          <div className="flex items-center mb-3">
                            <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                              {cert.icon}
                            </div>
                            <div>
                              <p
                                className={`${
                                  isDarkMode ? "text-gray-300" : "text-gray-600"
                                } text-sm font-medium`}
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                              >
                                {cert.issuer}
                              </p>
                              <p
                                className={`${
                                  isDarkMode ? "text-gray-400" : "text-gray-500"
                                } text-xs`}
                              >
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
                              className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-md text-xs font-medium border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded-md text-xs font-medium">
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
                      className="w-full py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
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
          </AnimatePresence>

          {/* No Results Message */}
          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <FaSearch
                size={48}
                className={`mx-auto mb-4 ${
                  isDarkMode ? "text-gray-600" : "text-gray-400"
                }`}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                No certifications found
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Certificate Modal with Custom Scrollbar */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setSelectedCertificate(null);
              setIsImageExpanded(false);
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
                    setExpandedCertificate(selectedCertificate);
                    setSelectedCertificate(null);
                    setIsImageExpanded(true);
                  }}
                >
                  <img
                    src={selectedCertificate.image || "/placeholder.svg"}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
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
                    setSelectedCertificate(null);
                    setIsImageExpanded(false);
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
                      } mb-3`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {selectedCertificate.title}
                    </h2>
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{selectedCertificate.icon}</div>
                      <div>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          } text-lg font-medium`}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {selectedCertificate.issuer}
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          } text-sm`}
                        >
                          Issued in {selectedCertificate.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {selectedCertificate.score && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">
                        {selectedCertificate.score}
                      </div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Score
                      </div>
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mb-6">
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">
                    {selectedCertificate.category}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } mb-3`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    About this Certification
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } leading-relaxed`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {selectedCertificate.description}
                  </p>
                </div>

                {/* Skills */}
                {selectedCertificate.skills && (
                  <div className="mb-8">
                    <h3
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      } mb-4`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
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
                          className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedCertificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-white text-center"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span className="flex items-center justify-center">
                      <FaExternalLinkAlt className="mr-3" size={18} />
                      View Certificate
                    </span>
                  </motion.a>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedCertificate(null);
                      setIsImageExpanded(false);
                    }}
                    className={`px-6 py-4 ${
                      isDarkMode
                        ? "bg-slate-700 hover:bg-slate-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    } rounded-xl font-semibold transition-all duration-300`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
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
              setIsImageExpanded(false);
              setExpandedCertificate(null);
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
                  setIsImageExpanded(false);
                  setExpandedCertificate(null);
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <FaTimes size={20} />
              </motion.button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {expandedCertificate.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {expandedCertificate.issuer} • {expandedCertificate.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 relative z-10 flex items-center justify-center">
        <motion.div
          {...variants.fadeInLeft}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 rounded-full transition-all duration-300 mb-6 md:mb-0 font-outfit"
        >
          <FaArrowLeft className="mr-3 text-purple-400" />
          <NavLink to="/" state={{ fromCert: true }} className="text-white">
            Back to Portfolio
          </NavLink>
        </motion.div>
      </section>

      <footer
        className={`py-16 border-t ${
          isDarkMode
            ? "border-slate-800 bg-slate-900/80"
            : "border-gray-200 bg-gray-50/80"
        } backdrop-blur-sm relative z-10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let's work together
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ready to bring your ideas to life?
              </p>
              <a
                href="tel:+919727181143"
                className="mt-2 flex items-center space-x-2 text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
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
                },
                {
                  href: "https://github.com/Parthiv30",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  href: "https://www.linkedin.com/in/parthiv-shingala-933224322",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                // {
                //   href: "https://twitter.com/parthiv",
                //   icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                // },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 ${
                    isDarkMode
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-white hover:bg-gray-100"
                  } rounded-full transition-colors`}
                >
                  <svg
                    className="w-6 h-6"
                    fill={
                      social.href.includes("mailto") ? "none" : "currentColor"
                    }
                    stroke={
                      social.href.includes("mailto") ? "currentColor" : "none"
                    }
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap={
                        social.href.includes("mailto") ? "round" : undefined
                      }
                      strokeLinejoin={
                        social.href.includes("mailto") ? "round" : undefined
                      }
                      strokeWidth={
                        social.href.includes("mailto") ? 2 : undefined
                      }
                      d={social.icon}
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div
            className={`mt-12 pt-8 border-t ${
              isDarkMode ? "border-slate-800" : "border-gray-200"
            } flex flex-col md:flex-row items-center justify-between`}
          >
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } text-sm`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              © 2024 Parthiv Shingala. All rights reserved.
            </p>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } text-sm mt-4 md:mt-0`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {currentTime}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllCertifications;

"use client";

import { useState, useEffect, useCallback, useMemo,useRef } from "react";
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
  FaPhone,
  FaStar,
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

// Skeleton Loader Component
const CertificationSkeleton = ({ isDarkMode }) => (
  <div className="animate-pulse">
    <div className={`h-56 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded-t-xl`}></div>
    <div className="p-6">
      <div className={`h-6 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded w-3/4 mb-4`}></div>
      <div className="flex items-center mb-4">
        <div className={`w-6 h-6 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded-full mr-3`}></div>
        <div>
          <div className={`h-4 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded w-24 mb-2`}></div>
          <div className={`h-3 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded w-16`}></div>
        </div>
      </div>
      <div className={`h-10 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded-lg`}></div>
    </div>
  </div>
);

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
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false); // New state for skeleton loader
  const navigate = useNavigate();
  const certificationsGridRef = useRef(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const variants = useAnimationVariants();

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, []);

  // Particles configuration (matching your portfolio)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Smooth scroll handler
  const handleExploreClick = (e) => {
    e.preventDefault();
    certificationsGridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      color: {
        value: isDarkMode
          ? ["#d946ef", "#06b6d4", "#facc15"]
          : ["#6366f1", "#ec4899", "#0ea5e9"],
      },
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
        opacity:0.5,
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
  };

  // Comprehensive certifications data
  const certifications = [
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
        "Foundational course onDirty software engineering principles and best practices.",
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
    // {
    //   id: 16,
    //   title: "Collaborating with Microsoft Teams",
    //   issuer: "Microsoft",
    //   category: "Professional & Soft Skills",
    //   image: "/placeholder.svg?height=300&width=400",
    //   url: "#",
    //   icon: <FaMicrosoft color="#00A4EF" />,
    //   date: "2024",
    //   description:
    //     "Using Microsoft Teams effectively for collaboration and productivity.",
    //   skills: ["Collaboration", "Microsoft Tools"],
    // },
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

  const featuredCerts = [certifications[0], certifications[4], certifications[10]];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prevIndex) => (prevIndex + 1) % featuredCerts.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [featuredCerts.length]);

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

  // Filter certifications with useMemo for optimization
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
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
  }, [selectedFilter, searchTerm, certifications]);

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

  // Handle loading state for filter changes
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 300); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [selectedFilter, searchTerm]);

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

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="fixed inset-0 z-0"
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? `${isDarkMode ? "bg-slate-900/90" : "bg-white/90"} backdrop-blur-md`
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
                  class reusableStylesName={`block w-5 h-0.5 ${
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
              className="text-center lg:text-left"
            >
              <motion.h1
                {...variants.fadeInUp}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  My Digital
                </span>
                <br />
                Credentials
              </motion.h1>

              <motion.p
                {...variants.fadeInUp}
                transition={{ delay: 0.2 }}
                className={`text-lg sm:text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-xl mx-auto lg:mx-0`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                A comprehensive collection of my professional achievements,
                spanning SAP technologies, software engineering, and essential
                workplace skills.
              </motion.p>
              <motion.div
                {...variants.fadeInUp}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href="#certifications-grid"
                  onClick={handleExploreClick}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-medium text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Certifications
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              {...variants.fadeInRight}
              className="hidden lg:flex justify-center items-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredIndex}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className={`${
                    isDarkMode
                      ? "bg-slate-800/50 border-slate-700/50"
                      : "bg-white/50 border-gray-200/50"
                  } backdrop-blur-lg rounded-2xl overflow-hidden border w-full max-w-sm shadow-2xl shadow-purple-500/10`}
                >
                  <div className="p-4">
                    <div className="relative h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl overflow-hidden">
                      <img
                        src={featuredCerts[featuredIndex].image}
                        alt={featuredCerts[featuredIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full flex items-center gap-1">
                        <FaStar /> Featured
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-2">
                    <h3
                      className="text-lg font-bold mb-2 line-clamp-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {featuredCerts[featuredIndex].title}
                    </h3>
                    <div className="flex items-center text-sm">
                      <div className="mr-2">{featuredCerts[featuredIndex].icon}</div>
                      <span
                        className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        {featuredCerts[featuredIndex].issuer}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Grid Section */}
      <section id="certifications-grid" className="py-24 relative z-10" ref={certificationsGridRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={variants.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
          >
            <motion.div {...variants.fadeInUp} className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Filter & Search Credentials
              </h2>
              <p className="text-lg text-gray-400">
                Use the tools below to find specific qualifications.
              </p>
            </motion.div>
            <motion.div
              {...variants.fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col lg:flex-row items-center gap-6 mb-12 p-4 rounded-xl backdrop-blur-sm"
              style={{
                background: isDarkMode
                  ? "rgba(30, 41, 59, 0.5)"
                  : "rgba(249, 250, 251, 0.5)",
              }}
            >
              <div className="relative w-full lg:w-2/5">
                <FaSearch
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? "text-purple-400" : "text-purple-500"
                  } z-10`}
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search by title, issuer, or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                  } rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>
              <div className="flex flex-wrap w-full justify-center lg:justify-start gap-3">
  {filterCategories.map((category) => (
    <motion.button
      key={category}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedFilter(category)}
      className={`px-5 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
        selectedFilter === category
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
          : `${
              isDarkMode
                ? "bg-slate-700/50 text-gray-300 hover:text-white hover:bg-slate-700"
                : "bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white"
            } border border-transparent`
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {category}
    </motion.button>
  ))}
</div>
            </motion.div>
          </motion.div>

          {/* Grid with Skeleton Loader */}
          {isFiltering ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <CertificationSkeleton key={index} isDarkMode={isDarkMode} />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFilter + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCertifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
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
                    } backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col`}
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    <div className="relative h-56 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {cert.category.split(" ")[0]}
                        </span>
                      </div>
                      {cert.score && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                            {cert.score}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3
                          className={`text-lg font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 h-14`}
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {cert.title}
                        </h3>
                        <div className="flex items-center mb-4">
                          <div className="mr-3">{cert.icon}</div>
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
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto w-full py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 transition-all duration-300 text-center"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <span className="flex items-center justify-center">
                          <FaAward className="mr-2" size={16} />
                          View Details
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* No Results Message */}
          {filteredCertifications.length === 0 && !isFiltering && (
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
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`${
                isDarkMode ? "bg-slate-800" : "bg-white"
              } rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 cursor-pointer group flex-shrink-0"
                onClick={() => {
                  setExpandedCertificate(selectedCertificate);
                  setSelectedCertificate(null);
                  setIsImageExpanded(true);
                }}
              >
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <FaExpand className="text-white" size={24} />
                  </div>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(null);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center z-10"
                >
                  <FaTimes size={16} />
                </motion.button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2
                      className="text-2xl sm:text-3xl font-bold mb-6"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {selectedCertificate.title}
                    </h2>
                    <div className="mb-8">
                      <h3
                        className="text-lg font-semibold mb-3"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        About this Certification
                      </h3>
                      <p
                        className="leading-relaxed text-gray-300"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {selectedCertificate.description}
                      </p>
                    </div>
                    {selectedCertificate.skills && (
                      <div className="mb-8">
                        <h3
                          className="text-lg font-semibold mb-4"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Skills Covered
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedCertificate.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-1">
                    <div
                      className={`p-6 rounded-xl ${
                        isDarkMode ? "bg-slate-700/50" : "bg-gray-100/80"
                      } border ${
                        isDarkMode ? "border-slate-600/50" : "border-gray-200"
                      }`}
                    >
                      <h3
                        className="text-lg font-semibold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Details
                      </h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-center">
                          <div className="mr-3">{selectedCertificate.icon}</div>
                          <div>
                            <p className="font-medium text-gray-200">
                              {selectedCertificate.issuer}
                            </p>
                            <p className="text-gray-400">Issuer</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FaCertificate className="mr-3 text-purple-400" />
                          <div>
                            <p className="font-medium text-gray-200">
                              {selectedCertificate.category}
                            </p>
                            <p className="text-gray-400">Category</p>
                          </div>
                        </div>
                        {selectedCertificate.score && (
                          <div className="flex items-center">
                            <FaAward className="mr-3 text-green-400" />
                            <div>
                              <p className="font-medium text-green-400">
                                {selectedCertificate.score}
                              </p>
                              <p className="text-gray-400">Score</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-6 pt-6 border-t border-slate-600/50 flex flex-col gap-3">
                        <motion.a
                          href={selectedCertificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white text-center flex items-center justify-center gap-2"
                        >
                          <FaExternalLinkAlt size={14} />
                          View Credential
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedCertificate(null)}
                          className="w-full px-4 py-3 bg-slate-600/50 hover:bg-slate-600 rounded-lg font-semibold text-white"
                        >
                          Close
                        </motion.button>
                      </div>
                    </div>
                  </div>
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
            onClick={() => setIsImageExpanded(false)}
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
                src={expandedCertificate.image}
                alt={expandedCertificate.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={() => setIsImageExpanded(false)}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <FaTimes size={20} />
              </motion.button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {expandedCertificate.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 relative z-10 text-center">
        <motion.div
          {...variants.fadeInUp}
          viewport={{ once: true }}
          className="inline-block"
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Finished Exploring?
          </h3>
          <NavLink to="/" state={{ fromCert: true }}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 rounded-full transition-all duration-300 font-outfit text-white"
            >
              <FaArrowLeft className="mr-3 text-purple-400" />
              Return to Main Portfolio
            </motion.div>
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
                      strokeWidth={social.href.includes("mailto") ? 2 : undefined}
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
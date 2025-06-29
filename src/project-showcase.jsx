"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import placeholder from "./assets/placeholder.png";

import { FaPhone, FaExternalLinkAlt, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
  IoChevronUp,
  IoChevronDown,
} from "react-icons/io5";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { projects } from "./projectsData";
import { IoIosLaptop } from "react-icons/io";

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
  };
};

const ProjectShowcase = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate();
  
  // Add state for tracking image loading
  const [loadedImages, setLoadedImages] = useState([]);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const variants = useAnimationVariants();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Find current project based on URL parameter
  useEffect(() => {
    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      setCurrentProject(project);
    }
  }, [projectId]);

  // Initialize loadedImages when currentProject changes
  useEffect(() => {
    if (currentProject?.images) {
      setLoadedImages(new Array(currentProject.images.length).fill(false));
    }
  }, [currentProject]);

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

  // Function to handle image load
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // Particles configuration
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

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
  };

  // Helper function to get icon component
  const getIconComponent = (iconName, size = 32, color = "#ffffff") => {
    const IconComponent = SiIcons[iconName] || FaIcons[iconName];
    return IconComponent ? <IconComponent size={size} color={color} /> : null;
  };

  // Auto-cycle images
  useEffect(() => {
    if (currentProject?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % currentProject.images.length
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentProject]);

  // Auto-cycle features
  useEffect(() => {
    if (currentProject?.keyFeatures?.length > 3) {
      const interval = setInterval(() => {
        setCurrentFeatureIndex(
          (prev) => (prev + 1) % currentProject.keyFeatures.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentProject]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    if (currentProject?.images) {
      setLightboxImageIndex(
        (prev) => (prev + 1) % currentProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (currentProject?.images) {
      setLightboxImageIndex(
        (prev) =>
          (prev - 1 + currentProject.images.length) %
          currentProject.images.length
      );
    }
  };

  const nextFeature = () => {
    if (currentProject?.keyFeatures) {
      setCurrentFeatureIndex(
        (prev) => (prev + 1) % currentProject.keyFeatures.length
      );
    }
  };

  const prevFeature = () => {
    if (currentProject?.keyFeatures) {
      setCurrentFeatureIndex(
        (prev) =>
          (prev - 1 + currentProject.keyFeatures.length) %
          currentProject.keyFeatures.length
      );
    }
  };

  // Get visible features for carousel
  const getVisibleFeatures = () => {
    if (!currentProject?.keyFeatures || currentProject.keyFeatures.length === 0)
      return [];

    const features = currentProject.keyFeatures;
    const totalFeatures = features.length;

    if (totalFeatures <= 3) return features;

    const prevIndex = (currentFeatureIndex - 1 + totalFeatures) % totalFeatures;
    const nextIndex = (currentFeatureIndex + 1) % totalFeatures;

    return [
      { ...features[prevIndex], position: "prev" },
      { ...features[currentFeatureIndex], position: "current" },
      { ...features[nextIndex], position: "next" },
    ];
  };

  // Loading state
  if (!currentProject) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-xl text-gray-300">Loading project details...</p>
        </div>
      </div>
    );
  }
  const navItems = ["Home", "About", "Education", "Projects", "Achievements", "Internship", "Contact"];

  // Handle navigation and scrolling
  const handleNavClick = (section) => {
    navigate("/", { state: { section: section.toLowerCase() } });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden relative">
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
          scrolled ? `${isDarkMode ? "bg-slate-900/90" : "bg-white/90"} backdrop-blur-md` : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 mt-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-iceland tracking-wide"
            >
              PARTHIV SHINGALA
            </motion.div>

            {/* Full Navigation Menu - Visible only on lg and above */}
            <div
              className={`hidden lg:flex items-center space-x-1 ${
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

            {/* Hamburger Menu Button - Visible below lg */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
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

        {/* Mobile Menu - Visible when hamburger is clicked */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden ${isDarkMode ? "bg-slate-900/95" : "bg-white/95"} backdrop-blur-md border-t ${
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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                      setIsMenuOpen(false);
                    }}
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Project Title */}
          <motion.h1
            {...variants.fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-[65px] sm:text-5xl md:text-[100px] lg:text-[120px] font-bold mb-8"
            style={{ fontFamily: "'Iceland', sans-serif" }}
          >
            <span className="text-white"></span>{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
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
              }}
            >
              {currentProject.title}
            </motion.span>
          </motion.h1>

          {/* Project Slogan */}
          <motion.p
            {...variants.fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-outfit"
          >
            {currentProject.slogan}
          </motion.p>

          {/* Animated Scroll Indicator */}
          <motion.div
            {...variants.fadeInUp}
            transition={{ delay: 0.6 }}
            className="transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                document
                  .getElementById("showcase")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-gray-400 text-sm mb-2 font-medium">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Image Showcase Section */}
      {currentProject.images && currentProject.images.length > 0 && (
        <section id="showcase" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              {...variants.fadeInUp}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[50px] sm:text-5xl md:text-[80px] lg:text-7xl font-bold mb-8"
                style={{ fontFamily: "'Iceland', serif" }}
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Visual{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                  Journey
                </span>
              </motion.h2>
              <motion.p
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto font-outfit"
              >
                Explore the interface and functionality through these carefully
                crafted screenshots
              </motion.p>
            </motion.div>

            {/* Main Carousel */}
            <motion.div
              {...variants.scaleIn}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative mb-12"
            >
              <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={
                      currentProject.images[currentImageIndex]?.src || placeholder
                    }
                    alt={
                      currentProject.images[currentImageIndex]?.alt || "Project Image"
                    }
                    className="w-full h-full object-cover cursor-pointer"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => openLightbox(currentImageIndex)}
                    onLoad={() => handleImageLoad(currentImageIndex)}
                    onError={(e) => {
                      e.target.src = placeholder;
                      handleImageLoad(currentImageIndex);
                    }}
                  />
                </AnimatePresence>
                {/* Loader overlay for main image */}
                {!loadedImages[currentImageIndex] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Iceland', serif" }}
                  >
                    {currentProject.images[currentImageIndex]?.caption ||
                      "Project Screenshot"}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Click to view in full size
                  </motion.p>
                </div>

                {/* Navigation arrows - only show if multiple images */}
                {currentProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) =>
                            (prev - 1 + currentProject.images.length) %
                            currentProject.images.length
                        )
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                    >
                      <IoChevronBack size={24} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev + 1) % currentProject.images.length
                        )
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                    >
                      <IoChevronForward size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Image indicators - only show if multiple images */}
              {currentProject.images.length > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                  {currentProject.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-purple-500 scale-125"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Thumbnail Grid - only show if multiple images */}
            {currentProject.images.length > 1 && (
              <motion.div
                {...variants.staggerContainer}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {currentProject.images.map((image, index) => (
                  <motion.div
                    key={index}
                    {...variants.scaleIn}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative h-24 sm:h-32 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-purple-500 shadow-lg shadow-purple-500/30"
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src || placeholder}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onLoad={() => handleImageLoad(index)}
                      onError={(e) => {
                        e.target.src = placeholder;
                        handleImageLoad(index);
                      }}
                    />
                    {/* Loader overlay for thumbnails */}
                    {!loadedImages[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-900/20 hover:bg-slate-900/10 transition-all duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      {currentProject.techStack && currentProject.techStack.length > 0 && (
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              {...variants.fadeInUp}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border-purple-500/20 text-purple-400 text-sm font-medium mb-8 tracking-widest uppercase border font-outfit"
              >
                <span className="text-purple-500 justify-center items-center">
                  Built With <IoIosLaptop className="inline-block mr-2" />
                </span>
              </motion.div>

              <motion.h2
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[50px] sm:text-5xl md:text-[80px] lg:text-7xl font-bold mb-8"
                style={{ fontFamily: "'Iceland', serif" }}
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Technology{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                  Stack
                </span>
              </motion.h2>
            </motion.div>

            {/* Tech Grid */}
            <motion.div
              {...variants.staggerContainer}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {currentProject.techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  {...variants.scaleIn}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 border backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-center cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      {getIconComponent(tech.icon, 32, tech.color)}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 font-outfit">
                      {tech.name}
                    </h3>
                    <span className="text-sm text-gray-400 px-3 py-1 bg-slate-700/50 rounded-full font-outfit">
                      {tech.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Description Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Description */}
            <motion.div
              {...variants.fadeInLeft}
              viewport={{ once: true }}
              className="flex-1"
            >
              <motion.h2
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[50px] sm:text-7xl font-bold mb-8"
                style={{ fontFamily: "'Iceland', serif" }}
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Project{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                  Overview
                </span>
              </motion.h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <motion.p
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="font-outfit"
                >
                  {currentProject.overview}
                </motion.p>

                {currentProject.challenges && (
                  <motion.p
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="font-outfit"
                  >
                    <span className="text-white font-semibold font-outfit">
                      Key Challenges Faced:
                    </span>{" "}
                    {currentProject.challenges}
                  </motion.p>
                )}

                {currentProject.outcome && (
                  <motion.p
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="font-outfit"
                  >
                    <span className="text-white font-semibold font-outfit">
                      Outcome:
                    </span>{" "}
                    {currentProject.outcome}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Right Side - Key Features Carousel */}
            {currentProject.keyFeatures &&
              currentProject.keyFeatures.length > 0 && (
                <motion.div
                  {...variants.fadeInRight}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <motion.h3
                    {...variants.fadeInUp}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-white mb-8 font-outfit text-center"
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255,0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Key Features
                  </motion.h3>

                  <div className="relative h-auto sm:h-[600px] flex flex-col items-center justify-center">
                    {/* Features Carousel Container */}
                    <div className="relative w-full max-w-xs sm:max-w-md md:w-[600px] lg:w-[800px] mx-auto">
                      <div className="flex flex-col sm:block">
                        {currentProject.keyFeatures.map((feature, index) => {
                          const totalFeatures =
                            currentProject.keyFeatures.length;
                          const prevIndex =
                            (currentFeatureIndex - 1 + totalFeatures) %
                            totalFeatures;
                          const nextIndex =
                            (currentFeatureIndex + 1) % totalFeatures;

                          let variant;
                          if (index === prevIndex) variant = "top";
                          else if (index === currentFeatureIndex)
                            variant = "center";
                          else if (index === nextIndex) variant = "bottom";
                          else variant = "hidden";

                          // Only show the current card on mobile
                          const showOnMobile = index === currentFeatureIndex;

                          return (
                            <motion.div
                              key={feature.title}
                              variants={{
                                top: {
                                  y: -80,
                                  scale: 0.85,
                                  opacity: 0.7,
                                  zIndex: 1,
                                },
                                center: {
                                  y: 0,
                                  scale: 1,
                                  opacity: 1,
                                  zIndex: 2,
                                },
                                bottom: {
                                  y: 130,
                                  scale: 0.85,
                                  opacity: 0.7,
                                  zIndex: 1,
                                },
                                hidden: { opacity: 0, scale: 0.6, y: 0 },
                              }}
                              initial="hidden"
                              animate={variant}
                              transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                              }}
                              className={`
                                      w-full
                                      ${totalFeatures > 1 ? "sm:absolute sm:inset-0" : ""}
                                      flex items-center justify-center
                                      ${showOnMobile ? "my-6" : "hidden"}
                                      sm:flex
                                    `}
                              style={
                                totalFeatures > 1 ? {} : { position: "static" }
                              }
                            >
                              <motion.div
                                whileHover={
                                  variant === "center"
                                    ? {
                                        scale: 1.05,
                                        boxShadow:
                                          "0 20px 40px rgba(168, 85, 247, 0.4)",
                                      }
                                    : {}
                                }
                                className={`w-full p-4 sm:p-6 rounded-xl border transition-all duration-500 group ${
                                  variant === "center"
                                    ? "bg-slate-800/60 border-purple-500/50 shadow-lg shadow-purple-500/20"
                                    : "bg-slate-800/30 border-slate-700/30"
                                }`}
                              >
                                <div className="flex items-start">
                                  <motion.div
                                    whileHover={
                                      variant === "center"
                                        ? { scale: 1.1, rotate: 5 }
                                        : {}
                                    }
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 ${
                                      variant === "center"
                                        ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 shadow-lg"
                                        : "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                                    }`}
                                  >
                                    {getIconComponent(
                                      feature.icon,
                                      20,
                                      variant === "center"
                                        ? "#a855f7"
                                        : "#6b7280"
                                    )}
                                  </motion.div>
                                  <div className="flex-1">
                                    <h4
                                      className={`text-lg sm:text-xl font-bold mb-2 transition-all duration-300 font-outfit ${
                                        variant === "center"
                                          ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      {feature.title}
                                    </h4>
                                    <p
                                      className={`text-sm sm:text-base leading-relaxed font-outfit transition-all duration-300 ${
                                        variant === "center"
                                          ? "text-gray-300"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Navigation Controls - always show if more than 1 feature */}
                      {currentProject.keyFeatures.length > 1 && (
                        <>
                          {/* Desktop/Tablet navigation */}
                          <button
                            onClick={prevFeature}
                            className="hidden sm:flex absolute -top-[11.5rem] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 z-30"
                          >
                            <IoChevronUp size={20} />
                          </button>
                          <button
                            onClick={nextFeature}
                            className="hidden sm:flex absolute -bottom-60 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 z-30"
                          >
                            <IoChevronDown size={20} />
                          </button>
                          {/* Mobile navigation */}
                          <div className="flex sm:hidden justify-center mt-4 gap-4">
                            <button
                              onClick={prevFeature}
                              className="w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                            >
                              <IoChevronUp size={20} />
                            </button>
                            <button
                              onClick={nextFeature}
                              className="w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                            >
                              <IoChevronDown size={20} />
                            </button>
                          </div>
                        </>
                      )}

                      {/* Feature Indicators - always show if more than 1 feature */}
                      {currentProject.keyFeatures.length > 1 && (
                        <>
                          {/* Desktop/Tablet indicators */}
                          <div className="hidden sm:flex absolute -right-8 top-1/2 transform -translate-y-1/2 flex-col space-y-2">
                            {currentProject.keyFeatures.map((_, index) => (
                              <motion.button
                                key={index}
                                onClick={() => setCurrentFeatureIndex(index)}
                                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                                  index === currentFeatureIndex
                                    ? "bg-purple-500"
                                    : "bg-gray-600 hover:bg-gray-500"
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              />
                            ))}
                          </div>
                          {/* Mobile indicators */}
                          <div className="flex sm:hidden justify-center mt-2 gap-2">
                            {currentProject.keyFeatures.map((_, index) => (
                              <motion.button
                                key={index}
                                onClick={() => setCurrentFeatureIndex(index)}
                                className={`w-2 h-6 rounded-full transition-all duration-300 ${
                                  index === currentFeatureIndex
                                    ? "bg-purple-500"
                                    : "bg-gray-600 hover:bg-gray-500"
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...variants.fadeInUp}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20"
          >
            <motion.h2
              {...variants.fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[36px] sm:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Iceland', serif" }}
            >
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic">
                Explore?
              </span>
            </motion.h2>

            <motion.p
              {...variants.fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-outfit"
            >
              Experience the live application and dive into the source code to
              see the magic behind the scenes
            </motion.p>

            <motion.div
              {...variants.fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              {currentProject.live ? (
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-white flex items-center font-outfit"
                  onClick={() => window.open(currentProject.live, "_blank")}
                >
                  <FaExternalLinkAlt className="mr-3" />
                  Live Demo
                </motion.button>
              ) : (
                <span className="px-8 py-4 rounded-full font-semibold text-lg bg-slate-800/60 text-gray-400 border border-purple-500/20 font-outfit">
                  Live Demo Coming soon...
                </span>
              )}

              {/* GitHub Repo Button or Coming Soon */}
              {currentProject.repo ? (
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
                  }}
                  onClick={() => window.open(currentProject.repo, "_blank")}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-full transition-all duration-300 font-outfit"
                >
                  {getIconComponent("SiGithub", 20, "#ffffff")}
                  <span className="ml-3">GitHub Repo</span>
                </motion.button>
              ) : (
                <span className="px-8 py-4 rounded-full font-semibold text-lg bg-slate-800/60 text-gray-400 border border-purple-500/20 font-outfit">
                  GitHub Repo Coming soon...
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10 text-center">
        <motion.div
          {...variants.fadeInUp}
          viewport={{ once: true }}
          className="inline-block"
        >
          <h3 className="text-2xl font-bold mb-4 font-outfit">
            Finished Exploring?
          </h3>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 rounded-full transition-all duration-300 font-outfit text-white"
            onClick={() => {
              toast("Returning to Portfolio", {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                ),
                style: {
                  borderRadius: '10px',
                  background: '#1e293b',
                  color: '#f1f5f9'
                }
              });
              setTimeout(() => {
                navigate("/", { state: { fromCert: true } });
              }, 1000);
            }}
          >
            <FaArrowLeft className="mr-3 text-purple-400" />
            Return to Main Portfolio
          </motion.button>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && currentProject?.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  currentProject.images[lightboxImageIndex]?.src ||
                  "./assets/placeholder.png"
                }
                alt={
                  currentProject.images[lightboxImageIndex]?.alt ||
                  "Project Image"
                }
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
              >
                <IoClose size={24} />
              </button>

              {/* Navigation - only show if multiple images */}
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                  >
                    <IoChevronBack size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                  >
                    <IoChevronForward size={24} />
                  </button>
                </>
              )}

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentProject.images[lightboxImageIndex]?.caption ||
                    "Project Screenshot"}
                </h3>
                <p className="text-gray-300 text-sm">
                  {lightboxImageIndex + 1} of {currentProject.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
      <ToastContainer position="bottom-center" autoClose={1000} />
    </div>
  );
};

export default ProjectShowcase;
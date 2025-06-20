"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import * as SiIcons from "react-icons/si"
import * as FaIcons from "react-icons/fa"
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"
import { IoClose, IoChevronBack, IoChevronForward, IoChevronUp, IoChevronDown } from "react-icons/io5"
import { NavLink, useParams } from "react-router-dom"
import { projects } from "./projectsData"
import { IoIosLaptop } from "react-icons/io"

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

const ProjectShowcase = () => {
  const { projectId } = useParams()
  const [currentProject, setCurrentProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const variants = useAnimationVariants()

  // Find current project based on URL parameter
  useEffect(() => {
    if (projectId) {
      const project = projects.find((p) => p.id === projectId)
      setCurrentProject(project)
    }
  }, [projectId])

  // Particles configuration
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

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
        value: ["#8b5cf6", "#ec4899", "#06b6d4"],
      },
      links: {
        color: "#8b5cf6",
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
  }

  // Helper function to get icon component
  const getIconComponent = (iconName, size = 32, color = "#ffffff") => {
    const IconComponent = SiIcons[iconName] || FaIcons[iconName]
    return IconComponent ? <IconComponent size={size} color={color} /> : null
  }

  // Auto-cycle images
  useEffect(() => {
    if (currentProject?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [currentProject])

  // Auto-cycle features
  useEffect(() => {
    if (currentProject?.keyFeatures?.length > 3) {
      const interval = setInterval(() => {
        setCurrentFeatureIndex((prev) => (prev + 1) % currentProject.keyFeatures.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentProject])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openLightbox = (index) => {
    setLightboxImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextImage = () => {
    if (currentProject?.images) {
      setLightboxImageIndex((prev) => (prev + 1) % currentProject.images.length)
    }
  }

  const prevImage = () => {
    if (currentProject?.images) {
      setLightboxImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
    }
  }

  const nextFeature = () => {
    if (currentProject?.keyFeatures) {
      setCurrentFeatureIndex((prev) => (prev + 1) % currentProject.keyFeatures.length)
    }
  }

  const prevFeature = () => {
    if (currentProject?.keyFeatures) {
      setCurrentFeatureIndex(
        (prev) => (prev - 1 + currentProject.keyFeatures.length) % currentProject.keyFeatures.length,
      )
    }
  }

  // Get visible features for carousel
  const getVisibleFeatures = () => {
    if (!currentProject?.keyFeatures || currentProject.keyFeatures.length === 0) return []

    const features = currentProject.keyFeatures
    const totalFeatures = features.length

    if (totalFeatures <= 3) return features

    const prevIndex = (currentFeatureIndex - 1 + totalFeatures) % totalFeatures
    const nextIndex = (currentFeatureIndex + 1) % totalFeatures

    return [
      { ...features[prevIndex], position: "prev" },
      { ...features[currentFeatureIndex], position: "current" },
      { ...features[nextIndex], position: "next" },
    ]
  }

  // Loading state
  if (!currentProject) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-xl text-gray-300">Loading project details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden relative">
      {/* Particles Background */}
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="fixed inset-0 z-0" />

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
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
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
            className="absolute bottom-14 -left-1/4 transform -translate-x-1/2"
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
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="text-gray-400 text-sm mb-2 font-medium">Scroll to explore</span>
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
            <motion.div {...variants.fadeInUp} viewport={{ once: true }} className="text-center mb-16">
              <motion.h2
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="text-white">Visual </span>
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
                Explore the interface and functionality through these carefully crafted screenshots
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
                    src={currentProject.images[currentImageIndex]?.src || "/placeholder.svg?height=600&width=800"}
                    alt={currentProject.images[currentImageIndex]?.alt || "Project Image"}
                    className="w-full h-full object-cover cursor-pointer"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => openLightbox(currentImageIndex)}
                  />
                </AnimatePresence>

                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {currentProject.images[currentImageIndex]?.caption || "Project Screenshot"}
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
                          (prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length,
                        )
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
                    >
                      <IoChevronBack size={24} />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)}
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
                        index === currentImageIndex ? "bg-purple-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
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
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
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
            <motion.div {...variants.fadeInUp} viewport={{ once: true }} className="text-center mb-16">
              <motion.div
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border-purple-500/20 text-purple-400 text-sm font-medium mb-8 tracking-widest uppercase border"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="text-purple-500 justify-center items-center">
                  Built With <IoIosLaptop className="inline-block mr-2" />
                </span>
              </motion.div>

              <motion.h2
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="text-white">Technology </span>
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
            <motion.div {...variants.fadeInLeft} viewport={{ once: true }} className="flex-1">
              <motion.h2
                {...variants.fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="text-white">Project </span>
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
                  <motion.p {...variants.fadeInUp} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                    <span className="text-white font-semibold font-outfit">Key Challenges Faced:</span>{" "}
                    {currentProject.challenges}
                  </motion.p>
                )}

                {currentProject.outcome && (
                  <motion.p {...variants.fadeInUp} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                    <span className="text-white font-semibold font-outfit">Outcome:</span> {currentProject.outcome}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Right Side - Key Features Carousel */}
            {currentProject.keyFeatures && currentProject.keyFeatures.length > 0 && (
              <motion.div {...variants.fadeInRight} viewport={{ once: true }} className="flex-1">
                <motion.h3
                  {...variants.fadeInUp}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-white mb-8 font-outfit text-center"
                >
                  Key Features
                </motion.h3>

                <div className="relative h-[600px] flex items-center justify-center">
                  {/* Features Carousel Container */}
                  <div className="relative w-full max-w-md">
                    {/* All Features with Sliding Animation */}
                    {currentProject.keyFeatures.map((feature, index) => {
                      const totalFeatures = currentProject.keyFeatures.length

                      // Calculate positions
                      const prevIndex = (currentFeatureIndex - 1 + totalFeatures) % totalFeatures
                      const nextIndex = (currentFeatureIndex + 1) % totalFeatures

                      let variant
                      if (totalFeatures <= 3) {
                        // If 3 or fewer features, show all statically
                        if (index === 0) variant = "top"
                        else if (index === 1) variant = "center"
                        else variant = "bottom"
                      } else {
                        // Dynamic carousel for more than 3 features
                        if (index === prevIndex) variant = "top"
                        else if (index === currentFeatureIndex) variant = "center"
                        else if (index === nextIndex) variant = "bottom"
                        else variant = "hidden"
                      }

                      return (
                        <motion.div
                          key={feature.title}
                          variants={{
                            top: { y: -120, scale: 0.8, opacity: 0.6, zIndex: 1 },
                            center: { y: 0, scale: 1, opacity: 1, zIndex: 2 },
                            bottom: { y: 120, scale: 0.8, opacity: 0.6, zIndex: 1 },
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
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <motion.div
                            whileHover={
                              variant === "center"
                                ? {
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                                  }
                                : {}
                            }
                            className={`w-full p-6 rounded-xl border transition-all duration-500 group ${
                              variant === "center"
                                ? "bg-slate-800/60 border-purple-500/50 shadow-lg shadow-purple-500/20"
                                : "bg-slate-800/30 border-slate-700/30"
                            }`}
                          >
                            <div className="flex items-start">
                              <motion.div
                                whileHover={variant === "center" ? { scale: 1.1, rotate: 5 } : {}}
                                className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                                  variant === "center"
                                    ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 shadow-lg"
                                    : "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                                }`}
                              >
                                {getIconComponent(feature.icon, 24, variant === "center" ? "#a855f7" : "#6b7280")}
                              </motion.div>
                              <div className="flex-1">
                                <h4
                                  className={`text-xl font-bold mb-2 transition-all duration-300 font-outfit ${
                                    variant === "center"
                                      ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text"
                                      : "text-gray-400"
                                  }`}
                                >
                                  {feature.title}
                                </h4>
                                <p
                                  className={`leading-relaxed font-outfit transition-all duration-300 ${
                                    variant === "center" ? "text-gray-300" : "text-gray-500"
                                  }`}
                                >
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )
                    })}

                    {/* Navigation Controls - only show if more than 3 features */}
                    {currentProject.keyFeatures.length > 3 && (
                      <>
                        <button
                          onClick={prevFeature}
                          className="absolute -top-56 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 z-30"
                        >
                          <IoChevronUp size={20} />
                        </button>
                        <button
                          onClick={nextFeature}
                          className="absolute -bottom-56 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 z-30"
                        >
                          <IoChevronDown size={20} />
                        </button>
                      </>
                    )}

                    {/* Feature Indicators - only show if more than 3 features */}
                    {currentProject.keyFeatures.length > 3 && (
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                        {currentProject.keyFeatures.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentFeatureIndex(index)}
                            className={`w-2 h-8 rounded-full transition-all duration-300 ${
                              index === currentFeatureIndex ? "bg-purple-500" : "bg-gray-600 hover:bg-gray-500"
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          />
                        ))}
                      </div>
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
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
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
              Experience the live application and dive into the source code to see the magic behind the scenes
            </motion.p>

            <motion.div
              {...variants.fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg text-white flex items-center font-outfit"
              >
                <FaExternalLinkAlt className="mr-3" />
                Live Demo
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-full transition-all duration-300 font-outfit"
              >
                {getIconComponent("SiGithub", 20, "#ffffff")}
                <span className="ml-3">GitHub Repo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
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
              <NavLink to="/" className="text-white">
                Back to Portfolio
              </NavLink>
            </motion.div>

            <motion.p {...variants.fadeInRight} viewport={{ once: true }} className="text-gray-400 text-sm font-outfit">
              © 2024 Parthiv Shingala. Crafted with passion and precision.
            </motion.p>
          </div>
        </div>
      </footer>

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
                src={currentProject.images[lightboxImageIndex]?.src || "/placeholder.svg"}
                alt={currentProject.images[lightboxImageIndex]?.alt || "Project Image"}
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
                  {currentProject.images[lightboxImageIndex]?.caption || "Project Screenshot"}
                </h3>
                <p className="text-gray-300 text-sm">
                  {lightboxImageIndex + 1} of {currentProject.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectShowcase

import learnverseCommDark from "./assets/LearnVerse/learnverseCommDark.png";
import learnverseCommLight from "./assets/LearnVerse/learnverseCommLight.png";
import learnverseDashDark from "./assets/LearnVerse/learnverseDashDark.png";
import learnverseDashLight from "./assets/LearnVerse/learnverseDashLight.png";
import learnverseHome from "./assets/LearnVerse/learnverseHome.png";
import learnverseLogin from "./assets/LearnVerse/learnverseLogin.png";
import learnverseMain from "./assets/LearnVerse/learnverseMain.jpg";
import learnverseMobileDashDark from "./assets/LearnVerse/learnverseMobileDashDark.png";
import learnverseMobileDashLight from "./assets/LearnVerse/learnverseMobileDashLight.png";
import learnverseProfileDark from "./assets/LearnVerse/learnverseProfileDark.png";
import learnverseProfileLight from "./assets/LearnVerse/learnverseProfileLight.png";
import mobile from "./assets/LearnVerse/mobile.jpg";

import allSS from "./assets/studentWise/allSS.png";
import goal from "./assets/studentWise/goal.png";
import market from "./assets/studentWise/market.png";
import paper from "./assets/studentWise/paper.png";
import paper2 from "./assets/studentWise/paper-2.png";
import risk from "./assets/studentWise/risk-s.png";
import portfolio from "./assets/studentWise/portfolio.png";

import adminAll from "./assets/GadgetBuddy/adminAll.png";
import adminDash from "./assets/GadgetBuddy/adminDash.png"
import adminDash2 from "./assets/GadgetBuddy/adminDash2.png";
import adminHomeContentMan from "./assets/GadgetBuddy/adminHomeContentMan.png";
import custCheckout from "./assets/GadgetBuddy/custCheckout.png";
import custHome from "./assets/GadgetBuddy/custHome.png";
import customerAll from "./assets/GadgetBuddy/customerAll.png";
import custProduct from "./assets/GadgetBuddy/custProduct.png";
import reportsAll from "./assets/GadgetBuddy/reportsAll.png";



import Ad from "./assets/village/Ad.png";
import Ao from "./assets/village/Ao.png";
import Ausers from "./assets/village/Ausers.png";
import A from "./assets/village/paymentDetails.png";
import payRep from "./assets/village/payRep.png";
import Chome from "./assets/village/Chome.png";
import Cmain from "./assets/village/Cmain.png";
// import Cprofile from "./assets/village/Cprofile.png";
import Clogin from "./assets/village/Clogin.png";
import Ccheckout from "./assets/village/Ccheckout.png";
import Cmenu from "./assets/village/Cmenu.png";
import Cres from "./assets/village/Cres.png";

import one from "./assets/edge/1.png";
import activeUsers from "./assets/edge/activeUsers.png";
import addArticle from "./assets/edge/addArticle.png";
import allReaders from "./assets/edge/allReaders.png";
import mobile1 from "./assets/edge/mobile1.png";
import mobile2 from "./assets/edge/mobile2.png";
import mobileShowcaseBookmark from "./assets/edge/mobileShowcaseBookmark.png";
import { caption } from "framer-motion/client";

export const projects = [
  {
    id: "learnverse",
    repo: "",
    live: "",
    title: "LearnVerse",
    slogan: "A Universe of Ideas, One Platform",
    overview:
      "LearnVerse is a full-stack collaborative learning platform inspired by real-world platforms like Coursera and Notion. It allows students to manage personal notes, enroll in full courses, track progress, earn certifications, and contribute to a growing educational community. The project aims to bridge self-paced learning with structured content, personalized dashboards, and social contribution features - providing students with a complete academic ecosystem.",
    images: [
      { src: learnverseHome, alt: "Home", caption: "Home Page" },
      {
        src: learnverseMain,
        alt: "Dashboard",
        caption: "Main Dashboard Interface",
      },
      { src: mobile, alt: "Mobile Preview", caption: "Mobile App Preview" },
      {
        src: learnverseProfileDark,
        alt: "Profile",
        caption: "Student Profile Dark Mode",
      },
      {
        src: learnverseProfileLight,
        alt: "Profile",
        caption: "Student Profile Light Mode",
      },
      {
        src: learnverseLogin,
        alt: "Authentication",
        caption: "Login & Registration System",
      },
      {
        src: learnverseDashDark,
        alt: "Dashboard",
        caption: "Dashboard Dark Mode",
      },
      {
        src: learnverseDashLight,
        alt: "Dashboard",
        caption: "Dashboard Light Mode",
      },
      {
        src: learnverseCommDark,
        alt: "Community",
        caption: "Community Dark Mode",
      },
      {
        src: learnverseCommLight,
        alt: "Community",
        caption: "Community Light Mode",
      },
    ],
    techStack: [
    { name: "React", icon: "SiReact", color: "#61DAFB", category: "Frontend" },
    { name: "React Router", icon: "SiReact", color: "#CA4245", category: "Routing" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38B2AC", category: "Styling" },
    { name: "Framer Motion", icon: "SiFramer", color: "#0055FF", category: "Animations" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "Backend" },
    { name: "Express.js", icon: "SiExpress", color: "#38B2AC", category: "Backend" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "Database" },
    { name: "Mongoose", icon: "SiMongoose", color: "#880000", category: "ODM" },
    { name: "JWT", icon: "SiJsonwebtokens", color: "#38B2AC", category: "Authentication" },
    { name: "Cloudinary", icon: "SiCloudinary", color: "#3448c5", category: "Image Hosting" }
  ],
    keyFeatures: [
      {
        title: "Personal Notes Management",
        description:
          "Upload, categorize, and manage personal study notes with visibility options.",
        icon: "FaCode",
      },
      {
        title: "Course Learning System",
        description:
          "Full-length courses with modules, resources, and certificate generation.",
        icon: "FaRocket",
      },
      {
        title: "Smart Dashboard",
        description:
          "Track progress and display learning stats with an intuitive interface.",
        icon: "FaLightbulb",
      },
    ],
    challenges:
      "Implementing dynamic progress tracking, integrating certificate generation, and ensuring responsive design across devices.",
    outcome:
      "A scalable learning platform with positive feedback on usability and feature richness, enhancing student engagement.",
  },
  //   {
  //   id: "learnverse",
  //   title: "LearnVerse",
  //   slogan: "A Universe of Ideas, One Platform",
  //   overview:
  //     "LearnVerse is a full-stack collaborative learning platform inspired by leading platforms like Coursera, Notion, and Edmodo. It provides students with an all-in-one academic environment where they can enroll in structured courses, manage personal study materials, track their academic journey, earn certifications, and interact with a learning community. It blends self-paced flexibility with structured guidance, offering a seamless educational experience across devices.",

  //   images: [
  //     { src: learnverseHome, alt: "Home", caption: "Home Page" },
  //     { src: learnverseMain, alt: "Dashboard", caption: "Main Dashboard Interface" },
  //     { src: mobile, alt: "Mobile Preview", caption: "Mobile App Preview" },
  //     { src: learnverseProfileDark, alt: "Profile", caption: "Student Profile Dark Mode" },
  //     { src: learnverseProfileLight, alt: "Profile", caption: "Student Profile Light Mode" },
  //     { src: learnverseLogin, alt: "Authentication", caption: "Login & Registration System" },
  //     { src: learnverseDashDark, alt: "Dashboard", caption: "Dashboard Dark Mode" },
  //     { src: learnverseDashLight, alt: "Dashboard", caption: "Dashboard Light Mode" },
  //     { src: learnverseCommDark, alt: "Community", caption: "Community Notes Dark Mode" },
  //     { src: learnverseCommLight, alt: "Community", caption: "Community Notes Light Mode" }
  //   ],

  //   techStack: [
  //     { name: "React", icon: "SiReact", color: "#61DAFB", category: "Frontend" },
  //     { name: "React Router", icon: "SiReact", color: "#CA4245", category: "Routing" },
  //     { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38B2AC", category: "Styling" },
  //     { name: "Framer Motion", icon: "SiFramer", color: "#0055FF", category: "Animations" },
  //     { name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "Backend" },
  //     { name: "Express.js", icon: "SiExpress", color: "#000000", category: "Backend" },
  //     { name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "Database" },
  //     { name: "Mongoose", icon: "SiMongoose", color: "#880000", category: "ODM" },
  //     { name: "JWT", icon: "SiJsonwebtokens", color: "#000000", category: "Authentication" },
  //     { name: "Cloudinary", icon: "SiCloudinary", color: "#3448c5", category: "Image Hosting" }
  //   ],

  //   keyFeatures: [
  //     {
  //       title: "Personal Notes Management",
  //       description:
  //         "Students can upload, categorize, and manage their personal study notes. Notes can be marked as Public or Private, allowing contribution to the community or personal use only.",
  //       icon: "FaStickyNote"
  //     },
  //     {
  //       title: "Complete Course Learning System",
  //       description:
  //         "Full-length courses organized into modules and lessons. Students can track lesson completion, access downloadable resources, and receive a certificate and badge upon completion.",
  //       icon: "FaGraduationCap"
  //     },
  //     {
  //       title: "Smart Progress Dashboard",
  //       description:
  //         "A dynamic dashboard displays visual analytics such as weekly activity, course completion stats, time spent learning, and milestones using animated charts.",
  //       icon: "FaChartLine"
  //     },
  //     {
  //       title: "Community Notes Sharing",
  //       description:
  //         "Students can explore and search for notes shared publicly by other learners, filtered by category, tags, or keywords — encouraging peer-to-peer learning.",
  //       icon: "FaUsers"
  //     },
  //     {
  //       title: "Automated Certificate Generator",
  //       description:
  //         "Certificates are automatically generated and downloadable once a course is completed. Each certificate includes name, course title, and completion date.",
  //       icon: "FaFileCertificate"
  //     },
  //     {
  //       title: "Badge & Achievement System",
  //       description:
  //         "Students earn badges after completing courses and reaching milestones. These can be displayed on profiles to build learning credibility and motivation.",
  //       icon: "FaMedal"
  //     },
  //     {
  //       title: "User Profiles with Settings",
  //       description:
  //         "Each student has a personalized profile showcasing enrolled courses, certificates, badges, skills, and learning preferences including dark/light mode, language, and privacy options.",
  //       icon: "FaUserCircle"
  //     },
  //     {
  //       title: "Discussion & Feedback Section",
  //       description:
  //         "On each course page, students can engage in threaded discussions, ask questions, and get help from peers or instructors.",
  //       icon: "FaComments"
  //     }
  //   ],

  //   challenges:
  //     "The most complex parts of the development were implementing dynamic progress tracking per user, generating PDFs for certificates, managing secure authentication, and optimizing the platform for both dark and light themes across all components.",

  //   outcome:
  //     "LearnVerse resulted in a modern, responsive, and scalable e-learning platform. With real-time progress visualization, robust backend handling, and a visually rich UI, it enhances engagement and fosters a collaborative academic ecosystem. It received praise for being intuitive, feature-rich, and aligned with real-world educational workflows."
  // },

  {
    id: "edge-e-bulletin",
    repo: "https://github.com/Parthiv30/Edge-e-Bulletin",
    live: "",
    title: "Edge e-Bulletin",
    slogan: "Your Campus News, On the Go",
    overview:
      "Edge e-Bulletin is a comprehensive, real-time news and announcement platform developed for Bhagwan Mahavir University. The system includes a responsive web-based admin panel for managing and distributing campus-wide news, and a native Android app built using Java that allows students and faculty to stay updated with the latest announcements. News content is synchronized via Firebase Realtime Database for instant delivery and access. This project replaces outdated notice board systems with an efficient, user-friendly, and scalable digital communication solution.",
    images: [
      {
        src: one,
        alt: "Admin Panel",
        caption: "Admin Dashboard",
      },
      { src: mobile1, alt: "Mobile App", caption: "Mobile App Home" },
      { src: mobile2, alt: "Mobile App", caption: "Mobile App News Feed" },
      {
        src: mobileShowcaseBookmark,
        alt: "Mobile App Bookmark",
        caption: "Mobile App Bookmark Feature",
      },
      {
        src: activeUsers,
        alt: "Active Users",
        caption: "Active Users Overview",
      },
      { src: addArticle, alt: "Add Article", caption: "Add News Article" },
      { src: allReaders, alt: "All Readers", caption: "All Readers List" },
    ],
    techStack: [
      {
        name: "HTML5",
        icon: "SiHtml5",
        color: "#E34F26",
        category: "Frontend",
      },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6", category: "Styling" },
      {
        name: "Bootstrap",
        icon: "SiBootstrap",
        color: "#7952B3",
        category: "Styling",
      },
      {
        name: "JavaScript",
        icon: "SiJavascript",
        color: "#F7DF1E",
        category: "Frontend",
      },
      { name: "PHP", icon: "SiPhp", color: "#777BB4", category: "Backend" },
      {
        name: "MySQL",
        icon: "SiMysql",
        color: "#4479A1",
        category: "Database",
      },
      {
        name: "Firebase",
        icon: "SiFirebase",
        color: "#FFCA28",
        category: "Realtime DB",
      },
      {
        name: "Java",
        icon: "FaJava",
        color: "#007396",
        category: "Mobile App",
      },
      {
        name: "Android Studio",
        icon: "SiAndroid",
        color: "#3DDC84",
        category: "IDE",
      },
      {
        name: "FPDF",
        icon: "SiAdobe",
        color: "#FF0000",
        category: "PDF Library",
      },
      {
        name: "Chart.js",
        icon: "SiChartdotjs",
        color: "#FF6384",
        category: "Analytics",
      },
      {
        name: "PHPMailer",
        icon: "SiGmail",
        color: "#0066CC",
        category: "Email",
      },
    ],
    keyFeatures: [
      {
        title: "Real-Time News Sync",
        description:
          "Firebase Realtime Database ensures instant syncing of news articles from the admin panel to the Android application.",
        icon: "FaRocket",
      },
      {
        title: "PDF Notice Generation",
        description:
          "Automatically generates formatted and downloadable PDF notices using FPDF PHP library for each news submission.",
        icon: "FaFilePdf",
      },
      {
        title: "Graphical Analytics",
        description:
          "Admin dashboard includes pie, bar, and line charts to analyze category-wise, institution-wise, and year-wise news distribution using Chart.js.",
        icon: "FaChartBar",
      },
      {
        title: "Reader Management",
        description:
          "Displays the list of app users (students and readers) in the admin panel for tracking reach and engagement.",
        icon: "FaUsers",
      },
      {
        title: "Branch & Category-Based News",
        description:
          "Admin can assign specific news articles to predefined institutions (like BCA, MBA, MCA, etc.) and categories (Events, Exams, Notices, etc.) for filtered delivery.",
        icon: "FaTags",
      },
      {
        title: "Smart Search & Filter",
        description:
          "In-app search functionality and filters allow users to browse news by categories or institution names.",
        icon: "FaSearch",
      },
      {
        title: "Automatic Email Service",
        description:
          "Newly added coordinators automatically receive welcome emails with login credentials using PHPMailer.",
        icon: "FaEnvelopeOpenText",
      },
      {
        title: "Change Password via Firebase",
        description:
          "Admins and coordinators can reset passwords securely through Firebase's password reset system.",
        icon: "FaLock",
      },
      {
        title: "Account Status Control",
        description:
          "Admins can enable or disable coordinator accounts to control access without deleting profiles.",
        icon: "FaUserShield",
      },
    ],
    challenges:
      "Managing synchronization between MySQL and Firebase, implementing real-time updates in the Android app, automating PDF generation and email notifications, and structuring role-based admin access with clean UI design.",
    outcome:
      "The project created a modern, digital-first communication platform that significantly improved information sharing across the university. It reduced delays in news delivery, improved accessibility for students, and gave administrators powerful tools to manage content efficiently.",
  },
  {
    id: "village-chef",
    repo: "https://github.com/Village-Chef/Village_Chef",
    live: "",
    title: "Village Chef",
    slogan: "Savor the Village, Delivered",
    overview:
      "Village Chef is a full-featured PHP-MySQL web application designed to simplify online food ordering and restaurant administration. It offers a dedicated customer panel for secure ordering, real-time tracking, and automated receipts, while the admin panel enables full management of restaurants, cuisines, orders, payments, and users. The platform integrates Razorpay for payments, PHPMailer for email communication, FPDF for PDF generation, and Chart.js for real-time analytics, making it a comprehensive digital solution for the food service industry.",
    images: [
      {
        src: Ad,
        alt: "Admin Panel",
        caption: "Management Dashboard",
      },
      {
        src: A,
        alt: "Admin Panel",
        caption: "Payment Details",
      },
      {
        src: Ao,
        alt: "Admin Panel",
        caption: "Order Tracking",
      },
      {
        src: Ausers,
        alt: "Admin Panel",
        caption: "User Administration",
      },
      {
        src: payRep,
        alt: "Payment Report",
        caption: "Monthly Payment Report",
      },
      {
        src: Chome,
        alt: "Customer Home",
        caption: "Customer Home Page",
      },
      {
        src: Cmain,
        alt: "Customer Dashboard",
        caption: "Customer Dashboard",
      },
      {
        src: Clogin,
        alt: "Customer Login",
        caption: "Customer Login Page",
      },
      {
        src: Ccheckout,
        alt: "Checkout Page",
        caption: "Secure Checkout",
      },
      {
        src: Cmenu,
        alt: "Menu Page",
        caption: "Restaurant Menu",
      },
      {
        src: Cres,
        alt: "Restaurant Page",
        caption: "Restaurant Details",
      },
    ],
    techStack: [
      {
        name: "HTML5",
        icon: "SiHtml5",
        color: "#E34F26",
        category: "Frontend",
      },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6", category: "Styling" },
      {
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        color: "#38B2AC",
        category: "Styling",
      },
      { name: "PHP", icon: "SiPhp", color: "#777BB4", category: "Backend" },
      {
        name: "MySQL",
        icon: "SiMysql",
        color: "#4479A1",
        category: "Database",
      },
      {
        name: "PHPMailer",
        icon: "SiGmail",
        color: "#D14836",
        category: "Email",
      },
      {
        name: "FPDF",
        icon: "SiAdobeacrobatreader",
        color: "#B72126",
        category: "PDF Generation",
      },
      {
        name: "Chart.js",
        icon: "SiChartdotjs",
        color: "#FF6384",
        category: "Analytics",
      },
      {
        name: "Razorpay",
        icon: "SiPaypal",
        color: "#00457C",
        category: "Payments",
      },
      {
        name: "XAMPP",
        icon: "SiXampp",
        color: "#FB7A24",
        category: "Development Environment",
      },
    ],
    keyFeatures: [
      {
        title: "Online Ordering",
        description:
          "Customers can browse restaurants, cuisines, and dishes, add items to their cart, and place orders with integrated Razorpay payment.",
        icon: "FaUtensils",
      },
      {
        title: "Real-Time Order Tracking",
        description:
          "Track order progress from placement to delivery with live status updates.",
        icon: "FaRocket",
      },
      {
        title: "Admin Dashboard",
        description:
          "Centralized management for restaurants, menu, users, orders, and payments with interactive charts and KPIs.",
        icon: "FaLightbulb",
      },
      {
        title: "PDF Generation",
        description:
          "Automatically generate receipts for orders and payments, as well as monthly transaction reports using FPDF.",
        icon: "FaFilePdf",
      },
      {
        title: "Email Notifications",
        description:
          "Automated welcome emails, order confirmations, and OTP-based password recovery via PHPMailer.",
        icon: "FaEnvelope",
      },
      {
        title: "Data Visualization",
        description:
          "Admin dashboard includes Chart.js-powered graphs to track revenue trends, top-selling items, order statuses, and more.",
        icon: "FaChartLine",
      },
    ],
    challenges:
      "Integrating and securing the Razorpay payment gateway, setting up OTP email verification for secure password recovery, and ensuring real-time dashboard updates without performance lag.",
    outcome:
      "Village Chef resulted in a responsive and scalable web solution that streamlined the entire online food ordering process and restaurant backend management. It offers an intuitive UI for customers and a powerful, insight-rich admin dashboard for restaurant operators.",
  },
  {
    id: "gadgetbuddy",
    repo: "",
    live: "",
    title: "GadgetBuddy",
    slogan: "Your Ultimate Destination for Electronic Gadgets & Accessories",
    overview:
      "GadgetBuddy is a comprehensive full-stack e-commerce platform built for selling electronic gadgets and accessories. The platform features a robust admin panel for complete store management and a modern customer-facing storefront with advanced shopping features. Built with PHP backend and MySQL database, it includes secure payment processing, inventory management, email notifications, and a powerful content management system for dynamic homepage control.",
    images: [
      { src: adminAll, alt: "Admin Panel", caption: "Admin Panel" },
      { src: customerAll, alt: "Customer Panel", caption: "Customer Panel" },
      { src: adminDash, alt: "Admin Dashboard", caption: "Admin Dashboard" },
      { src: adminDash2, alt: "Admin Dashboard", caption: "Admin Dashboard" },
      { src: adminHomeContentMan, alt: "Admin Home Content Management", caption: "Admin Home Content Management" },
      { src: custCheckout, alt: "Customer Checkout", caption: "Customer Checkout" },
      { src: custHome, alt: "Customer Home", caption: "Customer Home" },
      { src: custProduct, alt: "Customer Product", caption: "Customer Product" },
      { src: reportsAll, alt: "Reports", caption: "Reports" },
    ],
    techStack: [
      { name: "PHP", icon: "SiPhp", color: "#777BB4", category: "Backend" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1", category: "Database" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26", category: "Frontend" },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6", category: "Styling" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", category: "Frontend" },
      { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3", category: "Styling" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38B2AC", category: "Styling" },
      { name: "jQuery", icon: "SiJquery", color: "#0769AD", category: "Frontend" },
      { name: "PHPMailer", icon: "SiGmail", color: "#D14836", category: "Email" },
      { name: "mPDF", icon: "SiAdobeacrobatreader", color: "#B72126", category: "PDF Generation" },
      { name: "Font Awesome", icon: "SiFontawesome", color: "#339AF0", category: "Icons" },
      { name: "SweetAlert2", icon: "SiJavascript", color: "#F27474", category: "Notifications" }
    ],
    keyFeatures: [
      {
        title: "Excel Export & Bulk Upload System",
        description:
          "Download comprehensive sales insights, inventory reports, and analytics as Excel files using PhpSpreadsheet. Support for bulk product uploads and data management for efficient store operations.",
        icon: "FaFileExcel",
      },
      {
        title: "Smart Stock Notifications & Inventory Alerts",
        description:
          "Real-time inventory tracking with automated low-stock alerts, out-of-stock notifications, and inventory adjustment capabilities to prevent stockouts and optimize supply chain management.",
        icon: "FaBell",
      },
      {
        title: "Advanced Analytics Dashboard",
        description:
          "Sales analytics with revenue charts, top-selling products insights, order statistics, user registration trends, and performance metrics using Chart.js for data visualization and business intelligence.",
        icon: "FaChartLine",
      },
      {
        title: "Multi-variant Product Management",
        description:
          "Complete product catalog with size, color, and custom variants, dynamic pricing, discount management, coupon system, and tag-based filtering for enhanced product discovery and inventory control.",
        icon: "FaTags",
      },
      {
        title: "Automated PDF & Email System",
        description:
          "mPDF integration for invoice generation, automated email notifications via PHPMailer with SMTP, order confirmations, payment receipts, welcome emails, and promotional campaigns with HTML templates.",
        icon: "FaFilePdf",
      },
      {
        title: "Dynamic Content Management System",
        description:
          "Complete homepage control where admins can dynamically add, remove, and reposition announcements, banners, testimonials, sliders, and video gallery content in real-time without code changes, providing full customization of customer-facing interface.",
        icon: "FaCog",
      },
      {
        title: "Role-based Admin Control & Security",
        description:
          "Hierarchical admin permissions, secure authentication with password hashing, CSRF protection, SQL injection prevention, session management, and comprehensive security measures against web vulnerabilities.",
        icon: "FaUserShield",
      },
    ],
    challenges:
      "Implementing secure payment gateway integration, building a scalable admin panel with role-based access control, managing complex product variants and inventory tracking, and ensuring optimal performance with large product catalogs while maintaining security against common web vulnerabilities.",
    outcome:
      "GadgetBuddy resulted in a modern, feature-rich e-commerce platform that provides merchants with a complete online store solution. The platform successfully handles product management, order processing, payment integration, and customer engagement with a responsive design and robust security measures, making it ready for production deployment.",
  },
  {
  id: "studentwise",
  repo: "",
  live: "",
  title: "StudentWise",
  slogan: "Smart Investing for Students",

  overview:
    "StudentWise is an AI-powered financial learning and investment simulation platform designed specifically for students. It provides a safe and interactive environment where users can understand financial concepts, assess their risk profile, and practice investing without real money. The platform combines machine learning, simulation models, and behavioral analytics to deliver personalized investment guidance and improve financial decision-making skills.",

  images: [
    { src: allSS, alt: "AllSS", caption: "AllSS Page" },
    { src: paper2, alt: "Paper2", caption: "Paper2 Page" },
    { src: market, alt: "Market", caption: "Market Page" },
    { src: risk, alt: "Risk", caption: "Risk Page" },
    { src: portfolio, alt: "Portfolio", caption: "Portfolio Page" },
    { src: goal, alt: "Goal", caption: "Goal Page" },
    { src: paper, alt: "Paper", caption: "Paper Page" },
  ],

  techStack: [
    { name: "Python", icon: "SiPython", color: "#3776AB", category: "Backend" },
    { name: "FastAPI", icon: "SiFastapi", color: "#009688", category: "Backend" },
    { name: "Streamlit", icon: "SiStreamlit", color: "#FF4B4B", category: "Frontend" },
    { name: "Firebase Firestore", icon: "SiFirebase", color: "#FFCA28", category: "Database" },
    { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00", category: "Machine Learning" },
    { name: "Scikit-learn", icon: "SiScikitlearn", color: "#F7931E", category: "ML Tools" },
    { name: "NumPy", icon: "SiNumpy", color: "#013243", category: "Computation" },
    { name: "Pandas", icon: "SiPandas", color: "#150458", category: "Data Processing" },
    { name: "Plotly", icon: "SiPlotly", color: "#3F4F75", category: "Visualization" }
  ],

  keyFeatures: [
    {
      title: "AI-Based Risk Assessment",
      description:
        "Uses a machine learning model to classify users into Low, Medium, or High risk categories based on financial inputs.",
      icon: "FaChartLine",
    },
    {
      title: "Personalized Investment Recommendations",
      description:
        "Provides tailored investment strategies based on user risk profile using a rule-based recommendation engine.",
      icon: "FaLightbulb",
    },
    {
      title: "Paper Trading Simulator",
      description:
        "Allows users to practice stock trading in a risk-free virtual environment without using real money.",
      icon: "FaRocket",
    },
    {
      title: "Portfolio Risk Simulation",
      description:
        "Implements Monte Carlo simulation to predict future portfolio outcomes and visualize risk scenarios.",
      icon: "FaProjectDiagram",
    },
    {
      title: "Behavioral Finance Analysis",
      description:
        "Detects user trading patterns such as overtrading and emotional decisions to improve investment behavior.",
      icon: "FaUserCheck",
    },
    {
      title: "Market Sentiment Analysis",
      description:
        "Analyzes financial news and classifies sentiment to help users understand market trends.",
      icon: "FaNewspaper",
    },
    {
      title: "AI Investment Advisor",
      description:
        "Provides smart, data-driven financial insights by combining risk, portfolio, and market analysis.",
      icon: "FaRobot",
    }
  ],

  challenges:
    "Integrating machine learning models into a real-time web system, implementing Monte Carlo simulation efficiently, maintaining consistent data preprocessing, and combining multiple modules like trading, analytics, and behavioral detection into a single scalable architecture.",

  outcome:
    "StudentWise successfully delivers a modern fintech learning platform that helps students understand investing concepts, practice safely, and make informed financial decisions. It improves financial literacy and provides a strong foundation for real-world investment platforms.",
}
];

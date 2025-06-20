import learnverseCommDark from "./assets/learnverse/learnverseCommDark.png";
import learnverseCommLight from "./assets/learnverse/learnverseCommLight.png";
import learnverseDashDark from "./assets/learnverse/learnverseDashDark.png";
import learnverseDashLight from "./assets/learnverse/learnverseDashLight.png";
import learnverseHome from "./assets/learnverse/learnverseHome.png";
import learnverseLogin from "./assets/learnverse/learnverseLogin.png";
import learnverseMain from "./assets/learnverse/learnverseMain.jpg";
import learnverseMobileDashDark from "./assets/learnverse/learnverseMobileDashDark.png";
import learnverseMobileDashLight from "./assets/learnverse/learnverseMobileDashLight.png";
import learnverseProfileDark from "./assets/learnverse/learnverseProfileDark.png";
import learnverseProfileLight from "./assets/learnverse/learnverseProfileLight.png";
import mobile from "./assets/learnverse/mobile.jpg";

export const projects = [
  {
    id: "learnverse",
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
      {
        name: "React",
        icon: "SiReact",
        color: "#61DAFB",
        category: "Frontend",
      },
      {
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        color: "#38B2AC",
        category: "Styling",
      },
      {
        name: "Node.js",
        icon: "SiNodedotjs",
        color: "#339933",
        category: "Backend",
      },
      {
        name: "Express.js",
        icon: "SiExpress",
        color: "#000000",
        category: "Backend",
      },
      {
        name: "MongoDB",
        icon: "SiMongodb",
        color: "#47A248",
        category: "Database",
      },
      {
        name: "React Router",
        icon: "SiReact",
        color: "#CA4245",
        category: "Frontend",
      },
      {
        name: "Framer Motion",
        icon: "SiFramer",
        color: "#0055FF",
        category: "Animations",
      },
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
  title: "Edge e-Bulletin",
  slogan: "Your Campus News, On the Go",
  overview:
    "Edge e-Bulletin is a comprehensive, real-time news and announcement platform developed for Bhagwan Mahavir University. The system includes a responsive web-based admin panel for managing and distributing campus-wide news, and a native Android app built using Java that allows students and faculty to stay updated with the latest announcements. News content is synchronized via Firebase Realtime Database for instant delivery and access. This project replaces outdated notice board systems with an efficient, user-friendly, and scalable digital communication solution.",
  images: [
    {
      src: "/edge/admin.jpg",
      alt: "Admin Panel",
      caption: "Admin Dashboard",
    },
    {
      src: "/edge/mobile.jpg",
      alt: "Mobile App",
      caption: "Mobile News Feed",
    },
  ],
  techStack: [
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6", category: "Styling" },
    { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3", category: "Styling" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", category: "Frontend" },
    { name: "PHP", icon: "SiPhp", color: "#777BB4", category: "Backend" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1", category: "Database" },
    { name: "Firebase", icon: "SiFirebase", color: "#FFCA28", category: "Realtime DB" },
    { name: "Java", icon: "FaJava", color: "#007396", category: "Mobile App" },
    { name: "Android Studio", icon: "SiAndroid", color: "#3DDC84", category: "IDE" },
    { name: "FPDF", icon: "SiAdobe", color: "#FF0000", category: "PDF Library" },
    { name: "Chart.js", icon: "SiChartdotjs", color: "#FF6384", category: "Analytics" },
    { name: "PHPMailer", icon: "SiGmail", color: "#0066CC", category: "Email" },
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
  title: "Village Chef",
  slogan: "Savor the Village, Delivered",
  overview:
    "Village Chef is a full-featured PHP-MySQL web application designed to simplify online food ordering and restaurant administration. It offers a dedicated customer panel for secure ordering, real-time tracking, and automated receipts, while the admin panel enables full management of restaurants, cuisines, orders, payments, and users. The platform integrates Razorpay for payments, PHPMailer for email communication, FPDF for PDF generation, and Chart.js for real-time analytics, making it a comprehensive digital solution for the food service industry.",
  images: [
    {
      src: "/village/customer.jpg",
      alt: "Customer Panel",
      caption: "Ordering Interface",
    },
    {
      src: "/village/admin.jpg",
      alt: "Admin Panel",
      caption: "Management Dashboard",
    }
  ],
  techStack: [
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6", category: "Styling" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38B2AC", category: "Styling" },
    { name: "PHP", icon: "SiPhp", color: "#777BB4", category: "Backend" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1", category: "Database" },
    { name: "PHPMailer", icon: "SiGmail", color: "#D14836", category: "Email" },
    { name: "FPDF", icon: "SiAdobeacrobatreader", color: "#B72126", category: "PDF Generation" },
    { name: "Chart.js", icon: "SiChartdotjs", color: "#FF6384", category: "Analytics" },
    { name: "Razorpay", icon: "SiPaypal", color: "#00457C", category: "Payments" },
    { name: "XAMPP", icon: "SiXampp", color: "#FB7A24", category: "Development Environment" }
  ],
  keyFeatures: [
    {
      title: "Online Ordering",
      description: "Customers can browse restaurants, cuisines, and dishes, add items to their cart, and place orders with integrated Razorpay payment.",
      icon: "FaUtensils"
    },
    {
      title: "Real-Time Order Tracking",
      description: "Track order progress from placement to delivery with live status updates.",
      icon: "FaRocket"
    },
    {
      title: "Admin Dashboard",
      description: "Centralized management for restaurants, menu, users, orders, and payments with interactive charts and KPIs.",
      icon: "FaLightbulb"
    },
    {
      title: "PDF Generation",
      description: "Automatically generate receipts for orders and payments, as well as monthly transaction reports using FPDF.",
      icon: "FaFilePdf"
    },
    {
      title: "Email Notifications",
      description: "Automated welcome emails, order confirmations, and OTP-based password recovery via PHPMailer.",
      icon: "FaEnvelope"
    },
    {
      title: "Data Visualization",
      description: "Admin dashboard includes Chart.js-powered graphs to track revenue trends, top-selling items, order statuses, and more.",
      icon: "FaChartLine"
    }
  ],
  challenges:
    "Integrating and securing the Razorpay payment gateway, setting up OTP email verification for secure password recovery, and ensuring real-time dashboard updates without performance lag.",
  outcome:
    "Village Chef resulted in a responsive and scalable web solution that streamlined the entire online food ordering process and restaurant backend management. It offers an intuitive UI for customers and a powerful, insight-rich admin dashboard for restaurant operators."
}

];

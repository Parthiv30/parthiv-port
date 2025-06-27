// src/TechBackground.jsx

import { useMemo } from "react";
import { motion, useTransform } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiSap, SiTailwindcss,
  SiFigma, SiGit, SiDocker, SiKubernetes, SiTypescript, SiVuedotjs, SiPython,
  SiGo, SiRust, SiExpress,
} from "react-icons/si";

// An array of all the icons we want to use
const icons = [
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiSap, color: "#0FAAFF" },
  { icon: SiTailwindcss, color: "#38B2AC" },
  { icon: SiFigma, color: "#F24E1E" },
  { icon: SiGit, color: "#F05032" },
  { icon: SiDocker, color: "#2496ED" },
  { icon: SiKubernetes, color: "#326CE5" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiVuedotjs, color: "#4FC08D" },
  { icon: SiPython, color: "#3776AB" },
  { icon: SiGo, color: "#00ADD8" },
  { icon: SiRust, color: "#DEA584" },
  { icon: SiExpress, color: "#000000" },
];

// This function generates random properties for each icon
const generateIconProps = (count) => {
  return Array.from({ length: count }, (_, i) => {
    const iconData = icons[i % icons.length];
    return {
      id: i,
      icon: iconData.icon,
      color: iconData.color,
      // Random position on the screen (viewport width/height)
      x: Math.random() * 100,
      y: Math.random() * 100,
      // Random size
      size: 2 + Math.random() * 4, // size in rem
      // Random parallax effect strength
      parallaxFactor: 0.05 + Math.random() * 0.05,
      // Random initial rotation
      rotation: Math.random() * 360,
    };
  });
};

const TechIcon = ({ iconData, mouseX, mouseY }) => {
  const { icon: Icon, color, size, parallaxFactor, rotation } = iconData;

  // Create a parallax effect based on mouse position
  // The transform will move the icon slightly in the opposite direction of the mouse
  const parallaxX = useTransform(mouseX, [0, 1], [-size * parallaxFactor * 50, size * parallaxFactor * 50]);
  const parallaxY = useTransform(mouseY, [0, 1], [-size * parallaxFactor * 50, size * parallaxFactor * 50]);

  return (
    <motion.div
      className="absolute"
      style={{
        top: `${iconData.y}vh`,
        left: `${iconData.x}vw`,
        x: parallaxX,
        y: parallaxY,
        rotate: rotation,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: Math.random() * 2, duration: 1 }}
    >
      <Icon
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          color: color,
          opacity: 0.2, // Make icons subtle so they don't distract
        }}
      />
    </motion.div>
  );
};

export const TechBackground = ({ scrollY, mouseX, mouseY }) => {
  // useMemo ensures our random icons are only generated once
  const renderedIcons = useMemo(() => generateIconProps(30), []);

  // Get the total height of the page to create scroll checkpoints
  const pageHeight =
    typeof window !== "undefined"
      ? document.body.scrollHeight - window.innerHeight
      : 3000;

  // This is the core logic for the left-right "snaking" animation on scroll
  const containerX = useTransform(
    scrollY,
    // Keyframes: at which scroll points the animation changes
    [0, pageHeight * 0.25, pageHeight * 0.5, pageHeight * 0.75, pageHeight],
    // Output values: the horizontal position at each keyframe
    ["0vw", "-20vw", "20vw", "-20vw", "0vw"]
  );

  return (
    <motion.div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        // Apply the snaking X animation
        x: containerX,
        // Also apply a slower scroll to the Y-axis for a parallax effect
        y: useTransform(scrollY, [0, pageHeight], ["0vh", "30vh"]),
      }}
    >
      {renderedIcons.map((iconData) => (
        <TechIcon key={iconData.id} iconData={iconData} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </motion.div>
  );
};
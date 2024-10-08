import { motion, Transition, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";
import l_icon1 from "../../assets/skills/light/icon1.webp";
import l_icon10 from "../../assets/skills/light/icon10.webp";
import l_icon11 from "../../assets/skills/light/icon11.webp";
import l_icon12 from "../../assets/skills/light/icon12.webp";
import l_icon13 from "../../assets/skills/light/icon13.webp";
import l_icon2 from "../../assets/skills/light/icon2.webp";
import l_icon3 from "../../assets/skills/light/icon3.webp";
import l_icon4 from "../../assets/skills/light/icon4.webp";
import l_icon5 from "../../assets/skills/light/icon5.webp";
import l_icon6 from "../../assets/skills/light/icon6.webp";
import l_icon7 from "../../assets/skills/light/icon7.webp";
import l_icon8 from "../../assets/skills/light/icon8.webp";
import l_icon9 from "../../assets/skills/light/icon9.webp";

import d_icon1 from "../../assets/skills/dark/icon1.webp";
import d_icon10 from "../../assets/skills/dark/icon10.webp";
import d_icon11 from "../../assets/skills/dark/icon11.webp";
import d_icon12 from "../../assets/skills/dark/icon12.webp";
import d_icon13 from "../../assets/skills/dark/icon13.webp";
import d_icon2 from "../../assets/skills/dark/icon2.webp";
import d_icon3 from "../../assets/skills/dark/icon3.webp";
import d_icon4 from "../../assets/skills/dark/icon4.webp";
import d_icon5 from "../../assets/skills/dark/icon5.webp";
import d_icon6 from "../../assets/skills/dark/icon6.webp";
import d_icon7 from "../../assets/skills/dark/icon7.webp";
import d_icon8 from "../../assets/skills/dark/icon8.webp";
import d_icon9 from "../../assets/skills/dark/icon9.webp";
import useIsMobile from "../../hooks/useIsMobile";
import { useThemeStore } from "../../store/themeStore";

const lightIcons = [
  l_icon1,
  l_icon2,
  l_icon3,
  l_icon4,
  l_icon5,
  l_icon6,
  l_icon7,
  l_icon8,
  l_icon9,
  l_icon10,
  l_icon11,
  l_icon12,
  l_icon13,
];

const darkIcons = [
  d_icon1,
  d_icon2,
  d_icon3,
  d_icon4,
  d_icon5,
  d_icon6,
  d_icon7,
  d_icon8,
  d_icon9,
  d_icon10,
  d_icon11,
  d_icon12,
  d_icon13,
];

const initialPosition = {
  x: 0,
  y: 0,
};

const deskstopFinalPositions = [
  { x: -500, y: 0 },
  { x: 650, y: 100 },
  { x: 600, y: -50 },
  { x: -600, y: -150 },
  { x: -600, y: 250 },
  { x: 100, y: -250 },
  { x: -400, y: -300 },
  { x: 500, y: 200 },
  { x: -300, y: 0 },
  { x: 300, y: 0 },
  { x: 250, y: 300 },
  { x: 550, y: -300 },
  { x: -250, y: 250 },
];

const mobileFinalPositions = [
  { x: -100, y: 120 },
  { x: 150, y: 110 },
  { x: 120, y: -150 },
  { x: -120, y: -275 },
  { x: 0, y: 325 },
  { x: 10, y: -280 },
  { x: -100, y: -150 },
  { x: 5, y: 150 },
  { x: -150, y: 300 },
  { x: 150, y: 380 },
  { x: 125, y: -360 },
  { x: -150, y: -370 },
  { x: 100, y: 250 },
];

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Skills: React.FC = () => {
  const isMobile = useIsMobile();
  const { darkMode } = useThemeStore();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const finalPositions = useMemo(
    () => (isMobile ? mobileFinalPositions : deskstopFinalPositions),
    [isMobile]
  );

  const bubbleVariants: Transition = {
    initial: { scale: 0 },
    animate: (i: number) => ({
      scale: [0, 1.5, 1],
      x: [initialPosition.x, finalPositions[i].x],
      y: [initialPosition.y, finalPositions[i].y],
      transition: {
        delay: i * 0.075,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    oscillate: (i: number) => ({
      y: [
        finalPositions[i].y,
        finalPositions[i].y + randomInRange(-10, 10),
        finalPositions[i].y + randomInRange(-10, 10),
        finalPositions[i].y,
      ],
      x: [
        finalPositions[i].x,
        finalPositions[i].x + randomInRange(-10, 10),
        finalPositions[i].x + randomInRange(-10, 10),
        finalPositions[i].x,
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls
        .start((i) => bubbleVariants.animate(i))
        .then(() => {
          controls.start((i) => bubbleVariants.oscillate(i));
        });
    }
  }, [controls, inView]);

  const icons = useMemo(() => {
    return darkMode ? darkIcons : lightIcons;
  }, [darkMode]);

  return (
    <div className="skills-container" ref={ref} id="skills">
      <p className="main-text" data-color-inverted={"true"}>
        Always Building, <br />
        Always Growing.
      </p>
      {icons.map((icon, i) => (
        <motion.img
          src={icon}
          className="bubble"
          custom={i}
          initial="initial"
          animate={controls}
          variants={bubbleVariants as any}
          key={`icon-${i}`}
        />
      ))}
    </div>
  );
};

export default Skills;

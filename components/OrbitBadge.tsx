"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { IconCheck } from "@/components/icons";

type Props = {
  text?: string;
  size?: number;
  className?: string;
};

// A rotating circular "stamp" badge, styled after the flyer's "Devis Gratuit"
// seal — orbiting text around a fixed center icon.
export function OrbitBadge({ text = "DEVIS GRATUIT • DEVIS GRATUIT • ", size = 108, className = "" }: Props) {
  const pathId = useId();

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }} aria-hidden>
      <motion.svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <defs>
          <path id={pathId} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fill="currentColor" fontSize="8" fontWeight="700" letterSpacing="1.5">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center rounded-full bg-leaf-500 text-white shadow-lg h-[46%] w-[46%]">
          <IconCheck className="h-1/2 w-1/2" />
        </span>
      </div>
    </div>
  );
}

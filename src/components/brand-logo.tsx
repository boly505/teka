import { useState } from "react";
import { motion } from "framer-motion";
import { Cake } from "lucide-react";

import { cn } from "@/lib/utils";

type BrandLogoSize = "sm" | "lg";

interface BrandLogoProps {
  src: string;
  alt: string;
  size?: BrandLogoSize;
  className?: string;
}

const sizeMap = {
  sm: {
    shell: "h-[4.5rem] w-[4.5rem]",
    imageWrap: "inset-[4px]",
    image: "h-full w-full",
    imageScale: "scale-[1.35]",
  },
  lg: {
    shell: "h-80 w-80 sm:h-[22rem] sm:w-[22rem]",
    imageWrap: "inset-[8px]",
    image: "h-full w-full",
    imageScale: "scale-[1.45]",
  },
} as const;

export function BrandLogo({
  src,
  alt,
  size = "lg",
  className,
}: BrandLogoProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const currentSize = sizeMap[size];
  const ringThickness = size === "lg" ? 12 : 6;

  return (
    <motion.div
      className={cn("relative shrink-0", currentSize.shell, className)}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute -inset-3 rounded-full opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(244,114,182,0.55) 110deg, rgba(192,132,252,0.65) 220deg, rgba(255,255,255,0) 360deg)",
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #000 calc(100% - ${ringThickness - 1}px))`,
          mask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #000 calc(100% - ${ringThickness - 1}px))`,
          filter: "drop-shadow(0 14px 28px rgba(240,79,154,0.18))",
        }}
        animate={{ rotate: 360, scale: [1, 1.03, 1] }}
        transition={{ rotate: { duration: 16, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute -inset-1 rounded-full border border-pink-200/55"
        animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.015, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 rounded-full bg-white/88 shadow-[0_24px_60px_rgba(240,79,154,0.18)] backdrop-blur" />
      <div
        className={cn(
          "absolute overflow-hidden rounded-full border border-white/70 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
          currentSize.imageWrap,
        )}
      >
        {!hasImageError ? (
          <img
            src={src}
            alt={alt}
            className={cn(
              "object-cover object-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]",
              currentSize.image,
              currentSize.imageScale,
            )}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <Cake className="h-1/2 w-1/2 text-pink-500 drop-shadow-[0_8px_18px_rgba(0,0,0,0.12)]" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

"use client"

import React from "react"
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx"
import { FaYoutube } from "react-icons/fa"
import { motion } from "framer-motion"

const iconVariants = {
  initial: { scale: 1, rotate: 0, y: 0 },
  hover: {
    scale: 1.25,
    rotate: 8,
    y: -4,
    transition: { type: "spring", stiffness: 300 },
  },
}

const floatAnimation = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-10">

        {/* COMMUNITY */}
        <div className="min-w-[200px] text-center">
          <h3 className="font-bold mb-4">Community</h3>

          <FooterLink href="https://www.youtube.com/" label="YouTube">
            <FaYoutube />
          </FooterLink>

          <FooterLink href="https://github.com/" label="GitHub">
            <RxGithubLogo />
          </FooterLink>

          <FooterLink href="https://discord.com/" label="Discord">
            <RxDiscordLogo />
          </FooterLink>
        </div>

        {/* SOCIAL */}
        <div className="min-w-[200px] text-center">
          <h3 className="font-bold mb-4">Social</h3>

          <FooterLink href="https://instagram.com/" label="Instagram">
            <RxInstagramLogo />
          </FooterLink>

          <FooterLink href="https://twitter.com/" label="Twitter">
            <RxTwitterLogo />
          </FooterLink>

          <FooterLink href="https://linkedin.com/" label="LinkedIn">
            <RxLinkedinLogo />
          </FooterLink>
        </div>

        {/* ABOUT */}
        <div className="min-w-[200px] text-center">
          <h3 className="font-bold mb-4">About</h3>

          <motion.a
            whileHover={{ scale: 1.05, color: "#a855f7" }}
            href="#"
            className="block my-2"
          >
            Become Sponsor
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, color: "#a855f7" }}
            href="#"
            className="block my-2"
          >
            Learn about me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, color: "#a855f7" }}
            href="mailto:mifwebchain@gmail.com"
            className="block my-2"
          >
            mifwebchain@gmail.com
          </motion.a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-12">
        © WebChain Dev {new Date().getFullYear()} Inc. All rights reserved
      </p>
    </footer>
  )
}

export default Footer

/* ---------------- FOOTER LINK COMPONENT ---------------- */

function FooterLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 my-3 cursor-pointer"
      initial="initial"
      whileHover="hover"
      animate="animate"
    >
      <motion.span
        variants={floatAnimation}
        className="text-2xl"
      >
        <motion.span variants={iconVariants}>
          {children}
        </motion.span>
      </motion.span>

      <span className="transition-colors duration-200 hover:text-purple-400">
        {label}
      </span>
    </motion.a>
  )
}

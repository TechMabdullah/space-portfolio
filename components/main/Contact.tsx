"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sendEmail } from "@/app/actions/sendEmail"

type Status = "idle" | "loading" | "success" | "error"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(formData: FormData) {
    setStatus("loading")
    const res = await sendEmail(formData)
    setStatus(res.success ? "success" : "error")
  }

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => setStatus("idle"), 3000)
      return () => clearTimeout(t)
    }
  }, [status])

  return (
    <section className="relative py-40 flex justify-center">
      {/* GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-xl rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-10"
      >
<motion.h2
  variants={item}
  whileHover={{ color: "#a855f7" }} // purple-500
  transition={{ duration: 0.25 }}
  className="text-4xl font-bold mb-8 cursor-pointer"
>
  Let’s build something
</motion.h2>

        <motion.form
          action={handleSubmit}
          variants={container}
          className="space-y-5"
        >
          <motion.div variants={item}>
            <AnimatedInput name="name" placeholder="Your name" />
          </motion.div>

          <motion.div variants={item}>
            <AnimatedInput
              name="email"
              type="email"
              placeholder="Your email"
            />
          </motion.div>

          <motion.div variants={item}>
            <AnimatedTextarea
              name="message"
              placeholder="Your message"
            />
          </motion.div>

          <motion.div variants={item}>
            <SendMessageButton status={status} />

          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  )
}

/* ---------------- INPUT ---------------- */

function AnimatedInput(props: any) {
  return (
    <motion.input
      {...props}
      required
      whileFocus={{ scale: 1.03 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-purple-500"
    />
  )
}

/* ---------------- TEXTAREA ---------------- */

function AnimatedTextarea(props: any) {
  return (
    <motion.textarea
      {...props}
      required
      rows={4}
      whileFocus={{ scale: 1.03 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-purple-500 resize-none"
    />
  )
}

/* ---------------- BUTTON ---------------- */

function SendMessageButton({ status }: { status: Status }) {
  return (
    <motion.button
      type="submit"
      disabled={status === "loading"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-full h-14 rounded-xl overflow-hidden font-semibold 
                 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600
                 bg-[length:200%_200%] text-white flex items-center justify-center"
    >
      {/* Gradient Sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={status === "loading" ? { x: "100%" } : {}}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      <AnimatePresence mode="wait">
        {/* IDLE */}
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Send Message
          </motion.span>
        )}

        {/* LOADING */}
        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            Sending…
          </motion.span>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-green-200"
          >
            <Checkmark />
            Sent
          </motion.div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <motion.span
            key="error"
            initial={{ x: -10 }}
            animate={{ x: [ -10, 10, -6, 6, 0 ] }}
            transition={{ duration: 0.4 }}
            className="text-red-300"
          >
            Failed — try again
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}


/* ---------------- CHECKMARK ---------------- */

function Checkmark() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 6L9 17l-5-5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  )
}

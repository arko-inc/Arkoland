"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-zinc-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl text-center p-10 rounded-2xl shadow-2xl bg-zinc-800"
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-zinc-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hey, I’m <span className="text-purple-400">Arko</span> 🚀
        </motion.h1>

        <motion.p
          className="text-lg text-zinc-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A **future aerospace engineer**, innovator, and the **founder of Xpace**. 
          I’m on a mission to **revolutionize space travel** and take humanity **beyond Earth**.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://arkoverse.com"
            className="px-5 py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            My Portfolio 🌌
          </motion.a>

          <motion.a
            href="https://github.com/arko"
            className="px-5 py-2 bg-zinc-700 text-white rounded-lg shadow-lg hover:bg-zinc-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub ⚙️
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

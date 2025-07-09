import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-15 py-8 px-4 text-center border-t border-white/20"
    >
      <div className="max-w-6xl mx-auto text-gray-400 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg"
        >
          Made with 💻, ☕, and a lot of{" "}
          <span className="text-emerald-400 font-semibold">console.log()</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a href="#" target="_blank" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" target="_blank" className="hover:text-white transition">
            LinkedIn
          </a>
          <a
            href="mailto:udhayaparameshwaran@protonmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-gray-600"
        >
          &copy; {new Date().getFullYear()} Udhaya. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

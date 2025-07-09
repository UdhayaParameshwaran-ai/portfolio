import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="relative bg-gray-900 py-16 px-6 rounded-3xl shadow-inner overflow-hidden"
      id="footerOrContacts"
    >
      {/* Gradient blob */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-emerald-400/40 to-cyan-400/20 rounded-full blur-3xl opacity-50 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Let's Build Something Amazing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg"
        >
          Have a project idea or want to connect? I’m always excited to
          collaborate, learn, or help. Drop me a message and let’s chat!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          href="mailto:udhayaparameshwaran@protonmail.com"
          className="inline-block mt-4 px-8 py-3 text-gray-800 bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold text-lg rounded-full shadow-lg hover:scale-105 transition"
        >
          Say Hello 💬
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;

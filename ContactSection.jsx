
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Contact Us
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-2xl shadow p-6 mb-10"
        >
          <h3 className="text-xl font-semibold mb-4">
            ✅ Here’s What We’ll Include:
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-3">
              <Phone className="text-blue-600 animate-pulse" />
              <span>
                <strong>Phone:</strong>{" "}
                <a href="tel:+2349072167832" className="text-blue-600 hover:underline">
                  +2349072167832
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <MessageCircle className="text-green-600 animate-bounce" />
              <span>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/2349072167832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Click to chat
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-red-600 animate-ping" />
              <span>
                <strong>Email:</strong>{" "}
                <a href="mailto:teecinotc@gmail.com" className="text-red-600 hover:underline">
                  teecinotc@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-2xl shadow p-6"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

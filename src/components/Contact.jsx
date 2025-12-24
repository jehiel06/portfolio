import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setError(true);

          // Clear error message after 5 seconds
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-5xl sm:text-6xl text-orange-500 font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-white">Touch</span>
        </motion.div>

        <motion.p
          className="text-gray-300 text-center text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm actively seeking{" "}
          <span className="text-orange-500 font-semibold">
            internship opportunities
          </span>{" "}
          and open to collaborating on interesting projects. Feel free to reach
          out for opportunities, project collaborations, or just to connect!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8">
                Open to <span className="text-orange-500">internships</span>,{" "}
                <span className="text-orange-500">freelance projects</span>, and{" "}
                <span className="text-orange-500">collaborations</span>. Let's
                build something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="mailto:jehiel06.dev@gmail.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-black border border-gray-900 rounded-lg flex items-center justify-center group-hover:border-orange-500 transition-colors">
                  <FaEnvelope className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">jehiel06.dev@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jehiel06/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-black border border-gray-900 rounded-lg flex items-center justify-center group-hover:border-orange-500 transition-colors">
                  <FaLinkedin className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/jehiel06</p>
                </div>
              </a>

              <a
                href="https://wa.me/917092412303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-black border border-gray-900 rounded-lg flex items-center justify-center group-hover:border-orange-500 transition-colors">
                  <FaWhatsapp className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium">+91 7092412303</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-black border border-gray-900 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-black border border-gray-900 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your Email"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {success && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-500 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-500 text-sm">
                  ✗ Failed to send message. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

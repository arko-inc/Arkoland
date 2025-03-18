// components/Footer.js
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="bg-zinc-900 text-zinc-300   mix-blend-difference "
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-white">About Me</h2>
                        <p className="text-sm text-zinc-400">
                            Hi, I'm a passionate web developer dedicated to creating
                            innovative and user-friendly digital experiences. Whether it's
                            building sleek designs or optimizing performance, I love
                            turning ideas into reality.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <motion.a
                                    href="#projects"
                                    className="hover:text-zinc-100"
                                    whileHover={{ 
                                        scale: 1.4,
                                        rotate: [0, -5, 5, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    Projects
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#about"
                                    className="hover:text-zinc-100"
                                    whileHover={{ 
                                        scale: 1.4,
                                        rotate: [0, -5, 5, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    About Me
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#services"
                                    className="hover:text-zinc-100"
                                    whileHover={{ 
                                        scale: 1.4,
                                        rotate: [0, -5, 5, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    Services
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#contact"
                                    className="hover:text-zinc-100"
                                    whileHover={{ 
                                        scale: 1.4,
                                        rotate: [0, -5, 5, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    Contact
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-white">Follow Me</h2>
                        <div className="flex space-x-4">
                        <motion.a
                                href="https://yourwebsite.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-violet-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Globe className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-indigo-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Twitter className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-emerald-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Linkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:someone@example.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-yellow-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Mail className="w-6 h-6" />
                            </motion.a>
                          
                            <motion.a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-orange-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Instagram className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-rose-500"
                                whileHover={{ scale: 1.4 }}
                            >
                                <Youtube className="w-6 h-6" />
                            </motion.a>
                           
                        </div>
                    </motion.div>

                    {/* Email Me Form */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-white">Email Me</h2>
                        <form className="space-y-4">
                            <motion.input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                whileFocus={{ scale: 1.05 }}
                            />
                            <motion.input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                whileFocus={{ scale: 1.05 }}
                            />
                            <motion.textarea
                                placeholder="Your Message"
                                className="w-full px-4 py-2 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                rows="4"
                                style={{ height: '110px' }}
                                whileFocus={{ scale: 1.05 }}
                            />
                            <motion.button
                                type="submit"
                                className="w-full px-4 py-2 bg-zinc-800 cursor-pointer text-white rounded hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                whileHover={{ scale: 1.05 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="my-6 border-t border-zinc-700"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>

                {/* Copyright and Footer Links */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center space-y-4 text-sm text-zinc-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <p>© {currentYear} @Arkoland All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <motion.a
                            href="#privacy"
                            className="hover:text-zinc-100"
                            whileHover={{ scale: 1.1 }}
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="#terms"
                            className="hover:text-zinc-100"
                            whileHover={{ scale: 1.1 }}
                        >
                            Terms of Service
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}

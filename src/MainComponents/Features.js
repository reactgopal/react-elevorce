import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Features = () => {
    const [loaded, setLoaded] = useState(false);

    // Trigger the animation on component mount
    useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Features</h1>
                    <p className="hero-text">
                        Everything you need to manage your company, tasks, and employees efficiently.
                    </p>
                </div>
            </section>

            <section className="section__padding">
                <div className="container">
                    <div className="features__grid">
                        {/* Multi-Company Management Feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 12 }}
                            className="features__card"
                        >
                            <div className="features__icon"><i className="bi bi-building"></i></div>
                            <h3 className="features__title">Multi-Company Management</h3>
                            <p className="features__description">Add and manage multiple companies with their sites.</p>
                        </motion.div>

                        {/* Task Assignment & Tracking Feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.1 }}
                            className="features__card"
                        >
                            <div className="features__icon"><i className="bi bi-people"></i></div>
                            <h3 className="features__title">Task Assignment & Tracking</h3>
                            <p className="features__description">Assign work, monitor progress, and get updates in real-time.</p>
                        </motion.div>

                        {/* Leave Management Feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                            className="features__card"
                        >
                            <div className="features__icon"><i className="bi bi-calendar-check"></i></div>
                            <h3 className="features__title">Leave Management</h3>
                            <p className="features__description">Employees can request, managers approve/reject instantly.</p>
                        </motion.div>

                        {/* Attendance Monitoring Feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.3 }}
                            className="features__card"
                        >
                            <div className="features__icon"><i className="bi bi-clock"></i></div>
                            <h3 className="features__title">Attendance Monitoring</h3>
                            <p className="features__description">Track employee check-ins, check-outs, and work hours.</p>
                        </motion.div>

                        {/* Visa Expiry Alerts Feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.4 }}
                            className="features__card"
                        >
                            <div className="features__icon"><i className="bi bi-exclamation-triangle"></i></div>
                            <h3 className="features__title">Visa Expiry Alerts</h3>
                            <p className="features__description">Get instant alerts when employee visas are about to expire.</p>
                        </motion.div>

                        {/* Notifications Feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.5 }}
                            className="features__card"
                        >
                            <div className="features__icon"><i className="bi bi-bell"></i></div>
                            <h3 className="features__title">Notifications</h3>
                            <p className="features__description">Stay updated with push & in-app notifications.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <section className="section__padding">
                <div className="container">
                    <div className="features__grid">

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12 }}
                            viewport={{ once: true }}
                            className="features__card">
                            <div className="features__icon"><i className="bi bi-building"></i></div>
                            <h3 className="features__title">Multi-Company Management</h3>
                            <p className="features__description">Add and manage multiple companies with their sites.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="features__card">
                            <div className="features__icon"><i className="bi bi-people"></i></div>
                            <h3 className="features__title">Task Assignment & Tracking</h3>
                            <p className="features__description">Assign work, monitor progress, and get updates in real-time.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="features__card">
                            <div className="features__icon"><i className="bi bi-calendar-check"></i></div>
                            <h3 className="features__title">Leave Management</h3>
                            <p className="features__description">Employees can request, managers approve/reject instantly.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="features__card">
                            <div className="features__icon"><i className="bi bi-clock"></i></div>
                            <h3 className="features__title">Attendance Monitoring</h3>
                            <p className="features__description">Track employee check-ins, check-outs, and work hours.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="features__card">
                            <div className="features__icon"><i className="bi bi-exclamation-triangle"></i></div>
                            <h3 className="features__title">Visa Expiry Alerts</h3>
                            <p className="features__description">Get instant alerts when employee visas are about to expire.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="features__card">
                            <div className="features__icon"><i className="bi bi-bell"></i></div>
                            <h3 className="features__title">Notifications</h3>
                            <p className="features__description">Stay updated with push & in-app notifications.</p>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* <section className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h2 className="fw-bold mb-3">Ready to streamline your business?</h2>
                    <a href="#" className="btn btn-light btn-lg rounded-pill">
                        Get Started with ELEVORCE
                    </a>
                </div>
            </section> */}
        </div>
    )
}

export default Features;
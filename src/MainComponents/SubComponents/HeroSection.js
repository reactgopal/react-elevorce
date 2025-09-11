import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroSection = () => {
    return (
        <section className="section__padding hero__section">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Text Section */}
                    <div className="col-lg-6">
                        <motion.h1 className="display-4 fw-bold text-dark lh-sm mb-4"
                            initial={{ opacity: 0, x: -50 }}   // 👈 start from left
                            whileInView={{ opacity: 1, x: 0 }} // 👈 animate to normal position
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Your Workforce,{" "}
                            <span className="text-primary">Simplified.</span>
                        </motion.h1>

                        <motion.p className="lead text-secondary mb-4"
                            initial={{ opacity: 0, x: -50 }}   // 👈 also from left
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }} // 👈 slight delay for staggered effect
                            viewport={{ once: true }}
                        >
                            Manage companies, sites, employees, tasks, attendance,
                            and compliance — all in one platform.
                        </motion.p>

                        <motion.div className="d-flex flex-column flex-sm-row gap-3"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/inquiry" rel="noopener noreferrer" className="text-white text-decoration-none">
                                <button className="btn btn-primary btn-lg px-4 shadow">
                                    Get Started
                                </button>
                            </Link>
                            {/* <button className="btn btn-primary btn-lg px-4 shadow">
                                Request a Demo
                            </button> */}
                            {/* <button className="btn btn-outline-primary btn-lg px-4">
                                Start Free Trial
                            </button> */}
                        </motion.div>
                    </div>

                    {/* Right Image Section */}
                    <div className="col-lg-6 text-center">
                        <motion.div className="card border-0 rounded-4 overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/hero.png"
                                alt="ELEVORCE Dashboard Interface"
                                className="img-fluid"
                            />

                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection;
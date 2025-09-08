import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="section__padding bg-light">
            <div className="container">
                <div className="row align-items-center g-5">


                    {/* Text Side */}
                    <div className="col-lg-6">
                        <motion.h2 className="title__text"
                            initial={{ opacity: 0, x: -50 }}   // 👈 start from left
                            whileInView={{ opacity: 1, x: 0 }} // 👈 animate to normal position
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            About ELEVORCE
                        </motion.h2>
                        <motion.p className="subtitle__text"
                            initial={{ opacity: 0, x: -50 }}   // 👈 also from left
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }} // 👈 slight delay for staggered effect
                            viewport={{ once: true }}
                        >
                            ELEVORCE is an all-in-one workforce and site management solution
                            designed to simplify how businesses, site managers, and employees
                            work together.
                            <br /><br />
                            Our comprehensive platform streamlines operations, enhances productivity, and ensures seamless communication across all levels of your organization. From task management to compliance tracking, ELEVORCE empowers your team to work smarter and more efficiently.
                        </motion.p>
                    </div>

                    {/* Image Side */}
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="about__image position-relative">
                            <img
                                src="/images/about.png"
                                alt="Team collaboration illustration"
                                className="img-fluid rounded-4"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

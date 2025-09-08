import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Roles = () => {
    const [loaded, setLoaded] = useState(false);

    // Trigger the animation on component mount
    useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section ">
                <div className="container">
                    <h1 className="hero-title display-5 fw-bold">Roles</h1>
                    <p className="hero-text text-muted">
                        Different roles and their responsibilities
                    </p>
                </div>
            </section>
            <section className="section__padding">
                <div className="container">
                    <div className="row g-4">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            // whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12 }}
                            viewport={{ once: true }}
                            className="col-md-6 col-lg-4">
                            <div

                                className="role_cards__card h-100">
                                <div className="role_cards__icon">
                                    <i className="bi bi-building"></i>
                                </div>
                                <h3 className="role_cards__title">Company</h3>
                                <ul className="role_cards__description">
                                    <li>Register organization</li>
                                    <li>Add sites & employees</li>
                                    <li>Monitor compliance & reports</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            // whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="col-md-6 col-lg-4">
                            <div

                                className="role_cards__card h-100">
                                <div className="role_cards__icon ">
                                    <i className="bi bi-person-badge"></i>
                                </div>
                                <h3 className="role_cards__title">Site Manager</h3>
                                <ul className="role_cards__description">
                                    <li>Manage site employees</li>
                                    <li>Approve leaves</li>
                                    <li>Assign tasks</li>
                                    <li>Track attendance</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            // whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="col-md-6 col-lg-4">
                            <div

                                className="role_cards__card h-100">
                                <div className="role_cards__icon ">
                                    <i className="bi bi-person"></i>
                                </div>
                                <h3 className="role_cards__title">Employee</h3>
                                <ul className="role_cards__description">
                                    <li>View assigned tasks</li>
                                    <li>Apply for leave</li>
                                    <li>Get visa expiry alerts</li>
                                    <li>Track attendance records</li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Roles;
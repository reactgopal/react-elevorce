import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Download = () => {
    const [loaded, setLoaded] = useState(false);

    // Trigger the animation on component mount
    useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        <div className="section__padding">
            <div className="container">
                <section className="download-app">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={loaded ? { opacity: 1, y: 0 } : {}}

                        // whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12 }}
                        viewport={{ once: true }}
                        className="download-app__badge">
                        📲 Mobile App Available
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={loaded ? { opacity: 1, y: 0 } : {}}
                        // whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="download-app__title">
                        Download <span className="highlight">ELEVORCE</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={loaded ? { opacity: 1, y: 0 } : {}}

                        // whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="download-app__subtitle">Get the app for your device</motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={loaded ? { opacity: 1, y: 0 } : {}}

                        // whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="download-app__buttons">
                        <Link to="https://apps.apple.com/us/app/elevorce/id6751950179" target="_blank" className="btn btn-dark d-flex align-items-center">
                            <i className="bi bi-apple me-2 fs-4"></i> App Store
                        </Link>
                        {/* <Link to="/https://play.google.com/store/apps/details?id=com.iconfisys.elevorce&hl=en_IN" target="_blank" className="btn btn-success d-flex align-items-center">
                            <i className="bi bi-google-play me-2 fs-4"></i> Google Play
                        </Link> */}
                        <Link to="https://play.google.com/store/apps/details?id=your_app_id" target="_blank" className="btn btn-success d-flex align-items-center">
                            <i className="bi bi-google-play me-2 fs-4"></i> Google Play
                        </Link>
                    </motion.div>
                </section>
            </div>
        </div>
    )
}

export default Download;
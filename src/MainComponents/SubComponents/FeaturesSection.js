import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
    const features = [
        "Multi-Company Management",
        "Task Assignment Tracking",
        "Visa Expiry Alerts",
        "Leave Requests & Approvals",
        "Attendance Monitoring",
        "Real-Time Notifications",
    ];

    return (
        <section id="features" className="section__padding bg-background">
            <div className="container">
                <div className="main__heading text-center mb-5">
                    <motion.h2 className="title__text"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12 }}
                        viewport={{ once: true }}>
                        Key Features
                    </motion.h2>

                    <motion.p className="subtitle__text"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Streamline your workforce management with our comprehensive suite of tools
                    </motion.p>
                </div>

                {/* ✅ Each feature is in its own column */}
                <div className="feature-grid">
                    {features.map((feature, index) => (
                        <motion.div key={index} className="feature-item"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 12,
                                delay: index * 0.15
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="feature-icon">
                                <CheckCircle size={32} className="" />
                            </div>
                            <span className="feature-text">{feature}</span>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}

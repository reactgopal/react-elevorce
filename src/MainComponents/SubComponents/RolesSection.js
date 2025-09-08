import { Building2, Users, User } from "lucide-react";
import { motion } from "framer-motion";

export default function RolesSection() {
    // const roles = [
    //     {
    //         icon: Building2,
    //         title: "Company",
    //         description: "Register one for company companies sent",
    //         color: "text-primary"
    //     },
    //     {
    //         icon: Users,
    //         title: "Site Manager",
    //         description: "Manage employees or move analysis",
    //         color: "text-success"
    //     },
    //     {
    //         icon: User,
    //         title: "Employee",
    //         description: "Track tasks, apply for leave, and leaves.",
    //         color: "text-info"
    //     }
    // ];

    return (
        <section className="roles section__padding" id="roles">
            <div className="container">
                <div className="main__heading text-center mb-5">
                    <motion.h2 className="fw-bold"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12 }}
                        viewport={{ once: true }}
                    >Who Can Use ELEVORCE</motion.h2>
                </div>
                <div className="roles__grid">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12 }}
                        viewport={{ once: true }}
                        className="roles__card">
                        <div className="roles__icon">
                            <i className="bi bi-building"></i>
                        </div>
                        <h3 className="roles__title">Company</h3>
                        <ul className="role_cards__description">
                            <li>Register multiple companies</li>
                            <li>Add sites & employees</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="roles__card">
                        <div className="roles__icon">
                            <i className="bi bi-people"></i>
                        </div>
                        <h3 className="roles__title">Site Manager</h3>
                        <ul className="role_cards__description">
                            <li>Manage employees</li>
                            <li>Manage tasks</li>
                            <li>Manage attendance</li>
                            <li>Manage leaves</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="roles__card">
                        <div className="roles__icon">
                            <i className="bi bi-person"></i>
                        </div>
                        <h3 className="roles__title">Employee</h3>
                        {/* <p className="roles__description">
                            Track tasks, apply for leave, and leaves.
                        </p> */}
                        <ul className="role_cards__description">
                            <li>Track tasks</li>
                            <li>Apply leaves</li>
                            <li>Receive visa alerts</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";
import { motion } from "framer-motion";

export default function TermsOfConditions() {
    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            {/* Header Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Terms of Service</h1>
                </div>
            </section>

            {/* Terms Content */}
            <section className="section__padding">
                <div className="container mx-auto px-6 max-w-4xl space-y-8 text-gray-700 leading-relaxed">
                    {[
                        {
                            title: "1. Account Registration & Access",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li>Individuals cannot self-register for ELEVORCE.</li>
                                    <li>Companies must contact ELEVORCE to request access.</li>
                                    <li>Our Super Admin creates company accounts and provides credentials to the employer (company admin).</li>
                                    <li>Employers can then add sites and assign Site Managers.</li>
                                    <li>Site Managers may add Employees.</li>
                                    <li>Employees receive login credentials from their Site Manager or Employer.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "2. Eligibility",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li>You must be at least 18 years old to use the Service.</li>
                                    <li>If you are acting on behalf of a company, you confirm you have authority to do so.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "3. Features of the Service",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li><strong>Attendance Tracking –</strong> Employees can mark attendance using face detection or manual methods.</li>
                                    <li><strong>Task & Leave Management –</strong> Site Managers assign tasks, approve/reject leave, and monitor progress.</li>
                                    <li><strong>Visa & Compliance Alerts –</strong> Notifications for employee visa/document expirations.</li>
                                    <li><strong>Dashboards & Reports –</strong> For companies and employees to track attendance, tasks, and compliance.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "4. Biometric Data (Face Detection)",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li>Attendance may be recorded using facial recognition technology.</li>
                                    <li>Face data is converted into a secure mathematical template (embedding), not stored as raw images.</li>
                                    <li>Employers decide whether to enable biometric attendance.</li>
                                    <li>By using face detection attendance, employees consent to this data processing.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "5. Responsibilities",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li><strong>Super Admin –</strong> Manages overall access, multi-company setup, and system compliance.</li>
                                    <li><strong>Employers (Company Admins) –</strong> Add sites, Site Managers, and ensure accurate employee records.</li>
                                    <li><strong>Site Managers –</strong> Add employees, approve/reject leave, and monitor attendance.</li>
                                    <li><strong>Employees –</strong> Use their login credentials responsibly and truthfully mark attendance.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "6. Intellectual Property",
                            text: "All content, trademarks, software, and technology in ELEVORCE are owned or licensed by us. You may not copy, modify, or distribute without written consent.",
                        },
                        {
                            title: "7. Limitation of Liability",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li>ELEVORCE provides the Service “as is” without warranties.</li>
                                    <li>We do not guarantee uninterrupted accuracy of biometric data, attendance logs, or compliance alerts.</li>
                                    <li>We are not liable for losses resulting from incorrect attendance, missed visa alerts, or delayed notifications.</li>
                                    <li>Accuracy of data (e.g., visa dates, employee details) is the responsibility of the company.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "8. Termination",
                            text: (
                                <ul className="list-disc ps-6 space-y-1">
                                    <li>We may suspend or terminate company or user accounts for misuse or violation of these Terms..</li>
                                    <li>Continued use of the Service after updates means you accept revised Terms.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "9. Contact",
                            text: (
                                <p>
                                    For registration, support, or questions: <br />📧{" "}
                                    <a href="mailto:contact@elevorce.com" className="text-blue-600 hover:underline">
                                        contact@elevorce.com
                                    </a>
                                </p>
                            ),
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-2xl"
                            style={{ padding: "14px" }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            {typeof item.text === "string" ? <p>{item.text}</p> : item.text}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

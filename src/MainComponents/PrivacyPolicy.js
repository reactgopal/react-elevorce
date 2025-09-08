"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    };

    const sections = [
        {
            content:
                (
                    <p>
                        At <strong> ELEVORCE</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information within our workforce management platform.
                    </p>
                ),
        },
        {
            title: "1. Who We Are",
            content: (
                <p>
                    ELEVORCE ("we", "us") provides attendance, HR, and compliance
                    services. This Privacy Policy explains how we handle your data,
                    including biometric information.
                </p>
            ),
        },
        {
            title: "2. Account Registration",
            content: (
                <ul className="list-disc ps-6 space-y-1">
                    <li>ELEVORCE does not provide individual self-registration.</li>
                    <li>Companies interested in using ELEVORCE must contact us directly.</li>
                    <li>
                        Our <strong>Super Admin</strong> registers companies in the system
                        and provides login credentials to the employer account.
                    </li>
                    <li>
                        Employers may then add their sites, assign site managers, and site
                        managers can add employees.
                    </li>
                </ul>
            ),
        },
        {
            title: "3. Data We Collect",
            content: (
                <ul className="list-disc ps-6 space-y-1">
                    <li>
                        <strong>Personal Information:</strong> Name, email, company details.
                    </li>
                    <li>
                        <strong>Employment Data:</strong> Attendance logs, shift details,
                        leave records.
                    </li>
                    <li>
                        <strong>Biometric Data (Face Detection):</strong>
                        <ul className="list-disc ps-6 space-y-1">
                            <li>
                                For attendance, ELEVORCE may use face detection technology. This
                                data is processed securely and never shared with unauthorized
                                parties.
                            </li>
                            <li>Face embeddings/templates are generated for attendance.</li>
                            <li>We do not store raw images or videos of your face.</li>
                            <li>
                                Biometric data is stored securely on device or encrypted in
                                servers (depending on company setup).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Technical Data:</strong> Device details, app usage
                        statistics, IP address.
                    </li>
                </ul>
            ),
        },
        {
            title: "4. How We Use Your Data",
            content: (
                <ul className="list-disc ps-6 space-y-1">
                    <li>To authenticate employees via face recognition for attendance.</li>
                    <li>
                        To provide HR features like task assignment, leave management, and
                        compliance alerts.
                    </li>
                    <li>
                        To notify employees about shift changes, holidays, and visa expiry.
                    </li>
                    <li>To improve our services through anonymized analytics.</li>
                </ul>
            ),
        },
        {
            title: "5. Access Control",
            content: (
                <ul className="list-disc ps-6 space-y-1">
                    <li>
                        <strong>Super Admin:</strong> Manages multi-company registration and
                        oversight.
                    </li>
                    <li>
                        <strong>Employer (Company Admin):</strong> Adds sites and site
                        managers.
                    </li>
                    <li>
                        <strong>Site Manager:</strong> Adds and manages employees.
                    </li>
                    <li>
                        <strong>Employee:</strong> Can log in to view tasks, apply leave,
                        and mark attendance.
                    </li>
                </ul>
            ),
        },
        {
            title: "6. Data Storage & Security",
            content: (
                <ul className="list-disc ps-6 space-y-1">
                    <li>
                        We use industry-standard security measures to protect data. Access
                        is role-based, and no personal information is shared without
                        consent.
                    </li>
                    <li>
                        Face data is stored only as encrypted biometric templates, not raw
                        images.
                    </li>
                    <li>Strong encryption and access control are applied.</li>
                    <li>
                        Data is retained only while your employment/company account is
                        active, unless longer retention is legally required.
                    </li>
                </ul>
            ),
        },
        {
            title: "7. Your Rights",
            content: (
                <ul className="list-disc ps-6 space-y-1">
                    <li>
                        You can:
                        <ul className="list-disc ps-6 space-y-1">
                            <li>Request to view your stored attendance/biometric record.</li>
                            <li>
                                Request correction or deletion of your data (subject to employer
                                policies).
                            </li>
                            <li>
                                Companies may request updates or deletion of employee data by
                                contacting us at{" "}
                                <a
                                    href="mailto:contact@elevorce.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    contact@elevorce.com
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        {
            title: "8. Children’s Data",
            content: (
                <p>We do not knowingly collect data from individuals under 18.</p>
            ),
        },
        {
            title: "9. Policy Updates",
            content: (
                <p>
                    We may update this Policy. Significant changes will be communicated
                    in-app or via email.
                </p>
            ),
        },
        {
            title: "10. Contact",
            content: (
                <p>
                    For privacy concerns, email us: <br /> 📧{" "}
                    <a
                        href="mailto:privacy@elevorce.com"
                        className="text-blue-600 hover:underline"
                    >
                        privacy@elevorce.com
                    </a>
                </p>
            ),
        },
        {
            title: "Key Additions for Face Detection",
            content: (
                <div>
                    <p className="font-semibold text-yellow-800 mb-2">
                        Important Additions regarding Biometric Data:
                    </p>
                    <ul className="list-disc ps-6 space-y-1 text-yellow-700">
                        <li>
                            Biometric Data clause is added in both Terms & Privacy Policy.
                        </li>
                        <li>
                            Storage format clarified (embeddings, not raw photos or videos).
                        </li>
                        <li>
                            Consent and employee rights (data deletion) explicitly included.
                        </li>
                        <li>
                            Compliance responsibility rests with the employer (varies by
                            country).
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div>
            {/* Header Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Privacy Policy</h1>
                    {/* <p className="hero-text">At  ELEVORCE, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information within our workforce management platform.</p> */}
                </div>
            </section>

            {/* Privacy Content */}
            <section className="section__padding">
                <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 leading-relaxed">
                    {sections.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-2xl"
                            style={{ padding: "14px" }}

                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <div>{item.content}</div>
                        </motion.div>
                    ))}

                </div>
            </section>
        </div>
    );
}

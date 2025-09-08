import React, { useState } from "react";
import { Contact } from "../Services/apiServices";
import { toast } from "react-toastify";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    console.log(formData, "formdata");
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, "name");
        console.log(value, "value ");
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setResponseMsg("");

        Contact(formData).then((res) => {
            if (!res?.success) {
                toast.error(res.message);
                setResponseMsg("❌ Failed to send message.");

            } else {
                toast.success(res.message);

                // setResponseMsg("✅ " + res.message);
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            }
            setLoading(false);
        });
    };

    return (
        <div >
            {/* Header */}
            <section className="hero-section">
                <div className="container text-center">
                    <h1 className="hero-title">Contact Us</h1>
                    {/* <p className="hero-text">E We are always excited to hear from you. If you have any suggestions,
                        feedback or questions, feel free to get in touch with us.</p> */}
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-row">
                        {/* Left Side Illustration */}
                        <div className="contact-image">
                            <img
                                src="/images/contact-img.png"
                                alt="Contact Illustration"
                                className="img-fluid"
                            />
                        </div>

                        {/* Right Side Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-Mail"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Mobile Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        rows={4}
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                {/* <button type="submit" className="contact-btn">
                                    Submit
                                </button> */}
                                <button type="submit" className="contact-btn" disabled={loading}>
                                    {loading ? "Sending..." : "Submit"}
                                </button>
                            </form>
                            {/* {responseMsg && <p className="mt-3">{responseMsg}</p>} */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;
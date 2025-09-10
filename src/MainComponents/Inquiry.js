import React, { useRef, useState } from "react";
import { Contact } from "../Services/apiServices";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Inquiry = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);
    const captchaRef = useRef(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        // 🔴 Captcha validation
        if (!captchaValue) {
            toast.error("Please verify reCAPTCHA!");
            return;
        }

        setLoading(true);
        setResponseMsg("");

        Contact({ ...formData, "g-recaptcha-response": captchaValue }).then((res) => {
            console.log(res, " response from contact us");
            if (!res?.success) {
                toast.error(res.message);
                setResponseMsg("❌ Failed to send message.");

            } else {
                toast.success(res.message);
                setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
                setCaptchaValue(null);
                captchaRef.current.reset();  // <-- reset captcha tick

            }
            setLoading(false);
        });
    };

    return (
        <div >  
            {/* Header */}
            <section className="hero-section">
                <div className="container text-center">
                    <h1 className="hero-title">Inquiry Form</h1>
                    {/* <p className="hero-text">E We are always excited to hear from you. If you have any suggestions,
                        feedback or questions, feel free to get in touch with us.</p> */}
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-section">
                <div className="container" >
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
                                        placeholder="Name*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-Mail*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Mobile Number (optional)"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name*"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject*"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        rows={4}
                                        name="message"
                                        placeholder="Message*"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                {/* 🔑 Add reCAPTCHA here */}
                                <div className="form-group mt-3 recaptcha-wrapper">
                                    <ReCAPTCHA
                                        ref={captchaRef}
                                        sitekey="6LfO-cErAAAAAD9wH28C9jb9yu4kRfExmv2Iu63X"
                                        onChange={handleCaptchaChange}
                                    />
                                </div>

                                {/* <div className="form-group mt-3">
                                    <ReCAPTCHA
                                        ref={captchaRef}                 // ✅ add ref
                                        sitekey="6LfO-cErAAAAAD9wH28C9jb9yu4kRfExmv2Iu63X"  // 👉 Replace with your site key
                                        onChange={handleCaptchaChange}
                                    />
                                </div> */}
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

export default Inquiry;
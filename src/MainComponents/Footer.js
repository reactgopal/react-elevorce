import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row g-5">

                    {/* Company Info */}
                    <div className="col-md-4">
                        <img
                            src="/images/temp_logo.png"
                            alt="ELEVORCE Logo"
                            className="mb-3"
                            style={{ height: '50px' }}
                        />
                        <p>
                            Empowering construction companies with intelligent workforce management solutions.
                        </p>
                        <div className="d-flex gap-3 social mt-3">
                            <Link to="/"><Linkedin size={18} /></Link>
                            <Link to="/"><Twitter size={18} /></Link>
                            <Link to="/"><Facebook size={18} /></Link>
                            <Link to="/"><Instagram size={18} /></Link>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="col-md-2">
                        <h6>Product</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/roles">Roles</Link></li>
                            {/* <li><Link to="/">Integrations</Link></li> */}
                            {/* <li><Link to="/">API</Link></li> */}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="col-md-2">
                        <h6>Company</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/download">Download</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            {/* <li><Link to="/">About Us</Link></li> */}
                            {/* <li><Link to="/">Careers</Link></li> */}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="col-md-2">
                        <h6>Support</h6>
                        <ul className="list-unstyled">
                            {/* <li><Link to="#">Help Center</Link></li> */}
                            {/* <li><Link to="#">Documentation</Link></li> */}
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom mt-5">
                    {/* <p>Develope and Design by Iconfisys Private Limited ©copyright{new Date().getFullYear()} ELEVORCE.</p> */}
                    <p>Designed, Developed and Managed by Iconfisys Pvt Ltd (India) © Copyright 2025 Elevorce UK, All Rights Reserved.</p>
                    <div className="d-flex gap-4 justify-content-center justify-content-md-start">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-and-conditions">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
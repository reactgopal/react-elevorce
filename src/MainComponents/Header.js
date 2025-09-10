import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-light border-bottom sticky-top">
            <div className="container py-3">
                <div className="d-flex align-items-center justify-content-between">
                    {/* Mobile Toggle */}
                    <button
                        className="menu-btn d-md-none"
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </button>

                    {/* brand and logo */}
                    <div className="d-flex align-items-center">
                        <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
                            {/* <div className="logo-badge me-2">
                                E
                            </div>
                            <h1 className="h4 fw-bold m-0">ELEVORCE</h1> */}
                            <img src="/images/temp_logo.png" alt="ELEVORCE Logo" className="ms-2" style={{ height: '40px', width: 'auto' }} />
                        </Link>
                    </div>

                    {/* Navbar */}
                    <nav className="d-none d-md-flex nav-links">
                        <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
                        <Link to="/features" className={`nav-link ${pathname === "/features" ? "active" : ""}`}>Features</Link>
                        <Link to="/roles" className={`nav-link ${pathname === "/roles" ? "active" : ""}`}>Roles</Link>
                        {/* <Link to="/contact-us" className={`nav-link ${pathname === "/contact_us" ? "active" : ""}`}>Contact Us</Link> */}
                        <Link to="/download" className={`nav-link ${pathname === "/download" ? "active" : ""}`}>Download</Link>
                    </nav>

                    {/* Button */}
                    {/* <a href="https://admin.elevorce.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                        <button className="btn btn-primary">
                            Login
                        </button>
                    </a> */}
                    <Link to="/inquiry" rel="noopener noreferrer" className="text-white text-decoration-none">
                        <button className="btn-inquiry">
                            Inquiry
                            {/* INQUIRY */}
                        </button>
                    </Link>
                </div>

                {/* Overlay */}
                {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

                {/* Sidebar */}
                <div className={`sidebar ${open ? "open" : ""}`}>
                    <div className="sidebar-header">
                        <h5 className="brand">ELEVORCE</h5>
                        <button className="close-btn" onClick={() => setOpen(false)}>×</button>
                    </div>

                    <nav className="sidebar-links">
                        <Link to="/" onClick={() => setOpen(false)} className={pathname === "/" ? "active" : ""}>Home</Link>
                        <Link to="/features" onClick={() => setOpen(false)} className={pathname === "/features" ? "active" : ""}>Features</Link>
                        <Link to="/roles" onClick={() => setOpen(false)} className={pathname === "/roles" ? "active" : ""}>Roles</Link>
                        <Link to="/inquiry" onClick={() => setOpen(false)} className={pathname === "/inquiry" ? "active" : ""}>Inquiry</Link>
                        <Link to="/download" onClick={() => setOpen(false)} className={pathname === "/download" ? "active" : ""}>Download</Link>
                        {/* <Link
                            to="inquiry"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="login-btn"
                        >
                            Inquiry
                        </Link> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
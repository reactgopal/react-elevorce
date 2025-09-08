import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="section__padding">
            <div className="container">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-primary">404</h1>
                    <p className="fs-3 fw-bold">Page Not Found</p>
                    <p className="text-muted mb-4">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/" className="btn btn-primary">
                            <i className="bi bi-house-door me-2"></i> Go Home
                        </Link>
                        <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">
                            <i className="bi bi-arrow-left me-2"></i> Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
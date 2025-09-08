const DataDeletion = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Request Data Deletion</h1>
                    {/* <p className="hero-text">
                            Welcome to ELEVORCE. Please read these Terms carefully before using our platform.
                        </p> */}
                </div>
            </section>
            <section className="container mt-5 mb-5">
                <div className="mt-5 mb-5">
                    <h4><strong>Data Deletion Right</strong></h4>
                    <p>
                        If a user contacts us via{" "}
                        <a href="mailto:contact@elevorce.com" target="_blank" rel="noopener noreferrer">
                            contact@elevorce.com
                        </a>{" "}
                        for bug report or help &amp; feedback, their email will be collected by us for the
                        sole purpose of communication and resolving the issue. However, if the user wishes to
                        exercise their Data Deletion Right, they can request us to delete their data from our
                        records. We will promptly respond to the user's request and take necessary actions
                        to delete their data from our records.
                    </p>
                </div>
                <hr />

                <div className="mt-5 mb-5">
                    <h4><strong>Instructions for Requesting Data Deletion</strong></h4>
                    <p>
                        To request data deletion, users may send an email to{" "}
                        <a href="mailto:contact@elevorce.com" target="_blank" rel="noopener noreferrer">
                            contact@elevorce.com
                        </a>{" "}
                        mentioning their email or phone number or username which they use to create an account
                        in our app and also mention their first and last name. The subject line of the email should
                        read <strong>'ELEVORCE data deletion request'</strong> and the email should include all necessary details.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DataDeletion;
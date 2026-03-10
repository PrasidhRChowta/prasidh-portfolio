import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Development Intern</h4>
                <h5>Inventeron</h5>
              </div>
              <h3>Jan 2023 - Mar 2023</h3>
            </div>
            <p>
              Worked on a client-facing web and mobile application prototype using
              React (web) and Flutter (mobile). Translated Canva-based UI designs into
              responsive screens, connected REST APIs, and implemented Firebase
              Authentication for signup, login, and password reset.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>Gravity Key</h5>
              </div>
              <h3>Apr 2025 - Jan 2026</h3>
            </div>
            <p>
              Delivered and maintained 30+ screens across web and mobile using React,
              Flutter, Node.js, and Firebase. Implemented end-to-end authentication
              (email/password, social login, OTP), integrated REST APIs, and debugged
              issues across frontend, backend, and mobile layers within Agile teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Focusing on full stack development with React, Node.js, Express.js,
              and modern tooling. Interested in roles where I can build end-to-end
              features, work closely with product and design, and keep growing as a
              software engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

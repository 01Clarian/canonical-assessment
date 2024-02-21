import React from "react";

const contextForm = () => {
  return (
    <form action="#">
      <div className="form-touch-context-input-group mb-20">
        <div className="form-touch-context-input">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="form-touch-context-input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-touch-context-input">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
        </div>
      </div>
      <div className="form-touch-context-input">
        <button type="submit" className="canonical-assessment-theme-btn border-0">
          Get In Touch
        </button>
      </div>
    </form>
  );
};

export default contextForm;

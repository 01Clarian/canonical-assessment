"use client";

const ForgotForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="login__input-wrapper">
          <div className="login__input-item">
            <div className="signup-wrapper">
              <input type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="mb-20">
          <button className="canonical-assessment-theme-btn canonical-assessment-theme-btn-2" type="submit">
            Send Request
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgotForm;

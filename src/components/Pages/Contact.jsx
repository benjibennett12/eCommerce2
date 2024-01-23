import React from "react";

export default function Contact({ handlePageChange }) {
  handlePageChange("Contact");

  const [formData, setFormData] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    dropdown: "",
    comment: "",
  });

  const [nameError, setNameError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateName = () => {
    const nameValue = formData.name.trim();
    if (nameValue === "" || nameValue === undefined) {
      setNameError("Please fill out this form");
    } else {
      setNameError("");
    }
  };

  const validatePhone = () => {
    const phoneValue = formData.phoneNumber.trim();
    const phoneRegex = /^\d+$/;

    if (phoneValue === "" || phoneValue === undefined) {
      setPhoneError("Please fill out this form");
    } else if (!phoneRegex.test(phoneValue)) {
      setPhoneError("Numbers Only");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = () => {
    const emailValue = formData.email.trim();
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (emailValue === "" || emailValue === undefined) {
      setEmailError("Please fill out this form");
    } else if (!emailRegex.test(emailValue)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    validateName();
    validatePhone();
    validateEmail();
  };

  return (
    <div>
      <main>
        <section>
          <div className="container">
            <h1>Subscribe to Us</h1>
            <p>
              Submit your information here for monthly deals and exclusive
              offers
            </p>
            <div className="contact-box">
              <div className="contact-left">
                <h3>Join Here</h3>
                <form onSubmit={handleSubscribe} id="subscribe">
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name Here"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={validateName}
                      />
                      <div
                        className="error-message"
                        id="nameError"
                        style={{ display: nameError ? "block" : "none" }}
                      >
                        {nameError}
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input
                        id="phone"
                        maxLength={12}
                        type="text"
                        placeholder="234-342-6754"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onBlur={validatePhone}
                      />
                      <div
                        className="error-message"
                        id="phoneError"
                        style={{ display: phoneError ? "block" : "none" }}
                      >
                        {phoneError}
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="monochrome@gmail.com"
                      name="email" // Change this from "phoneNumber" to "email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={validateEmail}
                    />
                    <div
                      className="error-message"
                      id="emailError" // Change this from "phoneError" to "emailError"
                      style={{ display: emailError ? "block" : "none" }}
                    >
                      {emailError}
                    </div>
                  </div>

                  <button type="submit" id="subscribeForm">
                    SEND
                  </button>
                </form>
              </div>
              <div className="contact-right">
                <h3>Reach Me</h3>

                <table>
                  <tr>
                    <td>Email:</td>
                    <td>awcstore@menswork.com</td>
                  </tr>
                  <tr>
                    <td>Phone Number:</td>
                    <td>123-456-7890</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Bronx, New York</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .container {
          max-width: 80%;
          margin: 50px auto;
          padding: 5%;
        }

        .contact-box {
          background: #ededed;
          display: flex;
          height: auto;
        }
        .bm-menu-wrap MenuClass {
          z-index: -1; !important
        }

        .contact-left {
          flex-basis: 50%;
          padding: 5%;
          color: #333;
        }

        .contact-right {
          flex-basis: 50%;
          padding: 5%;
          background: black;
          color: #ededed;
        }

        h1 {
          margin-bottom: 10px;
          color: #ededed;
        }

        .container h1 {
          color: black;
        }

        .container p {
          margin-bottom: 40px;
          color: black;
        }

        .input-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .input-row .input-group {
          flex-basis: 45%;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid #ccc;
          outline: none;
          box-sizing: border-box;
        }

        label {
          margin-bottom: 6px;
          display: block;
        }

        tr td:first-child {
          padding: 20px;
        }

        tr td {
          padding: 20px;
          color: #ededed;
        }

        .input-group {
          position: relative;
        }

        .input-group .error-message {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          color: red;
          margin-top: 5px;
          font-size: 12px;
        }

        #subscribeForm {
          margin-top: 20px;
        }

        @media screen and (max-width: 768px) {
          main {
            margin-top: 200px;
          }

          .contact-box {
            flex-direction: column;
          }

          .contact-left,
          .contact-right {
            flex-basis: 100%;
          }

          .input-row {
            flex-direction: column;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
}

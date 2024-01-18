import React from "react";

export default function Contact() {
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
                <h3>Send Your Feedback</h3>
                <form onSubmit="handleSubscribe(event)" id="subscribe">
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" placeholder="Name Here" />
                      <div
                        className="error-message"
                        id="nameError"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input
                        id="phone"
                        maxLength={12}
                        type="text"
                        placeholder="234-342-6754"
                      />
                      <div className="error-message" id="phoneError" />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="john123@google.com"
                      />
                      <div className="error-message" id="emailError" />
                    </div>
                    <div className="input-group">
                      <label>Department</label>
                      <select row={5} id="dropdown">
                        <option value="">None</option>
                        <option value="clothing">Clothing</option>
                        <option value="shoe">Shoe</option>
                        <option value="Acessories">Acessories</option>
                      </select>
                      <div className="error-message" id="dropdownError" />
                    </div>
                  </div>
                  <label>Comment Section</label>
                  <textarea
                    rows={3}
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                  <button type="submit" id="subscribeForm">
                    SEND
                  </button>
                </form>
              </div>
              <div className="contact-right">
                <h3>Reach Me</h3>
                <table>
                  <tbody>
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
                  </tbody>
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

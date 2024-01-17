import React from 'react'
import '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Pages/Contact.css'

export default function Contact() {
    
  return (
    <div>
        <main>
  <section>
    <div className="container">
      <h1>Subscribe to Us</h1>
      <p>Submit your information here for monthly deals and exclusive offers</p>
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
            <textarea rows={3} placeholder="Your Message" defaultValue={""} />
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

    </div>
  )
}

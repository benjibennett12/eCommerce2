import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="my-footer">
        <div class="list1">
            <ul>
                <li>Contact Us</li>
                <li>Delivery Info</li>
                <li>Returns & Refunds</li>
                <li>Store Locator</li>
                <li>Customer Service</li>
                <li>Payment</li>
                <li>FAQs</li>
                <li>Privacy Notice</li>
            </ul>
        </div>
        <div class="list2">
            <ul>
                <li>Student Discount</li>
                <li>Sustainability</li>
                <li>COS x thredUP</li>
                <li>Suppliers List</li>
                <li>Inclusion & Diversity</li>
                <li>Fit Guide</li>
                <li>Size Guide</li>
                <li>Product Care</li>
            </ul>
        </div>
        <div class="list3">
        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <div className="input-container">
            <input type="email" placeholder="Enter your email address" />
            <div className="input-underline"></div>
          </div>
          <button className="subscribe-button">Subscribe</button>
        </div>
            <ul>
                <li>Facebook</li>
                <li>Pinterest</li>
                <li>Instagram</li>
                <li>Spotify</li>
            </ul>
        </div>
    </footer>
    <style jsx>{`
    .my-footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        height: 600px;
        box-sizing: border-box;
        overflow: hidden;
    }
    
    .my-footer .list1 ul,
    .my-footer .list2 ul {
        display: flex;
        flex-direction: column;
        margin: 10px;
        list-style-type:none ;
    }
    .my-footer .list3 ul {
        display: flex;
        width: 700px;
        justify-content: space-evenly;
        flex-direction: row;
        margin: 10px;
        list-style-type:none ; 
    }
    
    
    .newsletter {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
      }
      
      .input-container {
        display: flex;
        align-items: center;
      }
      
      .input-container input {
        border: none;
        border-bottom: 1px solid #333;
        padding: 5px;
        width: 300px;
        margin-right: 10px;
      }
      
      .input-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #333;
      }
      
      .subscribe-button {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        margin-left: 10px;
      }
    
      .list1 {
        margin-right: auto;
      }
      
      .list2 {
        margin-right: 20px;
      }
      
      .list3 {
        margin-left: auto;
      }
      @media screen and (max-width: 965px) {
        .my-footer .list3 { /* Add class selector for list3 */
          display: flex;
          flex-direction: column;
        }
        .my-footer .list1 ul,
        .my-footer .list2 ul {
          display: none !important;
        }
      }
      
      @media screen and (max-width: 588px) {
        .my-footer .list3 ul li {
          display: flex;
          flex-direction: column;
        }
      }
    `}</style>
    </div>
  )
}

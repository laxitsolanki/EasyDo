import React from "react";
import phone from "../../assets/phone.png";
import "./AppDevice.css"; // Import the CSS file

function AppDevice() {
  return (
    <>
      <div className="main-container">
        {/* Image section */}
        <div className="image-section">
          <img src={phone} alt="not found" />
        </div>

        {/* Text sections */}
        <div className="text-section">
          <div className="text-part">
            <span>
              <h3>Simplified leave & <br />attendance</h3>
              <p>
                Let employees clock in or take leave- remotely, on field or in-office. Embrace self-accountability.
              </p>
            </span>
            <span>
              <h3>Tax and Expense  <br />- in 2 Clicks</h3>
              <p>
                Let employees manage tax declarations and proofs. File and update expenses in 2 clicks.
              </p>
            </span>
            <span>
              <h3>A Culture <br />
              of Recognition</h3>
              <p>
              Give and Receive Praises to build a culture of recognition. Take a moment to take it in.
              </p>
            </span>
            <span>
              <h3>Approvals from <br /> a single window</h3>
              <p>
                Enable managers to approve or reject requests from a single window.
              </p>
            </span>
          </div>

          <div className="text-part">
            <span>
              <h3>Adaptable to employee <br />
              preferences</h3>
              <p>
              Each employee can find their preferred features on the main screen
              </p>
            </span>
            <span>
              <h3>Faster resolution of  <br />employee issues</h3>
              <p>
                A reliable help-desk with super-easy process for raising and resolving issues.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDevice;

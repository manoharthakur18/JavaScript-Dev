import React from "react";
import "./contact.css";

function ContactUs() {
  return (
    <div className="background">
      <div className="container contact-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <h1>Contact Us</h1>
              <p>
                Feel free to get in touch with us for any inquiries, feedback,
                or assistance. Our dedicated team is here to help you. Whether
                you have questions about our products or services, need support,
                or simply want to say hello, we're just a message away. Your
                thoughts and opinions are important to us, and we're committed
                to providing you with the best possible experience. Reach out to
                us today!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    rows="6"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => e.preventDefault()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

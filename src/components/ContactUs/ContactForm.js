import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { apiAxios } from "../../service/apiAxios";
import ReCAPTCHA from "react-google-recaptcha";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will get back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [recaptcha, setRecaptcha] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (recaptcha) {
      try {
        const url = `${baseUrl}/api/contact`;
        const { name, email, number, subject, text } = contact;
        const payload = { name, email, number, subject, text };
        const response = await apiAxios.post(url, payload);
        // console.log(response);
        setContact(INITIAL_STATE);
        alertContent();
      } catch (error) {
        // console.log(error);
      }
    }
  };

  const onChangeCaptcha = () => {
    setRecaptcha(true);
  };

  return (
    <section className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span>Contact Us</span>
          <h2>Drop us a message for any query</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium.
            Aliquam minus quisquam velit in at nam.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone number"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="form-control"
                          value={contact.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="Write your message..."
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <ReCAPTCHA sitekey={String(process.env.NEXT_PUBLIC_RE_CAPTCHA_KEY)} onChange={onChangeCaptcha} />

                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn btn-two">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

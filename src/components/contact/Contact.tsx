import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import "./contact.css";

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    formData.append("time", new Date().toLocaleString());
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        // console.log("Email sent:", result.text);
        setMessageStatus("success");
        formRef.current!.reset();
      },
      (error) => {
        // console.log("Email error:", error.text);
        setMessageStatus("error");
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <p>Have a question or want to work together? Send me a message!</p>

            <h5>dainyjose.mary@gmail.com</h5>
            <a href="mailto:dainyjose.mary@gmail.com?subject=Contact%20from%20Portfolio">
              Send a message...
            </a>
          </article>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            placeholder="Your message"
            rows={7}
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary contact_submit"
          >
            Send Message... <BiMailSend className="icon" />
          </button>
          {messageStatus === "success" && (
            <span>Thanks! I’ll get back to you as soon as possible 🙂</span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

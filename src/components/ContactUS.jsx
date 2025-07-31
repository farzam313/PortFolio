import React from "react";
import Button from "./Button";
import { FaRegCommentDots } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import SocialMedia from "./SocialMedia";

const ContactUS = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3qac08p", // e.g., service_xyz123
        "template_1fvvvkb", // e.g., template_abc456
        form.current,
        "xMkipuT8QpbH2ag_U" //  // e.g., XyZ789PublicKey( Public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Clear form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <div
      id="contact-container"
      className="flex flex-col pt-3 justify-center items-center w-full h-full  text-green-500 border-2 gap-y-2 border-green-500 rounded-lg p-4  "
    >
      <div>
        <div className="flex flex-col items-center justify-center w-[100%] h-[100%] p-4 gap-y-3 border-2 border-green-500 rounded-lg">
          <h2 className="text-3xl">Let's Discus your Project</h2>
          <p>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <img
            src="../../Far.JPG"
            alt="Contact Us"
            height={150}
            width={150}
            className=" object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-4 border-2 border-green-500  rounded-lg ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col border-2 border-gray-500 p-4 rounded-lg"
        >
          <div className="flex flex-row items-center justify-center w-full  h-full p-4 border-2 border-gray-50 rounded-lg gap-x-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="border-1 border-gray-50"
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                placeholder="Email*"
                className="border-1 border-gray-50"
              />
            </div>
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            className="p-2 border-2 border-gray-300 rounded-lg mb-4"
          />
          <textarea
            placeholder="Message*"
            name="message"
            rows="6"
            className="p-2 border-2 border-gray-300 rounded-lg mb-4"
          />

          <button
            type="submit"
            onClick={sendEmail}
            className="w-full h-12 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex justify-center items-center gap-2"
          >
            <FaRegCommentDots />
            Send Message
          </button>
        </form>
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactUS;

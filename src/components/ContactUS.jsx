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
        "service_3qac08p",
        "template_1fvvvkb",
        form.current,
        "xMkipuT8QpbH2ag_U"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
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
      className="flex flex-col pt-3 justify-center items-center w-[100%] h-full  text-green-500  gap-y-2  rounded-lg p-4  "
    >
      <div className="flex flex-col lg:flex-row items-center   h-[100%] p-4 justify-between gap-x-16 gap-y-3  rounded-lg ">
        <div className="flex flex-col items-center justify-center text-center gap-y-2 mb-10">
          <h2 className=" text-lg lg:text-5xl">Let's Discus your Project</h2>
          <p className="flex-wrap text-center text-sm lg:text-2xl">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
        </div>
        <div className="flex justify-center items-center border-2 border-grren-500 p-2 rounded-2xl lg:mt-10">
          <img
            src="../../Far.JPG"
            alt="Contact Us"
            height={300}
            width={300}
            className=" object-cover  rounded-lg h-[150px] w-[150px] lg:h-[350px] lg:w-[350px]"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full   rounded-lg ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-2 p-4 rounded-lg"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center w-full  h-full  rounded-lg gap-x-3 gap-y-1.5 ">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="border-2 border-green-500 rounded-md h-[45px] "
            />

            <input
              type="text"
              name="email"
              placeholder="Email*"
              className="border-2 border-green-500 rounded-md h-[42px]"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            className="p-2 border-2 border-green-500 rounded-lg mb-4"
          />
          <textarea
            placeholder="Message*"
            name="message"
            rows="6"
            className="p-2 border-2 border-green-500 rounded-lg mb-4"
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

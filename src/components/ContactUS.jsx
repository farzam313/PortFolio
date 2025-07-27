import React from "react";
import Button from "./Button";
import { FaRegCommentDots } from "react-icons/fa";

const ContactUS = () => {
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
        <div className="flex flex-col p-4 border-2 border-gray-500 m-4 rounded-lg">
          <p>phone: +918180986348</p>
          <br />
          <p>Email: alifarzam@gmail.com</p>
        </div>
        <div className="flex flex-col border-2 border-gray-500 p-4 rounded-lg">
          <div className="flex flex-row items-center justify-center w-full  h-full p-4 border-2 border-gray-50 rounded-lg gap-x-3">
            <div>
              <caption className="text-md font-light text-gray-700 text-nowrap  mb-4 ">
                Your name
              </caption>
              <input
                type="text"
                placeholder="Name*"
                className="border-1 border-gray-50"
              />
            </div>

            <div>
              {" "}
              <caption className="text-md font-light text-gray-700 mb-4 text-nowrap">
                your Email
              </caption>
              <input
                type="text"
                placeholder="Email*"
                className="border-1 border-gray-50"
              />
            </div>
          </div>
          <caption className="text-xl fornt-light text-gray-500 mb-4 ">
            Subject
          </caption>
          <input
            type="text"
            placeholder="Subject*"
            className="p-2 border-2 border-gray-300 rounded-lg mb-4"
          />
          <textarea
            placeholder="Message*"
            rows="6"
            className="p-2 border-2 border-gray-300 rounded-lg mb-4"
          />

          <Button
            caption={"Send Message"}
            Icon={FaRegCommentDots}
            className="w-full h-12 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;

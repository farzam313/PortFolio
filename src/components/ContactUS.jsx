import React from "react";
import Button from "./Button";

const ContactUS = () => {
  return (
    <div className="flex flex-col pt-3 justify-center items-center w-full h-full  text-green-500 border-2 border-green-500 rounded-lg  ">
      <div>
        <div className="flex flex-col items-center justify-center w-[100%] h-[100%] p-4 gap-y-3 border-2 border-green-500 rounded-lg">
          <h2>Lets Discus your Project</h2>
          <p>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <img
            src="../../contact.jpg"
            alt="Contact Us"
            className="w-[100%] h-[100%] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-4 border-2 border-blue-500 rounded-lg">
        <div className="flex flex-row border-2 border-red-500 rounded-lg">
          {" "}
          <p>phone: +918180986348</p>
        </div>
        <div className="flex flex-col border-2 border-gray-500 rounded-lg">
          <div className="flex flex-row items-center justify-center w-full  h-full p-4 border-2 border-yellow-500 rounded-lg">
            <caption className="text-xl font-light text-gray-700 mb-4">
              Your name
            </caption>
            <input type="text" placeholder="Name*" />
            <caption className="text-xl font-light text-gray-700 mb-4">
              your Email
            </caption>
            <input type="text" placeholder="Email*" />
          </div>
          <caption className="text-xl fornt-light text-gray-500 mb-4 ">
            Subject
          </caption>
          <input
            type="textarea"
            placeholder="Subject*"
            className="w-full h-20 p-2 border-2 border-gray-300 rounded-lg mb-4"
          />
          <Button
            caption={"Send Message"}
            className="w-full h-12 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;

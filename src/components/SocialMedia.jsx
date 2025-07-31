import {
  FaRegCommentDots,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-col px-8 py-8 items-center gap-8 text-2xl mt-2  rounded-lg m-2 ">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <FaFacebook />
      </a>

      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:text-indigo-700 transition-colors"
      >
        <FaDiscord />
      </a>

      <a
        href="https://www.instagram.com/a.farxam/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition-colors"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/farxam/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://wa.me/918180986348"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition-colors"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://github.com/farzam313"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition-colors"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;

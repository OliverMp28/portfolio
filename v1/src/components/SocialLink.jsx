import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
  >
    {icon === "github" ? <FaGithub /> : <FaLinkedin />}
  </a>
);

export default SocialLink;
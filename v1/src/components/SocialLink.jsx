import { FaGithub, FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";

const SocialLink = ({ url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-600 hover:text-blue-600 transition-colors scroll-reveal"
  >
    {icon === "github" ? <FaGithub /> : <FaLinkedin />}
  </a>
);


SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default SocialLink;
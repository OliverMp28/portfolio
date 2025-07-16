
import { FaDownload } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DownloadCVButton = ({ className = '', iconSize = 16 }) => {
  const baseClasses =
    'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none cursor-pointer transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2';

  return (
    <a
      href="/cv/cv oliver llauca galvez.pdf"
      download="Oliver_Llauca_CV.pdf"
      className={`${baseClasses} ${className}`.trim()}
    >
      <FaDownload size={iconSize} />
      Descargar CV
    </a>
  );
};

DownloadCVButton.propTypes = {
  className: PropTypes.string,
  iconSize: PropTypes.number
};

export default DownloadCVButton;

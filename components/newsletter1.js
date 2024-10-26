import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from "./LanguageContext"; // Use your existing language context
import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Newsletter1 = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language from the context
  let data = {};

  // Select the appropriate language data
  switch (language) {
    case 'English':
      data = englishData.dataNewsletter;
      break;
    case 'Français':
      data = frenchData.dataNewsletter;
      break;
    case 'Deutsch':
      data = germanData.dataNewsletter;
      break;
    default:
      data = englishData.dataNewsletter; // Default to English
      break;
  }

  return (
    <section
      className={`d-flex justify-content-center align-items-center ${className}`}
      id="SignUp"
    >
      <div
        className="card p-4 p-md-5"
        style={{ 
          backgroundColor: '#4b3621', 
          color: '#d1e7dd', 
          width: '650px', // Adjust width to make it more rectangular
          height: '400px', // Adjust height
          maxWidth: '60%',
        }}
      >
        <div className="text-center mb-4">
          {data.title && (
            <h1 className="display-6">
              {data.title}
            </h1>
          )}
          {data.description && <p className="mt-3">{data.description}</p>}
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={data.placeholder || "Enter your email"}
              aria-label="Email address"
            />
            <button
              className="btn btn-lg"
              style={{ backgroundColor: '#b08d5b', color: '#fff' }}
              aria-label="Subscribe"
            >
              {data.buttonText || "Subscribe"}
            </button>
          </div>
        </div>
        {data.terms && <p className="text-center small">{data.terms}</p>}
      </div>
    </section>
  );
};

Newsletter1.propTypes = {
  className: PropTypes.string,
};

export default Newsletter1;

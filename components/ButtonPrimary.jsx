"use client"
import "./ButtonPrimary.scss";

const ButtonPrimary = ({title, darkModeToggler, url }) => {
  return (
    <div>
      <button className="primary-button" url={url} onClick={darkModeToggler}>
        {title}
      </button>
    </div>
  );
};

export default ButtonPrimary;

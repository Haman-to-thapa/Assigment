import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const BackButton = ({ 
  to = null, 
  label = "Back", 
  className = "", 
  onClick = null 
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    } else {
      navigate(-1); // Go back to previous page
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`back-button ${className}`}
    >
      <MdArrowBack size={16} />
      {label}
    </button>
  );
};

export default BackButton;

import React from 'react';

const Button = ({ title, onClink, loading }) => {
  if (loading) {
    return (
      <button className="btn disable" type="submit">
        Loading...
      </button>
    );
  }
  return (
    <button className="btn" type="submit" onClick={onClink}>
      {title}
    </button>
  );
};

export default Button;

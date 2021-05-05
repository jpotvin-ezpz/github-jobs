import React from "react";

const FullTimeToggle = () => {
  return (
    <div className="fulltime-toggle">
        <input
          className="fulltime-toggle-input"
          type="checkbox"
          name="fulltime"
          id="fulltime"
          value="fulltime"
        />
      <label className="fulltime-label" htmlFor="fulltime">
        Full time
      </label>
    </div>
  );
};

export default FullTimeToggle;

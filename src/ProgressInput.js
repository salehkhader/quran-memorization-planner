import React from "react";

// Component to input the number of pages already memorized
function ProgressInput({ pagesMemorized, setPagesMemorized }) {
  // Handle change in the number of pages memorized input
  const handleChange = (e) => {
    setPagesMemorized(e.target.value);
  };

  return (
    <div>
      <label>
        Pages Already Memorized:
        {/* Input field for the number of pages memorized */}
        <input type="number" value={pagesMemorized} onChange={handleChange} />
      </label>
    </div>
  );
}

export default ProgressInput;

import React from "react";

const TOTAL_PAGES = 604;

// Component to input a target date and display the daily memorization amount required to reach the goal by that date
function DateInput({ targetDate, setTargetDate, dailyAmount, pagesMemorized }) {
  // Handle change in target date input
  const handleChange = (e) => {
    setTargetDate(new Date(e.target.value));
  };

  // Calculate the number of pages remaining to be memorized
  const remainingPages = TOTAL_PAGES - pagesMemorized;
  // Calculate the number of days left until the target date
  const daysLeft = Math.ceil((targetDate - new Date()) / (1000 * 60 * 60 * 24));
  // Calculate the daily memorization amount required to memorize the remaining Quran by the target date
  const dailyRequired = Math.ceil(remainingPages / daysLeft);

  return (
    <div>
      <label>
        Target Date:
        {/* Input field for target date */}
        <input
          type="date"
          value={targetDate.toISOString().split("T")[0]}
          onChange={handleChange}
        />
      </label>
      {/* Display the daily memorization amount required to reach the goal by the target date */}
      <p>
        You need to memorize {dailyRequired} pages daily to reach your goal by
        the selected date.
      </p>
    </div>
  );
}

export default DateInput;

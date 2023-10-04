import React from "react";

const TOTAL_PAGES = 604;

// Component to input daily memorization amount in pages and display the time required to reach the goal
function DailyInput({ dailyAmount, setDailyAmount, pagesMemorized }) {
  // Handle change in daily memorization input
  const handleChange = (e) => {
    setDailyAmount(e.target.value);
  };

  // Calculate the number of pages remaining to be memorized
  const remainingPages = TOTAL_PAGES - pagesMemorized;
  // Calculate the number of days required to memorize the remaining Quran at the given daily rate
  const daysRequired = Math.ceil(remainingPages / dailyAmount);

  return (
    <div>
      <label>
        Daily Memorization Amount (pages):
        {/* Input field for daily memorization amount */}
        <input type="number" value={dailyAmount} onChange={handleChange} />
      </label>
      {/* Display the number of days required to memorize the remaining Quran */}
      <p>
        It will take you {daysRequired} days to memorize the remaining Quran at
        this rate.
      </p>
    </div>
  );
}

export default DailyInput;

import React from "react";

const TOTAL_PAGES = 604;

// Component to display the user's current progress
function InfoBox({ pagesMemorized }) {
  // Calculate the percentage of the Quran memorized
  const progressPercentage = ((pagesMemorized / TOTAL_PAGES) * 100).toFixed(2);

  return (
    <div className="info-box">
      <h2>Your Progress</h2>
      <p>
        You have memorized {pagesMemorized} out of {TOTAL_PAGES} pages.
      </p>
      <p>This is {progressPercentage}% of the Quran.</p>
    </div>
  );
}

export default InfoBox;

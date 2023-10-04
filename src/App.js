import React, { useState } from "react";
import ProgressInput from "./ProgressInput";
import DailyInput from "./DailyInput";
import DateInput from "./DateInput";
import InfoBox from "./InfoBox";

function App() {
  const [dailyAmount, setDailyAmount] = useState(0);
  const [targetDate, setTargetDate] = useState(new Date());
  const [pagesMemorized, setPagesMemorized] = useState(0);

  return (
    <div className="App">
      <h1>Quran Memorization Planner</h1>
      <ProgressInput
        pagesMemorized={pagesMemorized}
        setPagesMemorized={setPagesMemorized}
      />
      {/* Display the user's current progress */}
      <InfoBox pagesMemorized={pagesMemorized} />
      <DailyInput
        dailyAmount={dailyAmount}
        setDailyAmount={setDailyAmount}
        pagesMemorized={pagesMemorized}
      />
      <DateInput
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        dailyAmount={dailyAmount}
        pagesMemorized={pagesMemorized}
      />
    </div>
  );
}

export default App;

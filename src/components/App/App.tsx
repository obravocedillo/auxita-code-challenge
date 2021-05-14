import React, { useEffect } from "react";
import {
  hypertensionCalculator,
  kidneyDiseaseCalculator,
  calculateDropsKidney,
} from "../../utils/fns";
import { hypertensionData } from "../../data/mockHypertension";
import {
  kidneyDiseaseData,
  kidneyDiseaseLongData,
} from "../../data/mockKidneyDisease";
import "./App.css";

function App(): JSX.Element {
  useEffect(() => {
    console.log(hypertensionCalculator(hypertensionData));
    console.log(kidneyDiseaseCalculator(kidneyDiseaseData));
    console.log(calculateDropsKidney(kidneyDiseaseLongData));
  }, []);
  return (
    <div className="App">
      <p data-testid="home-title">It works</p>
    </div>
  );
}

export default App;

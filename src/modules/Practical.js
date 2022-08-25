import React from "react";
import PeriPractice from "./module_techniques/peripheral_vision/PeriPractice";
import { useTechniqueContext } from "../contexts/TechniqueContextProvider";
import WordChunk from "./module_techniques/word_chunk/WordChunk";
import Skipwords from "./module_techniques/skip_words/skipwords";
export default function Practical() {
  const { currTech } = useTechniqueContext();
  if (currTech == "peripheral") {
    return <PeriPractice />;
  } else if (currTech == "wordChunk") {
    return (
      <div>
        <WordChunk />
      </div>
    );
  }else if (currTech == "skipWords") {
    return (
      <div>
        <Skipwords/>
      </div>
    );
  }
}

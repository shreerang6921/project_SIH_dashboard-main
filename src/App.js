import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import UserUploads from "./userupload/UserUploads";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./Dashboard/components";
import { Dashboard, FAQs } from "./Dashboard/pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Meditation from "./meditation/Meditation";
import Test from "./Perform/Test/Test";
import PeriPractice from "./modules/module_techniques/peripheral_vision/PeriPractice";
import Techniques from "./Dashboard/pages/chooseTech/Techniques";
import Status from "./status/Status";
import { useTechniqueContext } from "./contexts/TechniqueContextProvider";
import InitTest from "./InitTest";
import Practical from "./modules/Practical";
import WordChunk from "./modules/module_techniques/word_chunk/WordChunk";
import ChooseTechnique from "./chooseTech/ChooseTechnique";
import TechInfo from "./chooseTech/TechInfo";
import Play from "./meditation/Play";
import CustomPara from "./userupload/CustomPara";
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const { currTech } = useTechniqueContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={currentMode === "Dark" ? "dark App" : "App"}>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          <div
            className={
              "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <Navbar />

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}

                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />

                {/* pages  */}
                <Route path="/techniques" element={<Techniques />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/meditate" element={<Play />} />

                {/* apps  */}
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/userUpload" element={<UserUploads />} />
                <Route path="/customPara" element={<CustomPara />} />

                <Route path="/test/:id" element={<Test />} />
                <Route path="/steps" element={<Status />} />

                {/* Steps  */}
                <Route path={`/step/:id`} element={<Practical />} />

                <Route path="/initialAssessment" element={<InitTest />} />
                <Route path="/Wordchunk" element={<WordChunk />} />
                <Route path="/choosetechnique" element={<ChooseTechnique />} />

                <Route
                  path="/peripheralInfo"
                  element={
                    <TechInfo
                      title="Peripheral Vision"
                      description="lorem ipsum"
                    />
                  }
                />
                <Route
                  path="/skipWordsInfo"
                  element={
                    <TechInfo title="Skip Words" description="lorem ipsum" />
                  }
                />
                <Route
                  path="/wordChunkInfo"
                  element={
                    <TechInfo title="Word Chunk" description="lorem ipsum" />
                  }
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
    // <Practice/>
    // <Test/>
  );
};

export default App;

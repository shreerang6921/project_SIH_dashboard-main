import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './Dashboard/components';
import { Dashboard, Techniques, Meditation, FAQs } from './Dashboard/pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

import Test from './Perform/Test/Test';
import PeriPractice from './modules/module_techniques/peripheral_vision/PeriPractice'

import Status from './status/Status';
import { useTechniqueContext } from './contexts/TechniqueContextProvider';
import InitTest from './InitTest';
import Practical from './modules/Practical';


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const{currTech} = useTechniqueContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/Dashboard" element={(<Dashboard />)} />

                {/* pages  */}
                <Route path="/Techniques" element={<Techniques />} />
                <Route path="/Meditation" element={<Meditation />} />

                {/* apps  */}
                <Route path="/FAQs" element={<FAQs />} />

                
                <Route path="/test/:id" element={<Test/>} />
                <Route path="/steps" element={<Status/>} />

                {/* Steps  */}
                <Route path={`/step/:id`} element={<Practical/>} />
                
              
                <Route path="/initialAssessment" element={<InitTest/>} />
                

                
                
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  // <Practice/>
  // <Test/>
  );

};

export default App;


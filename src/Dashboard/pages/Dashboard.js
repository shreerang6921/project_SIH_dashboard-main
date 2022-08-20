import React,{useEffect} from 'react';
import { Button, SparkLine } from '../components';
import { SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { useTechniqueContext } from '../../contexts/TechniqueContextProvider';
const Dashboard = () => {
  const { currentColor} = useStateContext();
  const {init,currStep,getData,setDefault,dash} = useTechniqueContext();

  console.log(dash)

  useEffect(() => {
    getData()
  }, [init])


 const nextStep = parseInt(dash.progressdata?.[0].Step,10) + 1;
  const step = String(nextStep)

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Progress</p>
              <p className="text-2xl">{!dash.progressdata?.[0].isInitial? "Initial Assesment":step}</p>
              
            </div>

          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text={`${!dash.progressdata?.[0].isInitial ? 'Start':'Resume'}`}
              borderRadius="10px"
              link={`${!dash.progressdata?.[0]?.isInitial ? '/initialAssessment':'/steps'}`}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Stats</p>
          </div>
          <div className="mt-10 flex gap-10 justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">Score</span>
                </p>
              </div>
              <div className="mt-5">
                {/* Need to update score taken from backend to dummy.js file */}
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

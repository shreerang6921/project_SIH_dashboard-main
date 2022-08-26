import React,{useEffect} from 'react';
import { Button, SparkLine} from '../components';
import MainCard from '../components/MainCard';
import initial from '../images/initial.svg'
import first from '../images/first.svg'
import second from '../images/second.svg'
import { useStateContext } from '../../contexts/ContextProvider';
import { useTechniqueContext } from '../../contexts/TechniqueContextProvider';
const Dashboard = () => {

  const { currentColor} = useStateContext();
  const {getData,dash} = useTechniqueContext();

  console.log(dash)
  

  useEffect(() => {
    getData()
  }, [])
  const steps = [
    {
      id: 1,
      title: "step 1",
      link: "/step/1",
      image:first
    },
    {
      id: 2,
      title: "step 2",
      link: "/step/2",
      image:second
    }
  ];

 const spark = [{x:1},{x:2}];

 if(dash?.progressdata?.[0]?.techniqueName == "peripheral"){
  spark[0].yval = dash?.scoredata?.[0]?.periperalScoreStep1;
  spark[1].yval = dash?.scoredata?.[0]?.periperalScoreStep2;

 }else if(dash?.progressdata?.[0]?.techniqueName == "skipWords"){
  spark[0].yval = dash?.scoredata?.[0]?.skipWordScoreStep1;
  spark[1].yval = dash?.scoredata?.[0]?.skipWordScoreStep2;
 }else if(dash?.progressdata?.[0]?.techniqueName == "wordChunk"){
  spark[0].yval = dash?.scoredata?.[0]?.chunkWordScoreStep1;
  spark[1].yval = dash?.scoredata?.[0]?.chunkWordScoreStep2;
 }


 const nextStep = parseInt(dash?.progressdata?.[0]?.Step,10) + 1;
  let step = String(nextStep)
  if(step>=3){
    step = "completed"
  }


  return (
    <div className="mt-24">
      
      {/* <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">{!dash?.progressdata?.[0]?.isInitial? "Please Take the Initial Assessment":"Progress"}</p>
              <p className="text-2xl">{!dash?.progressdata?.[0]?.isInitial? "Initial Assesment":step}</p>
              
            </div>

          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text={`${!dash?.progressdata?.[0]?.isInitial ? 'Start':'Resume'}`}
              borderRadius="10px"
              link={`${!dash?.progressdata?.[0]?.isInitial ? '/initialAssessment':'/steps'}`}
            />
          </div>
        </div> */}
        
        <div className='sm:flex justify-evenly flex flex-col sm:flex-row'>
        <div className={`${!dash?.progressdata?.[0]?.isInitial ? 'inline':'hidden'}`}>
        <MainCard title={'Initial Assessment'} link={'/initialAssessment'} image={initial}/>
        </div>

        {steps.map((step) => {
          return <div key={step.id} className={`${!dash?.progressdata?.[0]?.isInitial ? 'hidden':'inline'}`}>
          <MainCard title={step.title} link={step.link} image={step.image}/>
          </div>
      })}
      </div>



      </div>

  );
};

export default Dashboard;

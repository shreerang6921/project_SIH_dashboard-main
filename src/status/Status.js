import React from "react";
import StatusCard from "./StatusCard";
import { useTechniqueContext } from "../contexts/TechniqueContextProvider";

export default function Status() {
  const { url } = useTechniqueContext();
  // const steps = {
  //   step1:{
  //     stepNo:1,
  //     title:"step1"
  //   },
  //   step2:{
  //     stepNo:2,
  //     title:"step2"
  //   }
  // }

  const steps = [
    {
      id: 1,
      title: "step 1",
      link: "/step/1",
    },
    {
      id: 2,
      title: "step 2",
      link: "/step/2",
    },
  ];

  return (
    <div className="w-96">
      {/* {steps.foreach((step)=>{
      return step.stepNo)
      })} */}

      {steps.map((step) => {
        return <StatusCard key={step.id} name={step.title} link={step.link} />;
      })}
    </div>
  );
}
import React, { createContext, useContext, useState } from "react";

const TechniqueContext = createContext();

export const TechniqueContextProvider = ({ children }) => {
  const [tech, setTech] = useState("");
  const [init, setInit] = useState(false);
  const [isTest, setTest] = useState(false);
  const [url, setUrl] = useState("http://localhost:5000");
  const [currTech, setCurrTech] = useState("");
  const techRoute = "/";
  const [initTime, setInitTime] = useState(0);
  const dashinit = [];
  const [dash, setDash] = useState(dashinit);
  const [begin, setBegin] = useState(false);
  // get data
  const [initData, setInitData] = useState("");
  const [testPara, setTestPara] = useState("");
  const [practicePara, setPracticePara] = useState("");
  const [stepInstructions, setStepInstructions] = useState("");

  // const authToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwOGI0YzU4ZTZjMjIwZmI3ZmQxOWE0In0sImlhdCI6MTY2MTUxNDk0OX0.Za7GgyqTLGZ6iKgo4BGIu6PjG--ecdhyfJGQT6Z9YhM";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZGM0NTRmMTc3ZjJmMWQwNGI0NWJkIn0sImlhdCI6MTY3OTY3MjQzMX0.8m5kiVy_d_xQ7WYAR9felDTswwJE2dWypmkPBr5qyts";

  let id = "";

  //API calls
  // set default values
  const setDefault = async () => {
    const response = await fetch(`${url}/setDefault`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: authToken,
      },
    });
    const json = await response.json();
  };

  // 1 get {score, Isinit, StepNo.} for dashboard
  const getData = async () => {
    const response = await fetch(`${url}/dashboardData`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        authtoken: authToken,
      },
    });
    const json = await response.json();
    setDash(json);
    setCurrTech(json?.progressdata?.[0]?.techniqueName);
  };

  // 2 get {paragraph} for Init
  // TODO QnA
  const getInitTest = async () => {
    const response = await fetch(`${url}/initialtest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // setInitPara(json)
    setInitData(json);
    console.log(json);
  };

  // 3 put {time,correctAns} for Init
  // TODO correctAns (default 0)
  const putInitVars = async (time, correctAns) => {
    const data = {
      time,
      correctAns,
    };
    const response = await fetch(`${url}/initialtest`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken: authToken,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
  };

  // 5 put {TechniqueName} for techniques
  // TODO TechniqueName (default peripheral)
  const putTechName = async (techniqueName) => {
    const data = {
      techniqueName,
    };

    const response = await fetch(`${url}/techniques`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",

        authtoken: authToken,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
  };

  // 6 get {pargraph} for Practice
  const getPracticePara = async () => {
    const response = await fetch(`${url}/paragraph`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: authToken,
      },
    });
    const json = await response.json();
    console.log(json);
    setPracticePara(json);
  };

  // 7 get {Step Instructions} for Practice
  const getStepInstructions = async (id) => {
    const response = await fetch(`${url}/practice/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: authToken,
      },
    });
    const json = await response.json();
    setStepInstructions(json);
    console.log(json);
  };

  // 8 put {StepNo} for current step
  const putStepNo = async (stepNo) => {
    const response = await fetch(`${url}/stepUpdate/${stepNo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken: authToken,
      },
    });

    const json = response.json();
  };

  // 9 get {Test,QnA} for Test
  const getTest = async () => {
    const response = await fetch(`${url}/paratest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setTestPara(json[0].paragraph);
  };

  // 10 post {time,CompScore} for Test

  const postScore = async (time, correctAns) => {
    const data = {
      time,
      correctAns,
    };
    const response = await fetch(`${url}/result`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authtoken: authToken,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
  };

  return (
    <TechniqueContext.Provider
      value={{
        currTech,
        practicePara,
        setPracticePara,
        stepInstructions,
        setStepInstructions,
        dash,
        initData,
        testPara,
        setDash,
        setDefault,
        tech,
        setTech,
        isTest,
        setTest,
        url,
        setUrl,
        techRoute,
        init,
        setInit,
        getData,
        getInitTest,
        putInitVars,
        putTechName,
        getPracticePara,
        getStepInstructions,
        putStepNo,
        getTest,
        postScore,
        initTime,
        setInitTime,
        begin,
        setBegin,
      }}
    >
      {children}
    </TechniqueContext.Provider>
  );
};

export const useTechniqueContext = () => useContext(TechniqueContext);

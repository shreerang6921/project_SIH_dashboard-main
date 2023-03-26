import Paragraph from "../Perform/Paragraph";
import { useEffect, useState } from "react";
import { useTechniqueContext } from "../contexts/TechniqueContextProvider";
import ControlPara from "../Perform/ControlPara";

function hello() {
  console.log("hello");
}

export default function CustomPara() {
  const { uploadData, begin } = useTechniqueContext();

  let arrSkip = uploadData.Enter.split(" ");

  let arr1 = uploadData.Enter.split(" ");
  let arr = [];
  let arr2 = [];
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  console.log(uploadData);
  switch (uploadData.Radio) {
    case "Skip Word Technique":
      return (
        <div className="">
          <div className=" flex flex-wrap border-2 border-slate-300 sm:p-5 p-3 text-justify rounded-md bg-[#fcfcf1] text-lg sm:text-base">
            {arrSkip.map((word, idx) => {
              return (
                <div className={`${(idx + 1) % 3 === 0 ? "bg m-2" : "m-2"}`}>
                  {word}
                </div>
              );
            })}
          </div>
          <ControlPara onStop={hello} />
        </div>
      );
    //skip word logik
    case "Peripheral Technique":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10">
          <div className="relative">
            <div
              className={`absolute ${"sm:left-20 left-16"} border-4 border-l-0 border-dotted h-full border-r-purple-800 `}
            ></div>
            <div
              className={`absolute ${"sm:right-20 right-16"} border-4 border-l-0 border-dotted h-full border-r-purple-800`}
            ></div>
            <Paragraph data={uploadData.Enter} />
          </div>
          <ControlPara onStop={hello} />
        </div>
      );
    //Peripheral logik
    case "Word Chunk Technique":
      for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i] + "  ");
      }
      console.log(arr2);

      let i = 0;
      let j = 0;

      while (i < arr2.length) {
        if (i === arr2.length - 1) {
          arr.push([arr2.slice(j, i + 1)]);
        }
        if ((i + 1) % 3 === 0) {
          arr.push([arr2.slice(j, i + 1)]);
          j = i += 1;
        }

        i += 1;
      }

      useEffect(() => {
        if (begin) {
          let timer1 = setInterval(() => {
            setWords(arr[index]);
            setIndex(index + 1);
          }, 1000);

          return () => {
            clearInterval(timer1);
          };
        }
      });

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 p-10">
          <div className="relative">
            <Paragraph data={words} />
          </div>
          <ControlPara onStop={hello} />
        </div>
      );
    //Word Chunk logik
    default:
      return <p>Select a valid technique</p>;
    //default shit
  }
}

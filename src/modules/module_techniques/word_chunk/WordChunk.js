import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useTechniqueContext } from '../../../contexts/TechniqueContextProvider'
import Paragraph from "../../../Perform/Paragraph";
import Steps from "../../../Perform/Practice/components/Steps";



export default function WordChunk() {
    const [words,setWords] = useState([]);
    const [index,setIndex] = useState(0);
    const {id} = useParams();
  const {getPracticePara,getStepInstructions,practicePara,stepInstructions,begin}=useTechniqueContext()
 

  useEffect(()=>{
    getPracticePara()
    getStepInstructions(id)
  },[])
  console.log(stepInstructions)
  console.log(practicePara)
  let arr1 = practicePara.split(" ")
let arr =[]
let arr2=[]

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]+"  ")
}
console.log(arr2)


let i = 0
let j = 0

    while (i<arr2.length)
    {
        if(i===arr2.length-1)
        {

            arr.push([arr2.slice(j,i+1)])
            
        }
        if((i+1)%3===0)
        {
            arr.push([arr2.slice(j,i+1)])
            j=i+=1;
            
        }
         
        i+=1;
      
    }

 

    useEffect(
        () => {
          if(begin){
            let timer1 = setInterval(() => {
              setWords(arr[index])
             setIndex(index+1)
             
          }, 1000);
      
            return () => {
              clearInterval(timer1);
            };
          }
        }
  
      );


    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-6 p-10'>
      <Steps id={id} data={stepInstructions.Instruction}/>
      <div className="relative">
          <Paragraph data={words}/>
      </div>
      </div>
    );
}
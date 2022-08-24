/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import { useTechniqueContext } from '../contexts/TechniqueContextProvider';
import Button from './Practice/components/Button';

export default function ControlPara({onStop}) {
  const [time, setTime] = useState(0);
  const [isStart, setStart] = useState(false);
  const [show,setShow] = useState(0);
  const correctAns = 10;
  const {setBegin} = useTechniqueContext();

  let timer;

  useEffect(() => {
    if (isStart) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  const handleStart = () => {
    setStart(true);
    setBegin(true);
    setTime(0);
  };

  const handleStop = () => {
    if (isStart) {
      setStart(false);
      setBegin(false);
      clearInterval(timer);
      onStop(time,correctAns);

    }
  };

  const handleShow = () => {
    setShow(time,correctAns)
  };
  return (
    <div>
        <div className="flex justify-end gap-2">
        <Button link="#" name="start" func={handleStart} />
        <Button link="#" name="stop" func={handleStop} />
        <Button link="#" name="showTime" func={handleShow} />
      </div>
      <p>
      {show}
      </p>
      <p>
      {time}
      </p>

    </div>
  )
}

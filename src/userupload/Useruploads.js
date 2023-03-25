import React from 'react';
import { useForm } from 'react-hook-form';
import './Useruploads.css';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="main">
        <div className="enter">
          <label> Upload your data </label>
        </div>
        <div className="content">
          <input type="text" placeholder="Enter" {...register("Enter", {required: true})} />
        </div>
        <div className="radio">
          <div className="r1">
            <label> Skip Word Technique
              <input {...register("Radio")} type="radio" value="Skip Word Technique" />
            </label>
          </div>
          <div className="r2">
            <label> Peripheral technique
              <input {...register("Radio")} type="radio" value=" Peripheral Technique" />
            </label>
          </div>
          <div className="r3">
            <label> Word Chunk Technique
              <input {...register("Radio")} type="radio" value=" Word Chunk Technique" />
            </label>
          </div>
        </div>
        <div className="submit">
          <input type="submit" />
        </div>
      </div>
    </form>
  );
}
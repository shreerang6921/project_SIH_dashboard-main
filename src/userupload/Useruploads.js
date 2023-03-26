import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Useruploads.css";
import { useTechniqueContext } from "../contexts/TechniqueContextProvider";
export default function UserUploads() {
  const navigate = useNavigate();
  const { uploadData, uploadTechName, setUploadData, setUploadTechName } =
    useTechniqueContext();

  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (submitted) {
      navigate("/customPara");
    }
  }, [uploadData]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setUploadData(data);
    setSubmitted(true);
    console.log(data);
    console.log(uploadData);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="main">
        <div className="enter">
          <label> Upload your data </label>
        </div>
        <div className="content">
          <textarea
            type="text"
            cols="48"
            rows="6"
            placeholder="Enter"
            {...register("Enter", { required: true })}
          />
        </div>
        <div className="radio">
          <div className="r1">
            <label>
              Skip Word Technique
              <input
                {...register("Radio")}
                type="radio"
                value="Skip Word Technique"
              />
            </label>
          </div>
          <div className="r2">
            <label>
              Peripheral technique
              <input
                {...register("Radio")}
                type="radio"
                value="Peripheral Technique"
              />
            </label>
          </div>
          <div className="r3">
            <label>
              Word Chunk Technique
              <input
                {...register("Radio")}
                type="radio"
                value="Word Chunk Technique"
              />
            </label>
          </div>
        </div>
        <button className="mx-auto" type="submit">
          submit
        </button>
      </div>
    </form>
  );
}

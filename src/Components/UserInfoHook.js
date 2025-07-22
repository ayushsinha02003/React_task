import React from "react";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";
//no Rendering in every type in input
let componentRender = 0;
const UserInfoComponentForm2 = () => {
    const form = useForm();
    const {register, control, handleSubmit} = form;
        const formSubmit = (data)=>{
            console.log('form submit', data);
        }
    //console.log('register', register('name'))
  componentRender ++;
  return (
    <>
      <div className="userForm">
        <h3>My component Render - {componentRender}</h3>
        <h2>User Info Details</h2>
        <form
          action="#"
          onSubmit={handleSubmit(formSubmit)}
          className="userDetailform"
        >
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register('name')}
              placeholder="Enter your name"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              placeholder="Enter your email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              {...register('password')}
              placeholder="Enter your new Password"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              id="confirmPassword"
              {...register('confirmPassword')}
              placeholder="Your Confirm Password"
            />
          </div>
          <div className="formGroup">
            <input type="submit" value="save" />
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
}

export default UserInfoComponentForm2;

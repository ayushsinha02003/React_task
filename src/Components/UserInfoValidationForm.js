import React from "react";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";


const UserInfoValidationForm = () => {
    const form = useForm();
    const {register, control, handleSubmit, formState:{errors}} = form;
        const formSubmit = (data)=>{
            console.log('form submit', data);
        }
    //console.log('form', form)

  return (
    <>
      <div className="userForm">
        <h2>User Info Details</h2>
        <form
          action="#"
          onSubmit={handleSubmit(formSubmit)}
          className="userDetailform"
          noValidate
        >
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              className="input"
              type="text"
              id="name"
              {...register('name',{
                required:{
                    value: true,
                    message: 'Name is required'
                },
                validate: (value) => {
                    if (value.length < 3) {
                        return 'Name must be at least 3 characters long';
                    }
                }
              })}
              placeholder="Enter your name"
            />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              id="email"
              {...register('email', {
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email format'
                },
                required:{
                    value: true,
                    message: 'Email is required'
                }
                })}
              placeholder="Enter your email"
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="text"
              id="password"
              {...register('password', {
                required:{
                    value: true,
                    message: 'Password is required'
                },
                validate: (value) => {
                    if (value.length < 6) {
                        return 'Password must be at least 6 characters long';
                    }else if (!/[A-Z]/.test(value)) {
                        return 'Password must contain at least one uppercase letter';
                    } else if (!/[a-z]/.test(value)) {
                        return 'Password must contain at least one lowercase letter';
                    } else if (!/[0-9]/.test(value)) {
                        return 'Password must contain at least one number';
                    }else if (!/[!@#$%^&*]/.test(value)) {
                        return 'Password must contain at least one special character';
                    }
                }})}
              placeholder="Enter your new Password"
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="input"
              type="text"
              id="confirmPassword"
              {...register('confirmPassword', {
                required:{
                    value: true,
                    message: 'Confirm Password is required'
                },
                validate: (value) => {
                    if (value !== form.getValues('password')) {
                        return 'Passwords do not match';
                    }
                }
              })}
              placeholder="Your Confirm Password"
            />
            <p className="error">{errors.confirmPassword?.message}</p>
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

export default UserInfoValidationForm;

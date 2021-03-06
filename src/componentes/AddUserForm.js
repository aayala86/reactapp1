import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

  const { register, errors, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" required/>
      <div>
          {errors?.name?.message}
      </div>
      <label>Username</label>
      <input type="text" name="username" required/>
      <div>
          {errors?.name?.message}
      </div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;

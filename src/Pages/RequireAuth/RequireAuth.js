import React from 'react';
import { useForm } from "react-hook-form";
import './RequireAuth.css'

const RequireAuth = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
    return (
        <div>
            <h1>This is require Auth</h1>
            <form className='border flex flex-col w-40' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default RequireAuth;
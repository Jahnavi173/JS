import React from 'react'
import {useForm} from 'react-hook-form'
import './Login.css'

function Login() {
  let {register,handleSubmit,formState:{errors}}=useForm();
let formSubmit=(obj)=>{
  console.log(obj);
}
  return (
    <div className='login mt-5'>
      <h2 className="display-5 text-center text-info mb-4">Login</h2>
      <div className="row">
        <div className="col-lg-4 cols-md-6 col-11 m-auto">
       <form onSubmit={handleSubmit(formSubmit)}>
         
        <input type="email" name="" id="" placeholder='Enter Email Address' className='form-control mb-3' {...register("email",{required:true})} />
        {errors.email?.type==='required' && <p className='text-danger'>* Username is required</p>}
       <input type="password"id="" placeholder='Enter Password' className='form-control mb-3' {...register("password",{required:true,minLength:8})}/>
        {errors.password?.type==='required' && <p className='text-danger'>* Password is required</p>}
        {errors.password?.type==='minLength' && <p className='text-danger'>* Min 8 Characters required</p>}
       <button type="submit" className='btn btn-primary'>Submit</button>
       </form>
        </div>
      </div>

    </div>

  )
}

export default Login
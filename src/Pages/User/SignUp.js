import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithGoogle,useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading";
const SignUp = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let errorElement;
    
    if (gloading || loading || updating) {
        return <Loading></Loading>;
    }
    if (gerror || error || updateError) {
        errorElement =<p>{error?.message || gerror?.message || updateError?.message}</p>
    }

    if (guser || user) {
        console.log(guser|| user);
    }

        const onSubmit = async data => {
            await createUserWithEmailAndPassword(data.email,data.password);
            await updateProfile({ displayName: data.firstName , displayName:data.lastName});
            navigate('/appointment')
            console.log(data);
        }

    return (
        <div className="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-3xl font-bold">Sign Up</h2>
            <div class="card-actions justify-center">
                <form onSubmit={handleSubmit(onSubmit)} class="card-actions justify-center">
                <input className="input input-bordered input-secondary input-md w-full max-w-xs mt-4" placeholder="First name " {...register("firstName", { required: true })} />
                
                {errors.firstName?.type === 'required' && <p className=" text-red-600">First name is required</p>}

            <input className="input input-bordered input-secondary input-md w-full max-w-xs mt-4" placeholder="Last name " {...register("lastName", { required: true })} />

                {errors.lastName && <p className="text-red-600">Last name is required</p>}
                <input type="email" placeholder="Email Address" className="input input-bordered input-secondary input-md w-full max-w-xs mt-4"
                {...register("email", {
                    required:{
                        value: true,
                        message: "Email required"
                    },
                    pattern: {
                    value: "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$",
                    message: 'Please Provide Valied Email'
                    }
                })} />
    
                <>
                {errors.email?.type === 'required' && <p className="text-red-600">{errors.email.message}</p>}
                {errors.email?.type === 'pattern' && <p className="text-red-600">{errors.email.message}</p>}
                </>
                
                <input {...register("password",  {
                    required:{
                        value: true,
                        message: "Password required"
                    },
                        minLength: {
                        value: 6,
                        message: 'Password minimum 6 or more character'
                        }
                    })} 
                
                type="password" placeholder="Password" className="input input-bordered input-secondary input-md w-full max-w-xs mt-4"/>
    
                    <>
                    {errors.password?.type === 'required' && <p className="text-red-600">{errors.password.message}</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">{errors.password.message}</p>}
                </>
                {errorElement}
    
                <button type="submit" class="btn btn-secondary w-full mt-5 bg-gradient-to-r from-cyan-400 to-blue-200">Sign Up</button>
                </form>
                    <p>Already have an Account? {""}
                    <small></small>
                    <span><Link to='/login' class="text-primary-focus">Please Login</Link></span></p> 
            </div>
                <div class="divider">OR</div>
              <button onClick= {() => signInWithGoogle()} class="btn btn-secondary bg-gradient-to-r from-cyan-500 to-blue-500">
    
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" stroke="currentColor" viewBox="0 0 970 450"><path stroke-linecap="round" stroke-linejoin="round" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
    
                Signup with Google
              </button>
            </div>
        </div>
      </div>
    );
};

export default SignUp;
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const {loginUser,setUser } = useContext(AuthContext)
  const [error, setError] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  
 const handleSubmitLogin =(e) =>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  if(password.length<6){
               setError({...error, password:"must be 5 character"})
               }
  // console.log(email, password)
  loginUser(email, password)
  .then(result =>{
   const user = result.user
    setUser(user)
    navigate(location?.state ? location?.state : "/")
  })
  .catch((err) =>{
   setError({...error, login:err?.code})
  })

 }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-neutral">Login to your account</h2>
        </div>

        {/* Login Card */}
        <div className="card w-full max-w-sm bg-base-100 rounded-none p-10 shrink-0">
          <div className="card-body">
            <form onSubmit={handleSubmitLogin}>
              {/* Email Field */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>

              {/* Password Field */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              {
                error.login && <div className=" mb-3">
                <a href="#" className=" text-sm text-primary">
                  {error.login}
                </a>
              </div>
              }

              {/* Forgot Password */}
              <div className=" mb-3">
                <a href="#" className="link link-hover text-sm text-primary">
                  Forgot password?
                </a>
              </div>

               {
                error.password && <label className="label text-xs">{error.password}</label>
              }

              {/* Submit Button */}
              <div className="form-control">
                <button className="btn btn-neutral w-full">Login</button>
              </div>
            </form>
            <p className="text-center">Don't have account? 
                 <Link className="text-red-500 p-2" to="/auth/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


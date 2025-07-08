import { useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
const Register = () => {
  const navigate = useNavigate()
  
  const { createNewUser, setUser,updateUserProfile} = useContext(AuthContext)

  const [error, setError] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get('name')
  
    if(name.length < 5 ){
      setError({...error, name:"must be 5 words"})
    }

    const photo = form.get("photo")

    const email = form.get("email")
    const password = form.get("password")
    if(password.length<6){
      setError({...error, password:"must be 5 character"})
    }
      
    // console.log(name,photo,email,password)
   
     // create new user
    createNewUser(email, password)
    .then(result =>{
      const user = result.user;
      setUser(user)
     updateUserProfile({displayName:name, photoURL:photo })
     .then(() =>{
      navigate("/")
     })
    //  .catch(err =>{
    //   // console.log(err)
    //  })
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode, errorMessage)
  });



  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-neutral">
            Register your account
          </h2>
        </div>

        {/* Login Card */}
        <div className="card w-full max-w-sm bg-base-100 rounded-none p-10 shrink-0">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* name Field*/}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              {/* photo Field*/}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="font-medium">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo url"
                  className="input input-bordered"
                />
              </div>
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
              {
                
              }
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
                error.password && <label className="label text-xs">{error.password}</label>
              }

              {/* Forgot Password */}
              <div className=" mb-3">
                <a href="#" className="link link-hover text-sm text-primary">
                  Forgot password?
                </a>
              </div>
        
              {/* Submit Button */}
              <div className="form-control">
                <button className="btn btn-neutral w-full">Login</button>
              </div>
            </form>
            <p className="text-center">
              Already have an account?
              <Link className="text-red-500 p-2" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

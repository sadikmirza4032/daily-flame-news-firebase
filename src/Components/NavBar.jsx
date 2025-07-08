import { Link, NavLink } from "react-router-dom";
import users from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="space-x-5 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2  items-center">
        <div>
          {user && user?.email ? (
            <div>
              <img
                className="w-10 h-10 rounded-full "
                src={user?.photoURL || users}
                alt=""
              />
              <p> {user?.displayName}</p>
            </div>
          ) : (
            <img src={users} alt="" />
          )}
        </div>
        <div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn btn-neutral rounded-none">
              SignOUt
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

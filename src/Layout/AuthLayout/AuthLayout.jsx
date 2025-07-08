
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#E7E7E7]">
            <header className="w-11/12 max-auto my-5">
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
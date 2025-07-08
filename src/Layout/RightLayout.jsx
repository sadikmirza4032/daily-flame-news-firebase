import FindUs from "../Components/FindUs";
import Social from "../Components/Social";


const RightLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-2">
            <Social></Social>
            <FindUs></FindUs>
        </div>
    );
};

export default RightLayout;
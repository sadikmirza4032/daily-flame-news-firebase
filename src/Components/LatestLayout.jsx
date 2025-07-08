import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestLayout = () => {
    return (
        <div className="flex justify-center items-center p-3 gap-8 bg-base-300">
            <h2 className="bg-red-600 text-white p-3">Latest</h2>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to='/news'>
                Delivering truth with passion — daily updates, burning stories, and fearless journalism from every corner.
                </Link>
                <Link to='/news'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, excepturi.
                </Link>
                <Link to='/news'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, excepturi.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestLayout;
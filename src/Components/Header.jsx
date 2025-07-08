import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-5'>
            <div>
                <img src={logo} alt="" />
            </div >
            <h2 className='py-2  bg-base-300'>journalism without fear or favour rewrite</h2>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;
import logo from '../../assets/logo.png'
import moment from 'moment';

const Title = () => {
    return (
        <div className='flex flex-col justify-center text-center items-center gap-3 py-5'>
            <img src={logo} alt="logo" />
            <p className='text-[#706F6F] font-normal text-lg'>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM Do, YYYY')}</p>
        </div>
    );
};

export default Title;
import './Navbar.css';
import Resume from '../../assets/PedroCastanedaResume.png';
import { useState } from 'react';

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(false);

    const ResumeToggle = () => {
        setIsHidden(!isHidden);
    }

    const handleClose = () => {
        setIsHidden(false);
    }

    return (
        <>
            <div id='nav' className="smokeyGrayText flex w-full pb-2 pt-10 space-x-2 px-2 text-xs justify-around md:text-base lg:space-x-20 lg:px-28 md:pt-14 md:pb-8 darkGreenBg m:h-20 fixed md:w-screen z-10">
                <a href="#">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#flow">FLOW</a>
                <a href="#contact">CONTACT</a>
                <button onClick={ResumeToggle}><a href="#">RESUME</a></button>
                <a href="#social">SOCIAL</a>
            </div>
            <div id='resume' className={!isHidden ? 'hidden' : 'visible mt-16 mx-5 md:mt-36 container md:mx-40 md:w-auto'}>
                <div className='flex flex-col items-center'>
                    {/* <iframe src={Resume} className='w-4/5 h-auto' ></iframe> */}
                    <button onClick={handleClose} className='mb-5 text-center uppercase font-bold text-3xl lightNeonBlue justify-self-end self-end'>x</button>
                    <img src={Resume} alt="image of my resume" className='md:w-4/5 h-auto' />
                </div>
            </div>
        </>
    )
}

export default Navbar;
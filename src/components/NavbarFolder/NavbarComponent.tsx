import './Navbar.css';
import Resume from '../../assets/PedroC-resume.png';
import { useState } from 'react';

const Navbar = (): JSX.Element => {

    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    const ResumeToggle = () => {
        setIsHidden(!isHidden);
    }

    const HamburgerMenuToggle = () => {
        setShow(!show);
    }

    const handleClose = () => {
        setIsHidden(false);
    }

    return (
        <>
            <nav className="lg:invisible ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        
                    </a>
                    <button onClick={HamburgerMenuToggle} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className={`${show ? '' : 'hidden'} w-full `} id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg smokeyGrayText darkGreenBg">
                            <li>
                                <a onClick={HamburgerMenuToggle} href="#" className="block py-2 pl-3 pr-4">ABOUT</a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle}  href="#projects" className="block py-2 pl-3 pr-4">PROJECTS</a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle}  href="#flow" className="block py-2 pl-3 pr-4">FLOW</a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle}  href="#contact" className="block py-2 pl-3 pr-4">CONTACT</a>
                            </li>
                            <li>
                                    <a onClick={HamburgerMenuToggle}  href="../../assets/PedroC-resume.png" className="block py-2 pl-3 pr-4">RESUME</a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle}  href="#social" className="block py-2 pl-3 pr-4">SOCIAL</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id='nav' className="invisible lg:visible smokeyGrayText flex w-full pb-2 pt-10 space-x-2 px-2 text-xs justify-around md:text-base lg:space-x-20 lg:px-28 md:pt-14 md:pb-8 m:h-20 fixed md:w-screen z-10">
                <a href="#">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#flow">FLOW</a>
                <a href="#contact">CONTACT</a>
                <button onClick={ResumeToggle}><a href="#">RESUME</a></button>
                <a href="#social">SOCIAL</a>
            </div>
            <div id='resume' className={!isHidden ? 'hidden' : 'visible z-10 absolute'}>
                <div className='flex flex-row-reverse mt-12 justify-between'>
                    {/* <iframe src={Resume} className='w-4/5 h-auto' ></iframe> */}
                    <button onClick={handleClose} className='mb-5 text-center uppercase font-bold text-3xl lightNeonBlue self-start'>x</button>
                    <img src={Resume} alt="image of my resume" className='md:w-4/5 h-auto' />
                </div>
            </div>
        </>
    )
}

export default Navbar;
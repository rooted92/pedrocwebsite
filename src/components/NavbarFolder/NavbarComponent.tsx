import './Navbar.css';
import Resume from '../../assets/PedroC-resume.png';
import { useEffect, useState } from 'react';


const Navbar = (): JSX.Element => {

    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const ResumeToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsHidden(!isHidden);
        !isHidden ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    };

    const HamburgerMenuToggle = () => {
        setShow(!show);
    };

    const handleClose = () => {
        setIsHidden(false);
        document.body.style.overflow = 'auto';
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 0 ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className="lg:hidden">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center"></div>
                    <button onClick={HamburgerMenuToggle} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className={`${show ? '' : 'hidden'} w-full`} id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg smokeyGrayText darkGreenBg">
                            <li>
                                <a onClick={HamburgerMenuToggle} href="#" className="block py-2 pl-3 pr-4">.about<span className='phosphorous'>(</span><span className='phosphorous'>)</span></a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle} href="#projects" className="block py-2 pl-3 pr-4">.projects<span className='phosphorous'>(</span><span className='phosphorous'>)</span></a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle} href="#flow" className="block py-2 pl-3 pr-4">.flow<span className='phosphorous'>(</span><span className='phosphorous'>)</span></a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle} href="#contact" className="block py-2 pl-3 pr-4">.contact<span className='phosphorous'>(</span><span className='phosphorous'>)</span></a>
                            </li>
                            <li>
                                <a onClick={(e) => { HamburgerMenuToggle(); ResumeToggle(e); }} className="block py-2 pl-3 pr-4">.resume<span className='phosphorous'>(</span><span className='phosphorous'>)</span></a>
                            </li>
                            <li>
                                <a onClick={HamburgerMenuToggle} href="#social" className="block py-2 pl-3 pr-4">.social<span className='phosphorous'>(</span><span className='phosphorous'>)</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id='nav' className={`${scrolled ? 'darkGreenBgNav' : ''} invisible lg:visible smokeyGrayText w-full pb-2 pt-10 px-24 fixed md:w-screen z-10 grid grid-cols-3 xl:grid-cols-6`}>
                <a href="#" className='function-name place-self-center'>.about<span className='phosphorous'>(</span><span className='argument'>me</span><span className='r-parenthesis phosphorous'>)</span></a>
                <a href="#projects" className='function-name place-self-center'>.portfolio<span className='phosphorous'>(</span><span className='argument'>projects</span><span className='r-parenthesis-projects phosphorous'>)</span></a>
                <a href="#flow" className='function-name place-self-center'>.work<span className='phosphorous'>(</span><span className='argument'>flow</span><span className='r-parenthesis-flow phosphorous'>)</span></a>
                <a href="#contact" className='function-name place-self-center'>.contact<span className='phosphorous'>(</span><span className='argument'>me</span><span className='r-parenthesis phosphorous'>)</span></a>
                <a href="#" onClick={ResumeToggle} className='function-name place-self-center'>.resume<span className='phosphorous'>(</span><span className='argument'>modal</span><span className='r-parenthesis-modal phosphorous'>)</span></a>
                <a href="#social" className='function-name place-self-center'>.social<span className='phosphorous'>(</span><span className='argument'>links</span><span className='r-parenthesis-links phosphorous'>)</span></a>
            </div>

            <div className={`${isHidden ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40`} onClick={handleClose}>
                <div id='resume' className='w-full h-full overflow-y-auto p-4'>
                    <div className='flex flex-col items-center'>
                        <button onClick={handleClose} className='mb-5 self-end close-icon'>
                            <div className="close-icon-line"></div>
                            <div className="close-icon-line"></div>
                        </button>
                        <img src={Resume} alt="Pedro's Resume" className='max-w-full h-auto' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar;
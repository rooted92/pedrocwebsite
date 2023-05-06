import './Navbar.css';

const Navbar = () => {
    return(
        <>
        <div id='nav' className="smokeyGray flex space-x-20 justify-between px-28 pt-14 pb-8 darkGreenBg h-20 fixed w-screen z-10">
            <a href="">ABOUT</a><a href="">PROJECTS</a><a href="">FLOW</a><a href="">CONTACT</a><a href="">RESUME</a><a href="">SOCIAL</a>
        </div>
        </>
    )
}

export default Navbar;
import './Footer.css';
import LinkedInIcon from '../../assets/linkedin.svg';
import GitHubIcon from '../../assets/github-icon.svg';
import CodewarsIcon from '../../assets/nav_codewars.svg';
import ReactIcon from '../../assets/atom.svg';
import TypescriptIcon from '../../assets/typescript.svg';
import TailwindIcon from '../../assets/tailwindIcon.png';

interface Props {
    isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: Props) => {

    const logoSrc = isDarkMode ? process.env.PUBLIC_URL + '/pc-high-resolution-logo-transparent.svg' : process.env.PUBLIC_URL + '/pc-high-resolution-logo-black-transparent.svg';

    return (
        <>
            <footer className='elegant-link mt-8'>
                <div className='w-full md:h-52 mt-8 pb-8'>
                    <div className="grid grid-cols-1 md:grid-cols-3 px-20 md:px-0 primary-font-color mt-12">
                        <div id='contact' className='flex flex-col mb-6 md:mb-0 md:items-center'>
                            <h3 className='font-bold text-xl secondary-font-color'>Contact</h3>
                            <a className='primary-font-color mt-2' href="mailto:pedro@pedroc.dev">pedro@pedroc.dev</a>
                        </div>
                        <div id='social' className='flex flex-col mb-6 md:mb-0 md:items-center'>
                            <h3 className='font-bold text-xl secondary-font-color'>Social</h3>
                            <div className='grid grid-cols-2 gap-x-12 mt-2'>
                                <a href='https://www.linkedin.com/in/pedro-castaneda-developer/' rel='noreferrer' target='_blank' className='primary-font-color text-start '>LinkedIn</a>
                                <img className='h-4 w-auto justify-self-end self-center' src={LinkedInIcon} alt="linkedin icon" />
                                <a href='https://github.com/rooted92' target='_blank' rel='noreferrer' className='primary-font-color '>GitHub</a>
                                <img className='h-4 w-auto justify-self-end self-center' src={GitHubIcon} alt="github icon" />
                                <a href='https://www.codewars.com/users/rooted92' target='_blank' rel='noreferrer' className='primary-font-color '>Codewars</a>
                                <img className='h-4 w-auto justify-self-end self-center' src={CodewarsIcon} alt="codewars icon" />
                            </div>
                        </div>
                        <div className='flex flex-col md:items-center'>
                            <h3 className='font-bold text-xl'>Portfolio Built With</h3>
                            <div className='grid grid-cols-2 gap-x-12 mt-2'>
                                <p className='secondary-font-color text-start'>React.js</p>
                                <img className='h-4 w-auto justify-self-end self-center' src={ReactIcon} alt="react icon" />
                                <p className='secondary-font-color'>Typescript</p>
                                <img className='h-4 w-auto justify-self-end self-center' src={TypescriptIcon} alt="typescript icon" />
                                <p className='secondary-font-color'>Tailwind</p>
                                <img className='h-4 w-auto justify-self-end self-center' src={TailwindIcon} alt="tailwind icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-12 bg-transparent text-white text-center'>
                    <p className='mt-2 mx-auto primary-font-color'><a href="#top"><img src={logoSrc} alt="Logo" className="h-4 w-auto inline-block mr-3" /></a>© 2024 Pedro Castaneda</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
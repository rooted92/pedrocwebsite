import './Footer.css';
import LinkedInIcon from '../../assets/linkedin.svg';
import GitHubIcon from '../../assets/github.svg';
import CodewarsIcon from '../../assets/nav_codewars.svg';
import ReactIcon from '../../assets/atom.svg';
import TypescriptIcon from '../../assets/typescript.svg';
import TailwindIcon from '../../assets/tailwindIcon.png';

const Footer = (): JSX.Element => {

    return (
        <>
            <footer className='elegant-link darkGreenBg mt-8 border-t-2 border-teal-300'>
                <div className='w-full md:h-52 mt-8 pb-8'>
                    <div className="grid grid-cols-1 md:grid-cols-3 px-20 md:px-0 smokeGreyText mt-12">
                        <div id='contact' className='flex flex-col mb-6 md:mb-0 md:items-center'>
                            <h3 className='font-bold text-xl'>Contact</h3>
                            <a className='lightNeonBlue' href="mailto:pedro@pedroc.dev">pedro@pedroc.dev</a>
                        </div>
                        <div id='social' className='flex flex-col mb-6 md:mb-0 md:items-center'>
                            <h3 className='font-bold text-xl'>Social</h3>
                            <div className='grid grid-cols-2 gap-x-12'>
                                <a href='https://www.linkedin.com/in/pedro-castaneda-developer/' target='_blank' className='lightNeonBlue text-start '>LinkedIn</a>
                                <img className='h-4 w-auto justify-self-end self-center' src={LinkedInIcon} alt="linkedin icon" />
                                <a href='https://github.com/rooted92' target='_blank' className='lightNeonBlue '>GitHub</a>
                                <img className='h-4 w-auto justify-self-end self-center' src={GitHubIcon} alt="github icon" />
                                <a href='https://www.codewars.com/users/rooted92' target='_blank' className='lightNeonBlue '>Codewars</a>
                                <img className='h-4 w-auto justify-self-end self-center' src={CodewarsIcon} alt="codewars icon" />
                            </div>
                        </div>
                        <div className='flex flex-col md:items-center'>
                            <h3 className='font-bold text-xl'>Portfolio Built With</h3>
                            <div className='grid grid-cols-2 gap-x-12'>
                                <p className='lightNeonBlue text-start'>React.js</p>
                                <img className='h-4 w-auto justify-self-end self-center' src={ReactIcon} alt="react icon" />
                                <p className='lightNeonBlue'>Typescript</p>
                                <img className='h-4 w-auto justify-self-end self-center' src={TypescriptIcon} alt="typescript icon" />
                                <p className='lightNeonBlue'>Tailwind</p>
                                <img className='h-4 w-auto justify-self-end self-center' src={TailwindIcon} alt="tailwind icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
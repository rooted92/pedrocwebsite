import './Footer.css';
import LinkedInIcon from  '../../assets/linkedin.svg';
import GitHubIcon from '../../assets/github.svg';
import CodewarsIcon from '../../assets/nav_codewars.svg';
import ReactIcon from '../../assets/atom.svg';
import TypescriptIcon from '../../assets/typescript.svg';
import TailwindIcon from '../../assets/tailwindIcon.png';

const Footer = () => {
    return (
        <>
            <div className='w-full h-52 darkGreenBg mt-8 pb-8'>
                <div className="grid grid-cols-3 smokeGreyText mt-12">
                    <div className='flex flex-col items-center'>
                        <p className='font-bold text-xl'>Contact</p>
                        <p className='lightNeonBlue'>pedro@pedroc.dev</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='font-bold text-xl'>Social</p>
                        <div className='grid grid-cols-2 gap-x-12'>
                            <a href='' className='lightNeonBlue text-start'>LinkedIn</a>
                            <img className='h-4 w-auto justify-self-end self-center' src={LinkedInIcon} alt="linkedin icon" />
                            <a href='' className='lightNeonBlue'>GitHub</a>
                            <img className='h-4 w-auto justify-self-end self-center' src={GitHubIcon} alt="github icon" />
                            <a href='' className='lightNeonBlue'>Codewars</a>
                            <img className='h-4 w-auto justify-self-end self-center' src={CodewarsIcon} alt="codewars icon" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='font-bold text-xl'>Portfolio Built With</p>
                        <div className='grid grid-cols-2 gap-x-12'>
                            <a href='' className='lightNeonBlue text-start'>React.js</a>
                            <img className='h-4 w-auto justify-self-end self-center' src={ReactIcon} alt="react icon" />
                            <a href='' className='lightNeonBlue'>Typescript</a>
                            <img className='h-4 w-auto justify-self-end self-center' src={TypescriptIcon} alt="typescript icon" />
                            <a href='' className='lightNeonBlue'>Tailwind</a>
                            <img className='h-4 w-auto justify-self-end self-center' src={TailwindIcon} alt="tailwind icon" />
                        </div>
                    </div>
                </div>a
            </div>
        </>
    );
}

export default Footer;
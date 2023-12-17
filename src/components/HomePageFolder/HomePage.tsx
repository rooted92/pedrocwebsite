import React, { useEffect, useState } from 'react';
import Navbar from '../NavbarFolder/NavbarComponent';
import Footer from '../FooterFolder/FooterComponent';
import IconComponent from '../IconFolder/IconComponent';
import Headshot from '../../assets/09-csas5_headshots_pedro_castenada_720.jpg';
import PokeballImg from '../../assets/pokeball.svg';
import StarWarsLogo from '../../assets/star-wars-logo.png';
import FleetFinderIcon from '../../assets/fleetlogo.png';
import BootstrapIcon from '../../assets/bootstrap.svg';
import ReactIcon from '../../assets/atom.svg';
import TypeScriptIcon from '../../assets/typescript.svg';
import CSharp from '../../assets/c-sharp.svg';
import TailwindIcon from '../../assets/tailwindIcon.png'
import AzureIcon from '../../assets/azure.svg';
import HTMLIcon from '../../assets/html-5.svg';
import CSSIcon from '../../assets/css-3.svg';
import JavascriptIcon from '../../assets/js.svg';
import VSCodeIcon from '../../assets/vs-code-logo-transp.png';
import GitHubIcon from '../../assets/github.svg'
import PostmanIcon from '../../assets/postman-logo-glyph.png';
import JiraIcon from '../../assets/jira.svg';
import FigmaIcon from '../../assets/figma.svg';
import CodewarsIcon from '../../assets/nav_codewars.svg';
import NotionIcon from '../../assets/letter-n.svg';
import SlackIcon from '../../assets/slack.svg';
import RAG from '../../assets/randomadvicegen.png';

import './HomePage.css';

const HomePage = (): JSX.Element => {

    const greetingsArr: Array<string> = ["Hi,", "Hey there,", "Greetings,", "Howdy,", "Salutations,", "Good day,", "Hello,", "Welcome,"];
    const [greeting, setGreeting] = useState<string>('Hi there,');
    const [isFaded, setIsFaded] = useState<boolean>(false);

    useEffect(() => {
        // saving setInterval to variable to be cleared every 3 seconds
        const greetingRandomizer = setInterval(() => {
            let rndIndex = Math.floor(Math.random() * greetingsArr.length);
            setGreeting(greetingsArr[rndIndex]);
            setIsFaded(true);
        }, 3500);
        return () => clearInterval(greetingRandomizer);
    }, []);

    useEffect(() => {
        const removeFade = setTimeout(() => setIsFaded(false), 1000);
        return () => clearInterval(removeFade);
    });

    return (
        <>
            <div id='top' className="flex flex-col h-screen inder">
                <Navbar />
                <div className="flex-grow container mx-auto">
                    <div id='about' className="container mx-10 mt-5 md:mx-24 md:mt-12 lg:mt-48 w-auto">
                        <div className="md:grid md:grid-cols-1 md:gap-y-8 lg:gap-0 lg:grid lg:grid-cols-3">
                            <div className='col-span-2 fadeIn'>
                                <div className={`text-4xl md:text-6xl smokeyGrayText font-bold nunito ${isFaded ? 'fadeIn' : ''}`}>{greeting}</div>
                                <p className='smokeGreyText w-full text-2xl'>
                                    I'm <span className='text-3xl lightNeonBlue'>Pedro Castaneda</span>, seeking to enhance user experiences and drive growth at a forward-thinking company through impactful website creation.</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='mt-4 md:mt-0 md:w-3/4 md:h-96 md:object-cover md:object-top rounded-xl lg:w-auto lg:h-72 shadow-zinc-950 shadow-lg' src={Headshot} alt="Picture of me, Pedro" />
                            </div>
                        </div>

                    </div>
                    <div id='projects'></div>
                    <div className='container mt-4 md:mx-24 w-auto md:mt-10 lg:mt-32'>
                        <p className='lightNeonBlue font-bold text-4xl mt-12 md:mb-8 nunito text-center md:text-start lg:mt-0'>Projects</p>
                        <div className="container mx-auto w-auto px-10 smokeyGrayText">
                            {/* Project #1 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='mb-4 md:mb-0 md:h-72 flex flex-col items-center w-full'>
                                    <div className='flex md:flex-col md:items-center lg:flex-row'>
                                        <img className='h-auto w-12 md:w-24 mt-6' src={FleetFinderIcon} alt="Fleet Finder icon" />
                                        <p className='mt-4 self-center text-lg md:text-4xl'>Fleet Finder</p>
                                    </div>
                                    <div className="grid grid-cols-2 self-start md:grid md:grid-cols-3 md:justify-items-center md:self-auto lg:grid lg:grid-cols-2 lg:self-start lg:gap-x-2 lg:justify-items-center xl:grid xl:grid-cols-2 xl:justify-items-center xl:self-center xl:gap-2">
                                        <a href='https://fleetfinder.pedroc.dev/' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/frontendFF' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view frontend code</a>
                                        <a href='https://github.com/rooted92/backendFF' target='_blank' className='cols-span-2 md:col-span-1 text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2 lg:col-span-2'>view backend code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col row-span-2'>
                                    <div className='flex flex-row'>
                                        <p className='font-bold text-xl lightNeonBlue'>Description</p>
                                    </div>
                                    <p className='smokeyGrayText'>Fleet Finder streamlines communication in transportation, making it easier for truck drivers and dispatch teams to track and update the status and location of trailers.</p>
                                    <p className='font-bold text-xl mt-3 lightNeonBlue'>Built with</p>
                                    <div className="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-3 lg:gap-4 grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-xs lg:text-base lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={CSharp} name='c-sharp' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={AzureIcon} name='azure' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                            {/* Project #2 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='md:h-72  flex flex-col md:pt-20 items-center w-full p-2 '>
                                    <p className='brownFont text-6xl flex flex-row quattroFont'>P<img className='w-8 h-8 mt-4' src={PokeballImg} alt="pokeball" />kedex</p>
                                    <div className="grid grid-cols-2 self-center md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-2 lg:justify-items-start lg:self-start lg:gap-x-2 xl:grid xl:grid-cols-2 xl:justify-items-center xl:self-center xl:gap-2">
                                        <a href='https://pokedex.pedroc.dev/' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>version 2.0</a>
                                        <a href='https://pokemonv1.pedroc.dev/' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>version 1.0</a>
                                        <a href='https://github.com/rooted92/pokedexreact' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>v2 code</a>
                                        <a href='https://github.com/rooted92/pokemanApi' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>v1 code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl lightNeonBlue'>Description</p>
                                    <p className='smokeyGrayText'>A React.js application that enhances user experience by offering detailed Pokémon information through the Pokémon API, featuring search options, favorites management, and a user-friendly interface for Pokémon exploration.</p>
                                    <p className='font-bold text-xl mt-3 lightNeonBlue'>Built with</p>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:text-sm lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                            {/* Project #3 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='min-h-72 relative flex flex-col items-center w-full md:p-2 '>
                                    <img src={StarWarsLogo} className='h-44 w-auto' alt="starwars logo" />
                                    <div className="flex flex-row space-x-2">
                                        <a href='https://starwars.pedroc.dev/' target='_blank' className='text-sm md:mt-2 lg:mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/starWarsApi' target='_blank' className='text-sm md:mt-2 lg:mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl lightNeonBlue'>Description</p>
                                    <p className='smokeyGrayText'>This web app leverages the Star Wars API to dynamically display data from the Star Wars universe, offering user-driven search functionality, navigation through pagination, and engaging features like loading animations.</p>
                                    <p className='font-bold text-xl mt-3 lightNeonBlue'>Built with</p>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-sm lg:grid lg:grid-cols-4 lg:gap-x-4 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                            {/* Project #4 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='min-h-72 relative flex flex-col items-center w-full md:p-2 '>
                                    <p className='nunito smokeGrayText lg:text-xl mb-1'>Random Advice Generator</p>
                                    <img src={RAG} className='h-auto w-52 lg:h-44 lg:w-auto my-8 md:my-1' alt="screenshot of random advice generator" />
                                    <div className="flex flex-row space-x-2">
                                        <a href='https://randomadvicegen.pedroc.dev/' target='_blank' className='text-sm md:mt-2 lg:mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/advicegeneratorv2' target='_blank' className='text-sm md:mt-2 lg:mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl lightNeonBlue'>Description</p>
                                    <p className='smokeyGrayText'>An app that employs the adviceslip API to provide random advice at the click of a button, offering a dynamic and user-engaging experience with a design that mirrors the meticulous style of Frontmentor.</p>
                                    <p className='font-bold text-xl mt-3 lightNeonBlue'>Built with</p>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-sm lg:grid lg:grid-cols-4 lg:gap-x-4 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                        </div>
                    </div>
                    <div id='flow'></div>
                    <div className='container mx-10 md:mx-24 w-auto md:mt-10 lg:mt-28 smokeyGrayText'>
                        <p className='lightNeonBlue font-bold text-4xl mb-4 md:mb-8 nunito text-center md:text-start'>Work Flow</p>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="flex flex-col items-center">
                                <p className='smokeGreyText nunito font-bold text-2xl mb-3 md:mb-0 md:text-3xl lg:text-5xl'>Development</p>
                                <div className='gap-4 grid grid-cols-3 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-8 md:mt-8 lg:mt-14'>
                                    <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={CSharp} name='c-sharp' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='smokeGreyText nunito font-bold text-2xl mb-3 md:mb-0 mt-4 md:mt-0 md:text-3xl lg:text-5xl'>Productivity</p>
                                <div className='grid grid-cols-3 gap-4 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-8 md:mt-8 lg:mt-14'>
                                    <IconComponent icon={VSCodeIcon} name='vs code' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={GitHubIcon} name='github' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={PostmanIcon} name='postman' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={AzureIcon} name='azure' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={JiraIcon} name='jira' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={FigmaIcon} name='figma' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={CodewarsIcon} name='codewars' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={NotionIcon} name='notion' iconClasses='h-auto bg-slate-100 w-8 lg:w-14 self-center rounded-2xl' />
                                    <IconComponent icon={SlackIcon} name='slack' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
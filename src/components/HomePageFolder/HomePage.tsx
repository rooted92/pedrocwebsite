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
import GitHubIcon from '../../assets/github-icon.svg'
import PostmanIcon from '../../assets/postman-logo-glyph.png';
import JiraIcon from '../../assets/jira.svg';
import FigmaIcon from '../../assets/figma.svg';
import CodewarsIcon from '../../assets/nav_codewars.svg';
import NotionIcon from '../../assets/notion.svg';
import SlackIcon from '../../assets/slack.svg';
import RAG from '../../assets/randomadvicegen.png';
import WordPressIcon from '../../assets/wordpress_icon.png';
import PHPIcon from '../../assets/php_icon.png';
import WrikeIcon from '../../assets/wrike.svg';
import GitIcon from '../../assets/git.svg';

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
    });

    useEffect(() => {
        const removeFade = setTimeout(() => setIsFaded(false), 1000);
        return () => clearInterval(removeFade);
    });

    return (
        <>
            <div id='top' className="flex flex-col h-screen ibm-plex-mono primary-font-color">
                <Navbar />
                <div className="flex-grow container mx-auto">
                    <div id='about' className="container mx-10 mt-5 md:mx-24  md:mt-12 lg:mt-48 w-auto">
                        <div className="grid grid-cols-1 gap-y-8 lg:gap-0 lg:grid-cols-2">
                            <div className='fadeIn'>
                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold major-mono-display ${isFaded ? 'fadeIn' : ''}`}>{greeting}</h1>
                                <p className='w-full text-2xl'>
                                    I'm <span className='text-3xl secondary-font-color'>Pedro Castaneda</span>. DIY-er, food lover, hiker, & Software Developer. Aside from food I also &#x1F49A; to consume API's!</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className={`mt-4 md:mt-0 md:w-3/4 md:h-96 md:object-cover md:object-top lg:w-auto shadow-xl shadow-slate-700`} src={Headshot} alt="Pedro Castaneda" />
                            </div>
                        </div>
                    </div>
                    <div id='projects'></div>
                    <div className='elegant-link container mt-4 md:mx-24 w-auto md:mt-10 lg:mt-32'>
                        <h2 className='secondary-font-color font-bold text-4xl mt-12 md:mb-8 major-mono-display text-center lg:mt-0'>Projects</h2>
                        <div className="container mx-auto w-auto px-10 smokeyGrayText">
                            {/* Project #1 */}
                            <section className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='mb-4 md:mb-0 md:h-72 flex flex-col items-center align-middle w-full'>
                                    <div className='flex md:flex-col md:items-center lg:flex-row'>
                                        <img className='h-auto w-12 md:w-24 mt-6' src={FleetFinderIcon} alt="Fleet Finder icon" />
                                        <p className='mt-4 self-center text-lg md:text-4xl'>Fleet Finder</p>
                                    </div>
                                    <div className="flex justify-between items-center space-x-6 flex-wrap">
                                        <a href='https://fleetfinder.pedroc.dev/' target='_blank' rel='noreferrer' className='text-sm mt-8 py-2'>Live Demo</a>
                                        <a href='https://github.com/rooted92/frontendFF' target='_blank' rel='noreferrer' className='text-sm mt-8 py-2'>Frontend Code</a>
                                        <a href='https://github.com/rooted92/backendFF' target='_blank' rel='noreferrer' className='mt-8 py-2 text-sm'>Backend Code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col row-span-2'>
                                    <div className='flex flex-row'>
                                        <h3 className='font-bold text-xl secondary-font-color'>Description</h3>
                                    </div>
                                    <p className='smokeyGrayText'>Fleet Finder streamlines communication in transportation, making it easier for truck drivers and dispatch teams to track and update the status and location of trailers.</p>
                                    <h3 className='font-bold text-xl mt-3 secondary-font-color'>Built with</h3>
                                    <div className="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-3 lg:gap-4 grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-xs lg:text-base lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={CSharp} name='c-sharp' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={AzureIcon} name='azure' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </section>
                            <hr className='my-6' />
                            {/* Project #2 */}
                            <section className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='md:h-72  flex flex-col md:pt-20 items-center w-full p-2 '>
                                    <p className='brownFont text-6xl flex flex-row quattroFont'>P<img className='w-8 h-8 mt-4' src={PokeballImg} alt="pokeball" />kedex</p>
                                    <div className="grid grid-cols-2 self-center md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-2 lg:justify-items-start lg:self-start lg:gap-x-2 xl:grid xl:grid-cols-2 xl:justify-items-center xl:self-center xl:gap-2">
                                        <a href='https://pokedex.pedroc.dev/' target='_blank' rel='noreferrer' className='text-sm mt-8 py-2'>Live Demo</a>
                                        <a href='https://github.com/rooted92/pokedexreact' target='_blank' rel='noreferrer' className='text-sm mt-8 py-2'>Frontend Code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-xl secondary-font-color'>Description</h3>
                                    <p className='smokeyGrayText'>A React.js application that enhances user experience by offering detailed Pokémon information through the Pokémon API, featuring search options, favorites management, and a user-friendly interface for Pokémon exploration.</p>
                                    <h3 className='font-bold text-xl mt-3 secondary-font-color'>Built with</h3>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:text-sm lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </section>
                            <hr className='my-6' />
                            {/* Project #3 */}
                            <section className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='min-h-72 relative flex flex-col items-center w-full md:p-2'>
                                    <img src={StarWarsLogo} className='h-44 w-auto' alt="starwars logo" />
                                    <div className="flex flex-row space-x-6">
                                        <a href='https://starwars.pedroc.dev/' target='_blank' rel='noreferrer' className='text-sm md:mt-2 lg:mt-8 py-2'>Live Demo</a>
                                        <a href='https://github.com/rooted92/starWarsApi' target='_blank' rel='noreferrer' className='text-sm md:mt-2 lg:mt-8 py-2'>Frontend Code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-xl secondary-font-color'>Description</h3>
                                    <p className='smokeyGrayText'>This web app leverages the Star Wars API to dynamically display data from the Star Wars universe, offering user-driven search functionality, navigation through pagination, and engaging features like loading animations.</p>
                                    <h3 className='font-bold text-xl mt-3 secondary-font-color'>Built with</h3>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-sm lg:grid lg:grid-cols-4 lg:gap-x-4 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-8 lg:w-14 self-center rounded' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </section>
                            <hr className='my-6' />
                            {/* Project #4 */}
                            <section className="grid grid-cols-1 lg:grid-cols-2">
                                <div className='min-h-72 relative flex flex-col items-center w-full md:p-2 '>
                                    <p className='major-mono-display lg:text-xl mb-1'>Random Advice Generator</p>
                                    <img src={RAG} className='h-auto w-52 lg:h-44 lg:w-auto my-8 md:my-1' alt="screenshot of random advice generator" />
                                    <div className="flex flex-row space-x-6">
                                        <a href='https://randomadvicegen.pedroc.dev/' target='_blank' rel='noreferrer' className='text-sm md:mt-2 lg:mt-8 py-2'>Live Demo</a>
                                        <a href='https://github.com/rooted92/advicegeneratorv2' target='_blank' rel='noreferrer' className='text-sm md:mt-2 lg:mt-8 py-2'>Frontend Code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-xl secondary-font-color'>Description</h3>
                                    <p>An app that employs the adviceslip API to provide random advice at the click of a button, offering a dynamic and user-engaging experience with a design that mirrors the meticulous style of Frontmentor.</p>
                                    <h3 className='font-bold text-xl mt-3 secondary-font-color'>Built with</h3>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-sm lg:grid lg:grid-cols-4 lg:gap-x-4 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </section>
                            <hr className='my-6' />
                        </div>
                    </div>
                    <div id='flow'></div>
                    {/* TODO: AND ECTS?REEE JS to fileter 3DS icons and projects? */}
                    <div className='container mx-10 md:mx-24 w-auto md:mt-10 lg:mt-28 smokeyGrayText'>
                        <h2 className='secondary-font-color font-bold text-4xl mb-4 md:mb-8 major-mono-display text-center'>Work Flow</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="flex flex-col items-center">
                                <h3 className='major-mono-display font-bold text-2xl mb-3 md:mb-0'>Development</h3>
                                <div className='gap-4 grid grid-cols-3 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-8 md:mt-8 lg:mt-14'>
                                    <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-8 lg:w-14 self-center rounded' />
                                    <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={CSharp} name='c-sharp' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={WordPressIcon} name='wordpress' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={PHPIcon} name='php' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={GitIcon} name='git' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h3 className='major-mono-display font-bold text-2xl mb-3 md:mb-0 mt-4 md:mt-0'>Productivity</h3>
                                <div className='grid grid-cols-3 gap-4 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-8 md:mt-8 lg:mt-14'>
                                    <IconComponent icon={VSCodeIcon} name='vs code' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={GitHubIcon} name='github' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={PostmanIcon} name='postman' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={AzureIcon} name='azure' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={JiraIcon} name='jira' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={FigmaIcon} name='figma' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={CodewarsIcon} name='codewars' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={NotionIcon} name='notion' iconClasses='h-auto bg-slate-100 w-8 lg:w-14 self-center rounded' />
                                    <IconComponent icon={SlackIcon} name='slack' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    <IconComponent icon={WrikeIcon} name='wrike' iconClasses='h-auto w-8 lg:w-14 self-center rounded' />
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
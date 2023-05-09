import React, { useEffect } from 'react';
import Navbar from '../NavbarFolder/NavbarComponent';
import Footer from '../FooterFolder/FooterComponent';
import IconComponent from '../IconFolder/IconComponent';
import Headshot from '../../assets/09-csas5_headshots_pedro_castenada_720.jpg';
import FleetFinderLoginImg from '../../assets/fleetFinderLogin.png';
import DispatchDashboardImg from '../../assets/dispatchDashboard.png';
import FleetFinderCode from '../../assets/fleetFinderCode.png';
import PokeballImg from '../../assets/pokeball.svg';
import StarWarsLogo from '../../assets/star-wars-logo.png';
import PokeballFavorites from '../../assets/pokeFavorites.png';
import PokeballHomepage from '../../assets/pokeHomepage.png';

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
import WorkInProgress from '../../assets/work-in-progress.svg';

import './HomePage.css';

const HomePage = () => {

    return (
        <>
            <div id='top' className="flex flex-col h-screen inder">
                <Navbar />
                <div className="flex-grow container mx-auto">

                    <div id='about' className="container mx-10 mt-20 md:mx-24 md:mt-28 lg:mt-48 w-auto">
                        <div className="md:grid md:grid-cols-1 md:gap-y-8 lg:gap-0 lg:grid lg:grid-cols-3">
                            <div className='col-span-2'>
                                <div className=' text-4xl md:text-9xl lightNeonBlue font-bold nunito'>Hi there,</div>
                                <p className='smokeGreyText w-full'>
                                    I'm Pedro Castaneda, a determined individual who transitioned from truck driving to software development after discovering the potential of web3 technologies through NFTs. Inspired by my persistence on the road, I bring the same tenacity to coding, navigating complex challenges and finding efficient solutions. With a drive for problem-solving and an eagerness to embrace new possibilities, I embarked on a dedicated journey into software development, fueled by unwavering commitment.</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='mt-4 rounded-lg md:mt-0 md:w-3/4 md:h-96 md:object-cover md:object-top md:rounded-xl lg:w-auto lg:h-72 lg:hover:grayscale lg:rounded-full' src={Headshot} alt="Picture of me, Pedro" />
                            </div>
                        </div>

                    </div>
                    <div id='projects'></div>
                    <div  className='container mt-4 md:mx-24 w-auto md:mt-10 lg:mt-32'>
                        <p className='lightNeonBlue font-bold text-4xl md:mb-8 nunito text-center md:text-start'>Projects</p>
                        <div className="container mx-auto w-auto px-10 smokeyGrayText">
                            {/* Project #1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className='mb-4 md:mb-0 md:h-72 flex flex-col items-center w-full'>
                                    <div className='flex md:flex-col md:items-center lg:flex-row'>
                                        <img className='h-auto w-12 md:w-24 mt-6' src={FleetFinderIcon} alt="Fleet Finder icon" />
                                        <p className='mt-4 self-center text-lg md:text-4xl'>Fleet Finder</p>
                                    </div>
                                    <div className="grid grid-cols-2 self-start md:grid md:grid-cols-1 md:self-start lg:grid lg:grid-cols-2 lg:self-start lg:gap-x-2 xl:flex xl:flex-row xl:space-x-10">
                                        <a href='https://fleetfinder.pedroc.dev/' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/frontendFF' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view frontend code</a>
                                        <a href='https://github.com/rooted92/backendFF' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view backend code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col row-span-2'>
                                    <div className='flex flex-row'>
                                        <p className='font-bold text-xl smokeGreyText'>Description</p>
                                        <img className='h-auto w-10 ml-4' src={WorkInProgress} alt="work in progress icon" />
                                    </div>
                                    <p className='smokeyGrayText'>Fleet Finder is a project that improves communication and operational efficiency in the transportation industry. It simplifies the process of notifying dispatch teams about the location and important details of company trailers, benefiting truck drivers and dispatch teams alike. Using Fleet Finder, truck drivers can submit a form that provides real-time updates on trailer status and key information, which can be immediately viewed by the dispatch team.</p>
                                    <p className='font-bold text-xl mt-3 smokeGreyText'>Built with</p>
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
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className='md:h-72  flex flex-col md:pt-20 items-center w-full p-2 '>
                                    <p className='brownFont text-6xl flex flex-row quattroFont'>P<img className='w-8 h-8 mt-4' src={PokeballImg} alt="pokeball" />kedex</p>
                                    <div className="grid grid-cols-2 self-center md:grid md:grid-cols-1 md:self-start lg:grid lg:grid-cols-2 lg:justify-items-start lg:self-start lg:gap-x-2 xl:grid xl:grid-cols-2 xl:justify-items-center xl:self-center xl:gap-2">
                                        <a href='https://pokemonv1.pedroc.dev/' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view old website</a>
                                        <a href='https://pokedex.pedroc.dev/' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view new website</a>
                                        <a href='https://github.com/rooted92/pokemanApi' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>old code</a>
                                        <a href='https://github.com/rooted92/pokedexreact' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>new code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl smokeGreyText'>Description</p>
                                    <p className='smokeyGrayText'>Pokedex is an intuitive React.js application that leverages the Pokémon API to provide users with comprehensive information about Pokémon. The app allows users to search for Pokémon by name or ID, displaying details such as name, ID, image, type, location, evolutions, moves, abilities, and fun factoids. With enhanced features like favorites management and dynamic updates based on user input, Pokedex offers an improved and immersive experience compared to the original HTML, CSS, and vanilla JS version. It utilizes efficient helper functions to handle data formatting, retrieve relevant information, and present users with an engaging interface for exploring and learning about Pokémon.</p>
                                    <p className='font-bold text-xl mt-3 smokeGreyText'>Built with</p>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:text-sm lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                            {/* Project #3 */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className='min-h-72 relative flex flex-col items-center w-full md:p-2 '>
                                    <img src={StarWarsLogo} className='h-44 w-auto' alt="starwars logo" />
                                    <div className="flex flex-row space-x-2">
                                        <a href='https://starwars.pedroc.dev/' target='_blank' className='text-sm md:mt-2 lg:mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/starWarsApi' target='_blank' className='text-sm md:mt-2 lg:mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl smokeGreyText'>Description</p>
                                    <p className='smokeyGrayText'>The Star Wars API project is a web application that utilizes the Star Wars API (<a className='hover:text-[#59F8E8]' href="https://swapi.dev/" target='_blank'>SWAPI</a>) to display data from various categories within the Star Wars universe. It fetches data from the API based on user-selected categories and search terms, dynamically generating cards or elements to present the retrieved information. The project includes pagination functionality for navigating large datasets, as well as features like loading animations and error messages. Implemented in JavaScript, the project showcases API integration and interactive web development, allowing users to explore and retrieve information from the vast Star Wars universe.</p>
                                    <p className='font-bold text-xl mt-3 smokeGreyText'>Built with</p>
                                    <div className="grid grid-cols-3 md:gap-x-8 md:gap-y-1 md:text-sm lg:grid lg:grid-cols-4 lg:gap-x-4 xl:grid xl:grid-cols-5 lg:p-4 mt-2">
                                        <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-8 lg:w-14 self-center' />
                                        <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-8 lg:w-14 self-center' />
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
                                    <IconComponent icon={NotionIcon} name='notion' iconClasses='h-auto w-8 lg:w-14 self-center' />
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
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

import './HomePage.css';

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col h-screen inder">
                <Navbar />
                <div className="flex-grow container mx-auto">

                    <div className="container mx-24 mt-48 w-auto">
                        <div className="grid grid-cols-3">
                            <div className='col-span-2'>
                                <div className='text-9xl lightNeonBlue font-bold nunito'>Hi there,</div>
                                <p className='smokeGreyText w-full'>My name is Pedro Castaneda, a determined individual who transitioned from being a truck driver to exploring the world of software development after delving into investments like Bitcoin, Ethereum, and NFTs. Inspired by my persistence on the road, I bring the same tenacity to coding, never giving up until a problem is solved. Just as a truck driver navigates complex routes, I now navigate intricate coding challenges, adapting to new terrains and finding efficient solutions. With an inherent drive for problem-solving and an eagerness to embrace new possibilities, I embarked on a journey into software development, fueled by dedication and unwavering commitment.</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='w-auto h-72 hover:grayscale rounded-full' src={Headshot} alt="Picture of me, Pedro" />
                            </div>
                        </div>

                    </div>
                    <div className='container mx-24 w-auto mt-32'>
                        <p className='lightNeonBlue font-bold text-4xl mb-8 nunito'>Projects</p>
                        <div className="container mx-auto w-auto px-10 smokeyGrayText">
                            {/* Project #1 */}
                            <div className="grid grid-cols-2">
                                <div className='h-72 flex flex-col items-center w-full'>
                                    <div className='flex flex-row'>
                                        <img className='h-auto w-24 mt-6' src={FleetFinderIcon} alt="Fleet Finder icon" />
                                        <p className='mt-4 self-center text-4xl'>Fleet Finder</p>
                                    </div>
                                    <div className="flex flex-row space-x-2">
                                        <a href='#' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/frontendFF' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view frontend code</a>
                                        <a href='https://github.com/rooted92/backendFF' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view backend code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col row-span-2'>
                                    <p className='font-bold text-xl smokeGreyText'>Description</p>
                                    <p className='smokeyGrayText'>Fleet Finder is a project that improves communication and operational efficiency in the transportation industry. It simplifies the process of notifying dispatch teams about the location and important details of company trailers, benefiting truck drivers and dispatch teams alike. Using Fleet Finder, truck drivers can submit a form that provides real-time updates on trailer status and key information, which can be immediately viewed by the dispatch team.</p>
                                    <p className='font-bold text-xl mt-3 smokeGreyText'>Built with</p>
                                    <div className="grid grid-cols-5 p-4 mt-2">
                                        <IconComponent icon={ReactIcon} name='react.js'iconClasses='h-auto w-14 self-center' />
                                        <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-14 self-center' />
                                        <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-14 self-center' />
                                        <IconComponent icon={CSharp} name='c-sharp' iconClasses='h-auto w-14 self-center' />
                                        <IconComponent icon={AzureIcon} name='azure' iconClasses='h-auto w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                            {/* Project #2 */}
                            <div className="grid grid-cols-2">
                                <div className='min-h-72 relative flex flex-col pt-20 items-center w-full p-2 '>
                                    <p className='brownFont text-6xl flex flex-row quattroFont'>P<img className='w-8 h-8 mt-4' src={PokeballImg} alt="pokeball" />kedex</p>
                                    <div className="flex flex-row space-x-2">
                                        <a href='#' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/pokedexreact' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl smokeGreyText'>Description</p>
                                    <p className='smokeyGrayText'>Pokedex uses the Pokémon API to display information about Pokémon. Users can search for Pokémon by name or ID and view details such as name, ID, image, type, location, evolutions, moves, abilities, and fun factoids. The app shows a random Pokémon when loaded and updates the display based on user searches. It includes features like adding/removing Pokémon from favorites and checking saved favorites. The app uses helper functions for data formatting, determining font color, retrieving flavor text, evolution sprites, moves, abilities, and location. Overall, it provides an intuitive interface for exploring and learning about Pokémon using the API.</p>
                                    <p className='font-bold text-xl mt-3 smokeGreyText'>Built with</p>
                                    <div className="grid grid-cols-5 p-4 mt-2">
                                    <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-14 self-center' />
                                    <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-14 self-center' />
                                    <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-6' />
                            {/* Project #3 */}
                            <div className="grid grid-cols-2">
                                <div className='min-h-72 relative flex flex-col items-center w-full p-2 '>
                                    <img src={StarWarsLogo} className='h-44 w-auto' alt="starwars logo" />
                                    <div className="flex flex-row space-x-2">
                                        <a href='#' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view website</a>
                                        <a href='https://github.com/rooted92/starWarsApi' target='_blank' className='text-sm mt-8 lightNeonBlue hover:animate-pulse rounded-md hover:shadow-lg hover:shadow-teal-300 p-2'>view code</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl smokeGreyText'>Description</p>
                                    <p className='smokeyGrayText'>The Star Wars API project is a web application that utilizes the Star Wars API (<a className='hover:text-[#59F8E8]' href="https://swapi.dev/" target='_blank'>SWAPI</a>) to display data from various categories within the Star Wars universe. It fetches data from the API based on user-selected categories and search terms, dynamically generating cards or elements to present the retrieved information. The project includes pagination functionality for navigating large datasets, as well as features like loading animations and error messages. Implemented in JavaScript, the project showcases API integration and interactive web development, allowing users to explore and retrieve information from the vast Star Wars universe.</p>
                                    <p className='font-bold text-xl mt-3 smokeGreyText'>Built with</p>
                                    <div className="grid grid-cols-5 p-4 mt-2">
                                    <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-14 self-center' />
                                    <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-14 self-center' />
                                    <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-14 self-center' />
                                    <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-14 self-center' />
                                    </div>
                                </div>
                            </div>
                            {/* <hr className=' border-teal-300 rounded-3xl my-6' /> */}
                        </div>
                    </div>
                    <div className='container mx-24 w-auto mt-16 smokeyGrayText'>
                        <p className='lightNeonBlue font-bold text-4xl mb-8 nunito'>Work Flow</p>
                        <div className='grid grid-cols-2'>
                            <div className="flex flex-col items-center">
                                <p className='smokeGreyText nunito font-bold text-5xl'>Development</p>
                                <div className='grid grid-cols-4 gap-8 mt-14'>
                                <IconComponent icon={HTMLIcon} name='html' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={CSSIcon} name='css' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={JavascriptIcon} name='javascript' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={TypeScriptIcon} name='typescript' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={CSharp} name='c-sharp' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={ReactIcon} name='react.js' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={TailwindIcon} name='tailwind' iconClasses='h-auto w-14 self-center' />
                                <IconComponent icon={BootstrapIcon} name='bootstrap' iconClasses='h-auto w-14 self-center' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='smokeGreyText nunito font-bold text-5xl'>Productivity</p>
                                <div className='grid grid-cols-4 gap-8 mt-14'>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-auto w-14 ml-2' src={VSCodeIcon} alt="visual studio code icon" />
                                        <p className='text-center'>vs code</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={GitHubIcon} alt="Github icon" />
                                        <p className='text-center'>github</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-auto w-14 ml-2' src={PostmanIcon} alt="postman icon" />
                                        <p className='text-center'>postman</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={AzureIcon} alt="azure icon" />
                                        <p className='text-center'>azure</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={JiraIcon} alt="jira icon" />
                                        <p className='text-center'>jira</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={FigmaIcon} alt="figma icon" />
                                        <p className='text-center'>figma</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={CodewarsIcon} alt="codewars icon" />
                                        <p className='text-center'>codewars</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={NotionIcon} alt="notion icon" />
                                        <p className='text-center'>notion</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <img className='h-14 w-auto' src={SlackIcon} alt="slack icon" />
                                        <p className='text-center'>slack</p>
                                    </div>
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
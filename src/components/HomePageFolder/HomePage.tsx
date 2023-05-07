import React, { useEffect } from 'react';
import Navbar from '../NavbarFolder/NavbarComponent';
import Footer from '../FooterFolder/FooterComponent';
import Headshot from '../../assets/09-csas5_headshots_pedro_castenada_720.jpg';
import FleetFinderLoginImg from '../../assets/fleetFinderLogin.png';
import DispatchDashboardImg from '../../assets/dispatchDashboard.png';
import FleetFinderCode from '../../assets/fleetFinderCode.png';
import FleetFinderIcon from '../../assets/fleetlogo.png';
import BootstrapIcon from '../../assets/bootstrap.svg';
import ReactIcon from '../../assets/atom.svg';
import TypeScriptIcon from '../../assets/typescript.svg';
import CSharp from '../../assets/c-sharp.svg';
import TailwindIcon from '../../assets/tailwindIcon.png'
import AzureIcon from '../../assets/azure.svg';
import PokeballImg from '../../assets/pokeball.svg';
import PokeballFavorites from '../../assets/pokeFavorites.png';
import PokeballHomepage from '../../assets/pokeHomepage.png';
import './HomePage.css';

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col h-screen inder">
                <Navbar />
                <div className="flex-grow container mx-auto">

                    <div className="relative container mx-24 mt-48 w-auto">
                        <div className='text-9xl lightNeonBlue font-bold nunito'>Hi there,</div>
                        <p className='smokeGreyText Text w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla earum totam nobis? Qui reprehenderit neque rem soluta ratione, quibusdam est veritatis obcaecati culpa illo perferendis eveniet, iste in rerum!</p>
                        <img className='absolute top-0 right-0 w-auto h-72 grayscale hover:grayscale-0 mr-24 rounded-full' src={Headshot} alt="Picture of me, Pedro" />
                    </div>
                    <div className='container mx-24 w-auto mt-36'>
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
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={ReactIcon} alt="react icon" />
                                            <p className='text-center'>react.js</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={TypeScriptIcon} alt="typescript icon" />
                                            <p className='text-center'>typescript</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={BootstrapIcon} alt="bootstrap icon" />
                                            <p className='text-center'>bootstrap</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={CSharp} alt="c-sharp icon" />
                                            <p className='text-center'>c-sharp</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={AzureIcon} alt="azure icon" />
                                            <p className='text-center'>azure</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-span-1'>
                                    <div className=''>
                                        <img src={FleetFinderLoginImg} alt="image of Fleet Finder login page" />
                                    </div>
                                    <div className=''>
                                        <img src={FleetFinderCode} alt="image of Dispatch Dashboard from Fleet Finder app" />
                                    </div>
                                    <div className='overflow-y-scroll h-72'>
                                        <img className='w-full h-auto' src={DispatchDashboardImg} alt="image of code from Fleet Finder" />
                                    </div>
                                </div> */}
                            </div>

                            <hr className=' border-teal-300 rounded-3xl my-8' />
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
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={ReactIcon} alt="react icon" />
                                            <p className='text-center'>react.js</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={TypeScriptIcon} alt="typescript icon" />
                                            <p className='text-center'>typescript</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <img className='h-14 w-auto' src={TailwindIcon} alt="bootstrap icon" />
                                            <p className='text-center'>tailwind</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='grid grid-cols-4 gap-10 mt-5'>
                                <div className='col-span-2'>
                                    <img src={PokeballHomepage} alt="image of Fleet Finder login page" />
                                </div>
                                <div className='col-span-2'>
                                    <img src={PokeballFavorites} alt="image of Dispatch Dashboard from Fleet Finder app" />
                                </div>
                            </div> */}
                            <hr className=' border-teal-300 rounded-3xl my-8' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
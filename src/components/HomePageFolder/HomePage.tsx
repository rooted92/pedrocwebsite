import React, { useEffect } from 'react';
import Navbar from '../NavbarFolder/NavbarComponent';
import Footer from '../FooterFolder/FooterComponent';
import Headshot from '../../assets/09-csas5_headshots_pedro_castenada_720.jpg';
import FleetFinderLoginImg from '../../assets/fleetFinderLogin.png';
import DispatchDashboardImg from '../../assets/dispatchDashboard.png';
import FleetFinderCode from '../../assets/fleetFinderCode.png'

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="flex-grow">
                    <Navbar />
                    <div className="relative container mx-24 mt-48 w-auto">
                        <div className='text-9xl lightNeonBlue font-bold'>Hi there,</div>
                        <p className='smokeyGray w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla earum totam nobis? Qui reprehenderit neque rem soluta ratione, quibusdam est veritatis obcaecati culpa illo perferendis eveniet, iste in rerum!</p>
                        <img className='absolute top-0 right-0 w-auto h-72 grayscale hover:grayscale-0 mr-24' src={Headshot} alt="Picture of me, Pedro" />
                    </div>
                    <div className='container mx-24 w-auto mt-36'>
                        <p className='lightNeonBlue font-bold text-4xl mb-8'>Projects</p>
                        <div className="container mx-auto w-auto px-6">
                            <div className="grid grid-cols-4 smokeyGray gap-10">
                                <div className='h-72 relative w-60 hover:shadow-lg hover:shadow-teal-300 hover:border-none p-2 overflow-hidden hover:overflow-y-scroll'>
                                    <p className='text-center hover:animate-bounce absolute top-1 left-7'>Fleet Finder</p>
                                    <img className='h-auto w-full mb-3 mt-10' src={FleetFinderLoginImg} alt="image of fleet finder login page" />
                                    <img className='h-52 w-full mb-3' src={DispatchDashboardImg} alt="image of dispatch dashboar from fleet finder app" />
                                    <img className='h-auto w-full' src={FleetFinderCode} alt="image of code for fleet finder app" />
                                </div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>
                                    Star Wars
                                </div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>
                                    Pokedex
                                </div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>
                                    Blog
                                </div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>
                                    weather.exchange
                                </div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>
                                    Social Media Dashboard
                                </div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>Random Advice Generator</div>
                                <div className='h-72 bg-slate-900 w-60 border border-red-950 hover:scale-110 hover:shadow-lg hover:shadow-teal-300 hover:border-none'>All for One</div>
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
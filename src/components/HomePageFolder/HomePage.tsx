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
import AzureIcon from '../../assets/azure.svg';
import './HomePage.css';

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col h-screen inder">
                <div className="flex-grow">
                    <Navbar />
                    <div className="relative container mx-24 mt-48 w-auto">
                        <div className='text-9xl lightNeonBlue font-bold nunito'>Hi there,</div>
                        <p className='smokeyGray w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla earum totam nobis? Qui reprehenderit neque rem soluta ratione, quibusdam est veritatis obcaecati culpa illo perferendis eveniet, iste in rerum!</p>
                        <img className='absolute top-0 right-0 w-auto h-72 grayscale hover:grayscale-0 mr-24' src={Headshot} alt="Picture of me, Pedro" />
                    </div>
                    <div className='container mx-24 w-auto mt-36'>
                        <p className='lightNeonBlue font-bold text-4xl mb-8 nunito'>Projects</p>
                        <div className="container mx-auto w-auto px-6 smokeyGray">
                            <div className="grid grid-cols-2 gap-0">
                                <button className='h-72 relative flex flex-col items-center w-4/5 hover:shadow-lg hover:shadow-teal-300 p-2 hover:animate-pulse rounded-xl'>
                                    <img className='h-auto w-40 mt-6' src={FleetFinderIcon} alt="Fleet Finder icon" />
                                    <p className='mt-4'>Fleet Finder</p>
                                    <p className='text-sm mt-8 lightNeonBlue'>click to view website</p>
                                </button>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-xl'>Description</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil porro doloribus rem fugit distinctio et! Laudantium animi, possimus rem nam sint accusantium enim in nemo saepe, eaque soluta suscipit, provident culpa! Recusandae aliquid pariatur quisquam.</p>
                                    <p className='font-bold text-xl mt-3'>Built with</p>
                                    <div className="grid grid-cols-5 p-4">
                                        <img className='h-14 w-auto' src={BootstrapIcon} alt="bootstrap icon" />
                                        <img className='h-14 w-auto' src={ReactIcon} alt="" />
                                        <img className='h-14 w-auto' src={CSharp} alt="c-sharp icon" />
                                        <img className='h-14 w-auto' src={AzureIcon} alt="azure icon" />
                                        <img className='h-14 w-auto' src={TypeScriptIcon} alt="typescript icon" />
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-10 mt-5'>
                                <div className='col-span-2'>
                                    <img src={FleetFinderLoginImg} alt="image of Fleet Finder login page" />
                                </div>
                                <div className='row-span-2'>
                                    <img src={FleetFinderCode} alt="image of Dispatch Dashboard from Fleet Finder app" />
                                </div>
                                <div className='col-span-2 overflow-y-scroll h-72'>
                                    <img className='w-full h-auto' src={DispatchDashboardImg} alt="image of code from Fleet Finder" />
                                </div>
                            </div>
                            <hr className=' border-teal-300 rounded-3xl my-24' />
                            <div className="grid grid-cols-2">

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
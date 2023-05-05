import React, { useEffect } from 'react';
import Navbar from '../NavbarFolder/NavbarComponent';
import Footer from '../FooterFolder/FooterComponent';
import Headshot from '../../assets/09-csas5_headshots_pedro_castenada_720.jpg'

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="flex-grow">
                    <Navbar />
                    <div className="relative container mx-24 mt-24 w-auto">
                        <div className='text-9xl lightNeonBlue font-bold'>Hi there,</div>
                        <p className='smokeyGray w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla earum totam nobis? Qui reprehenderit neque rem soluta ratione, quibusdam est veritatis obcaecati culpa illo perferendis eveniet, iste in rerum!</p>
                        <img className='absolute top-0 right-0 w-auto h-72 grayscale hover:grayscale-0 mr-24 hover:brightness-50' src={Headshot} alt="Picture of me, Pedro" />
                    </div>
                    <div className='container mx-auto w-auto mt-36'>
                        <p className='lightNeonBlue font-bold text-4xl'>Projects</p>
                        <div className="container mx-auto w-auto">
                            <div className="grid grid-cols-4 smokeyGray">
                                <div>project</div>
                                <div>project</div>
                                <div>project</div>
                                <div>project</div>
                                <div>project</div>
                                <div>project</div>
                                <div>project</div>
                                <div>project</div>
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
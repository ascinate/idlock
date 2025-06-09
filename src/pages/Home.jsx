import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


//Image
import ione from "/i1.png"
import itwo from "/i2.png"
import ithree from "/i3.png"
import ifour from "/i4.png"
import isix from "/i6.png"


function Home() {
    return (
        <>
            <Navbar />

            <main>
                <section className='section-hero'>

                    <div className='wrapper'>
                        <div className='container-hero flex items-center gap-52 '>
                            <div>
                                <h1 className='hero-main-text'>Compliance and security growth with IDLock</h1>
                                <p className='sub-text mb-11'>Enhances growth by increasing compliance and security by facial recognition, content detection technologies</p>
                                <button className='theme-color-btn' id=''>Get Started</button>
                                <button className='white-color-btn ' id=''>Try Demo</button>
                            </div>


                            <div className='hero-img-containter'>
                               
                                <img src={ithree} alt="" className='ithree'/>
                                <img src={ifour} alt="" className='ifour'/>
                                <img src={ione} alt=""  className='ione-face'/>
                                <img src={itwo} alt=""  className='itwo'/>
                                <img src={isix} alt=""  className='isix'/>
                                {/* <img src={ione} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home
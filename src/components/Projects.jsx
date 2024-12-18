import React from 'react';
import PredictApp from '../assets/Predict-App2.png'
import ThutoUi from '../assets/Login@2x.png'
import WMP from '../assets/Web_Music_Player.png'
import BookLibrary from '../assets/Personal_Book_Library.png'
import firstPortfolio from '../assets/FirstPortfolio.png'


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-gradient-to-b from-[#B7B7B7] to-[#E1E1E1] dark:bg-gradient-to-b dark:from-[#272727] dark:to-[#1B1B1B]  '>
        <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="pb-8 text-center">
                <h1 className='font-bold text-[#D8843B] text-3xl'>Projects</h1>
                <p className='font-semibold text-[#1B1B1B] dark:text-white text-md py-4'>Feel free to check out my recent projects. Follow the links to view the projects and more projects coming soon.</p>
            </div>
            {/* Container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            
            {/* Grid Item */}
                <div style={{backgroundImage: `url(${PredictApp})`}} className='shadow-2xl shadow-[#4F4F4F] group container rounded-md flex justify-center items-center mx-auto content-div ease-in-out duration-300'>

                    {/*Hover Effect */} 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-[#E1D7C2] tracking-wider'>
                            Predict Express App
                        </span>
                        <div className='pt-6 text-center'>
                            <a href="https://predict-0tf4.onrender.com/">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/TEMOSO-MOJAPELO/predict.git">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ThutoUi})`}} className='shadow-2xl shadow-[#4F4F4F] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effect */} 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl mx-12 font-bold text-[#E1D7C2] '>
                            Thuto VT UI
                        </span>
                        <div className='pt-6 text-center'>
                            <a href="https://github.com/TEMOSO-MOJAPELO/ThutoUI.git">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>View</button>
                            </a>
                            
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${firstPortfolio})`}} className='shadow-2xl shadow-[#4F4F4F] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*Hover Effect */} 
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#E1D7C2] tracking-wider'>
                        Portfolio React App
                    </span>
                    <div className='pt-6 text-center'>
                        <a href="https://github.com/TEMOSO-MOJAPELO/portfolio-react-app.git">
                            <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                <div style={{backgroundImage: `url(${WMP})`}} className='shadow-2xl shadow-[#4F4F4F] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effect */} 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl mx-12 font-bold text-[#E1D7C2] tracking-wider'>
                            Web Music Player
                        </span>
                        <div className='pt-6 text-center'>
                            <a href="https://predict-0tf4.onrender.com/">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/TEMOSO-MOJAPELO/HexSoftwares_Web_Music_Player.git">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${BookLibrary})`}} className='shadow-2xl shadow-[#4F4F4F] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/*Hover Effect */} 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl mx-12 font-bold text-[#E1D7C2] tracking-wider'>
                            Book Library
                        </span>
                        <div className='pt-6 text-center'>
                            <a href="https://predict-0tf4.onrender.com/">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/TEMOSO-MOJAPELO/HexSoftwares_Project3_Book_Library.git">
                                <button className='text-center rounded-xl px-8 py-3 m-2 bg-[#E9DFCE] text-[#D8843B] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Projects
import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";

export default function Titles() {
    const [isOpen, setOpen] = useState(false);
    const [titles, setTitles] = useState(null);
    
    useEffect(() => {
        fetch('https://local2627.org/api/titles')
        .then(res => res.json())
        .then(data => {
            setTitles(data);
            console.log(titles);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Collapse isOpened={ isOpen }>
                <div className="pb-8 mb-8 flex justify-center">
                    <div>
                        List
                    </div>
                </div>
            </Collapse>

            <div className="-m-4 sm:-m-6 lg:-m-8" style={{ 
                minHeight: 'calc(100vh - 65px)', 
                background: 'url(https://local2627.org/resources/career_bg.jpg) no-repeat', 
                backgroundSize: 'cover' }}>

                <div className="relative overflow-hidden">
                    <div className="pb-80 pt-16 sm:p-40 sm:pt-24 lg:pb-48 lg:pt-40">
                        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                            <div className="sm:max-w-lg">
                                <h1 className="text-5xl font-bold tracking-tight text-gray-900 font-extralight">
                                    Career <span className="text-3xl">& Titles</span>
                                </h1>
                                <p className="mt-4 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div>
                                <div className="mt-10">
                                    <button className="inline-block rounded-md border border-transparent 
                                        bg-cyan-700 px-4 py-1 text-center font-medium text-white"
                                        onClick={ () => setOpen(!isOpen) }>
                                        
                                        Title list
                                        <svg className="inline-block w-6 h-6 ml-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
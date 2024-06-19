import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import TitlePanel from "../components/title-panel";

export function Titles() {
    const [titles, setTitles] = useState();
    const [isTitleListOpen, setTitleListOpen] = useState(false);
    const [isTitlePanelOpen, setTitlePanelOpen] = useState(false);
    const openTitlePanel = () => setTitlePanelOpen(true);
    const closeTitlePanel = () => setTitlePanelOpen(false);
    const [selectedTitle, setSelectedTitle] = useState({});

    const selectTitle = (title) => {
        setSelectedTitle(title);
        openTitlePanel();
    }

    useEffect(() => {
        fetch('https://local2627.org/api/titles')
            .then(res => res.json())
            .then(data => setTitles(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <TitlePanel isTitlePanelOpen={ isTitlePanelOpen } title={ selectedTitle } closeTitlePanel={ closeTitlePanel }  />

            <Collapse isOpened={ isTitleListOpen }>
                { !titles ? <p className="text-center">Loading...</p> : null }
                <div className="pb-8 mb-8 flex justify-center">
                    <ul className="divide-y divide-gray-100">
                        {
                            titles?.map((title) => (
                                <li key={ title.code } className="flex justify-between gap-x-6 py-5">
                                    <Link onClick={ () => selectTitle(title) }>
                                        <div className="flex gap-x-4">
                                            <div className="min-w-0 flex-auto">
                                                <p className="text-lg leading-6 text-gray-900">{ title.name }</p>
                                                <p className="mt-1 truncate text-sm leading-5 text-gray-900">{ title.code }</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
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
                                <h1 className="text-5xl tracking-tight text-gray-900 font-light">
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
                            <div className="mb-4">
                                <div className="mt-10">
                                    <button className="text-white rounded-full bg-cyan-700 px-6 py-1.5 text-center font-medium"
                                        onClick={ () => setTitleListOpen(!isTitleListOpen) }>
                                        
                                        Title list
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Link to={ 'https://local2627.org/resources/pdf/Hard_To_Recruit_Titles_Titles_That_Must_Live_in_NYC_b.pdf' }
                                    target="_blank" className="text-black rounded-full bg-gray-50 px-6 py-1.5 font-medium">
                                    
                                    Titles That Can Live Outside of NYC
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
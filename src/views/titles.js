import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import TitlePanel from "../components/title-panel";
import ITProjSpecPO from '../assets/personnel_order_202406_it_project_specialist_05602.pdf';
import ITArchPO from '../assets/personnel_order_202404_it_architect_05600.pdf';
import ITInfraPO from '../assets/personnel_order_202405_it_infrastructure_engineer_05601.pdf';
import ITSecuritySpecPO from '../assets/personnel_order_202407_it_security_specialist_05603.pdf';


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

                                <div style={{ marginBottom: '80px' }}>
                                    <h1 className="text-5xl">Personnel Order</h1>
                                    <p className="text-lg mb-5">The following titles are hereby added to the Competitive Class Service of CUNY:</p>
                                    <p>
                                        <Link to={ ITProjSpecPO } target="_blank" className="text-black rounded-full bg-gray-50 px-6 py-1.5 font-medium">
                                            IT Project Specialist
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to={ ITArchPO } target="_blank" className="text-black rounded-full bg-gray-50 px-6 py-1.5 font-medium">
                                            IT Architect
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to={ ITInfraPO } target="_blank" className="text-black rounded-full bg-gray-50 px-6 py-1.5 font-medium">
                                            IT Infrastracture Engineer
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to={ ITSecuritySpecPO } target="_blank" className="text-black rounded-full bg-gray-50 px-6 py-1.5 font-medium">
                                            IT Security Specialist
                                        </Link>
                                    </p>
                                </div>

                                <h1 className="text-5xl tracking-tight text-gray-900 font-light">
                                    Career <span className="text-3xl">& Titles</span>
                                </h1>
                                <p className="mt-4 text-base">
                                    All Local 2627 titles and more information.
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
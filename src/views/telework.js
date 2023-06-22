import { Link } from "react-router-dom"

export default function Telework() {
    return (
        <div className="max-w-3xl">
            <h3 className="text-3xl font-bold pb-2">Telework</h3>
            
            <h3 className="text-2xl">Leave, & Timekeeping Policies During COVID-19</h3>
            <div className="py-4">
                <p>
                    <a href="/resources/pdf/Personnel_Memorandum_No_1-2022-23.pdf" target="_blank" title="Personnel Memorandum No 1-2022-23">
                        Updated Guidance Related to Attendance, COVID-19 Personnel Memorandum No 1-2022-23
                    </a>
                </p>
            </div>

            <h3 className="text-2xl">Employees During Outbreak</h3>
            <div className="py-4">
                <p>
                    Updated Guidance for City Agencies on Leave Policy Applicable During the Outbreak of Coronavirus Disease
                    2019 (COVID-19), eff. March 30, 2022
                </p>
                <br />
                <p>
                    This document sets forth City leave policy with respect to City employees to mitigate the risk of the
                    spread of Coronavirus Disease 2019 (COVID-19). It is effective March 30, 2022 and until further notice, and
                    supersedes the January 26, 2022 guidance.
                    
                    <Link to="/resources/pdf/Updated_Leave_Guidance_Applicable_to_Employees_During_Outbreak_20220330.pdf" target="_blank" 
                        title="Updated Leave Guidance Applicable to Employees During Outbreak">
                        
                        Read more
                    </Link>
                </p>
            </div>
            
            <h3 className="text-2xl">Telework Policy for Mayoral Agencies</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/PSB_600_3_Temporary_Citywide_Telework_Policy_for_City_Employees_During_t.pdf" target="_blank" 
                        title="PSB 600.3 Temporary Citywide Telework Policy for City Employees During the current COVID-19 Outbreak">
                        
                        PSB 600.3 Temporary Citywide Telework Policy for City Employees During the current COVID-19 Outbreak
                    </Link>
                </p>
            </div>
            
            <h3 className="text-2xl">H+H Telework Policy</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/COVID19_Hospitals_Teleworking.pdf" target="_blank" title="COVID-19 NYC Health + Hospitals Telework Policy">
                        COVID-19 NYC Health + Hospitals Telework Policy
                    </Link>
                </p>
            </div>
            
            <h3 className="text-2xl">Remote Work Guidelines for CUNY</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/CUNY_Remote_Work_Guidelines.pdf" target="_blank" title="CUNY Remote Work Guidelines">
                        CUNY Remote Work Guidelines
                    </Link>
                </p>
            </div>
            
            <h3 className="text-2xl">Emergency Childcare</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/Regional_Enrichment_Centers_CONVID19.pdf" target="_blank" title="Regional Enrichment Centers (CONVID-19)">
                        Regional Enrichment Centers
                    </Link>
                </p>
                <p>
                    <Link to="/resources/pdf/MTA_Bulletin_on_Child_Care_CONVID19.pdf" target="_blank" title="MTA Bulletin on Child Care (CONVID-19)">
                        MTA Bulletin on Child Care
                    </Link>
                </p>
            </div>
            
            <h3 className="text-2xl">Fund the Front Lines</h3>
            <div className="py-4">
                <p>
                    This isn't about partisanship. It's about clean water, road repairs, safe schools, first responders and
                    well-staffed hospitals. And the bottom line is this: we can't defeat the coronavirus and reopen the economy
                    without strong, well-funded public services. We're shouting this message from the rooftops — and now over
                    the airwaves.
                </p>
                <br />
                <p>Contact Congress and tell them to fund the front lines by texting FUND to 237-263.</p>
                <p>
                    <iframe title="Public Service Army" height="315" width="560" border="0" 
                        src="https://www.youtube-nocookie.com/embed/NvpBk400Ifw" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen">
                    </iframe>
                </p>
                <br />
                <p>
                    <iframe title="Front-Line Fighters" height="315" width="560" border="0" 
                        src="https://www.youtube-nocookie.com/embed/gOb0FHT4xsI" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen">
                    </iframe>
                </p>

                <ul className="list-disc p-4">
                    <li><Link to="/covid19" title="COVID-19">COVID-19</Link></li>
                    <li>
                        <Link to="/resources/pdf/PSB_600_4_Temporary_Citywide_Telework_Policy_for_City_Employees_During_t.pdf" target="_blank"
                            title="PSB 600.4 Temporary Citywide Telework Policy for City Employees During the current COVID-19 Outbreak">
                            
                            Telework for Mayoral Agencies Telework Policy
                        </Link>
                    </li>
                    <li>CSM's Accretion</li>
                </ul>
            </div>
        </div>
    );
}
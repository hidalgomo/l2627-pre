import { Link } from "react-router-dom";
import HhTeleworkAgreement from '../assets/hh_telework_agreement.pdf';
import RemoteWorkMOU from '../assets/remote_work_mou.pdf';

export function Telework() {
    return (
        <div className="max-w-3xl" style={{ margin: '0 auto' }}>
            <h3 className="text-3xl font-bold pb-8">Telework</h3>
            
            <h3 className="text-lg font-bold mb-2">Leave, & Timekeeping Policies During COVID-19</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/Personnel_Memorandum_No_1-2022-23.pdf" target="_blank" title="Personnel Memorandum No 1-2022-23">
                        Updated Guidance Related to Attendance, COVID-19 Personnel Memorandum No 1-2022-23
                    </Link>
                </p>
            </div>

            <h3 className="text-lg font-bold mb-2">Employees During Outbreak</h3>
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
            
            <h3 className="text-lg font-bold mb-2">Telework Policy for Mayoral Agencies</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/PSB_600_3_Temporary_Citywide_Telework_Policy_for_City_Employees_During_t.pdf" target="_blank" 
                        title="PSB 600.3 Temporary Citywide Telework Policy for City Employees During the current COVID-19 Outbreak">
                        
                        PSB 600.3 Temporary Citywide Telework Policy for City Employees During the current COVID-19 Outbreak
                    </Link>
                </p>
                <br />
                <p>
                    <Link to={ RemoteWorkMOU } target="_blank">Mayoral Agencies Remote Work Policy</Link>
                </p>
            </div>
            
            <h3 className="text-lg font-bold mb-2">H+H Telework Policy</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/COVID19_Hospitals_Teleworking.pdf" target="_blank" title="COVID-19 NYC Health + Hospitals Telework Policy">
                        COVID-19 NYC Health + Hospitals Telework Policy
                    </Link>
                </p>
            </div>
            
            <h3 className="text-lg font-bold mb-2">Remote Work Guidelines for CUNY</h3>
            <div className="py-4">
                <p>
                    <Link to="/resources/pdf/CUNY_Remote_Work_Guidelines.pdf" target="_blank" title="CUNY Remote Work Guidelines">
                        CUNY Remote Work Guidelines
                    </Link>
                </p>
            </div>

            <h3 className="text-lg font-bold mb-2">Health and Hospitals Remote Work Agreement</h3>
            <div className="py-4">
                <p>
                    <Link to={ HhTeleworkAgreement } target="_blank" title="Health and Hospitals Remote Work Agreement">
                        Health and Hospitals Remote Work Agreement
                    </Link>
                </p>
            </div>
            
            <h3 className="text-lg font-bold mb-2">Emergency Childcare</h3>
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
        </div>
    );
}
import { Link } from "react-router-dom";
import EmblaCarousel from "../components/embla-carousel";
import '../css/embla.css'
import pfl_memo from '../assets/pfl_memo.pdf';
import pfl_deduction from '../assets/pfl_deduction.pdf';
//import { Banner } from "../components/banner";

const OPTIONS = { align: 'start', dragFree: false }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function Home() {
    return (
        <div className="-m-4 sm:-m-6 lg:-m-8" style={{ width: '100vw', minHeight: '100vh' }}>
            {/* <Banner /> */}
            <EmblaCarousel slides={ SLIDES } options={ OPTIONS } />





            <br />
            <br />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 grid-flow-row lg:px-8 sm:px-6 px-11">
                <div className="lg:col-span-3">
                    <h3 className="mb-2 text-xl font-bold">Computer Use</h3>
                    <p className="mb-8">
                        You cannot be barred from computer use for union activities.
                        <br />
                        <Link to="https://local2627.org/resources/pdf/DEP-CannotBarComputerUseForUnionActivities.pdf" target="_blank"
                            style={{ color: '#3B71CA' }}>
                            
                            Read the article
                        </Link>
                    </p>
                    
                    <h3 className="mb-2 text-xl font-bold">Layoffs: Know your rights</h3>
                    <p className="mb-8">
                    Read this article from the Public Employee Press,&nbsp;
                        <Link to="https://local2627.org/resources/pdf/LayoffRightsTakenFromPEP.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            page 20
                        </Link>
                    </p>

                    <h3 className="mb-2 text-xl font-bold">Civil Service Employment Status</h3>
                    <p className="mb-8">
                        <Link to="https://local2627.org/resources/pdf/TypesOfEmploymentStatus.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read the article
                        </Link>
                    </p>

                    <h3 className="mb-2 text-xl font-bold">Fair Labor Standards Act</h3>
                    <p className="mb-8">
                        Who gets paid overtime according to the Fair Labor Standards Act,&nbsp;
                        <Link to="https://local2627.org/resources/pdf/FLSA-CashOvertime.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read the article
                        </Link>
                    </p>

                    <h3 className="mb-2 text-xl font-bold">DCAS List Restoration</h3>
                    <p className="mb-8">
                        What do I do if I'm called from a civil service list for a job interview?<br />
                        Follow the instructions on your interview... (
                            <Link to="https://local2627.org/listRestoration" style={{ color: '#3B71CA' }}>
                                more info
                            </Link>
                        )
                    </p>

                    <h3 className="mb-2 text-xl font-bold">Apply for Jobs</h3>
                    <ul className="list-disc px-8 mb-8">
                        <li>
                            For a list of New York City jobs,&nbsp;
                            <Link to="https://a127-jobs.nyc.gov/" target="_blank" style={{ color: '#3B71CA' }}>click here</Link>
                        </li>
                        <li>
                            For a list of City University of New York jobs,&nbsp;
                            <Link to="http://www2.cuny.edu/about/administration/offices/hr/classified-civil-service/ccsjobs/" 
                                target="_blank" style={{ color: '#3B71CA' }}>
                                
                                click here
                            </Link>
                        </li>
                    </ul>

                    <h3 className="mb-2 text-xl font-bold">Bereavement</h3>
                    <p className="mb-8">
                        Good and Welfare is generally flowers or a fruit basket sent to members 
                        that are seriously ill or members who suffer the death of an immediate 
                        family member or a new birth in the members immediate family. As I stated 
                        generally, there are some exceptions that we decide on as they occur.
                        <br />
                        <br />
                        Per the Citywide Contract: Article 5, Section 5, Sub-Section 6:
                        <br />
                        <br />
                        Family member shall be defined as: spouse; natural, foster or step parent; 
                        child, brother or sister; father-in-law; mother-in-law; any relative residing 
                        in the household; and domestic partner, provided such domestic partner is 
                        registered pursuant to the terms set forth in the New York City Administrative 
                        Code Section 3-240 et seq.
                        <br />
                        <br />
                        When you send a request for Good and Welfare for a member you always have to 
                        include the member's name, agency and phone number. We need to know the where 
                        to send, the what to send and the who to send to.
                    </p>
                </div>

                <div className="lg:col-span-2">

                    {/* <h3 className="mb-2 text-xl font-bold">Alzheimer's Disease Dementia Meeting</h3>
                    <p className="mb-8">
                        <Link to={ health001_flyer } target="_blank">
                            <img src={ health001 } alt="Alzheimer's Disease Dementia Meeting"
                                style={{ maxWidth: '400px', width: '100%' }} />
                        </Link>
                    </p> */}

                    <h3 className="mb-2 text-xl font-bold">Women's Leadership Academy</h3>
                    <p className="mb-8">
                        <Link to="https://local2627.org/resources/pdf/Womens_Leadership_Academy.pdf "
                            target="_blank">
                            
                            <img src="https://local2627.org/resources/images/Womens_Leadership_Academy.png" alt="Women" />
                        </Link>
                    </p>

                    <h3 className="mb-2 text-xl font-bold">Paid Family Leave</h3>
                    <ul className="list-disc px-8 mb-8">
                        <li><Link to={ pfl_memo } target="_blank">Memo to Presidents 2024</Link></li>
                        <li><Link to={ pfl_deduction } target="_blank">Deduction benefits Chart 2024</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/440_16.pdf" target="_blank">Paid Family Leave Benefits for Represented Employees</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/NY_PFL_20181203.pdf" target="_blank">NY Paid Family Leave Summary</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/PFL_Mayorals.pdf" target="_blank">NY Paid Family Leave — Mayoral Agencies</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/PFL_DOE.pdf" target="_blank">NY Paid Family Leave — DOE</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/PFL_HH.pdf" target="_blank">NY Paid Family Leave — H+H</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/PFL_NYCHA.pdf" target="_blank">NY Paid Family Leave — NYCHA</Link></li>
                        <li><Link to="https://local2627.org/resources/pdf/Paid_Family_Leave_Info.pdf" target="_blank">More Info</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
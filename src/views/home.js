import { Link } from "react-router-dom";
import { Banner } from "../components/banner";
import EmblaCarousel from "../components/embla-carousel";
import '../css/embla.css'

const OPTIONS = { align: 'start', dragFree: false }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function Home() {
    return (
        <div className="-m-4 sm:-m-6 lg:-m-8" style={{ width: '100vw', minHeight: '100vh' }}>
            <Banner />
            <EmblaCarousel slides={ SLIDES } options={ OPTIONS } />





            <br />
            <br />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 grid-flow-row lg:px-8 sm:px-6 px-11">
                <div className="lg:col-span-3">
                    <h3 className="mb-8 text-3xl font-bold">Computer Use</h3>
                    <p>
                        You cannot be bared from computer use for union activities.
                        <br />
                        <Link to="https://local2627.org/resources/pdf/DEP-CannotBarComputerUseForUnionActivities.pdf" target="_blank"
                            style={{ color: '#3B71CA' }}>
                            
                            Read the article
                        </Link>
                    </p>
                    <br />
                    
                    <h3 className="mb-8 text-3xl font-bold">Layoffs: Know your rights</h3>
                    <p>
                    Read this article from the Public Employee Press,&nbsp;
                        <Link to="https://local2627.org/resources/pdf/LayoffRightsTakenFromPEP.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            page 20
                        </Link>
                        </p>
                    <br />

                    <h3 className="mb-8 text-3xl font-bold">Civil Service Employment Status</h3>
                    <p>
                        <Link to="https://local2627.org/resources/pdf/TypesOfEmploymentStatus.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read the article
                        </Link>
                    </p>
                    <br />

                    <h3 className="mb-8 text-3xl font-bold">Fair Labor Standards Act</h3>
                    <p>
                        Who gets paid overtime according to the Fair Labor Standards Act,&nbsp;
                        <Link to="https://local2627.org/resources/pdf/FLSA-CashOvertime.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read the article
                        </Link>
                    </p>
                    <br />

                    <h3 className="mb-8 text-3xl font-bold">DCAS List Restoration</h3>
                    <p>
                        What do I do if I'm called from a civil service list for a job interview?<br />
                        Follow the instructions on your interview... (
                            <Link to="https://local2627.org/listRestoration" style={{ color: '#3B71CA' }}>
                                more info
                            </Link>
                        )
                    </p>
                    <br />

                    <h3 className="mb-8 text-3xl font-bold">Apply for Jobs</h3>
                    <ul className="list-disc px-8">
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
                    <br />

                    <h3 className="mb-8 text-3xl font-bold">Bereavement</h3>
                    <p>
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
                    <br />
                </div>

                <div className="lg:col-span-2">
                    <h3 className="mb-8 text-2xl font-bold">Orthopoxyvirus-Monkeypox</h3>
                    <p>
                        <Link to="https://local2627.org/resources/pdf/Monkeypox_Leave_Guidance_80922_sent_to_MLC.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read the policy
                        </Link>
                    </p>
                    <br />

                    <h3 className="mb-8 text-2xl font-bold">Unlimited Sick Leave for Employees with 9/11 Related Illnesses</h3>
                    <p>
                        <Link to="https://www1.nyc.gov/assets/dcas/downloads/pdf/reports/440_17.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read more
                        </Link>
                    </p>
                    <br />

                    {/* <h3 className="mb-8 text-2xl font-bold">Titles That Can Live Outside of NYC</h3>
                    <p>
                        <Link to="https://local2627.org/resources/pdf/Hard_To_Recruit_Titles_Titles_That_Must_Live_in_NYC_b.pdf"
                            target="_blank" style={{ color: '#3B71CA' }}>
                            
                            Read more
                        </Link>
                    </p>
                    <br /> */}

                    <h3 className="mb-8 text-2xl font-bold">Women's Leadership Academy</h3>
                    <p>
                        <Link to="https://local2627.org/resources/pdf/Hard_To_Recruit_Titles_Titles_That_Must_Live_in_NYC_b.pdf"
                            target="_blank">
                            
                            <img src="https://local2627.org/resources/images/Womens_Leadership_Academy.png" alt="Women" />
                        </Link>
                    </p>
                    <br />

                    <h3 className="mb-8 text-2xl font-bold">Women's Leadership Academy</h3>
                    <p>
                        <Link to="https://local2627.org/resources/pdf/DC37_Rewards.pdf" target="_blank">
                            <img src="https://local2627.org/resources/images/DC37_Rewards.png" alt="DC37" />
                        </Link>
                    </p>
                    <br />

                    <h3 className="mb-8 text-2xl font-bold">Paid Family Leave</h3>
                    <p>
                        <Link to="https://local2627.org/resources/pdf/Paid_Family_Leave_Info.pdf" target="_blank">
                            <img src="https://local2627.org/resources/images/Paid_Family_Leave_Info.png" alt="DCAS" />
                        </Link>
                    </p>
                    <ul className="list-disc px-8">
                        <li><Link style={{ color: '#3B71CA' }} to="https://local2627.org/resources/pdf/440_16.pdf" target="_blank">Paid Family Leave Benefits for Represented Employees</Link></li>
                        <li><Link style={{ color: '#3B71CA' }} to="https://local2627.org/resources/pdf/NY_PFL_20181203.pdf" target="_blank">NY Paid Family Leave Summary</Link></li>
                        <li><Link style={{ color: '#3B71CA' }} to="https://local2627.org/resources/pdf/PFL_Mayorals.pdf" target="_blank">NY Paid Family Leave — Mayoral Agencies</Link></li>
                        <li><Link style={{ color: '#3B71CA' }} to="https://local2627.org/resources/pdf/PFL_DOE.pdf" target="_blank">NY Paid Family Leave — DOE</Link></li>
                        <li><Link style={{ color: '#3B71CA' }} to="https://local2627.org/resources/pdf/PFL_HH.pdf" target="_blank">NY Paid Family Leave — H+H</Link></li>
                        <li><Link style={{ color: '#3B71CA' }} to="https://local2627.org/resources/pdf/PFL_NYCHA.pdf" target="_blank">NY Paid Family Leave — NYCHA</Link></li>
                    </ul>
                    <br />
                </div>
            </div>

        </div>
    );
}
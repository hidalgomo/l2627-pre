import { Link } from "react-router-dom";

export function Workplace() {
    return (
        <div className="max-w-3xl">
            <h3 className="text-3xl font-bold pb-8">Workplace Safety</h3>

            <div>
                <p className="text-xl font-bold mb-2">Contract Language</p>
                
                <p className="mb-1">
                    Local 2627 members are covered by contract language concerning safety and health issues on 
                    the job. Here is that language from the various contracts that apply to our members:
                </p>
                <ul className="list-disc mb-8 pl-8">
                    <li><Link to={ '/safety/citywide' }>Citywide (all agencies except ones listed below)</Link></li>
                    <li><Link to={ '/safety/cuny' }>City University of New York</Link></li>
                    <li><Link to={ '/safety/doe' }>Department of Education</Link></li>
                    <li><Link to={ '/safety/sca' }>School Construction Authority</Link></li>
                    <li><Link to={ '/safety/ta' }>Transit Authority</Link></li>
                </ul>

                <p className="text-xl font-bold mb-2">Safety & Health Law</p>
                <p className="mb-8">
                    Local 2627 members are covered by PESH, the Public Employee Safety and Health Bureau of the 
                    New York State Department of Labor. OSHA, the Occupational Safety and Health Administration, 
                    does not cover public employees.
                </p>

                <p className="text-xl font-bold mb-2">Workers' Compensation</p>
                <p className="mb-2">If you have a work-related injury, you need to do the following:</p>
                <ul className="list-disc mb-2 pl-8">
                    <li><Link to={ '/safety/citywide' }>Citywide (all agencies except ones listed below)</Link></li>
                    <li><Link to={ '/safety/cuny' }>City University of New York</Link></li>
                    <li><Link to={ '/safety/doe' }>Department of Education</Link></li>
                    <li><Link to={ '/safety/sca' }>School Construction Authority</Link></li>
                    <li><Link to={ '/safety/ta' }>Transit Authority</Link></li>
                </ul>
                <p className="mb-2">
                    The DC 37 Safety & Health Dept. can help with filing forms, finding a reputable workers' 
                    compensation attorney, referring members to a health care facility specializing in occupational 
                    medicine, and other issues regarding safety and health.
                </p>
                <p className="mb-2 font-bold">Other useful sources regarding Workers' Compensation:</p>
                <ul className="list-disc mb-8 pl-8">
                    <li>
                        Workers' Comp Webpage (NY Committee for Occupational Safety Health)<br />
                        Phone : (212)227-6440 <br />
                        Email: nycosh@nycosh.org
                    </li>
                    <li>
                        NYS Advocate for Injured Workers, 
                        Phone : 1(800)580-6665
                    </li>
                </ul>

                <p className="text-xl font-bold mb-2">Computers & Ergonomics</p>
                <ul className="list-disc mb-8 pl-8">
                    {/* <li><Link to={ 'https://www.nycosh.org/workplace_hazards/vdt.html' } target="_blank">Computer Workstation Health & Safety Checklist (NYCOSH)</Link></li>
                    <li><Link to={ 'https://www.afscme.orgpublications/1328.cfm' } target="_blank">The Keys to Healthy Computing: A Health and Safety Handbook (AFSCME)</Link></li>
                    <li><Link to={ 'https://www.nycosh.org/specific_industries/office_work.html' } target="_blank">Office Work (NYCOSH)</Link></li> */}
                    <li><Link to={ 'http://www.healthycomputing.com/' } target="_blank">Healthy Computing</Link></li>
                </ul>

                <p className="text-xl font-bold mb-2">Safety & Health Links (Multi-issue)</p>
                <ul className="list-disc mb-8 pl-8">
                    <li><Link to={ 'https://www.dc37.net/about/OSHA/health' } target="_blank">DC 37 Safety & Health Page</Link></li>
                    <li><Link to={ 'https://www.nycosh.org/' } target="_blank">New York Committee for Occupational Safety & Health (NYCOSH)</Link></li>
                </ul>


                
                

                
            </div>
        </div>
    );
}
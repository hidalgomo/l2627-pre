import { Link } from "react-router-dom";
// import RemoteWorkMOU from '../assets/remote_work_mou.pdf';

export function Contracts() {
    return (
        <>
            <p className="mb-8 text-3xl font-bold">Contracts</p>
            <ul className="list-disc mb-6 pl-8">
                <li><Link to={'https://local2627.org/resources/pdf/EconomicAgreementAcctEDPUnitHHC2008-2010.pdf'} target="_blank">EDP, HHC Economic Agreement</Link></li>
                <li><Link to={'https://local2627.org/resources/pdf/ContractCitywide2001-2021.pdf'} target="_blank">CityWide</Link></li>
                {/* <li><Link to={ RemoteWorkMOU } target="_blank">Mayoral Agencies Remote Work Policy</Link></li> */}
                <li><Link to={'https://local2627.org/resources/pdf/white_collar_agremeent_2016_2022.pdf'} target="_blank">CUNY White Collar</Link></li>
                <li><Link to={'https://local2627.org/resources/pdf/ContractDOE2010-2017.pdf'} target="_blank">DOE Boardwide</Link></li>
                <li>
                    <Link to={'https://local2627.org/resources/pdf/ContractNYCHA_1992-2019.pdf'} target="_blank">NYC Housing Authority</Link>
                    <ul className="list-disc pl-8">
                        <li><Link to={'https://local2627.org/resources/pdf/ContractNYCHA_Holiday_Time_Sideletter_Nov_2020.pdf'} target="_blank">NYC Housing Authority Holiday Time Side Letter</Link></li>
                        <li><Link to={'https://local2627.org/resources/pdf/ContractNYCHA_MOU_2004_City_Modification_CBA_vacation_schedule.pdf'} target="_blank">MOU City Modification CBA vacation schedule</Link></li>
                        <li><Link to={'https://local2627.org/resources/pdf/ContractNYCHA_MOU_Leave_Accrual_Rates_New_Hires_20040610.pdf'} target="_blank">MOU Leave Accrual Rates New Hires</Link></li>
                        <li><Link to={'https://local2627.org/resources/pdf/ContractNYCHA_New_Schedule_Initiative_2016.pdf'} target="_blank">New Schedule Initiative</Link></li>
                        <li><Link to={'https://local2627.org/resources/pdf/ContractNYCHA_Redeployment_Signed_MOA_20160630.pdf'} target="_blank">Redeployment Signed MOA</Link></li>
                    </ul>
                </li>
                <li><Link to={'https://local2627.org/resources/pdf/ContractSCAUnitB2010-2017b.pdf'} target="_blank">SCA Contract Unit B</Link></li>
                <li><Link to={'https://local2627.org/resources/pdf/ContractNYCTransit2005-2008.pdf'} target="_blank">Transit Authority</Link></li>
                <li><Link to={'https://local2627.org/resources/pdf/EconomicAgreementTransit2010-2017.pdf'} target="_blank">Transit Authority Economic Agreement</Link></li>
            </ul>
        </>
    );
}
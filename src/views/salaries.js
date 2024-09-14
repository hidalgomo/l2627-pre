import { Link } from "react-router-dom";
import CitywideOverTimeCapPDF from '../assets/citywide_ot_cap.pdf';
import SalariesRip from '../assets/salaries_rip.pdf';
import CitywideSalaries from '../assets/citywide_salaries.pdf';
import CUNYAppendixA from '../assets/cuny_appendix_a_rip.pdf';
import AccountingEDP15YearLongPayOrder from '../assets/accnt_edp_15_year_longevity.pdf';


export function Salaries() {
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Salaries</h3>
            <ul>
                <li><Link to={ CitywideSalaries } target="_blank">Citywide Salaries</Link></li>
                <li><Link to={ AccountingEDP15YearLongPayOrder } target="_blank">Accounting & EDP 15 year Logevity Pay Order</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/longevity.pdf' } target="_blank">Citywide Longevity</Link></li>
                <li><Link to={ SalariesRip } target="_blank">Recurring Increment Payment</Link></li>
                <li><Link to={ CitywideOverTimeCapPDF } target="_blank">Citywide OT Salary Cap</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/OvertimeCapHandout20170218.pdf' } target="_blank">Salary Cap Handout</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/CUNYOTCap.20200201.pdf' } target="_blank">CUNY Overtime Cap</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/salariesCUNY20191107.pdf' } target="_blank">CUNY Salaries</Link></li>
                <li><Link to={ CUNYAppendixA } target="_blank">CUNY RIP Policy</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/longevityCUNY.pdf' } target="_blank">CUNY Longevity</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/salariesSCA.pdf' } target="_blank">School Construction Authority Salaries and Longevity</Link></li>
                <li><Link to={ 'https://local2627.org/resources/pdf/additions_to_gross_mta.pdf' } target="_blank">MTA Longevity Differential/RIP</Link></li>
            </ul>
        </>
    );
}
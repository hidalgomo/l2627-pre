import { Link } from "react-router-dom";
import CitywideOverTimeCapPDF from '../assets/citywide_ot_cap.pdf';
import CitywideSalaries from '../assets/129_PA_5-26-2025_amended_4.11.25_Final.pdf';
import CUNYAppendixA from '../assets/cuny_appendix_a_rip.pdf';
import AccountingEDP15YearLongPayOrder from '../assets/accnt_edp_15_year_longevity.pdf';
import advancementIncrease from '../assets/129_AI_5-26-2025_FINAL.pdf';
import longevityDiff from '../assets/129_LD_5-26-2025_amended 3-10-25_FINAL.pdf';
import rip05262025 from '../assets/129_RIP_5.26.25_FINAL.pdf';


export function Salaries() {
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Salaries</h3>
            <ul>
                <li><Link to={ CitywideSalaries } target="_blank">Citywide Salaries</Link></li>
                <li><Link to={ advancementIncrease } target="_blank">Advancement Increase</Link></li>
                <li><Link to={ AccountingEDP15YearLongPayOrder } target="_blank">Accounting & EDP 15 year Longevity Pay Order</Link></li>
                <li><Link to={ longevityDiff } target="_blank">Citywide Longevity</Link></li>
                <li><Link to={ rip05262025 } target="_blank">Recurring Increment Payment</Link></li>
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
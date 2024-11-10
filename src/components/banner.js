import { Link } from "react-router-dom";
import delegateResults from '../assets/dc37_local2627_cor_5.23.2024.pdf';

export function Banner() {
    return (
        <div className="bg-red-300 lg:px-8 sm:px-6 px-11 py-4 text-center">
            {/* <Link to={ 'https://docs.google.com/forms/d/e/1FAIpQLSdv1WFPulnitLZjmswvVR0CojIlKfWhRTKoQ5v1MN1wBHQzaA/viewform' } 
                target="_blank" className="font-semibold text-black">
                Signup for our next general membership meeting, Tuesday July 09, 2024 @ 6:00pm Via RingCentral
            </Link>
            <br/>
            -
            <br/> */}
            {/* <Link to={ delegateResults } target="_blank" className="font-semibold text-black">
                Results for AFSCME Convention Delegates 2024
            </Link> */}
        </div>
    );
}
import { Link } from "react-router-dom";

export function Banner() {
    return (
        <div className="bg-red-300 lg:px-8 sm:px-6 px-11 py-4 text-center">
            <Link to={ 'https://email.cloud.secureclick.net/c/6603?id=438500.791.1.a0a022e5427a8f197dd6b0e10c39acfb' } 
                target="_blank" className="font-semibold text-black">
                Please signup for our next general membership meeting, Tuesday March 19, 2024 @ 6:00pm Via RingCentral
            </Link>
        </div>
    );
}
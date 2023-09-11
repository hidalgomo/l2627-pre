import { Link } from "react-router-dom";

export function Banner() {
    return (
        <div className="bg-red-300 lg:px-8 sm:px-6 px-11 py-4 text-center">
            <Link to={ 'https://email.cloud.secureclick.net/c/6603?id=376361.680.1.1d92a6f8ad87d4ffad04375fb133feb4' } 
                target="_blank" className="font-semibold text-black">
                Please signup for our next general membership meeting, September 19, 2023 6:00pm
            </Link>
        </div>
    );
}
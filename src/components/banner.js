import { Link } from "react-router-dom";

export function Banner() {
    return (
        <div className="bg-red-300 lg:px-8 sm:px-6 px-11 py-4 text-center">
            <Link to={ 'https://docs.google.com/forms/d/e/1FAIpQLSd5A-0NZCqNjvGZlLgk0BVDRULKV9hMT8UVZ7I_6MSbyd-Mtw/viewform' } 
                target="_blank" className="font-semibold text-black">
                Please signup for our next general membership meeting, Tuesday March 19, 2024 @ 6:00pm Via RingCentral
            </Link>
        </div>
    );
}
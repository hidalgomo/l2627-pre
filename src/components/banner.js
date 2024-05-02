import { Link } from "react-router-dom";
import delegatesPdf from '../assets/non_for_l2627_ascme_d_2024.pdf';

export function Banner() {
    return (
        <div className="bg-red-300 lg:px-8 sm:px-6 px-11 py-4 text-center">
            <Link to={ 'https://docs.google.com/forms/d/e/1FAIpQLSd5A-0NZCqNjvGZlLgk0BVDRULKV9hMT8UVZ7I_6MSbyd-Mtw/viewform' } 
                target="_blank" className="font-semibold text-black">
                Signup for our next general membership meeting, Tuesday May 21, 2024 @ 6:00pm Via RingCentral
            </Link>
            <br/>
            -
            <br/>
            <Link to={ delegatesPdf } target="_blank" className="font-semibold text-black">
                Notice of Nomination for AFSCME Convention Delegates 2024
            </Link>
        </div>
    );
}
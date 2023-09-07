import { Link } from "react-router-dom";

export function Meetings() {
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-xl font-bold">General Membership Meetings</p>
            <ul>
                <li>January 17, 2023     6:00 pm</li>
                <li>March 21, 2023       6:00 pm</li>
                <li>May 16, 2023         6:00 pm</li>
                <li>June 20, 2023        6:00 pm</li>
                <li>
                    <Link className="font-bold" to={ 'https://email.cloud.secureclick.net/c/6603?id=376361.680.1.1d92a6f8ad87d4ffad04375fb133feb4' } target="_blank">
                        September 19, 2023 6:00pm - REGISTER HERE!
                    </Link>
                </li>
                <li>November 21, 2023    6:00 pm</li>
            </ul>
            <br />
            <p className="text-xl font-bold">Shop Steward Meetings Meetings</p>
            <ul>
                <li>February 21, 2023    6:00 pm</li>
                <li>October 17, 2023     6:00 pm</li>
                <li>December 19, 2023    6:00 pm</li>
            </ul>

            <br />
            <p className="text-sm">
                For minutes for prior meetings, &nbsp;
                <Link to={'../minutes'}>click here</Link>
            </p>
        </>
    );
}
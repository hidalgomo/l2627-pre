import { Link } from "react-router-dom";

export function Meetings() {
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-lg font-bold mb-2">General Membership Meetings</p>
            <ul>
                <li>January 17, 2023     6:00 pm</li>
                <li>March 21, 2023       6:00 pm</li>
                <li>May 16, 2023         6:00 pm</li>
                <li>June 20, 2023        6:00 pm</li>
                <li>September 19, 2023   6:00pm</li>
                <li>November 21, 2023    6:00 pm</li>
            </ul>
            <br />
            <p className="text-lg font-bold mb-2">Shop Steward Meetings</p>
            <ul>
                <li>February 21, 2023    6:00 pm</li>
                <li>October 17, 2023     6:00 pm (Cancelled)</li>
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
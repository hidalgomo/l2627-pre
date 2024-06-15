import { Link } from "react-router-dom";

export function Meetings() {
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-lg font-bold mb-2">General Membership Meetings</p>
            <ul>
                <li>January 16, 2024 at 6:00 PM</li>
                <li>March 19, 2024 at 6:00 PM</li>
                <li>May 21, 2024 at 6:00 PM</li>
                <li>July 09, 2024 at 6:00 PM</li>
                <li>September 17, 2024 at 6:00 PM</li>
                <li>November 19, 2024 at 6:00 PM</li>
            </ul>
            <br />
            <p className="text-lg font-bold mb-2">Shop Steward Meetings</p>
            <ul>
                <li>February 20, 2024 at 6:00 PM</li>
                <li>April 16, 2024 at 6:00 PM</li>
                <li>October 15, 2024 at 6:00 PM</li>
                <li>December 17, 2024 at 6:00 PM</li>
            </ul>

            <br />
            <p className="text-sm">
                For minutes for prior meetings, &nbsp;
                <Link to={'../minutes'}>click here</Link>
            </p>
        </>
    );
}
import { Link } from "react-router-dom";

export function Meetings() {
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-lg font-bold mb-2">General Membership Meetings</p>
            <ul>
                <li>
                    January 16, 2024 at 6:00 PM &nbsp;
                    <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSf6IWEsfnrD7VieJkBPU2XjR8V-aoA4iuN6Uy2OLPDSPhYDPw/viewform"}
                        target="_blank" style={{ fontWeight: "bold" }}>(REGISTER HERE)</Link>
                </li>
                <li>March 19, 2024 at 6:00 PM</li>
                <li>May 21, 2024 at 6:00 PM</li>
                <li>June 18, 2024 at 6:00 PM</li>
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
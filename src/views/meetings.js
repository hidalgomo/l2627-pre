import { Link } from "react-router-dom";

export function Meetings() {

    const year = 2025;
    const hour = 18;
    const dateFormatingOptions = {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    
    const meetingDatesAndTime = [
        new Date(Date.UTC(year, 2, 18, hour, 0, 0)),
        new Date(Date.UTC(year, 3, 18, hour, 0, 0)),
        new Date(Date.UTC(year, 5, 20, hour, 0, 0)),
        new Date(Date.UTC(year, 6, 17, hour, 0, 0)),
        new Date(Date.UTC(year, 9, 18, hour, 0, 0)),
        new Date(Date.UTC(year, 11, 18, hour, 0, 0))
    ];

    const time = '6PM';
    
    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-lg font-bold mb-2">General Membership Meetings</p>
            <p>All meeting will be held at the following location:</p>
            <address>125 Barclay, New York, NY 10007</address>
            <br>
            <ul>
                <li>test start</li>
                { genMeetingDatesAndTime.map((meeting, index) => <li key={index}>{ meeting.toLocaleString("en-US", dateFormatingOptions) }</li>) }

                <li>test end</li>
                                             
                <li>February 18, {year} at {time}</li>
                <li>March 18, {year} at {time}</li>
                <li>May 20, {year} at {time}</li>
                <li>June 17, {year} at {time}</li>
                <li>September 16, {year} at {time}</li>
                <li>November 18, {year} at {time}</li>
            </ul>
            <br />
            <p className="text-lg font-bold mb-2">Shop Steward Meetings</p>
            <ul>
                <li>April 15, {year} at {time}</li>
                <li>October 21, {year} at {time}</li>
                <li>December 16, {year} at {time}</li>
            </ul>

            <br />
            <p className="text-sm">
                For minutes for prior meetings, &nbsp;
                <Link to={'../minutes'}>click here</Link>
            </p>
        </>
    );
}

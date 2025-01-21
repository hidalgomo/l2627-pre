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
        hour12: true,
        timeZone: 'UTC'
    };
    
    const meetingDatesAndTime = [
        { type: 'general', date: new Date(Date.UTC(year, 1, 18, hour, 0)) },
        { type: 'general', date: new Date(Date.UTC(year, 2, 18, hour, 0)) },
        { type: 'general', date: new Date(Date.UTC(year, 4, 20, hour, 0)) },
        { type: 'general', date: new Date(Date.UTC(year, 5, 17, hour, 0)) },
        { type: 'general', date: new Date(Date.UTC(year, 8, 16, hour, 0)) },
        { type: 'general', date: new Date(Date.UTC(year, 10, 18, hour, 0)) },
        { type: 'steward', date: new Date(Date.UTC(year, 3, 15, hour, 0)) },
        { type: 'steward', date: new Date(Date.UTC(year, 9, 21, hour, 0)) },
        { type: 'steward', date: new Date(Date.UTC(year, 11, 16, hour, 0)) },
    ];

    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-lg font-bold mb-2">General Membership Meetings</p>
            <p>All meeting will be held at the following location:</p>
            <address><b>125 Barclay, New York, NY 10007</b></address>
            <br />
            <ul>
                { 
                    meetingDatesAndTime
                        .filter(meeting => metting.type === 'general')
                        .map((meeting, index) => <li key={index}>{ meeting.date.toLocaleString("en-US", dateFormatingOptions) }</li>)
                }
            </ul>
            <br />
            <p className="text-lg font-bold mb-2">Shop Steward Meetings</p>
            <ul>
                {
                    meetingDatesAndTime
                        .filter(meeting => metting.type === 'steward')
                        .map((meeting, index) => <li key={index}>{ meeting.date.toLocaleString("en-US", dateFormatingOptions) }</li>)
                }
            </ul>

            <br />
            <p className="text-sm">
                For minutes for prior meetings, &nbsp;
                <Link to={'../minutes'}>click here</Link>
            </p>
        </>
    );
}

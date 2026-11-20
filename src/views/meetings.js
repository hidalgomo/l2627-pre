import { Link } from "react-router-dom";
import Address from "../components/address";

export function Meetings() {

    const year = 2027;
    const hour = 18;
    const dateFormattingOptions = {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    };

    const dateFormattingOptionsShort = {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        timeZone: 'UTC'
    };
    
    const meetingDatesAndTime = [

        { type: 'general', date: new Date(Date.UTC(year, 0, 19, hour, 0)), note: 'Hybrid Meeting' },
        { type: 'general', date: new Date(Date.UTC(year, 2, 16, hour, 0)), note: 'Hybrid Meeting'  },
        { type: 'general', date: new Date(Date.UTC(year, 4, 18, hour, 0)), note: 'Hybrid Meeting'  },
        { type: 'general', date: new Date(Date.UTC(year, 5, 15, hour, 0)), note: 'Hybrid Meeting' },
        { type: 'general', date: new Date(Date.UTC(year, 8, 21, hour, 0)), note: 'Hybrid Meeting' },
        { type: 'general', date: new Date(Date.UTC(year, 10, 16, hour, 0)), note: 'Hybrid Meeting' },

        // { type: 'steward', date: new Date(Date.UTC(year, 9, 27, hour, 0)) },
        // { type: 'steward', date: new Date(Date.UTC(2027, 1, 16, hour, 0)) },
        // { type: 'steward', date: new Date(Date.UTC(2027, 3, 20, hour, 0)) },
        // { type: 'steward', date: new Date(Date.UTC(2027, 9, 19, hour, 0)) },

        { type: 'event', date: new Date(Date.UTC(2026, 11, 18)), note: 'Holiday Party' },
        { type: 'event', date: new Date(Date.UTC(year, 1, 26)), note: 'Black History' },
        { type: 'event', date: new Date(Date.UTC(year, 2, 12)), note: 'Women"s History' },
    ];

    return (
        <>
            <h3 className="text-3xl font-bold pb-8">Meetings</h3>
            
            <p className="text-lg font-bold mb-2">General Membership Meetings</p>
            <p>
                All meeting will be held at the following location and through provided 
                link, members should RSVP through the DC 37 Membership Portal by 3pm 
                the day of the meeting:
            </p>
            
            <Address />

            <br />
            <ul>
                { 
                    meetingDatesAndTime
                        .filter(meeting => meeting.type === 'general')
                        .map((meeting, index) => <li key={index}>{ meeting.date.toLocaleString("en-US", dateFormattingOptions) } { meeting.note && <span className="text-sm text-gray-500">({ meeting.note })</span> }</li>)
                }
            </ul>
            <br />
            <p className="text-lg font-bold mb-2">Shop Steward Meetings</p>
            <ul>
                {
                    meetingDatesAndTime
                        .filter(meeting => meeting.type === 'steward')
                        .map((meeting, index) => <li key={index}>{ meeting.date.toLocaleString("en-US", dateFormattingOptions) }</li>)
                }
            </ul>
            <br />
            <p className="text-lg font-bold mb-2">Upcoming Events</p>
            <ul>
                {
                    meetingDatesAndTime
                        .filter(meeting => meeting.type === 'event')
                        .map((meeting, index) => <li key={index}>{ meeting.date.toLocaleString("en-US", dateFormattingOptionsShort) } { meeting.note && <span className="text-sm text-gray-500">({ meeting.note })</span> }</li>)
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

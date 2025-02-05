import { BellIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Contact() {
    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.157671744441!2d-74.01300499999999!3d40.7145454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1bfa23feb5%3A0x618c3ca745cc9a99!2s125%20Barclay%20St%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1738778694101!5m2!1sen!2sus" 
                    width="600" height="450" style={{ border: 0, width: '100vw', height: 'calc(100vh - 64px)' }}
                    allowfullscreen="allowfullscreen"
                    className="-m-4 sm:-m-6 lg:-m-8">
            </iframe>

            <div className="m-4 sm:m-6 lg:m-8"></div>

            <section style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }} className="mt-24">
                <div style={{ display: 'flex' }}>
                    <div className="p-8"><MapPinIcon className="h-6 w-6" aria-hidden="true" /></div>
                    <div>
                        <p className="text-lg font-bold mb-2">LOCATION</p>
                        <p>
                            Local 2627 - DC 37<br />
                            55 Water Street<br />
                            New York, NY 10041
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="p-8"><PhoneIcon className="h-6 w-6" aria-hidden="true" /></div>
                    <div>
                        <p className="text-lg font-bold mb-2">PHONE</p>
                        <p>Phone: 212-815-1932</p>
                        <p>Fax: 212-815-7690</p>
                        <p>Email: L2627President@gmail.com</p>
                        <p>Breaking News: 212-341-4949</p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="p-8"><BellIcon className="h-6 w-6" aria-hidden="true" /></div>
                    <div>
                        <p className="text-lg font-bold mb-2">E-ALERT</p>
                        <p>
                            <Link to={ '../ealert' }>
                                Signup for E-Alerts
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-24">
                <p style={{ textAlign: 'center', fontSize: '13px' }}>
                    Please use your personal e-mail address when e-mailing Local 2627. We are not allowed to send e-mail to sites owned and operated by the city.
                </p>
            </section>
        </>
    );
}

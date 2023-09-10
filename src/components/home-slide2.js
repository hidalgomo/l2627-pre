import { Link } from "react-router-dom";

export function HomeSlide2() {
    return (
        <div className="sm:mx-6 lg:mx-8 py-24 sm:py-32 mx-auto max-w-7xl lg:px-8 sm:px-6 px-11">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="lg:text-2xl md:text-2xl sm:text-3xl text-4xl mb-6 font-bold tracking-tight text-white">Stay informed with us!</h2>

                <ul className="list-none">
                    <li className="mb-3">
                        <Link className="text-white" to="https://local2627.org/resources/pdf/dc37_new_contract.pdf" target="_blank">
                            <time className="text-green-300" dateTime="2021-03-26">May 26, 2021</time>
                            <p className="mt-1 text-lg font-semibold leading-6">Proposed DC37 Economic Agreement</p>
                            <small className="font-bold">By the Department of Research and Negotiations, District Council 37, AFSCME, AFL-CIO</small>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link className="text-white" to="https://www.nydailynews.com/news/politics/new-york-elections-government/ny-adams-work-from-home-city-employees-unions-20230214-cl6ni2bytvgtxog3nsbzswikie-story.html" target="_blank">
                            <time className="text-green-300" dateTime="2023-02-14">Feb 14, 2023</time>
                            <p className="mt-1 text-lg font-semibold leading-6" title="Adams opens door to allowing city employees to work from home, but only if certain criteria are met">Adams opens door to allowing city employees to work from home...</p>
                            <small className="font-bold">By Michael Gartland</small>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link className="text-white" to="https://local2627.org/resources/pdf/NY2627nltr.pdf" target="_blank">
                            <time className="text-green-300" dateTime="2022-12-16">Dec 16, 2022</time>
                            <p className="mt-1 text-lg font-semibold leading-6">Effective November 1, 2022, we have changed name</p>
                            <small className="font-bold">By Elissa McBride</small>
                        </Link>
                    </li> 
                    <li className="mb-3">
                        <Link className="text-white" to="https://www.nydailynews.com/opinion/ny-oped-administrative-code-12-126-20230108-m7k4qkbrijerzmwxqeys4vhv4e-story.html" target="_blank">
                            <time className="text-green-300" dateTime="2022-12-16">Dec 16, 2022</time>
                            <p className="mt-1 text-lg font-semibold leading-6" title="New York must protect options for retiree health care">New York must protect options...</p>
                            <small className="font-bold">By Henry Garrido</small>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
}
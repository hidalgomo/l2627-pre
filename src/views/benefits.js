import { Link } from "react-router-dom";

export function Benefits() {
    return (
        <div className="max-w-3xl" style={{ margin: '0 auto' }}>
            <h3 className="text-3xl font-bold pb-8">Benefits</h3>
            <section>
                <h3 className="text-2xl">DC 37 Web Site</h3>
                    <ul className="list-disc p-4">
                    <li>
                        <Link to="http://www.dc37.net/benefits/health" target="_blank" title="DC 37 Health and Security Plan Benefits">
                            DC 37 Health and Security Plan Benefits
                        </Link>
                    </li>
                    <li>
                        <Link to="http://www.dc37.net/benefits/freelegal.html" target="_blank" title="Municipal Employees Legal Services (MELS)">
                            Municipal Employees Legal Services (MELS)
                        </Link>
                    </li>
                </ul>
            </section>

            <section>
                <h3 className="text-2xl">Retirement</h3>
                <ul className="list-disc p-4">
                    <li>
                        <Link to="http://www.nycbers.org/" target="_blank" title="NY City Board of Education Retirement System (BER)">NY
                            City Board of Education Retirement System</Link> 
                            (<Link to="http://www.nycbers.org/" target="_blank" title="NY City Board of Education Retirement System (BER)">BER</Link>)
                    </li>
                    <li>
                        <Link to="http://www.nycers.org/" target="_blank" title="NY City Employees' Retirement System (NYCERS)">NY
                            City Employees' Retirement System</Link> (<Link to="http://www.nycers.org/" target="_blank" title="NY City Employees' Retirement System (NYCERS)">NYCERS</Link>)
                    </li>
                    <li>
                        <Link to="http://www.nyc.gov/html/nycppf/home.html" target="_blank" title="NY City Police Pension Fund">NY
                            City Police Pension Fund</Link>
                    </li>
                    <li>
                        <Link to="http://www.trs.nyc.ny.us/" target="_blank" title="NY City Teachers' Retirement System (TRS)">NY City
                            Teachers' Retirement System</Link> (<Link to="http://www.trs.nyc.ny.us/" target="_blank" title="NY City Teachers' Retirement System (TRS)">TRS</Link>)
                    </li>
                    <li>
                        <Link to="http://www.osc.state.ny.us/retire/" target="_blank" title="NY State and Local Employees' Retirement System">NY
                            State and Local Employees' Retirement System</Link>
                    </li>
                    <li>
                        <Link to="http://www.osc.state.ny.us/retire/" target="_blank" title="NY State and Local Police and Fire Retirement System">NY
                            State and Local Police and Fire Retirement System</Link>
                    </li>
                    <li>
                        <Link to="https://www.nrsservicecenter.com/iApp/ret/content/landing.do" target="_blank" title="NY State Deferred Compensation Plan">NY State Deferred
                            Compensation Plan</Link>
                    </li>
                    <li>
                        <Link to="http://www.nystrs.org/" target="_blank" title="NY State Teachers' Retirement System">NY State
                            Teachers' Retirement System</Link>
                    </li>
                </ul>
            </section>

            <section>
                <h3 className="text-3xl">Lenovo offers discounts on new computers to DC 37 members</h3>
                <p className="py-4">
                    DC 37 members can receive discounts on computer purchases through a discount
                    plan arranged by Lenovo and the union. The union expects the plan to be part
                    of the merchant discount program on big-ticket products that the city agreed
                    to under the 2000-2002 economic agreement.
                </p>
                <p className="py-4">
                    <em>
                        "Though we negotiated on our own to get the Lenovo discount plan, we expect that
                        it will be incorporated into the city's merchant discount program, once it gets
                        off the ground,"
                    </em>
                    said Dennis Sullivan, director of research and negotiations.
                </p>
                <p className="py-4">
                    The Lenovo plan offers up to 10 percent off the prices on purchases normally made
                    through the company's website, catalogue or 800 telephone number. The discounts for
                    DC 37 members are available through Lenovo's Corporate Employee Purchase Program.
                    Members must use a special code, "4417," to participate in the discount plan.
                </p>
                <p className="py-4">
                    To find out about the products offered by the Lenovo Corporate Employee Purchase
                    Program, go to their <Link tp="http://www.lenovo.com/shop/deals/4417/" target="_blank" title="Lenovo Direct website just for DC 37">website here</Link>.
                    The available products include computers, notebooks, CD-and DVD-ROM drives and software.
                </p>
                <p className="py-4">
                    <em>
                        "At any time, the products vary, so it pays to check the website to consider the latest offers,"
                    </em>
                    said Moira Dolan, an assistant director in the DC 37 Research and Negotiations Dept.,
                    who arranged for the union's participation in the program.
                    <em>
                        "It is also wise to shop around, because retailers also offer discounts,"
                    </em>
                    Ms. Dolan said.
                </p>
            </section>

            <section>
                <h3 className="text-3xl">Discounts on Movies, Broadway Tickets, DVD Rentals, and more</h3>
                <p className="py-4">
                    <Link to="http://www.unionplus.org" target="_blank" title="UnionPlus">UnionPlus &nbsp;</Link>
                    offers union members discounts on movie rentals and many kinds of tickets — movies,
                    theaters, museums, sporting events, theme parks, ski lifts, etc. They'll even help
                    you get into Disneyland for less.
                </p>
                <p>
                    To register please <Link to="http://www.unionplus.org/entertainment.cfm" target="_blank" title="UnionPlus">click here</Link>
                </p>
            </section>
        </div>
    );
}
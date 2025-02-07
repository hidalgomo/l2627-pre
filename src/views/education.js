import { Link } from "react-router-dom";
import Address from "../components/address";

export function Education() {
    return (
        <div className="max-w-3xl" style={{ margin: '0 auto' }}>
            <h3 className="text-3xl font-bold pb-8">Education</h3>
            <section className="mb-10">
                <p className="text-xl font-bold">Online Training</p>
                <p>
                    Courses on the Internet are eligible for tuition reimbursement the same as courses 
                    in the classroom (see Tuition Reimbursement on the left). In addition, Local 2627 
                    has an arrangement with Enterprise Training. When one of our members passes an 
                    Enterprise Training on-line course and files for tuition reimbursement the benefit 
                    does not stop there. As far as Enterprise Training is concerned, when the member 
                    pays for the initial course he or she was actually paying for a year's worth of 
                    on-line courses. The member can take as many on-line courses from Enterprise 
                    Training as he or she likes for the rest of the year at no additional cost.
                    &nbsp;
                    <Link to={ 'http://www.enterprisetraining.com/local2627/' } target="_blank">
                        Go to the Local2627 Enterprise Training Page link
                    </Link>
                </p>
            </section>

            <section className="mb-10">
                <p className="text-xl font-bold">Reimbursement</p>
                <p className="mb-6">
                    Certificate of reimbursement MUST be submitted to DC 37 FIRST. Local 2627 will only 
                    accept and evaluate requests denied by DC 37 FIRST. Education reimbursement will 
                    be distributed on a FIRST COME, FIRST SERVE basis. ONCE BUDGETED FUNDING FOR THE 
                    YEAR RUNS OUT, NO MORE PAYMENTS WILL BE REIMBURSED FOR THE REMAINDER OF THE CALENDAR YEAR.
                </p>
                <p className="mb-6">
                    DC 37 offers tuition reimbursement of up to $915 a year for a wide range of courses. 
                    Members are HIGHLY ENCOURAGED to send their request for reimbursement (DC37 letter & 
                    2627 request form) via the United States Postal Service Certified Return Receipt. 
                    In addition, certificate reimbursement requests up to $915 will now be accepted. 
                    If the request is denied by DC 37, please resubmit to Local 2627 with the DC 37 rejection 
                    information. If approved by Local 2627, a reimbursement up to $600 will be distributed. 
                    We encourage our members to take advantage of this program, both for pleasure and 
                    for professional advancement.
                </p>
                <p className="mb-6">
                    Local 2627 offers tuition reimbursement of up to $600 a year for computer/IT courses 
                    only, as well as Computer/IT certification exam fees.
                </p>

                <p className="text-md font-bold">Reimbursement Policy</p>
                <p className="mb-6">
                    All requestors must fill out the Local 2627 Educational Reimbursement form completely. 
                    This means that all fields on the application should be filled out. If any section on 
                    the application is omitted, the application will be considered invalid, and the requestor 
                    will not be reimbursed until they submit a completed application form.
                </p>
                <p className="mb-6">
                    All applicants that are seeking reimbursement for completed IT educational courses must 
                    submit their application to DC37 first. If DC37 does not reimburse the course(s) then they 
                    can submit a request to Local 2627 with the rejection letter from DC37. The rejection 
                    letter should be attached to the application for Local 2627.
                </p>
                <p className="mb-6">
                    All applicants can submit IT certification requests directly to Local 2627 and no longer 
                    have to submit requests to DC37 for reimbursement. This only applies to IT certifications.
                </p>
                <div className="mb-2">
                    The requestor should submit all documents necessary to get their reimbursement application 
                    approved. For example:
                    <br />
                    <br />
                    <ul className="list-disc mb-6 pl-8">
                        <li>
                            IT educational course: Proof that you passed the educational course and Proof of payment. 
                            This must be done no later than 60 days after the IT certification exam or educational course 
                            completion. If any required documents are missing, applicants have 14 (fourteen) days to 
                            submit the documents. The day count starts from the day a local officer communicates 
                            with the applicant.
                            </li>
                        <li>Certification: Proof that you passed the certification exam and Proof of payment.</li>
                    </ul>
                </div>
                
                <p className="text-md font-bold">Reimbursement FAQ</p>
                <p className="text-sm font-bold">What is IT Professionals of NYC's tuition Reimbursement Program?</p>
                <p className="mb-6">
                    It is a program that provides reimbursement for work related computer/IT classes only. 
                    It will cover: tuition and registration. Reimbursement for Computer/IT certification exams 
                    for Local 2627 members should be submitted to DC 37. In order to qualify you must be a member 
                    in Good Standing for at least two (2) years (have a signed Green Union Card on file).
                </p>
                <p className="text-sm font-bold">What courses can I be reimbursed for?</p>
                <p className="mb-6">
                    Computer courses taken from valid educational institutions are reimbursable. Fees for 
                    certification exams are also reimbursable, but must be submitted to DC 37. If denied by 
                    DC 37 you can resubmit with DC 37 rejection information to Local 2627 for a max. of $600.
                </p>
                <p className="text-sm font-bold">How much can I be reimbursed?</p>
                <div className="mb-6">
                    DC 37 reimburses up to $915 per year for just about any courses/classes you take as 
                    long as you pass or receive a letter grade of "C" or above. DC 37 will reimburse up 
                    to $915 for any computer/IT certification exams, so you should apply directly to DC 37. 
                    Local 2627 will evaluate requests (max $600 ) denied by DC 37.
                    <br />
                    <br />
                    DC 37 reimburses up to $915 for on-line courses. Always apply to DC 37 first. DC 37 
                    uses a reimbursement form which can be obtained by calling (212) 815-1700. You will 
                    also need to provide a copy of the DC 37 reimbursement check or the rejection letter 
                    when you submit your request to Local 2627.
                    <br />
                    <br />
                    <ul className="list-disc mb-6 pl-8">
                        <li>
                            Example A: Tuition during a calendar year for covered courses (computer courses 
                            or — for members who have taken Shop Steward Training) is $915. DC 37 pays 
                            $915. Local 2627 pays nothing.
                        </li>
                        <li>
                            Example B: Tuition during a calendar year for covered courses is $1600. DC 37 
                            pays $915. If DC 37 rejected the computer courses or certification exam, 
                            Local 2627 may pay up to $600 for Computer/IT related courses or certs that 
                            it deems valid. Once you receive $915 or less in reimbursement from DC 37, 
                            you cannot receive reimbursement from Local 2627 for the same courses/certification/training, 
                            etc. reimbursed by DC 37.
                        </li>
                        <li>
                            Example C: The cost of a covered certification exam is $200. DC 37 will reimburse for 
                            certification exams up to $915. If denied by DC 37; resubmit to Local 2627. 
                            If approved, $200 will be reimbursed.
                        </li>
                    </ul>
                </div>
                <p className="text-sm font-bold">When should I file for a refund?</p>
                <div className="mb-6">
                    Members are HIGHLY ENCOURAGED to send their request for reimbursement (DC37 letter & 2627 
                    request) via the United States Postal Service Certified Return Receipt. COLLEGE COMPUTER 
                    CLASSES ONLY: If you are seeking reimbursement for a college credit computer class, 
                    apply to DC 37 as soon as you have proof you passed the course.After you have received 
                    reimbursement from DC 37, if their payment does not cover the whole tuition/registration 
                    cost apply to Local 2627 to cover the remainder up to $600 a year. You must submit your 
                    application for reimbursement to Local 2627 within 60 days of the date that appears on 
                    the reimbursement check from the DC 37 Education Fund or the date on the DC 37 Rejection Letter.
                    <br />
                    <br />
                    NON-CREDIT COMPUTER COURSES: If you are seeking reimbursement for a non-credit computer course 
                    taken at a college, apply to DC 37 as soon as you have proof you passed the course. 
                    Reimbursement is a maximum of $915 for the calendar year. If denied by DC 37; resubmit to 
                    Local 2627 with the rejection letter.
                    <br />
                    <br />
                    ACCREDITED TECHNICAL SCHOOL COMPUTER COURSES: If you are seeking reimbursement for a computer 
                    course taken at an accredited technical school, apply to DC 37 as soon as you have proof 
                    you passed the course. Reimbursement is a maximum of $915 for the calendar year. If 
                    denied by DC 37; resubmit to Local 2627 with the rejection letter.
                    <br />
                    <br />
                    CERTIFICATES: If you are seeking reimbursement for a certification exam, apply directly to 
                    DC 37 within 60 days of receiving proof that you passed the exam.
                    <br />
                    <br />
                    APPLYING TO LOCAL 2627: Include the following items in your Local 2627 tuition reimbursement 
                    application:
                    <br />
                    <br />
                    <ul className="list-disc mb-6 pl-8">
                        <li>MUST supply completed application in full a phone number, day evening or both</li>
                        <li>MUST supply your agency name</li>
                        <li>PROOF that you passed the course</li>
                        <li>PROOF that you paid for the course (paid bill & method of payment, not cash)</li>
                        <li>
                            PROOF of how much DC 37 reimbursed you (This does not apply to certification exams) 
                            or the DC 37 Rejection Letter
                        </li>
                        <li>Description of class</li>
                    </ul>
                    NO Payments to vendors in Cash!
                    <br />
                    <br />
                    ALERT, as of April 2, 2019, only IT Professionals of NYC members in good standing for a 
                    minimum of two years can qualify for education reimbursement!
                    <br />
                    <br />
                    Education reimbursement will be distributed on the FIRST COME, FIRST SERVE basis.
                    <br />
                    <br />
                    ONCE BUDGETED FUNDING FOR THE YEAR RUNS OUT, NO MORE PAYMENTS WILL BE MADE FOR THE REMAINDER 
                    OF THE CALENDAR YEAR
                    <br />
                    <br />
                    Courses paid in cash will NOT be reimbursed by Local 2627. Acceptable types of payment to 
                    vendors include Checks, Money Orders, Credit Cards, etc. Include copies of the front 
                    and back of Checks that you supply to Local 2627.
                    <br />
                    <br />
                    Applications to Local 2627 for tuition reimbursement must be sent by mail. Do not fax or 
                    email. Do not send originals — send copies only. Include your name, Social Security number, 
                    phone numbers, address, the agency for which you work, and your e-mail address if you have one.
                    <br />
                    <br />
                    Mail to:<br />
                    
                    <Address />

                    <br />
                    <Link to={'https://local2627.org/resources/pdf/2627_Tuition_Reimbursement_FormV1a_20191030.pdf'}>
                        Tuition Reimbursement Form
                    </Link>
                </div>
                <p className="text-sm font-bold">How soon after submitting my application to Local 2627 will I receive my check?</p>
                <p className="mb-6">
                    You should receive your reimbursement sometime during the calendar month 6 to 8 weeks following 
                    after receipt of your application.
                </p>
                <p className="text-sm font-bold">Do I have to pass the course to be reimbursed?</p>
                <p className="mb-6">Yes</p>
                <p className="text-sm font-bold">Can I be reimbursed for my child's or other family member's tuition?</p>
                <p className="mb-6">No</p>
                <p className="text-sm font-bold">Can I be reimbursed for books?</p>
                <p className="mb-6">No</p>
                <p className="text-sm font-bold">Can I be reimbursed for lab or application fees?</p>
                <p className="mb-6">Yes</p>
            </section>

            <section className="mb-10">
                <p className="text-xl font-bold">Civil Service Preparation</p>
                <p>
                    For Local 2627 members in competitive job titles, the only way to attain permanent civil service status 
                    is to be hired off an established civil service list. The only way to get on one of these lists is to pass 
                    a civil service exam. To find out more about these civil service exams and lists please see civil exam section.
                </p>
            </section>

            <section className="mb-10">
                <p className="text-xl font-bold">Civil Service Exams</p>
                <div>
                    When civil service exams are given for Local 2627 titles we arrange training sessions for our members. 
                    If you plan to take any of these exams, we urge you to attend the appropriate class. You will be notified 
                    about upcoming classes automatically if you are on the Local 2627 e-alert list. To register for the Local 
                    2627 e-alert list, click here
                    <br />
                    <br />
                    Civil Service exams for Local 2627 job titles are generally education & experience exams. Members who 
                    have successfully completed computer courses that are relevant to a particular job title receive higher 
                    scores on exams for that title. See Tuition Reimbursement below.
                    <br />
                    <br />
                    <p className="text-sm font-bold">DCAS Contact Information</p>
                    DCAS Automated Civil Service Number: 212-669-1357<br />
                    <Link to={'https://www1.nyc.gov/site/dcas/employment/what-is-civil-service.page'} target="_blank">DCAS Website</Link>
                </div>
            </section>

            <section className="mb-10">
                <p className="text-xl font-bold">AFSCME Online Training</p>
                <div>                        
                    <ul className="list-disc mb-6 pl-8">
                        <li><Link to={'http://www.afscme.org/academy'}>AFSCME Leadership Academy</Link></li>
                        <li><Link to={'http://invested.afscme.org/'}>Investor Education for Working Families</Link></li>
                        <li><Link to={'https://freecollege.afscme.org/'}>AFSCME Free College</Link></li>
                    </ul>
                </div>
            </section>

            <section className="mb-10">
                <p className="text-xl font-bold">Bernie Rifkin Solidarity</p>
                <div>
                    DC 37 members and retirees are invited to visit the&nbsp;
                    <Link to={'http://www.dc37.net/benefits/education/offerings/library'}>Bernie Rifkin Solidarity Library</Link>&nbsp;
                    to check out books, videos and other educational materials. The DC 37 Education Fund offers a wide 
                    range of free classes for DC 37 members. Recent courses have included English as a second 
                    language, computer courses, high school equivalency, conflict resolution, theater workshops, 
                    American Sign Language, and many more. These courses are held in all five boroughs. To find 
                    out what classes are available, look in the Public Employee Press.
                    <br />
                    <br />
                    A number of classes and activities are open to members' spouses, domestic partners, and 
                    children, as well as to members and retirees. Click on the links below to find out more.
                    <br />
                    <br />
                    <ul className="list-disc mb-4 pl-8">
                        <li><Link to={'http://www.dc37.net/benefits/education/deptclasses/SAT.html'}>SAT Prep Courses</Link></li>
                        <li><Link to={'http://www.dc37.net/benefits/education/deptclasses/saturday.html'}>Saturday Fun Programs (Guitar, Photography, Tai Chi, and Yoga, etc.)</Link></li>
                        <li><Link to={'http://www.dc37.net/benefits/education/deptclasses/retirees.html'}>Special Programs for Retirees</Link></li>
                    </ul>
                </div>
            </section>

            <section className="mb-10">
                <p className="text-xl font-bold">Scholarships</p>
                <div>
                    Both AFSCME and DC 37 offer scholarships for the children and grandchildren of members. 
                    To find out about these programs &nbsp;
                    <Link to={'http://www.dc37.net/benefits/education'} target="_blank">click here</Link>.
                </div>
            </section>

            <section>
                <p className="text-xl font-bold mb-2">Members in CUNY</p>
                <div>
                    <p className="text-md font-bold mb-2">CUNY White Collar Contract</p>
                    <p className="text-sm font-bold">Section 5 — Educational Opportunities</p>
                    <p className="mb-2">
                        Employees shall be exempted from the payment of tuition fees for courses offered at 
                        colleges of The City University, as defined in Article I, pursuant to the following conditions;
                    </p>
                    <ol className="pl-8" style={{ listStyleType: 'lower-alpha' }}>
                        <li className="mb-2">
                            Each employee, to qualify for tuition fee exemption, shall:
                            <ul className="pl-8 list-decimal">
                                <li>be a full-time active employee, and</li>
                                <li>have served full time for at least twelve months prior to the first day of classes, and</li>
                                <li>
                                    meet the academic requirements for the course. (It is not necessary for the employee to 
                                    be a candidate for a degree; the employee may be a non-degree student)
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            Tuition fee exemption shall be offered for courses which are:
                            <ul className="pl-8 list-decimal">
                                <li>in an associate degree program</li>
                                <li>in a baccalaureate degree program</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            Exemption from payment of tuition fees shall not apply to adult education courses or to 
                            other courses supported solely by fees except as provided herein.
                        </li>
                        <li className="mb-2">
                            Exemption from payment of tuition fees does not include exemption from payment 
                            of non-instructional fees.
                        </li>
                        <li className="mb-2">
                            Selected employees who are recommended by their supervisor for training in 
                            stenography, typing, and other special work skills, after consultation with the administrative 
                            head of the Division in which the course is offered, for example, a Dean of a School, 
                            shall be exempt from payment of tuition fees for such courses.
                        </li>
                        <li className="mb-2">
                            Other conditions of tuition fee exemption:
                            <ul className="pl-8 list-decimal">
                                <li>
                                    There must be an available vacancy in the course at the time of enrollment and such 
                                    enrollment shall not be used to determine if the course is to be given.
                                </li>
                                <li>The course shall not be taken during employee's normal working hours.</li>
                                <li>
                                    An employee may choose to take a course during his/her lunch hour which is designated as 
                                    the period between the hours of 11:45 a.m. and 2:15 p.m., provided that when an employee 
                                    elects to take a course during the lunch hour he/she will automatically be charged, 
                                    at the beginning of the semester, at the rate of 15 minutes of annual leave per contact 
                                    hour. Therefore, on a semester basis, an employee will be charged one-half (1/2) day 
                                    of annual leave for each classroom period per week (a classroom period is not to exceed 
                                    sixty (60) minutes). If at the end of the semester, the employee can reasonably demonstrate 
                                    to his/her College Director of Human Resources that the time charged was not used, all such 
                                    time will be restored to the employee's annual leave balance.
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            The controlling factors in the availability of the educational opportunities described above 
                            shall continue to be time in employment, availability of courses, work schedules, and, with 
                            reference to subsection (e) selection.
                        </li>
                    </ol>
                </div>
                <div>
                    <p className="text-md font-bold">Memorandum of Agreement CUNY & DC 37 (July 2005)</p>
                    <p className="text-sm font-bold">Section 6</p>
                    <p>
                        the respective Blue and White Collar Unit Agreements shall be amended to provide 
                        three (3) credits per semester at the graduate level to full-time employees of the 
                        Blue and White Collar Units during the fall and spring semesters, on a space available, no 
                        cost basis, in accordance with the requirements set forth in Article V, Section 5 of the 
                        Blue and White Collar Unit Agreements.
                    </p>
                </div>
            </section>
        </div>
    );
}
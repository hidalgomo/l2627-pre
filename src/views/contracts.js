import { Link } from "react-router-dom";
import RemoteWorkMTAAgree from '../assets/mta_remote_work_agreement.pdf';

const contractItems = [
    {
        index: 11,
        Title: 'EDP, HHC Economic Agreement',
        Description: 'Section 1. The employer recognizes the Union as the sole and exclusive collective...',
        Links: [
            {
                index: 111,
                Name: 'Read more',
                Href: 'https://local2627.org/resources/pdf/EconomicAgreementAcctEDPUnitHHC2008-2010.pdf'
            }
        ]
    },
    {
        index: 22,
        Title: 'Citywide',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 222,
                Name: 'Read more',
                Href: 'https://local2627.org/resources/pdf/ContractCitywide2001-2021.pdf'
            }
        ]
    },
    {
        index: 33,
        Title: 'CUNY White Collar',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 333,
                Name: 'Read more',
                Href: 'https://local2627.org/resources/pdf/white_collar_agremeent_2016_2022.pdf'
            }
        ]
    },
    {
        index: 44,
        Title: 'DOE Boardwide',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 444,
                Name: 'Read more',
                Href: 'https://local2627.org/resources/pdf/ContractDOE2010-2017.pdf'
            }
        ]
    },
    {
        index: 55,
        Title: 'SCA Contract Unit B',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 555,
                Name: 'Read more',
                Href: 'https://local2627.org/resources/pdf/ContractSCAUnitB2010-2017b.pdf'
            }
        ]
    },
    {
        index: 66,
        Title: 'Transit Authority',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 777,
                Name: 'Contract',
                Href: 'https://local2627.org/resources/pdf/ContractNYCTransit2005-2008.pdf'
            },
            {
                index: 778,
                Name: 'Economic agreement',
                Href: 'https://local2627.org/resources/pdf/EconomicAgreementTransit2010-2017.pdf'
            }
        ]
    },
    {
        index: 77,
        Title: 'MTA Remote Work Agreement',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 888,
                Name: 'Read more',
                Href: RemoteWorkMTAAgree
            }
        ]
    },
    {
        index: 88,
        Title: 'NYC Housing Authority',
        Description: 'Section 2. a. Prevailing rate employees are excluded from the coverage of this...',
        Links: [
            {
                index: 999,
                Name: 'NYCHA contract',
                Href: 'https://local2627.org/resources/pdf/ContractNYCHA_1992-2019.pdf'
            },
            {
                index: 1000,
                Name: 'Holiday Time Side Letter',
                Href: 'https://local2627.org/resources/pdf/ContractNYCHA_Holiday_Time_Sideletter_Nov_2020.pdf'
            },
            {
                index: 1001,
                Name: 'MOU CBA Vacation Schedule',
                Href: 'https://local2627.org/resources/pdf/ContractNYCHA_MOU_2004_City_Modification_CBA_vacation_schedule.pdf'
            },
            {
                index: 1002,
                Name: 'Leave Accrual Rate',
                Href: 'https://local2627.org/resources/pdf/ContractNYCHA_MOU_Leave_Accrual_Rates_New_Hires_20040610.pdf'
            },
            {
                index: 1003,
                Name: 'New Schedule Initiative',
                Href: 'https://local2627.org/resources/pdf/ContractNYCHA_New_Schedule_Initiative_2016.pdf'
            },
            {
                index: 1004,
                Name: 'Signed MOA 2016',
                Href: 'https://local2627.org/resources/pdf/ContractNYCHA_Redeployment_Signed_MOA_20160630.pdf'
            }
        ]
    },
];

export function Contracts() {
    return (
        <>
            <div className="max-w-screen-2xl p-5 mb-10">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                    Contracts
                </h1>
                <p className="p-2 text-gray-600">
                    The <b>Local 2627 Contract</b> Page outlines the terms and conditions agreed upon between an employer and a labor union representing employees. It 
                    typically includes details about wages, benefits, working conditions, job security, grievance procedures, and dispute resolution 
                    mechanisms. This page serves as a reference for both employers and employees to ensure compliance with the collective bargaining 
                    agreement, helping to maintain fair labor practices and workplace harmony.
                </p>

                <br />
                {
                    contractItems.map((contractItem) => (
                        <div key={ contractItem.index } className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 inline-block align-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-doc text-gray-500 dark:text-gray-400 mb-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-7.839 9.166v.522q0 .384-.117.641a.86.86 0 0 1-.322.387.9.9 0 0 1-.469.126.9.9 0 0 1-.471-.126.87.87 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522q0-.386.117-.641a.87.87 0 0 1 .32-.387.87.87 0 0 1 .471-.129q.264 0 .469.13a.86.86 0 0 1 .322.386q.117.255.117.641m.803.519v-.513q0-.565-.205-.972a1.46 1.46 0 0 0-.589-.63q-.381-.22-.917-.22-.533 0-.92.22a1.44 1.44 0 0 0-.589.627q-.204.406-.205.975v.513q0 .563.205.973.205.406.59.627.386.216.92.216.535 0 .916-.216.383-.22.59-.627.204-.41.204-.973M0 11.926v4h1.459q.603 0 .999-.238a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.59-.68q-.395-.234-1.004-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082H.79V12.57Zm7.422.483a1.7 1.7 0 0 0-.103.633v.495q0 .369.103.627a.83.83 0 0 0 .298.393.85.85 0 0 0 .478.131.9.9 0 0 0 .401-.088.7.7 0 0 0 .273-.248.8.8 0 0 0 .117-.364h.765v.076a1.27 1.27 0 0 1-.226.674q-.205.29-.55.454a1.8 1.8 0 0 1-.786.164q-.54 0-.914-.216a1.4 1.4 0 0 1-.571-.627q-.194-.408-.194-.976v-.498q0-.568.197-.978.195-.411.571-.633.378-.223.911-.223.328 0 .607.097.28.093.489.272a1.33 1.33 0 0 1 .466.964v.073H9.78a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.8.8 0 0 0-.398-.097.8.8 0 0 0-.475.138.87.87 0 0 0-.301.398"/>
                            </svg>
                            <Link to={ contractItem.Links[0].Href } className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                { contractItem.Title }
                            </Link>

                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{ contractItem.Description }</p>
                            {
                                contractItem.Links.map((link) => (
                                    <div key={ link.index } >
                                        <Link to={ link.Href } target="_blank" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                            { link.Name }
                                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                            </svg>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </>
    );
}
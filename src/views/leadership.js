import lauraM from '../assets/LauraMorand300x300.jpeg';
//import nicholasP from '../assets/NicholasPineda299x299.jpg';
import mitchellG from '../assets/MitchellGoldberg300x300.jpg';
import williamF from '../assets/WilliamFreeman266x313.jpg';
import annGeorge from '../assets/AnnGeorge400x400.jpg';
import stephenVisovsky from '../assets/StephenVisovsky399x400_2.jpg'
import SumikoGilchrist from '../assets/SumikoGilchrist300x292.jpg'

const people = [
    {
        name: 'Laura Morand',
        role: 'President',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        imageUrl2: lauraM,
    },
    {
        name: 'Kalpesh Patel',
        role: '1st Vice President, DC 37 Delegate',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        imageUrl2: 'https://local2627.org/resources/images/KalpeshPatel150x225_20220203.jpg',
    },
    {
        name: 'Marie Lodescar',
        role: '2nd Vice President, DC 37 Delegate',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        imageUrl2: 'https://local2627.org/resources/images/MarieLodescar150x255_20220203.jpg',
    },
    {
        name: "Ann George",
        role: "Treasurer, DC 37 Delegate",
        imageUrl2: annGeorge
    },
    {
        name: "Anthony Chambers",
        role: "Secretary, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/anthony_chambers.jpg"
    },
    {
        name: "Charles L. McClain",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/CharlesMcClain150x225_20141014.jpg"
    },
    {
        name: "George Villegas",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/GeorgeVillegas150x225_20151020.jpg"
    },
    {
        name: "Noel Ramos",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/NoelRamos150x225_20151020.jpg"
    },
    {
        name: "Sumiko Gilchrist",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: SumikoGilchrist
    },
    {
        name: "Robert Benjamin",
        role: "DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/RobertBenjamin150x225_20170918.jpg"
    },
    {
        name: "Marie R. Jeremie",
        role: "NYC Central Labor Council Delegate",
        imageUrl2: "https://local2627.org/resources/images/MarieJeremie150x225_20200915.jpg"
    },
    {
        name: "MD Jaman",
        role: "NYC Central Labor Council Delegate",
        imageUrl2: "https://local2627.org/resources/images/MDJaman150x255_20220203.jpg"
    },
    {
        name: "Mitchell Goldberg",
        role: "NYC Central Labor Council Delegate",
        imageUrl2: mitchellG
    },
    {
        name: "Kennard Gopaul",
        role: "Trustee",
        imageUrl2: "https://local2627.org/resources/images/KennardGopaul150x225_20191119.jpg"
    },
    {
        name: "William Freeman",
        role: "Trustee",
        imageUrl2: williamF
    },
    {
        name: "Stephen Visovsky",
        role: "Trustee",
        imageUrl2: stephenVisovsky
    }
];

export function Leadership() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        In the intricate tapestry of labor relations, the administration of a union serves as both the 
                        anchor and the compass—a steady hand guiding the ship through tumultuous seas, and a beacon of 
                        hope illuminating the path towards a brighter tomorrow. As we embark on this collective journey, 
                        it is incumbent upon us to recognize the profound responsibility entrusted to our stewardship.
                        <br />
                        <br />
                        At the heart of our administration lies a steadfast commitment to the principles of fairness, 
                        equality, and solidarity. We are not mere arbiters of conflict, but champions of justice; not just 
                        administrators of policy, but architects of progress. With every decision we make, we reaffirm 
                        our unwavering dedication to the well-being and prosperity of our members.
                        <br/>
                        <br />
                        As custodians of this union, we pledge to uphold the sanctity of our members' rights, to amplify 
                        their voices, and to champion their cause with unwavering resolve. We will not shy away from the 
                        challenges that lie ahead, nor falter in the face of adversity. Instead, we will meet each obstacle 
                        with courage and conviction, knowing that our strength lies not in our individual prowess, but in 
                        our collective unity.
                        <br/>
                        <br />
                        Together, let us embark on this journey with humility and determination, knowing that the road 
                        ahead may be fraught with obstacles, but confident in our ability to overcome them. For it is in 
                        times of adversity that the true mettle of leadership is tested, and it is through our actions, 
                        not our words, that we shall leave an indelible mark on the annals of history.
                    </p>
                </div>
                <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {
                    people.map((person) => (
                        <li key={ person.name }>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={ person.imageUrl2 } alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{ person.name }</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{ person.role }</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}

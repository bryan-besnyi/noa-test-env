import DeptBtn from "@/app/components/Buttons/DeptBtn";
import PortalBtn from "@/app/components/Buttons/PortalBtn";
import Button from "@/app/components/Buttons/Button";
import Dascontent from "@/app/components/dascontent";
import CollegeLinks from "@/app/components/CollegeLinks";
import ContentCard from "@/app/components/Cards/ContentCard";
import DirectorySearchForm from "@/app/components/Forms/DirectorySearchForm";
import FacilitiesLoginForm from "@/app/components/Forms/FacilitiesLoginForm";
import ExternalLinksSection from "@/app/components/Navigation/ExternalLinksSection";

const collegeLinks = {
    CAN: {
        title: "Cañada College",
        img: "images/college_canada.png",
        links: [
            {text: "Cañada Homepage", url: "https://canadacollege.edu/"},
            {text: "Cañada Bookstore", url: "http://bookstore.canadacollege.edu/home.aspx"},
            {text: "Cañada Library", url: "https://www.canadacollege.edu/library/"},
            {text: "Cañada Construction Updates", url: "https://canadacollege.edu/construction/"}
        ]
    },
    CSM: {
        title: "College of San Mateo",
        img: "images/college_csm.png",
        links: [
            {text: "CSM Homepage", url: "http://collegeofsanmateo.edu/"},
            {text: "CSM Bookstore", url: "http://bookstore.collegeofsanmateo.edu/home.aspx"},
            {text: "CSM Events", url: "https://calendar.collegeofsanmateo.edu/events"},
            {text: "CSM Library", url: "https://www.collegeofsanmateo.edu/library/"},
            {text: "CSM News", url: "https://www.collegeofsanmateo.edu/news/"}
        ]
    },
    SKY: {
        title: "Skyline College",
        img: "images/college_skyline.png",
        links: [
            {text: "Skyline Homepage", url: "http://www.skylinecollege.edu/"},
            {text: "Skyline Shines", url: "https://www.skylinecollege.edu/skylineshines/"},
            {text: "Skyline Bookstore", url: "http://bookstore.skylinecollege.edu/home.aspx"},
            {text: "Skyline Library", url: "https://skylinecollege.edu/library/"},
            {text: "Skyline Construction Updates", url: "https://smccd.edu/construction/sky-notices.php"}
        ]
    }
};

const portalButtons = {
    SMCCD: {
        title: 'mySMCCD Portal',
        color: 'primary',
        url: 'https://smccd.onelogin.com/'
    },
    O365: {
        title: 'O365 Email Login',
        color: 'purple',
        url: 'http://webmail.smccd.edu/'
    },
    PASSWORD: {
        title: 'SMCCD Password Management',
        color: 'info',
        url: 'https://its.smccd.edu/changing-password-onelogin/'
    },
    FACULTY: {
        title: 'Faculty Gateway',
        color: 'primary',
        url: 'https://faculty.smccd.edu'
    }
};

const schools = {
    DIS: {
        title: "DIS",
        color: "#012147",
        hover: "#023167",
        border: "#011b3b",
        url: "//smccd.edu"
    },
    CAN: {
        title: "CAN",
        color: "#205C40",
        hover: "#174732",
        border: "#1a4c36",
        url: "//canadacollege.edu"
    },
    CSM: {
        title: "CSM",
        color: "#0066c9",
        hover: "#004990",
        border: "#0066c9",
        url: "//collegeofsanmateo.edu"
    },
    SKY: {
        title: "SKY",
        color: "#C41E3A",
        hover: "#991628",
        border: "#ab1b32",
        url: "//skylinecollege.edu"
    }
};

const externalLinks = [
    { text: "Chancellors Office DataMart", url: "http://www.cccco.edu/AboutUs/Divisions/TechResearchInfo/MIS/DataMartandReports/tabid/282/Default.aspx" },
    { text: "EduCause", url: "http://www.educause.edu/" },
    { text: "Google", url: "http://www.google.com" },
    { text: "University Business", url: "http://www.universitybusiness.com/" }
];

export default function Main() {
    return (
        <div>
            <div id="emergency" data-smccd-emergency data-site-location="portal"
                 data-url="https://emergency.smccd.info/wp-json/wp/v2/" data-style="alert"
                 data-post-type='["notifications"]' className={'bg-light pt-3'}></div>
            <div id="announcements" data-smccd-notifications data-site-location="portal"
                 data-url="https://smccd.college.technology/wp-json/wp/v2/" data-style="alert"
                 data-post-type='["notifications"]' className={'bg-light pt-3'}>
            </div>
            <section id="MainContent" className={'pt-3'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Employee Portal</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-12 col-xl-8">
                                    <h3 className={'bg-light pt-0'}> Internal Quick Links </h3>
                                    <table id="qlinkTable" className="table-condensed table table-striped" width="100%">
                                        <thead>
                                        <tr>
                                            <th>Colleges</th>
                                            <th>Links</th>
                                        </tr>
                                        </thead>
                                    </table>

                                    <div className="row">
                                        <CollegeLinks title={collegeLinks.CAN.title} link={collegeLinks.CAN.links}/>
                                        <CollegeLinks title={collegeLinks.CSM.title} link={collegeLinks.CSM.links}/>
                                        <CollegeLinks title={collegeLinks.SKY.title} link={collegeLinks.SKY.links}/>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <ExternalLinksSection links={externalLinks} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div>
                                        <div>
                                            {Object.values(portalButtons).map((button) => (
                                                <PortalBtn key={button.title} btnInfo={button}/>
                                            ))}
                                        </div>
                                        <div className={'d-grid pt-2'}>
                                            <div className="row">
                                                {Object.values(schools).map((dept) => (
                                                    <DeptBtn key={dept.title} dept={dept}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <ContentCard
                                        title="District Directory"
                                        link="https://directory.smccd.edu/"
                                    >
                                        <DirectorySearchForm />
                                    </ContentCard>
                                    <Dascontent
                                        title={'Keenan SafeColleges'}
                                        paragraph={'Online compliance training courses for District employees.'}
                                        btn={<Button
                                            label={'Keenan SafeColleges Login'}
                                            link={'https://smccd.edu/safecolleges/index.php'}/>}
                                        link={'https://smccd-keenan.safecolleges.com/training/home'}/>

                                    <Dascontent
                                        title={'Canvas Helpdesk'}
                                        paragraph={'Need help with Canvas? Visit the Canvas Helpdesk'}
                                        btn={<Button
                                            label={'Canvas Helpdesk'}
                                            link={'https://smccdhelp.zendesk.com/hc/en-us'}/>}
                                        link={'https://smccdhelp.zendesk.com/hc/en-us'}/>

                                    <Dascontent
                                        title={'ITS'}
                                        link={'//www.smccd.edu/its/'}>
                                        <div id="imp-links" data-smccd-xml-transform="ul-link-list"
                                             data-ul-class=""
                                             data-xml-url="./grablinks.php?url=https://banner.smccd.edu/xml/its_links2.xml"
                                             data-xml-cache="false"></div>
                                    </Dascontent>
                                    <ContentCard title="Facilities Help Center">
                                        <FacilitiesLoginForm />
                                    </ContentCard>
                                </div>

                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-4">
                                <div className="row">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
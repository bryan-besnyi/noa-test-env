import DeptBtn from "@/app/Components/Buttons/DeptBtn";
import PortalBtn from "@/app/Components/Buttons/PortalBtn";
import Button from "@/app/Components/Buttons/Button";
import Dascontent from "@/app/Components/dascontent";
import CollegeLinks from "@/app/Components/CollegeLinks";

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

                                    <Dascontent
                                        title={'District Directory'}
                                        link={'https://directory.smccd.edu/'}
                                    >
                                        <form action="//directory.smccd.edu/decider_portal.php" method="get"
                                              name="form1" id="form1">
                                            <div className="form-group mb-2">
                                                <label className="visually-hidden" htmlFor="givenName">First Name:
                                                </label>
                                                <input className="form-control" placeholder="First Name"
                                                       type="text"
                                                       name="fname" id="givenName"/>
                                            </div>
                                            <div className="fieldpadding mb-3">
                                                <label className="visually-hidden" htmlFor="sn" accessKey="L">
                                                    Last Name:
                                                </label>
                                                <input className="form-control" placeholder="Last Name"
                                                       type="text"
                                                       name="lname" id="sn"/>
                                            </div>
                                            <Button label={'Find'}/>
                                            <a
                                                className="text-primary"
                                                href="//www.smccd.edu/directory">Advanced Search
                                            </a>

                                        </form>
                                    </Dascontent>
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
                                    <Dascontent title={'Facilities Help Center'}>
                                        <img className="img-responsive" src="./images/facilities.png"
                                             alt="facilities helpcenter"/>
                                        <div className="caption">

                                            <form
                                                action="//helpcenter.smccd.edu/requestform/ldapauthenticate_onuma.php"
                                                method="post" name="FacilitiesHelpForm" target="_blank"
                                                id="FacilitiesHelpForm" className="form">
                                                <div className="form-group">
                                                    <div className="input-group rounded mb-2">
                                                        <label className="visually-hidden" htmlFor="fac-username">User
                                                            Name:
                                                        </label>
                                                        <input id="fac-username" type="text"
                                                               className="form-control rounded-start"
                                                               name="username"
                                                               placeholder="username"
                                                               aria-label="Recipient's username"
                                                               aria-describedby="basic-addon2"/>
                                                        <span className="input-group-text"
                                                              id="basic-addon2">@smccd.edu</span>
                                                    </div>

                                                </div>
                                                <div className="form-group clearfix mb-2">
                                                    <div className="input-group">
                                                        <label className="visually-hidden"
                                                               htmlFor="fac-password">Password:
                                                        </label>
                                                        <input type="password" name="password" id="fac-password"
                                                               className="form-control rounded"
                                                               placeholder="email password"/>
                                                    </div>
                                                </div>
                                                <div className="form-group clearfix">
                                                    <Button label={'Login'}/>
                                                </div>
                                            </form>
                                        </div>

                                    </Dascontent>
                                </div>
                                <div className="row mt-3">
                                    <CollegeLinks title={collegeLinks.CAN.title} link={collegeLinks.CAN.links}/>
                                    <CollegeLinks title={collegeLinks.CSM.title} link={collegeLinks.CSM.links}/>
                                    <CollegeLinks title={collegeLinks.SKY.title} link={collegeLinks.SKY.links}/>

                                </div>
                                <div>
                                    <div className="dis d-flex flex-wrap gap-2">
                                        <p className="fw-bolder m-0">
                                            External Quick Links:
                                        </p>
                                        <div className={'d-flex gap-3 flex-wrap'}>
                                            <a
                                                className="text-primary"
                                                style={{fontSize: '1rem'}}
                                                href="http://www.cccco.edu/AboutUs/Divisions/TechResearchInfo/MIS/DataMartandReports/tabid/282/Default.aspx">
                                                Chancellors
                                                Office DataMart
                                            </a>
                                            <div>|</div>
                                            <a
                                                className="text-primary"
                                                style={{fontSize: '1rem'}}
                                                href="http://www.educause.edu/">EduCause
                                            </a>
                                            <div>|</div>
                                            <a
                                                className="text-primary"
                                                style={{fontSize: '1rem'}}
                                                href="http://www.google.com">Google
                                            </a>
                                            <div>|</div>
                                            <a
                                                className="text-primary"
                                                style={{fontSize: '1rem'}}
                                                href="http://www.universitybusiness.com/">University
                                                Business
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
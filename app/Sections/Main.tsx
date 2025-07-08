import DeptBtn from "@/app/Components/Buttons/DeptBtn";
import PortalBtn from "@/app/Components/Buttons/PortalBtn";
import Button from "@/app/Components/Buttons/Button";
import Dascontent from "@/app/Components/dascontent";

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
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="givenName">First Name:
                                                </label>
                                                <input className="form-control" placeholder="First Name"
                                                       type="text"
                                                       name="fname" id="givenName"/>
                                            </div>
                                            <div className="fieldpadding mb-3">
                                                <label className="sr-only" htmlFor="sn" accessKey="L">
                                                    Last Name:
                                                </label>
                                                <input className="form-control" placeholder="Last Name"
                                                       type="text"
                                                       name="lname" id="sn"/>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a
                                                    className="text-primary"
                                                    href="//www.smccd.edu/directory">Advanced Search
                                                </a>
                                                <Button label={'Find'}/>
                                            </div>
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
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <br/>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://canadacollege.edu/">
                                            <img
                                                className="img-bordered img-responsive"
                                                src="images/college_canada.png"
                                                alt="Canada College Website"/>
                                        </a>
                                        <h3 style={{fontSize: '20px'}}>
                                            <a
                                                href="http://canadacollege.edu/">Ca&ntilde;ada College
                                            </a>
                                        </h3>
                                        <a href="http://bookstore.canadacollege.edu/home.aspx">Ca&ntilde;ada
                                            Bookstore
                                        </a>
                                        <br/>
                                        <a href="https://www.canadacollege.edu/library/">Ca&ntilde;ada Library</a>
                                        <br/>
                                        <a href="https://canadacollege.edu/construction/">Ca&ntilde;ada Construction
                                            Updates
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="http://collegeofsanmateo.edu/">
                                            <img src="images/college_csm.png" alt="College of San Mateo"
                                                 className="img-bordered img-responsive"/>
                                        </a>
                                        <h3 style={{fontSize: '20px'}}>
                                            <a href="http://collegeofsanmateo.edu/">College
                                                of San Mateo
                                            </a>
                                        </h3>
                                        <a href="http://bookstore.collegeofsanmateo.edu/home.aspx">CSM Bookstore</a>
                                        <br/>
                                        <a href="https://calendar.collegeofsanmateo.edu/events">CSM Events</a>
                                        <br/>
                                        <a href="https://www.collegeofsanmateo.edu/library/">CSM Library</a>
                                        <br/>
                                        <a href="https://www.collegeofsanmateo.edu/news/">CSM News</a>
                                        <br/>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="http://www.skylinecollege.edu/">
                                            <img
                                                src="images/college_skyline.png" alt="Skyline College"
                                                className="img-responsive img-bordered"/>
                                        </a>
                                        <h3 style={{fontSize: '20px'}}>
                                            <a
                                                href="http://www.skylinecollege.edu/">Skyline College
                                            </a>
                                        </h3>
                                        <a href="https://www.skylinecollege.edu/skylineshines/">Skyline Shines</a>
                                        <br/>
                                        <a href="http://bookstore.skylinecollege.edu/home.aspx">Skyline
                                            Bookstore
                                        </a>
                                        <br/>
                                        <a href="https://skylinecollege.edu/library/">Skyline Library</a>
                                        <br/>
                                        <a href="https://smccd.edu/construction/sky-notices.php">Skyline
                                            Construction
                                            Updates
                                        </a>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div id="CollegeLinks">
                                            <div className="dis d-flex gap-2">
                                                <p className="fw-bolder">
                                                    External Quick Links:
                                                </p>
                                                <div>
                                                    <a
                                                        className="text-primary"
                                                        style={{fontSize: '1rem'}}
                                                        href="http://www.cccco.edu/AboutUs/Divisions/TechResearchInfo/MIS/DataMartandReports/tabid/282/Default.aspx">
                                                        Chancellors
                                                        Office DataMart
                                                    </a>
                                                    |
                                                    <a
                                                        className="text-primary"
                                                        style={{fontSize: '1rem'}}
                                                        href="http://www.educause.edu/">EduCause
                                                    </a>
                                                    |
                                                    <a
                                                        className="text-primary"
                                                        style={{fontSize: '1rem'}}
                                                        href="http://www.google.com">Google
                                                    </a>
                                                    |
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
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="rounded" style={{background: '#eff8ff', padding: '10px'}}>
                                            <img className="img-responsive" src="./images/facilities.png"
                                                 alt="facilities helpcenter"/>
                                            <div className="caption">
                                                <h3 className="text-primary h2">Facilities Help center</h3>
                                                <form
                                                    action="//helpcenter.smccd.edu/requestform/ldapauthenticate_onuma.php"
                                                    method="post" name="FacilitiesHelpForm" target="_blank"
                                                    id="FacilitiesHelpForm" className="form">
                                                    <div className="form-group">
                                                        <div className="input-group rounded">
                                                            <label className="sr-only" htmlFor="fac-username">User
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
                                                    <div className="form-group clearfix">
                                                        <div className="input-group">
                                                            <label className="sr-only"
                                                                   htmlFor="fac-password">Password:
                                                            </label>
                                                            <input type="password" name="password" id="fac-password"
                                                                   className="form-control rounded"
                                                                   placeholder="email password"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group clearfix">
                                                        <button type="submit"
                                                                className="btn btn-primary btn-block center-block"
                                                                name="save">Login
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
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
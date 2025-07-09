import {faAngleRight, faMapMarker, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="theme theme-inverse">
            <div className="footer-theme-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="footer-column">
                                <h3>San Mateo County CCD</h3>
                                <p className="theme-inverse">
                                    <a href="//smccd.edu" className={'theme-inverse'}>SMCCCD</a>
                                    are a three College District located between San Francisco and the Silicon Valley.
                                    Our
                                    Colleges serve more than 40,000 students each year and offer the first two years of
                                    instruction in a wide variety of transfer programs as well as more than 90
                                    vocational-technical programs.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="footer-column">
                                <h3>Contact</h3>
                                <p className="theme-inverse">
                                    <FontAwesomeIcon icon={faMapMarker} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                    &nbsp;&nbsp;3401 CSM Drive,
                                    <br/> San Mateo, CA 94402 USA
                                    <br/>
                                    <FontAwesomeIcon icon={faPhone} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                    <span>&nbsp;&nbsp;(650) 574-6550 </span>
                                    <br/>
                                    <FontAwesomeIcon icon={faEnvelope} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                    <a href="mailto:webmaster@smccd.edu" className={'theme-inverse'}>
                                        &nbsp;&nbsp;webmaster@smccd.edu
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h3>smccd.edu</h3>
                            <div className="footer-column">
                                <ul className="list-unstyled theme-inverse">
                                    <li>
                                        <a href="//smccd.edu/accounts/smccd/" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//smccd.edu/boardoftrustees/" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Board of Trustees
                                        </a>
                                    </li>
                                    <li>
                                        <a href="//smccd.edu/departments/" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Departments
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://jobs.smccd.edu" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Employment
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.smcccfoundation.org/" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Foundation
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://smccd.edu/titleix" title="opens new window" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Title IX
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://smccd.edu/accounts/smccd/aboutus/contactus.shtml" className={'theme-inverse d-flex align-items-center'}>
                                            <FontAwesomeIcon icon={faAngleRight} style={{width: '1rem', height: '1rem', fontWeight: '900'}}/>
                                            &nbsp;&nbsp;Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-theme-bottom copyright-details">
                <div className="container">
                <span>Copyright <a style={{color:'#888'}}
                    href="https://a.cms.omniupdate.com/10/#oucampus/sanmateo/smccd.edu/browse/staging">©</a> <a style={{color:'#888'}}
                    href="https://www.smccd.edu" target="blank">SMCCCD</a> — All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
import {faSearch, faUser, faSortAlphaDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function TopBarNav() {
    return (
        <nav className={'bg-primary p-2'}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="top-bar__item">
                        <div className="top-bar__item-dropdown">
                            <div className="btn-group">
                                <button className="btn btn-dropdown dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"> Change Site
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="https://websmart.smccd.edu"> WebSMART</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/canvas"> Canvas</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://my.smccd.edu"> My.SMCCD</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/portal"> Portal</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item"
                                           href="https://webschedule.smccd.edu"> WebSchedule
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li className="dropdown-menu--colleges">
                                        <a className="dropdown-item color--blue"
                                           href="https://collegeofsanmateo.edu">
                                            College
                                            of San Mateo
                                        </a>
                                    </li>
                                    <li className="dropdown-menu--colleges">
                                        <a className="dropdown-item color--green"
                                           href="https://canadacollege.edu"> Ca&ntilde;ada
                                            College
                                        </a>
                                    </li>
                                    <li className="dropdown-menu--colleges">
                                        <a className="dropdown-item color--red"
                                           href="https://skylinecollege.edu"> Skyline
                                            College
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <span className="top-bar__item-dropdown-name text-light ms-2 ps-2 d-none d-md-inline"
                                  style={{borderLeft: '1px solid white'}}>
                                    SMCCCD
                                </span>
                        </div>
                    </div>

                    <div className="d-flex gap-2">
                        <div className="d-flex gap-1 align-items-center">
                            <div className="top-bar__item-user">
                                <a href="http://directory.smccd.edu/"
                                   aria-label="User"
                                   className={'d-block d-lg-none bg-primary p-1 border-0 rounded text-light'}
                                   style={{
                                       width: '2.25rem',
                                       height: '2.25rem',
                                       display: 'flex',
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                   }}>
                                    <FontAwesomeIcon icon={faUser} style={{width: '1.75rem', height: '1.75rem'}}/>
                                </a>
                            </div>
                            <div className="top-bar__item-sort">
                                <a href="/search/azindex"
                                   aria-label="Sort"
                                   className={'d-block d-lg-none bg-primary p-1 border-0 rounded text-light'}
                                   style={{
                                       width: '2.25rem',
                                       height: '2.25rem',
                                       display: 'flex',
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                   }}>
                                    <FontAwesomeIcon icon={faSortAlphaDown} style={{width: '1.75rem', height: '1.75rem'}}/>
                                </a>
                            </div>
                        </div>
                        <div className="top-bar__item-search">
                            <form role="form"
                                  action="/search/index.php"
                                  className={'m-0 p-0'}>
                                <input name="cx" type="hidden" value="001343176506729611594:dxf40qjualg"/>
                                <input name="cof" type="hidden" value="FORID:11"/>
                                <input name="ie" type="hidden" value="UTF-8"/>
                                <div className="input-group">
                                    <input id="as_q"
                                           className="form-control"
                                           name="q" type="text"
                                           placeholder="Search site using Google..."
                                           aria-label="Search site using Google"
                                           aria-describedby="button-addon2"/>
                                    <button id="button-addon2"
                                            className="btn btn-outline-secondary bg-light"
                                            type="submit"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                        <FontAwesomeIcon icon={faSearch} style={{width: '1.25rem', height: '1.25rem'}}/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
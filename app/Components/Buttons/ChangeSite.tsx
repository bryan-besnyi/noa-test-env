'use client';

export default function ChangeSite() {
  return (
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
  )
}


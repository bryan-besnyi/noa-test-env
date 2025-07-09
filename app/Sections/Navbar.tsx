import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import AtoZIndex from "@/app/Components/AtoZIndex";
import TopBarNav from "@/app/Components/TopBarNav";
import Image from "next/image";


export default function Navbar() {
    return (
        <section className="Header sticky sticky-top">
            <TopBarNav/>
            <nav className="px-3 py-3 bg-light" id="MainNavigation">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="navbar-brand">
                            <div className="smccd-logo">
                                <h1 className="visually-hidden"> San Mateo County Community College
                                    District</h1>
                                <div className="text-hide container-logo-smccdv d-block">
                                    <Image src={'https://smccd.edu/theme/smcccd-2022/images/SMCCCD_Horizontal_Blue.svg'} alt={"SMCCCD Logo"} width={256} height={50} />
                                </div>
                            </div>
                        </div>


                        <button className={'d-block d-lg-none bg-primary p-1 border-0 rounded text-light'} type="button"
                                style={{
                                    width: '2.25rem',
                                    height: '2.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                            <FontAwesomeIcon icon={faBars} style={{width: '1.75rem', height: '1.75rem'}}/>
                        </button>

                        <div id="main-navbar-collapse" className="d-none d-lg-block">
                            <ul className="nav gap-5">
                                <li>
                                    <a href="https://www.smccd.edu/portal/"
                                       className="text-header">
                                        Portal
                                    </a>
                                </li>
                                <li>
                                    <a href="https://banner.smccd.edu"
                                       id="bot-drop"
                                       className="text-header">
                                        Banner
                                    </a>
                                </li>
                                <li>
                                    <a href="https://websmart.smccd.edu/"
                                       className="text-header">
                                        WebSmart
                                    </a>
                                </li>
                                <li>
                                    <a href="https://banner.smccd.edu/dgw_portal.htm"
                                       className="text-header">
                                        Degree Works
                                    </a>
                                </li>
                                <li>
                                    <a id="dept-drop"
                                       href="https://downloads.smccd.edu/"
                                       className="text-header">
                                        Downloads
                                    </a>
                                </li>
                                <li>
                                    <a id="dept-drop"
                                       href="https://smccd.edu/sharepoint"
                                       className="text-header">
                                        Sharepoint
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            <AtoZIndex/>
        </section>
    )
}
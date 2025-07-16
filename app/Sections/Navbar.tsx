"use client";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';
import TopBarNav from "@/app/components/TopBarNav";
import SearchForm from "@/app/components/SearchForm";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const closeMobileNav = () => {
        setMobileNavOpen(false);
    };

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

                        {/* Mobile Menu Toggle */}
                        <button 
                            className={'d-block d-lg-none bg-primary p-1 border-0 rounded text-light'} 
                            type="button"
                            onClick={toggleMobileNav}
                            aria-expanded={mobileNavOpen}
                            aria-label="Toggle navigation"
                            style={{
                                width: '2.25rem',
                                height: '2.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <FontAwesomeIcon icon={mobileNavOpen ? faTimes : faBars} style={{width: '1.75rem', height: '1.75rem'}}/>
                        </button>

                        {/* Desktop Navigation */}
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

                    {/* Mobile Navigation Menu */}
                    <div className={`mobile-nav-menu ${mobileNavOpen ? 'show' : ''} d-lg-none`}>
                        <div className="mobile-nav-content">
                            {/* Main Navigation Links */}
                            <div className="mobile-nav-section">
                                <h5 className="mobile-nav-heading">Main Navigation</h5>
                                <ul className="mobile-nav-list">
                                    <li>
                                        <a href="https://www.smccd.edu/portal/" 
                                           className="mobile-nav-link" 
                                           onClick={closeMobileNav}>
                                            Portal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://banner.smccd.edu" 
                                           className="mobile-nav-link" 
                                           onClick={closeMobileNav}>
                                            Banner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://websmart.smccd.edu/" 
                                           className="mobile-nav-link" 
                                           onClick={closeMobileNav}>
                                            WebSmart
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://banner.smccd.edu/dgw_portal.htm" 
                                           className="mobile-nav-link" 
                                           onClick={closeMobileNav}>
                                            Degree Works
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://downloads.smccd.edu/" 
                                           className="mobile-nav-link" 
                                           onClick={closeMobileNav}>
                                            Downloads
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://smccd.edu/sharepoint" 
                                           className="mobile-nav-link" 
                                           onClick={closeMobileNav}>
                                            Sharepoint
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Top Bar Utilities */}
                            <div className="mobile-nav-section">
                                <h5 className="mobile-nav-heading">Quick Access</h5>
                                <div className="mobile-nav-utilities">
                                    <a href="http://directory.smccd.edu/"
                                       className="mobile-nav-utility-btn"
                                       onClick={closeMobileNav}
                                       aria-label="User Directory">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Directory</span>
                                    </a>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="mobile-nav-section">
                                <h5 className="mobile-nav-heading">Search</h5>
                                <SearchForm className="mobile-nav-search" size="sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}
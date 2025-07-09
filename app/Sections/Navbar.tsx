"use client";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import AtoZIndex from "@/app/Components/AtoZIndex";
import TopBarNav from "@/app/Components/TopBarNav";
import Image from "next/image";
import {useState} from "react";
import NavItems from "@/app/Components/NavItems";
import NavItemsToggle from "@/app/Components/NavItemsToggle";


export default function Navbar() {

    const [open, setOpen] = useState<boolean>(false);

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
                                    <Image src={'https://smccd.edu/theme/smcccd-2022/images/SMCCCD_Horizontal_Blue.svg'}
                                           alt={"SMCCCD Logo"} width={256} height={50}/>
                                </div>
                            </div>
                        </div>


                        <button className={'d-block d-lg-none btn btn-light p-1 border-0 rounded text-light'} type="button"
                                style={{
                                    width: '2.25rem',
                                    height: '2.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faBars} style={{width: '1.75rem', height: '1.75rem', color: '#012147'}}/>
                        </button>
                        <NavItems/>
                    </div>
                    {open ? <NavItemsToggle/> : null}
                </div>

            </nav>


            <AtoZIndex/>
        </section>
    )
}
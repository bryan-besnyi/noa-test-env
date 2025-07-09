export default function NavItemsToggle() {
    return (
        <div className={'mt-3'}>
            <ul className="nav justify-content-between">
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
    )
}
import React from "react";

type dasContent = {
    title: string,
    paragraph?: string,
    btn?: React.ReactNode,
    link?: string,
    children?: React.ReactNode,
}


export default function Dascontent({children, ...props}: dasContent) {

    const {title, btn, link, paragraph} = props

    return (
        <div className="row">
            <div className="col-md-12">
                <div
                    style={{
                        padding: '10px',
                        marginTop: '20px',
                        background: '#eff8ff url(images/icon_directory.png) no-repeat top right'
                    }}
                    className="rounded">
                    {/*Title*/}
                    <h3>
                        <a href={link} target="_blank"
                           className="h2 text-primary fw-bolder">{title}
                        </a>
                    </h3>

                    {/*Form*/}
                    {children}
                    {paragraph && <p>{paragraph}</p>}
                    {btn}
                </div>
            </div>
        </div>
    )
}
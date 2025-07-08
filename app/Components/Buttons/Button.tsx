"use client";

type label = {
    label: string;
    link?: string;
}


export default function Button(props: label) {

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    const {label, link} = props;
    return (
        <button
            type="submit" style={{fontSize: '1rem'}}
            className="btn btn-primary"
            name="save"
            onClick={handleClick}>
            <i className="fa fa-search"></i>
            {label}
        </button>
    )
}
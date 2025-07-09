"use client";

type label = {
    label: string;
    link?: string;
}


export default function Button(props: label) {
    const {label, link} = props;

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    return (
        <button
            type="submit" style={{fontSize: '1rem'}}
            className="btn btn-primary w-100"
            name="save"
            onClick={handleClick}>
            <i className="fa fa-search"></i>
            {label}
        </button>
    )
}
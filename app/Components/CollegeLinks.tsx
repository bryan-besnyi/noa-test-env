type linkInfo = {
    title: string,
    link: { text: string; url: string }[],
    img?: string,
}

export default function CollegeLinks(props: linkInfo) {

    const {title, link, img} = props;

    return (
        <div className="col-md-4 mt-3">
            <img src={img} alt={title}/>
            <h3 className={'h4 text-primary'}>
                <a href={link[0]?.url}> {title}</a>
            </h3>
            <ul className={'list-group'}>
                {link.slice(1).map((link, i) => (

                    <a
                        key={i}
                        href={link.url}
                        className={'list-group-item text-primary'}
                        style={{
                            border: 'none',
                            padding: 0
                        }}>
                        {link.text}</a>

                ))}
            </ul>
        </div>
    )
}
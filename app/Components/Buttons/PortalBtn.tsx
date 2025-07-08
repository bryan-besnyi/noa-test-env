type BtnInfo = {
    title: string;
    color: string;
    url: string;
}

type PortalBtnInfo = {
    btnInfo: BtnInfo;
}


export default function PortalBtn( props: PortalBtnInfo ) {

    const { btnInfo} = props;

    return (
        <div className="col-12 d-grid mb-2">
            <a href={btnInfo.url} target="_blank" rel="noopener noreferrer"
               className={`btn btn-${btnInfo.color} btn-lg w-100`}>
                {btnInfo.title}
            </a>
        </div>
    )
}
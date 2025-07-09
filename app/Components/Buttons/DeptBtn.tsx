type Dept = {
    title: string;
    color: string;
    url: string;
};

type DeptBtnProps = {
    dept: Dept;
};

export default function DeptBtn( props:DeptBtnProps  ) {

    const {dept} = props;
    return (

        <div className="col-3">
            <a href={dept.url} target="_blank" rel="noopener noreferrer"
               className={`btn btn-${dept.title} w-100`}>
                {dept.title}
            </a>
        </div>
    )
}
import "./Row.css"

const Row = ({item}) => {
    return (
        <div className="row">
            <label>{item.name}</label>
            <input type={item.type} />
        </div>
    );
}

export default Row;
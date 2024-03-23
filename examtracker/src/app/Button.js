import "./Button.css"

const Button = ({item}) => {
    return (
        <div className="button">
            <button onClick={item.action}>{item.label}</button>
        </div>
    );
}

export default Button;
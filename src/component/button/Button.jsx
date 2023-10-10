const Button = ({text, icon, className, onClick, type, disabled}) => {
    return (
        <button 
            onClick={onClick ?onClick : () => {}} 
            type={type ? type : ""} 
            className={className && className} 
            disabled={disabled}
        >
            {icon ? icon : "" }{text ? text : ""}
        </button>
    )
}

export default Button;
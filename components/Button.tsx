type ButtonProps = {
    type: "button" | "submit" | "reset";
    title: string;
    icon?: string;
    varient: string;
    };
const Button = ({type,title,icon,varient}:ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${varient}`}
    type = {type}
    >
        {icon && <img src={icon} alt="title" width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button
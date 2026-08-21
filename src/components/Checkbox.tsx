import "./radio.css"
export default function Radio({ className = "", ...props }) {
    console.log(props);

    return (
        <input
            {...props}
            type="radio"
            className={`custom-radio ${className}`}
        />);
}
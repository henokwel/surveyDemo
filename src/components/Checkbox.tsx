import "./radio.css"
export default function Radio({ className = "", ...props }) {
     return (
        <input
            {...props}
            type="radio"
            className={`custom-radio ${className}`}
        />);
}


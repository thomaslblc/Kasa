import { useState } from "react";
import './collapse.scss';

function Collapse({ content, title }) {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className={`tileContainer ${open ? "open" : ""}`}>
            <div className="tile" onClick={toggleCollapse}>
                <p>{title}</p>
                <i className={`fa-solid fa-chevron-up ${open ? "rotate" : ""}`}></i>
            </div>
            <div className={`active ${open ? "" : "close"}`}>
                <div className="activeContent">{content}</div>
            </div>
        </div>
    );
}

export default Collapse;
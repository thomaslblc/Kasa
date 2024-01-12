import { useState } from "react";

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
            {open && (
                <div className="active">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Collapse;
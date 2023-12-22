import { useState } from "react";

function Collapse({ content, title }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="tileContainer">
            <div className="tile" onClick={() => {
                setOpen(!open)
            }}>
                <p>{title}</p>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            {open ? (
                <div className="active">
                    {content}
                </div>
            ) : ""}

        </div>
    )
}

export default Collapse;
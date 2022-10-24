import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center space-x-4">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange(!checked)}
                name={label}
                className="w-4 h-4 appearance-none bg-neutral-400 checked:bg-sky-400"
            />
            <label htmlFor={label}>Include {label}</label>
        </div>
    );
};

export default Checkbox;

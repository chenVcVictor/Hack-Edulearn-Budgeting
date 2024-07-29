import React from 'react';
import './CustomSelection.css'

const CustomSelection = ({description, cost, timeline}) => {
    return (
        <div>
            <div className="text-style">
                {description}
            </div>
            <div className="text-style">
                {cost}
            </div>
            <div className="text-style">
                {timeline}
            </div>
            <button className="button-style">
                Select
            </button>
        </div>
    );
}

export default CustomSelection;
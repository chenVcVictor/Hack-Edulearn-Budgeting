import React from 'react';
import './PromptPage.css';

import CustomSelection from '../../components/CustomSelection';
import HeadPrompt from '../../components/prompt/HeadPrompt';

import prompt from '../../db/Dialog.json';
import selection from '../../db/Selection.json';


const PromptPage = () => {
    const attendCollege = selection['young-adult'];
    const findingWork = selection['adult'];
    const nothing = selection['nothing'];
    const vacation = selection['vacation'];

    return (
        <div className="box-container">
            <div className="text-container">
                <HeadPrompt 
                    text={prompt['young-adult'].graduation}
                />
            </div>

            <div className="selection-container">
                <CustomSelection 
                    {...attendCollege}
                />

                <CustomSelection 
                    {...findingWork}
                />

                <CustomSelection 
                    {...nothing}
                />

                <CustomSelection 
                    {...vacation}
                />
            </div>
           
        </div>
    )
}

export default PromptPage;
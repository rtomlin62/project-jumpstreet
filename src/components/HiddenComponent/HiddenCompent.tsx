import React from 'react';
import HBD from '../../images/otters_HBD.jpg';

export type HiddenComponentProps = {
    agent: string;
    missionControl: Array<string>;
}

const HiddenComponent = (props: HiddenComponentProps) => {

    let salutationSignatures: string = "";
    props.missionControl.map((mc, index) => salutationSignatures += `${mc} `);

    return (
        <div 
        style={{backgroundImage: `url(${HBD})`,
                backgroundSize: 'cover',
                height: '100%',
                fontFamily: 'Bradley-Hand, cursive',
                fontSize: '20px'}} 
        className={'showme'}
        >
            <h2 style={{margin: 0, wordWrap: 'normal'}}>
                {props.agent}, The secret to success for animals is to enjoy every day like its your birthday.
            </h2>
            <h3 style={{width: '100%', textAlign: 'center'}}> From: {salutationSignatures}</h3>
        </div>
    )
}

export default HiddenComponent;
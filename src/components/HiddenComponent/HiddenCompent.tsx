import React from 'react';
import HBD from '../../images/otters_HBD.jpg';
import MC from '../../images/MC_HBD.jpg';

export type HiddenComponentProps = {
    agent: string;
    missionControl: Array<string>;
}

const HiddenComponent = (props: HiddenComponentProps) => {

    let salutationSignatures: string = "";
    let imageUrl: string = "";
    let ff: string = "";
    let bdayMsg: string = "";

    if (props.agent.toLocaleLowerCase() === "buddy") {
        imageUrl = HBD
        ff = 'Bradley-Hand, cursive'
        bdayMsg = props.agent.toUpperCase() + ', the secret to success for animals is to enjoy every day like its your birthday.';
    } else {
        imageUrl = MC
        ff = 'fantasy'
        bdayMsg = props.agent.toUpperCase() + ', the mission was a breeze. Now enjoying your birthday is the next mission. ARE YOU READY?'
    }

    props.missionControl.map((mc, index) => salutationSignatures += `${mc} `);

    return (
        <div 
        style={{backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                height: '100%',
                fontFamily: ff,
                fontSize: '20px'}} 
        className={'showme'}
        >
            <h2 style={{margin: 0, wordWrap: 'normal'}}>
                {bdayMsg}
            </h2>
            <h3 style={{width: '100%', textAlign: 'center'}}> From: {salutationSignatures}</h3>
        </div>
    )
}

export default HiddenComponent;
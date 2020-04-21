import React from 'react';
import uniqid from 'uniqid';

const AdditionalInfo = ({acc}) => {
    let infoList=[];
    let j=0;
    for(let info in acc){
        infoList.push(<li key={uniqid()} className="about__item"><strong>{++j}</strong> {acc[info]}</li>);
    }
    return (
        <article>
                <h2>Additional info</h2>
                <ol className="about__list">
                    {infoList}
                </ol>
            </article>
    );
}

export default AdditionalInfo;

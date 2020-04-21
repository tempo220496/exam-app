import React from 'react';
import './InfoList.css';
import InfoItem from './InfoItem/InfoItem';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import uniqid from 'uniqid';

const InfoList = ({account}) => {
    const accountData=[];
    const accInfo={...account};
    const acc={...accInfo.infoList};
    let i=0;
    for(let key in account){
        if(account[key]===account.id ||
           account[key]===account.infoList ||
           account[key]===account.fullName ||
           account[key]===account.email ||
           account[key]===account.phoneNumber ||
           account[key]===account.filesUrls ||
           account[key]===account.country){
            continue;
        }
        accountData.push(<InfoItem
            num={++i} 
            prop={key} 
            value={account[key]}
            key={uniqid()} 
        />)
    }
    let infoList=null;
    if(Object.keys(acc).length === 0){
        infoList=<h2 className="empty__message">Account hasn't any additional information</h2>
    }else{
        infoList=<AdditionalInfo acc={acc}/>
    }
    return (
        <section className="about__info">
            <article>
                <h2>Main info</h2>
                <ol className="about__list">
                    {accountData}
                </ol>
            </article>
            {infoList}
        </section>
    );
}

export default InfoList;
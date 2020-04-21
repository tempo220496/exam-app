import React from 'react';
import InfoList from './InfoList/InfoList';
import './AccountInfo.css';
import uniqid from "uniqid";
import acc1 from "../../../assets/accounts/acc1.png";
import acc2 from "../../../assets/accounts/acc2.png";
import acc3 from "../../../assets/accounts/acc3.png";
import acc4 from "../../../assets/accounts/acc4.png";
import acc5 from "../../../assets/accounts/acc5.png";
import acc6 from "../../../assets/accounts/acc6.png";

const AccountInfo = ({accountInfo,closeInfo,isShowed}) => {
    const localImages=[acc1,acc2,acc3,acc4,acc5,acc6];
    const images=[];
    localImages.forEach(image=>images.push(<img key={uniqid()} src={image} alt={image} />));
    return (
        <div className="About" style={{display: isShowed ? "block":"none"}}>
            <section className="about__page">
                <InfoList account={accountInfo} />
                <section className="info__images">
                    {images}
                </section>
                <div className="account__actions">
                    <span className="account__buttons account__cancel" onClick={closeInfo}>Cancel</span>
                    <span className="account__buttons account__pay">Pay with PayPal</span>
                </div>
            </section>
        </div>
    );
}

export default AccountInfo;
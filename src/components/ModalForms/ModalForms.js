import React from 'react';
import AddAccount from "./AddAccount/AddAccount";
import Contact from "./Contact/Contact";
import AccountInfo from './AccountInfo/AccountInfo';

const ModalInfo = ({isShowed,closeInfo,accountInfo,isShowedAddForm,isShowedContact,closeContact,closeAddForm}) => {
    return (
        <div>
            <AddAccount 
            isShowedAddForm={isShowedAddForm}
            closeAddForm={closeAddForm}
            />
            <Contact 
            isShowedContact={isShowedContact}
            closeContact={closeContact}
            />
            <AccountInfo 
            isShowed={isShowed} 
            closeInfo={closeInfo}
            accountInfo={accountInfo}
            />
        </div>
    );
}

export default ModalInfo;

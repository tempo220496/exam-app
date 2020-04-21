import React from 'react';
import AccountInfo from "./AccountInfo/AccountInfo";

const AddAccountInfo = ({accList,addInfo,clearAll,addingInfo,info}) => {
    return (
            <section className="add__account-info">
            <h1 style={{color:'white'}}>Fill out additional information</h1>
            <div className="add__account_desc">
                <p><i>Add info item</i></p>
                <textarea className="add__account_text" onChange={addingInfo} value={info}></textarea>
                <div className="add__account_buttons">
                    <span className="add__account_item" onClick={addInfo}>Add info</span>
                    <span className="add__account_item" onClick={clearAll}>Clear all</span>
                </div>
            </div>
            <AccountInfo accList={accList} />
            </section>
    );
}

export default AddAccountInfo;

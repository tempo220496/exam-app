import React from 'react';
import uniqid from 'uniqid'

const AccInfoList = ({accList}) => {
    const accItems=[];
    let i=0;
    accList.forEach(accItem=>accItems.push(<li className="add__account_list-item" key={uniqid()}>{++i}) {accItem}</li>));
    return (
        <ul className="add__account_list">
            {accItems}
        </ul>
    );
}

export default AccInfoList;

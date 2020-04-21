import React from 'react';
import AccInfoList from './AccInfoList/AccInfoList';

const AccountInfo = ({accList}) => {
    return (
        <section>
            <p><i>Information list</i></p>
            <AccInfoList accList={accList} />
        </section>
    );
}

export default AccountInfo;

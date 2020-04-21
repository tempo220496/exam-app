import React, { Component } from 'react';
import "./AddAccount.css"
import {connect} from 'react-redux';
import uniqid from 'uniqid';
import { createAccount } from '../../../store/actions/accountAction';
import {storage} from '../../../config/fbConfig';
import AddAccountInputs from './AddAccountInputs/AddAccountInputs';
import AddAccountInfo from './AddAccountInfo/AddAccountInfo';

class AddAccount extends Component{
    state={
        account:{infoList:[],filesUrls:[]},
        info:'',
        files:[],
        progress:0
    };
    valueChanged=event=>{
        let account=event.target.name;
        this.setState({
            [account]:event.target.value
        });
    };
    sendAccount=event=>{
        event.preventDefault();
        const files=[...this.state.files];
        const foldername=uniqid();
        const promises=[];
        files.forEach(file=>{
            const uploadTask=storage.ref().child(foldername+'/'+file.name).put(file);
            uploadTask.on('state_changed',
            (snapshot)=>{
                this.setState({
                    progress:Math.floor(snapshot.bytesTransferred/snapshot.totalBytes*100)
                });
            },
            (error)=>{
                console.log(error);
            },
            ()=>{
                uploadTask
                    .snapshot
                    .ref
                    .getDownloadURL()
                    .then(urls=>{
                        const filesUrls=[];
                        filesUrls.push(urls);
                        this.setState({account:{filesUrls:filesUrls}})
                        console.log(urls);
                    })
            }
        );
            promises.push(uploadTask);     
        });
        const account={
            fullName:this.state.fullName,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber,
            country:this.state.country,
            platform:this.state.platform,
            castleLevel:this.state.castleLevel,
            troopsMight:this.state.troopsMight,
            researchMight:this.state.researchMight,
            kingdom:this.state.kingdom,
            migrations:this.state.migrations,
            hasGift:this.state.hasGift,
            price:this.state.price,
            infoList:this.state.account.infoList,
            filesUrls:this.state.account.filesUrls,
            id:foldername
        };
        this.props.onAccounted(account);
        this.setState({files:[],account:{infoList:[],filesUrls:[]}});
        event.target.reset();
        console.log(this.state.progress);
    };
    addingInfo=(e)=>{
        let info=e.target.value;
        this.setState({info});
    };
    addInfo=(e)=>{
        let info=this.state.info;
        let infoList=[...this.state.account.infoList];
        if(info===""){
            alert('Write something');
        }else if(info.length<11){
            alert("Write more informations");
        }else{
            infoList.push(info);
            this.setState({
                account:{infoList:infoList},
                info:''
             });
        }
    };
    clearAll=()=>{
        const infoList=[];
        this.setState({account:{infoList:infoList}});
    };
    onFileSelectedHandler=event=>{
        const files=[...this.state.files];
        const eventFiles=[...event.target.files];
        for(let file of eventFiles){
            files.push(file);
        }
        this.setState({files});
    };
    render(){
        return (
            <div className="add__account-form" style={{display: this.props.isShowedAddForm ? 'block':'none'}}>
                <section className="add__account">
                <span className="close__contact" onClick={this.props.closeAddForm}><span>&times;</span></span>
                <h1 id="addaccount">Account offer form</h1>
                <form className="add__account_form" onSubmit={this.sendAccount}>
                    <div className="add__account_info">
                        <AddAccountInputs 
                        valueChanged={this.valueChanged} 
                        onFileSelectedHandler={this.onFileSelectedHandler}/>
                        <AddAccountInfo 
                        accList={!this.state.account.infoList ? []:this.state.account.infoList}
                        clearAll={this.clearAll}
                        addInfo={this.addInfo}
                        addingInfo={this.addingInfo}
                        info={this.state.info}/>
                    </div>
                    <div className="contact__buttons">
                        <span className="contact__send contact_cancel" onClick={this.props.closeAddForm}>Cancel</span>
                        <button type="submit" className="contact__send">Send</button>
                    </div>
                </form>
                </section>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        accounts:state.accounts,
        loading:state.loading
    }
};

const mapDispatchToProps=dispatch=>{
    return{
        onAccounted:account=>dispatch(createAccount(account))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddAccount);
import React,{Component, Fragment} from 'react';
import './Main.css'
import Account from './Account/Account';
import instance from '../../containers/axios_accounts-contacts';
import Spinner from '../../UI/Spinner/Spinner';
import ModalForms from "../ModalForms/ModalForms";

class Accounts extends Component{
  state={
    three_accounts:[],
    rest_accounts:[],
    loading:false,
    account:null,
    isShowed:false,
    accounts:[],
    ids:[]
  };
  componentDidMount(){
    this.setState({loading:true});
    instance.get('/accounts.json')
      .then(response=>{
        const accounts=Object.keys(response.data).map(key=>{
          return {
            ...response.data[key]
          }
        });
        const three_accounts=[];
        const rest_accounts=[];
        const ids=[];
        for(let i=0;i<3;i++){
          three_accounts.push(accounts[i]);
        };
        for(let j=3;j<accounts.length;j++){
          rest_accounts.push(accounts[j]);
        };
        accounts.forEach(account=>ids.push(account.id));
        this.setState({three_accounts,rest_accounts,accounts,ids,loading:false});
      }).catch(err=>{
        console.log(err);
        this.setState({loading:false});
      });
  };
  readMore(id){
    const accounts=[...this.state.accounts];
    const index=this.state.accounts.findIndex(account=>account.id===id);
    const account=accounts[index];
    this.setState({account,isShowed:true});
    console.log(account);
  };
  render(){
    let three_accounts=<Spinner />
    let rest_accounts=null;
    if(!this.state.loading){
      three_accounts=this.state.three_accounts.map(account=>{
        return <Account 
          key={account.id}
          img="https://i0.wp.com/thetechart.com/wp-content/uploads/2018/01/lords-mobile-war-kingdom-strategy-rpg-battle.jpg?fit=496%2C310&ssl=1"
          platform={account.platform}
          researchMight={account.researchMight}
          migrations={account.migrations}
          castleLevel={account.castleLevel}
          troopsMight={account.troopsMight}
          kingdom={account.kingdom}
          price={account.price}
          accounts={this.state.accounts}
          readMore={()=>this.readMore(account.id)}
        />
      });
      rest_accounts=this.state.rest_accounts.map(account=>{
        return <Account 
          key={account.id}
          img="https://i0.wp.com/thetechart.com/wp-content/uploads/2018/01/lords-mobile-war-kingdom-strategy-rpg-battle.jpg?fit=496%2C310&ssl=1"
          platform={account.platform}
          researchMight={account.researchMight}
          migrations={account.migrations}
          castleLevel={account.castleLevel}
          troopsMight={account.troopsMight}
          kingdom={account.kingdom}
          price={account.price}
          accounts={this.state.accounts}
          readMore={()=>this.readMore(account.id)}
        />
      });
    };
    
    return (
      <Fragment>
        <ModalForms 
          isShowed={this.state.isShowed} 
          closeInfo={()=>this.setState({isShowed:false})}
          accountInfo={this.state.account} 
          isShowedAddForm={this.props.isShowedAddForm}
          isShowedContact={this.props.isShowedContact}
          closeContact={this.props.closeContact}
          closeAddForm={this.props.closeAddForm}
        />
        <section className="accounts__section">
          <div className="accounts__row">
            {three_accounts}
            {rest_accounts}
          </div>
          <span className="account__main_link">More accounts</span>
        </section>
      </Fragment>
    );
  }
}

export default Accounts;
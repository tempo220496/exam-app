import React,{Component} from 'react';
import './Preloader.css';

class Preloader extends Component{
    constructor(props){
        super(props)
        this.viewRef=React.createRef();
    };
    render(){
        return (
            <div ref={this.viewRef} className="preloader">
                <div className="preloader__content">
                    <div className="preloader__first"></div>
                    <div className="preloader__second"></div>
                    <div className="preloader__third"></div>
                </div>
            </div>
        );
    };
    componentWillUnmount(){
        this.viewRef.current.style.opacity=0;
    }
}

export default Preloader;

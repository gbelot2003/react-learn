import React from "react";
import Title from "./header/title";

export default class Header extends React.Component{

    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    };

    render(){
        return(
            <header>
                <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/">
                                <img alt="Brand" src="http://www.w3schools.com/bootstrap/bs.png" width="25"/>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div class="col-md-12">
                            <Title title={this.props.title}/>
                            <input onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


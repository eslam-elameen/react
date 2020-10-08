import React,{Component} from "react";
import SmallBar from './SmallBar';
import LogoBar from './LogoBar';
import NavBar from './NavBar';


export default class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <SmallBar></SmallBar>
                <LogoBar></LogoBar>
                <NavBar></NavBar>
            </div>
        )
    }
}
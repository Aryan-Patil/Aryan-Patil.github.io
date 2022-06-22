import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import './language.css';

import js from './icons/js.png'
import php from './icons/php.png'
import godot from './icons/Godot_icon.png'
import github from './icons/github.png'
import java from './icons/java.png'
import react from './icons/react.png'
import bootstrap from './icons/bootstrap.png'
import git from './icons/git.png'
import node from './icons/nodejs.png'
import c from './icons/c.png'
import mysql from './icons/mysql.png'
import firebase from './icons/firebase.png'
import framer from './icons/framer-motion.png'


class Language extends Component {
    componentDidMount() {
        var count=0;
        this.intervalID = setInterval(() => {
            this.forceUpdate();
            count=count+1;
            if (count==1)
            {
                clearInterval(this.intervalID);
                this.runAnimation = setInterval(() => {
                    this.forceUpdate();
                }, 2000);
            } 
        }, 2500);
    }
    componentWillUnmount() {
        clearInterval(this.runAnimation);
    }
    render(){
        return(
            <div>
                <div className="cloud">
                <TagCloud className="tag-cloud"
            style={{
            fontFamily: "font-file-82132",
            fontSize: 28,
            /*fontStyle: 'italic',*/
            color: '#08fdd8',
            width: '600px',
            height: '400px'/*, spiral: 'rectangular'*/
            }}>
            <div key={'1'}><img src={js} className="bg-height"/></div>
            <div key={'2'}><img src={php} className="bg-height"/></div>
            <div key={'3'}><img src={git} className="bg-height"/></div>
            <div key={'4'}><img src={github} className="bg-height"/></div>
            <div key={'5'}><img src={react} className="bg-height"/></div>
            <div key={'6'}><img src={godot} className="bg-height"/></div>
            <div key={'7'}><img src={java} className="bg-height"/></div>
            <div key={'8'}><img src={bootstrap} className="bg-height"/></div>
            <div key={'9'}><img src={node} className="bg-height"/></div>
            <div key={'10'}><img src={c} className="bg-height"/></div>
            <div key={'11'}><img src={mysql} className="bg-height"/></div>
            <div key={'12'}><img src={firebase} className="bg-height"/></div>
            <div key={'13'}><img src={framer} className="bg-height"/></div>
            </TagCloud></div>
            </div>
        );
    }
}

export default Language;

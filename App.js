import React from 'react';
import { StyleSheet, Text, View,WebView} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import TaskList from './TaskList.js'

export default class App extends React.Component {
  constructor(props,context){
      super(props,context);
      this.state ={
        todos: [
            {
                task:'learn React'
            },

 {
                task:'Readux and React '
            },
        ],
      };
     
  }

onAddStarted(){
  this.nav.push({
    name:'taskform',
  });
}

   renderScene(route,nav){
      switch(route.name){
        case 'taskform':
          return (<Text> Add form comes here </Text>)
        default:
          return(
            <TaskList
            onAddStarted ={this.onAddStarted.bind(this)}
             todos={this.state.todos}
            />
          
          )
  
        }
  }


  render() {
    return (
      <Navigator
         initialRoute={{name:'tasklist',index:0}}
        ref ={((nav)=>{
          this.nav =nav ;
        })}

         renderScene = {this.renderScene.bind(this)}
   />        
        

    );
  }
}



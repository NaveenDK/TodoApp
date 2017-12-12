import React from 'react';
import { StyleSheet, Text, View,WebView, ListView,TouchableHighlight} from 'react-native';
import {PropTypes} from 'prop-types';
import TaskRow from './TaskRow';


const styles =StyleSheet.create({
    container:{
        paddingTop:40,
        backgroundColor:'#F7F7F7',
        justifyContent:'flex-start',
        flex:-1,
        marginBottom: 2,


    },
     
    button:{
        height:60,
        borderColor:'#05A5D1',
        borderWidth:2,
        backgroundColor:'#333',
        margin:20,
        justifyContent:'center',
        alignItems: 'center',

    },
    buttonText:{
        color:'#FAFAF',
        fontSize:20,
        fontWeight:'600',
    }


});

export default class TaskList extends React.Component {
    constructor(props,context){
        super(props,context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) =>r1!=r2,
        });

        this.state ={
            dataSource:ds.cloneWithRows(props.todos),
        };
    }

 renderRow(todo){
     return(
        <TaskRow todo = {todo}/>
     )
 }

  render() {
    return (
        <View style={styles.container}>
            <ListView
                dataSource ={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                />
            <TouchableHighlight 
                style={styles.buttonText}
            >
                <Text
                    style={styles.buttonText}
                >
                    Add one
                    </Text>
            </TouchableHighlight>
    
        </View>

    );
  }
}


TaskList.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,

}
import React from 'react';
import { StyleSheet, Text, View,WebView, ListView} from 'react-native';
import {PropTypes} from 'prop-types';

const Styles = StyleSheet.create({
   container:{
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#E7E7E7',
        padding:20,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        marginLeft:20,
        marginRight:20,



   },
});



class TaskRow extends React.Component{
    render(){
        return(
        <View style={styles.container}>
            <Text>{this.props.todo.task}..</Text>
        </View>
        );
    }
}

TaskRow.proptypes ={
    todo:PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired,

}
export default TaskRow;
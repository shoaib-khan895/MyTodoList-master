import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {addTodo, deleteTodo, updateTodo} from '../../redux/action';
import {connect} from 'react-redux';
import TodoUpdate from './TodoUpdate';

function TodoMain({todo_list, addTodo, deleteTodo, navigation}) {
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    addTodo(task);
    setTask('');
  };
  const handleDeleteTodo = id => {
    deleteTodo(id);
  };
  // const handleUpdateTodo = id => {
  //   updateTodo(id);
  //   navToUpdateScreen(id);
  // };
  function navToUpdateScreen(id) {
    navigation.navigate('TodoUpdate', {
      id: id,
    });
  }
  return (
    <View>
      <Text style={styles.hearderTextSttle}>Goal App</Text>
      <View style={styles.inputViewStyle}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.inputTextStyle}
            placeholder="Add Task . . . ."
            onChangeText={text => setTask(text)}
            value={task}></TextInput>

          <TouchableOpacity style={styles.buttonStyle} onPress={handleAddTodo}>
            <Text style={{color: 'white', fontSize: 35}}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todo_list}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onLongPress={() => navToUpdateScreen(item.id)}
                onPress={() => handleDeleteTodo(item.id)}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.item}>
                    <Text style={styles.title}>{item.task}</Text>
                  </View>
                  {/* <TouchableOpacity
                    onPress={() => navigation.navigate('TodoUpdate')}
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View>
                      <Text style={{fontSize: 30, color: 'red'}}>+</Text>
                    </View>
                  </TouchableOpacity> */}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hearderTextSttle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  inputTextStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
    flex: 1,
  },
  inputViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'black',
    margin: 10,
    width: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    backgroundColor: 'white',
    padding: 2,
    marginVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    color: 'black',
    backgroundColor: 'white',
    width:'100%'
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});
const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.reducer.todo_list,
  };
};

const mapDispatchToProps = {addTodo, deleteTodo,updateTodo};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);

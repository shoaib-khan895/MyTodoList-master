import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {updateTodo} from '../../redux/action';
function TodoUpdate({route}) {
  const [text, setText] = useState();
  const {id} = route.params;

  console.log('item ===>', id);

  const handleUpdateTodo = id => {
    updateTodo(id);
  };

  return (
    <View>
      <Text
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          width: '90%',
          padding: 10,
          borderRadius: 5,
          alignSelf: 'center',
        }}>
        {id}
      </Text>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          width: '90%',
          padding: 10,
          borderRadius: 5,
          alignSelf: 'center',
        }}
        placeholder="Type here for updating the above old value"
        onChangeText={text => setText(text)}
        value={text}></TextInput>
      <Button title="Update"></Button>
    </View>
  );
}

export default TodoUpdate;

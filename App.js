import {useState} from 'react';
import { StyleSheet, View, Button, FlatList, StatusBar } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import Test from './components/Test'

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submitHandler = (inputEnteredText) => {
    setGoalList((currentList) => [...currentList, {text:inputEnteredText, key:Math.random().toString()}])
  }

  const deleteHandler = (key) => {
    console.log('DELETE', key)
    setGoalList((currentList) => {
      return (
        currentList.filter((listItem) => listItem.key!=key)
      )
    })
  }

  const modalHandler = () => {
    setIsModalVisible(true)
    console.log(isModalVisible)
  }

  return (
    <>
      <StatusBar backgroundColor={'purple'}></StatusBar>
      <View style={styles.container}>
        <GoalInput isVisible={isModalVisible} modalVisibility={() => setIsModalVisible(false)} goalAdd={submitHandler}></GoalInput>
        <Test></Test>
        <Button title="Add your Goal" onPress={modalHandler}></Button>
        <View style={styles.goalsContainer}>
          <FlatList data={goalList} renderItem={(itemData) => {
            return (
              <GoalItem onDelete={deleteHandler} text={itemData.item}></GoalItem>
            )
          }} alwaysBounceVertical={false} bounces={false}/>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    paddingTop:50,
    backgroundColor:'purple',
    flex:1
  },
  goals: {
    fontSize:16,
  },
  goalsContainer: {
    marginTop:30,
  },
});

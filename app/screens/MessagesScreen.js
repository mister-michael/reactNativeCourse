import React, {useState} from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from '../components/Screen';
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";


const initialMessages = [
  {
    id: 1,
    title: "mod ules/r eact-nat ive/Libr aries/ Batched Bridge/Messag eQueue.js:1 11:4 in callFuncti onRetu rnFlush e modu les/rea ct-nativ e/Librarie rid ge/Messa geQueue.js:111:4 in call tionRe turnFlushe module tive/Li b rari es/BatchedBr idge/Me ssage Queue.js:111:4 in cal lFunctionR eturnFlushe modules/re act-native /Libraries/BatchedB ridge/MessageQueue.js:111:4 in callFunctionReturnFlushe",
    description: "mod ules/r eact-nat ive/Libr aries/ Batched Bridge/Messag eQueue.js:1 11:4 in callFuncti onRetu rnFlush e modu les/rea ct-nativ e/Librarie rid ge/Messa geQueue.js:111:4 in call tionRe turnFlushe module tive/Li b rari es/BatchedBr idge/Me ssage Queue.js:111:4 in cal lFunctionR eturnFlushe modules/re act-native /Libraries/BatchedB ridge/MessageQueue.js:111:4 in callFunctionReturnFlushe",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);
    

    const handleDelete = message => {
        //delete message from array
        setMessages(messages.filter(m => m.id !== message.id))
    }
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=>console.log("message selected", item)}
            renderRightActions={() =>
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
                }
            
          />
        )}
      ItemSeparatorComponent={()=> <ListItemSeparator/>}
      refreshing={refreshing}
      onRefresh={() => setMessages([
        {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
          }
      ])}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;

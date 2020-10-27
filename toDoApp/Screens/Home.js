// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, View, TextInput, ScrollView } from 'react-native';
import {MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons'
import {connect} from "react-redux"
import {saveUser} from "../Actions/saveUser.js"

const mapDispatchToProps = (dispatch) => {
    return{
        reduxSaveUser:(userDetails) => dispatch(saveUser(userDetails)
    )
}}

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const tasks = [
  {
    task: "mornigni walklk",
    icon: "hiking",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
  {
    task: "night walklk",
    icon: "cart",
    stamp: "today 8pm"
  },
]

const Task = ({task, icon, stamp}) => {
  return (
    <View style={{backgroundColor: colors.white, flexDirection: "row", marginHorizontal: 16, marginVertical: 4, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, alignItems: "center", justifyContent: "space-between"}}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <MaterialCommunityIcons name={icon} size={30} style={{color: "red", marginRight: 8}}/>
        <View>
          <Text style={{fontSize: 16}}>{task}</Text>
          <Text style={{color: colors.greyish}}>{stamp}</Text>
        </View>
      </View>
      <View style={{flexDirection: "row"}}>
        <MaterialCommunityIcons name='trash-can' size={30} style={{color: "red", marginRight: 8}}/>
        <MaterialCommunityIcons name='pencil' size={30} style={{color: "red"}}/>
      </View>
    </View>
  )
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" style={styles.statusBar}/>
      <View style={styles.innerView}>
        <MaterialCommunityIcons name="text" size={30} style={{color: colors.white}}/>
        <AntDesign name="user" size={30} style={{color: colors.white}} 
        onPress={() => {
            const userDetails = {};
            userDetails.name = this.state.name;
            reduxSaveEmployeeDetail(userDetails)
            }}
        />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>Hey Isaac Chavez</Text>
        <View style={styles.innerHeaderView}>
          <MaterialCommunityIcons name="magnify" size={30} style={{color: colors.white}}/>
          <TextInput style={styles.textInput}/>
        </View>
      </View>
      <View style={styles.newTask}>
        <Text style={{fontSize: 24}}>Tasks</Text>
        <MaterialCommunityIcons name="plus" size={30} style={{color: colors.themeColor, borderRadius: 20, marginHorizontal: 8}}/>
      </View>
      <ScrollView style={styles.scroll}>
        {tasks.map((task, index) => (
          <Task key={index} task={task.task} icon={task.icon} stamp={task.stamp}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(null,mapDispatchToProps)(EmployeeDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor
  },
  statusBar: {
    backgroundColor: colors.themeColor
  },
  innerView: {
    padding:16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    padding: 16
  },
  headerText: {
    color: colors.white,
    fontSize: 30
  },
  innerHeaderView: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.tint,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: "center"
  },
  textInput: {
    paddingLeft: 8,
    flex: 1,
    color: colors.white
  },
  newTask:{
    padding: 20,
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "space-between",
    alignItems: "center", 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  scroll: {
    backgroundColor: colors.background
  }
});
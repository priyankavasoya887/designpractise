import { StatusBar } from "expo-status-bar";
import React,{ Component } from "react";
import {Text} from "react-native";
import Logindemo from "./src/screens/Logindemo";

class App extends Component{
  render(){
    return(
      <Logindemo/>
    )
  }

}
export default App;
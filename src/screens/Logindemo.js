import React, {PureComponent,useState } from 'react'
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,StatusBar} from 'react-native'

export default class Logindemo extends PureComponent {
  // const [email, setEmail] = useState("");
  // const [password,setPassword] = useState("");

  render() {
    return (
      <SafeAreaView>

      <View style={style.TopView}>

      <TouchableOpacity>
      <Image style={style.Backarrowimage}
      source={require("../assets/back.png")}>
      </Image>
      </TouchableOpacity>

      <Text style={style.LoginScreenText}>
        LoginScreen
      </Text>

      <TouchableOpacity>
      <Image style={style.SearchIcon}
      source={require("../assets/search.png")}>
      </Image>
      </TouchableOpacity>

      <TouchableOpacity>
      <Image style={style.BellIcon}
      source={require("../assets/bell.png")}>
      </Image>
      </TouchableOpacity>
      </View>

      <View>
        <Image style={style.image} source={require("../assets/loginicon.png")}/>
        <Text style={style.text}>Welcome Back,</Text>
        <Text style={{
          marginLeft:15,
          marginTop:10,
          fontSize:15,
          color:"gray"}}>
          Sign in to Continue,
        </Text>

        <Text style={style.userpasstext}>
        User Id
        </Text>
        <TextInput 
        style={style.TextInput}></TextInput>

        <Text style={style.userpasstext}>
        Password
        </Text>

        <View style={style.View}>
        <TextInput style={style.TextInput}
        secureTextEntry={true}>
        </TextInput>

        <TouchableOpacity>
        <Image style={style.Image_eye}
        source={require("../assets/hidden.png")}></Image>
        </TouchableOpacity>

        </View>

        <TouchableOpacity>
          <Text style={style.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.login_button}>
        <Text style={style.login_text}>
        Login
        </Text>
        </TouchableOpacity>

        <View>
        <TouchableOpacity style={style.Newuser_Signup}>
          <Text style={{fontSize:16,fontWeight:"bold"}} >New User?</Text>
          <Text style={{fontSize:16,marginLeft:5,fontWeight:"bold",color:"#9932CC"}}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      </SafeAreaView>
    )
  }
}
const style = StyleSheet.create({

  TopView:{
    marginTop:40,
    flexDirection:'row',
    backgroundColor:"black",
    height:50,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-around'

  },
  View:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginRight:8
  },
  image:{
    
    height:100,
    width:100,
    marginTop:80,
    marginBottom:20,
    marginLeft:20,
  },
    text:{
        marginLeft:15,
        fontSize:22,
        fontWeight:"bold"

    },
    userpasstext:{
      marginTop:15,
        marginLeft:15,
        fontSize:18,
        fontWeight:"bold"
    },
    TextInput:{
        marginLeft:10,
        borderBottomWidth:1,
        width:"95%",
    },
    forgot_button:{
      height:30,
      marginTop:20,
      textAlign:'right',
      marginRight:15,
      fontSize:15,
      color:"gray",
    },
    login_button:{
      marginLeft:10,
      marginRight:10,
      width:"95%",
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      backgroundColor:"black"
    },
    login_text:{
      color:"white",
      fontWeight:"bold",
      fontSize:15,
    },
    Newuser_Signup:{
      flexDirection:'row',
      marginTop:20,
      justifyContent:"center",
    },
    Image_eye:{
      height:15,
      width:15,
      
    },
    LoginScreenText:{
      fontSize:20,
      fontWeight:"bold",
      color:"white",
      marginRight:80

    },
    Backarrowimage:{
      tintColor:"white",
      width:35,
      height:35,
      //marginRight:10,
      marginLeft:2,

    },
    SearchIcon:{
      height:25,
      width:25,
      //alignItems:'right',
    },
    BellIcon:{
      tintColor:"white",
      height:25,
      width:25,

    }
})
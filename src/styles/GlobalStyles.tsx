import {StyleSheet } from 'react-native';
import { MyColors } from '../styles/colors';

export const Styles = StyleSheet.create({
   btnBlue:{
      backgroundColor: MyColors.blue,
      width:70,
      height:70,
      borderRadius:24,
      justifyContent:'center',
      alignItems:'center',
      margin:8,
      
   },
   btnGrey:{
    backgroundColor: MyColors.btnGrey,
    width:70,
    height:70,
    borderRadius:24,
    justifyContent:'center',
    alignItems:'center',
    margin:8,
    
 },
 btnDark:{
    backgroundColor: MyColors.btnDark,
    width:70,
    height:70,
    borderRadius:24,
    justifyContent:'center',
    alignItems:'center',
    margin:8,
    
 },
 btnLight:{
    backgroundColor: MyColors.white,
    width:70,
    height:70,
    borderRadius:24,
    justifyContent:'center',
    alignItems:'center',
    margin:8,
    
 },
 smallTextLight:{
    fontSize:32,
   color: MyColors.white, // Black text for light theme
 },
 smallTextDark:{
    fontSize:32,
   color: MyColors.black, // White text for dark theme
 },
 row:{
   flex:1,
   width:'100%',
   flexDirection:'row',
},
viewButtom:{
   position:'absolute',
   bottom:50,
},
screenFirstNumbers:{
    fontSize:96,
    color: MyColors.gray,
    fontWeight:'200',
    alignSelf:'flex-end',
},
screenSecondNumbers:{
    fontSize:40,
    color: MyColors.gray,
    fontWeight:'200',
    alignSelf:'flex-end',
},
});
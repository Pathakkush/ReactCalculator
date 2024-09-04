import * as React from 'react';
import { View, Text } from 'react-native';
import Button  from './Button';
import { Styles } from '../styles/GlobalStyles';
import { MyColors } from '../styles/colors';



export default function MyKeyBoard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<number | null>(null);
  
    const handleNumberPress = (buttonValue: string) => {
      if (firstNumber.length < 10) {
        setFirstNumber(firstNumber + buttonValue);
      }
    };
  
    const handleOperationPress = (buttonValue: string) => {
      if (firstNumber) {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
      }
    };
  
    const clear = () => {
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(null);
    };
  
    const getResultValue = () => {
      switch (operation) {
        case "+":
          clear();
          setResult(Number(secondNumber) + Number(firstNumber));
          break;
        case "-":
          clear();
          setResult(Number(secondNumber) - Number(firstNumber));
          break;
        case "*":
          clear();
          setResult(Number(secondNumber) * Number(firstNumber));
          break;
        case "/":
          clear();
          setResult(Number(secondNumber) / Number(firstNumber));
          break;
        default:
          clear();
          setResult(null);
          break;
      }
    };
  
    const firstNumberDisplay = () => {
      if (result !== null) {
        return (
          <Text
            style={
              result < 99999
                ? [Styles.screenFirstNumbers, { color: MyColors.result }]
                : [Styles.screenFirstNumbers, { fontSize: 50, color: MyColors.result }]
            }
          >
            {result?.toString()}
          </Text>
        );
      }
  
      if (firstNumber.length < 6) {
        return <Text style={Styles.screenFirstNumbers}>{firstNumber}</Text>;
      }
  
      if (firstNumber === "") {
        return <Text style={Styles.screenFirstNumbers}>{"0"}</Text>;
      }
  
      if (firstNumber.length >= 6 && firstNumber.length < 8) {
        return <Text style={[Styles.screenFirstNumbers, { fontSize: 60 }]}>{firstNumber}</Text>;
      }
  
      if (firstNumber.length >= 8) {
        return <Text style={[Styles.screenFirstNumbers, { fontSize: 50 }]}>{firstNumber}</Text>;
      }
    };
  
    return (
      <View style={Styles.viewButtom}>
        <View
          style={{
            height: 110,
            width: '90%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Text style={Styles.screenSecondNumbers}>
            {secondNumber}
            <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>
              {operation}
            </Text>
          </Text>
          {firstNumberDisplay()}
        </View>
  
        <View style={Styles.row}>
          <Button title="C" onPress={clear} isGrey />
          <Button title="+/−" onPress={() => handleOperationPress("+/-")} isGrey />
          <Button title="%" onPress={() => handleOperationPress("%")} isGrey />
          <Button title="/" onPress={() => handleOperationPress("/")} isBlue />
        </View>
  
        <View style={Styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="*" onPress={() => handleOperationPress("*")} isBlue />
        </View>
  
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" onPress={() => handleOperationPress("-")} isBlue />
        </View>
  
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" onPress={() => handleOperationPress("+")} isBlue />
        </View>
  
        <View style={Styles.row}>
          <Button title="." onPress={() => handleNumberPress(".")} />
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
          <Button title="=" onPress={getResultValue} isBlue />
        </View>
      </View>
    );
  }
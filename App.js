import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultText: '',
      calculationText: '',
      lastText: '',
    };
  }

  numberPressed(number) {
    this.setState({
      resultText: this.state.resultText + number,
      lastText: this.state.lastText + number,
    });  
  }
 
  operatorPressed(operand) {
    if (this.state.resultText === ''){
      this.setState({
        resultText: '',
        lastText: '',
      });
    }else {
      if (this.state.resultText[this.state.resultText.length-1] === operand ){
        this.setState({
          resultText: this.state.resultText,
          lastText: '',
        });
      }else {
        this.setState({
          resultText: this.state.resultText + operand,
          lastText: '',
        });
      }
      
    }
  }
  dotPressed(dot) {
    if (!this.state.lastText.includes(dot)){
      this.setState({
        resultText: this.state.resultText + dot,
        lastText: this.state.lastText + dot,
      });
    }
  }

  clear() {
    this.setState({
      resultText: '',
      calculationText: '',
      lastText: '',
    });
  }

  clearEntry() {
    this.setState({
      resultText: '',
      lastText: '',
    });
  }

  deleteLast(text) {
    this.setState({
      resultText: this.state.resultText.slice(0, -1),
      lastText: this.state.lastText.slice(0, -1),
    });
  }

  calculate(text) {
    this.setState({
      calculationText: eval(this.state.resultText),
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.font2}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.font2}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.clear()}
                style={styles.icons}>
                <Text style={styles.font}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.clearEntry()}
                style={styles.icons}>
                <Text style={styles.font}>CE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.deleteLast()}
                style={styles.icons}>
                <Text style={styles.font}>DL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.numberPressed('7')}
                style={styles.icons2}>
                <Text style={styles.font}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('8')}
                style={styles.icons2}>
                <Text style={styles.font}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('9')}
                style={styles.icons2}>
                <Text style={styles.font}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.numberPressed('4')}
                style={styles.icons2}>
                <Text style={styles.font}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('5')}
                style={styles.icons2}>
                <Text style={styles.font}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('6')}
                style={styles.icons2}>
                <Text style={styles.font}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.numberPressed('1')}
                style={styles.icons2}>
                <Text style={styles.font}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('2')}
                style={styles.icons2}>
                <Text style={styles.font}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('3')}
                style={styles.icons2}>
                <Text style={styles.font}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.plusNegative()}
                style={styles.icons2}>
                <Text style={styles.font}>+/-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('0')}
                style={styles.icons2}>
                <Text style={styles.font}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.dotPressed('.')}
                style={styles.icons2}>
                <Text style={styles.font}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operands}>
            <View style={styles.column}>
              <TouchableOpacity
                onPress={() => this.operatorPressed('/')}
                style={styles.icons}>
                <Text style={styles.font}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.operatorPressed('*')}
                style={styles.icons}>
                <Text style={styles.font}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.operatorPressed('-')}
                style={styles.icons}>
                <Text style={styles.font}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.operatorPressed('+')}
                style={styles.icons}>
                <Text style={styles.font}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => this.calculate()}
                style={styles.icons}>
                <Text style={styles.font}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  numbers: {
    flex: 3,
  },
  operands: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  icons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 50,
    margin: 1,
  },
  icons2: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 1,
  },
  font: {
    fontSize: 30,
  },
  font2: {
    fontSize: 50,
    color: 'white',
  },
});

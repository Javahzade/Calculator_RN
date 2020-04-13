import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultText: '',
      calculationText: '',
    };
  }

  buttonsPressed(text) {
    console.log(text);
    this.setState({
      resultText: this.state.resultText + text,
    });
  }

  clear() {
    this.setState({
      resultText: '',
      calculationText: '',
    });
  }

  clearEntry() {
    this.setState({
      resultText: '',
    });
  }

  deleteLast() {
    this.setState({});
  }

  calculate(text) {
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
                onPress={() => this.buttonsPressed('7')}
                style={styles.icons2}>
                <Text style={styles.font}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('8')}
                style={styles.icons2}>
                <Text style={styles.font}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('9')}
                style={styles.icons2}>
                <Text style={styles.font}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('4')}
                style={styles.icons2}>
                <Text style={styles.font}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('5')}
                style={styles.icons2}>
                <Text style={styles.font}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('6')}
                style={styles.icons2}>
                <Text style={styles.font}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('1')}
                style={styles.icons2}>
                <Text style={styles.font}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('2')}
                style={styles.icons2}>
                <Text style={styles.font}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('3')}
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
                onPress={() => this.buttonsPressed('0')}
                style={styles.icons2}>
                <Text style={styles.font}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('.')}
                style={styles.icons2}>
                <Text style={styles.font}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operands}>
            <View style={styles.column}>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('/')}
                style={styles.icons}>
                <Text style={styles.font}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('*')}
                style={styles.icons}>
                <Text style={styles.font}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('-')}
                style={styles.icons}>
                <Text style={styles.font}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonsPressed('+')}
                style={styles.icons}>
                <Text style={styles.font}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icons}>
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

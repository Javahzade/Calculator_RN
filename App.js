import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultText: '',
      calculationText: '',
      lastText: '',
      opacityText: 1,
    };
  }

  zeroPressed(zero){
    if (this.state.resultText === '' || this.state.resultText === zero) {
      this.setState({
        resultText: zero,
        lastText: zero,
        opacityText: 1,
     });
  }else {
      this.setState({
        resultText: this.state.resultText + zero,
        lastText: this.state.lastText + zero,
        opacityText: 1,
     });
  }
}

  numberPressed(number){
    const symbols = ['+', '-', '*', '/', '.'];
    if (this.state.resultText === '0'){
      this.setState({
        resultText: number,
        lastText: number,
        opacityText: 1,
      });
    }else if (this.state.calculationText !== '') {
      if (symbols.includes(this.state.resultText[this.state.resultText.length - 1])) {
        this.setState({
          resultText: this.state.resultText + number,
          lastText: this.state.lastText + number,
          opacityText: 1,
        });
      }else {
        this.setState({
          resultText: number,
          calculationText: '',
          lastText: '',
          opacityText: 1,
        });
      }
    }else {
      this.setState({
        resultText: this.state.resultText + number,
        lastText: this.state.lastText + number,
        opacityText: 1,
      });
    }
  }
    
  operatorPressed(operand) {
    const symbols = ['+', '-', '*', '/'];
    if (this.state.resultText === '') {
      this.setState({
        resultText: '',
        lastText: '',
        opacityText: 1,
      });
    } else {
      if (symbols.includes(this.state.resultText[this.state.resultText.length - 1])) {
        this.setState({
          resultText: this.state.resultText.replace(/.$/, operand),
          lastText: '',
          opacityText: 1,
        });
      } else {
        this.setState({
          resultText: this.state.resultText + operand,
          lastText: '',
          opacityText: 1,
        });
      }
    }
  }
  dotPressed(dot) {
    const symbols = ['+', '-', '*', '/', '.'];
    if (this.state.lastText === ''){
      this.setState({
        resultText: this.state.resultText + '0' + dot,
        lastText: '0' + dot,
        opacityText: 1,
      });
    }else if (this.state.calculationText !== '') {
      if (symbols.includes(this.state.resultText[this.state.resultText.length - 1])) {
        this.setState({
          resultText: this.state.resultText + dot,
          lastText: this.state.lastText + dot,
          opacityText: 1,
        });
      }else {
        this.setState({
          resultText: '0' + dot,
          calculationText: '',
          opacityText: 1,
        });
      }
    }else {
      if (!this.state.lastText.includes(dot)) {
        this.setState({
          resultText: this.state.resultText + dot,
          lastText: this.state.lastText + dot,
          opacityText: 1,
        });
      }
    }
  }

  clear() {
    this.setState({
      resultText: '',
      calculationText: '',
      lastText: '',
      opacityText: 1,
    });
  }

  clearEntry() {
    this.setState({
      resultText: '',
      lastText: '',
      opacityText: 1,
    });
  }

  deleteLast() {
    this.setState({
      resultText: this.state.resultText.slice(0, -1),
      lastText: this.state.lastText.slice(0, -1),
      opacityText: 1,
    });
  }

  calculate() {
    const symbols = ['+', '-', '*', '/', '.'];
    const result = eval(this.state.resultText)
  
    if (isNaN(eval(result)) || result === Infinity || result === -Infinity ) {
      this.setState({
        calculationText: 'На 0 делить нельзя!',
      });
    }else {
      if (
        symbols.includes(this.state.resultText[this.state.resultText.length - 1])
      ) {
        this.setState({
          calculationText: '=' + eval(this.state.resultText.slice(0, -1)),
          opacityText: 0.5,
        });
      }else {
        this.setState({
          calculationText: '=' + result,
          opacityText: 0.5,
        });
      }
    }
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={[styles.font, {opacity: this.state.opacityText}]}>
            {this.state.resultText}
          </Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.font}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.clear()}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.clearEntry()}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>CE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.deleteLast()}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>DL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.numberPressed('7')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('8')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('9')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.numberPressed('4')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('5')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('6')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.numberPressed('1')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('2')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.numberPressed('3')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.zeroPressed('0')}
                style={[styles.icon, {flex: 2}]}>
                <Text style={{fontSize: 30}}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.dotPressed('.')}
                style={styles.icon}>
                <Text style={{fontSize: 30}}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operands}>
            <View style={styles.column}>
              <TouchableOpacity
                onPress={() => this.operatorPressed('/')}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.operatorPressed('*')}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.operatorPressed('-')}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.operatorPressed('+')}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.calculate()}
                style={[styles.icon, {backgroundColor: 'orange', borderRadius: 50}]}>
                <Text style={{fontSize: 30}}>=</Text>
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
    flex: 6,
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
  icon: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 1,
  },
  font: {
    fontSize: 50,
    color: 'white',
    opacity: 1,
  },
});

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight
} from 'react-native';
import Proptypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export const Button = ({onClick, label, operation, double, triple}) => {
  const stylesButton = [styles.button];
  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  label: Proptypes.string.isRequired,
  operation: Proptypes.bool,
  double: Proptypes.bool,
  triple: Proptypes.bool,
};

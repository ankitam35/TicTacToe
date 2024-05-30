import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from '../styles';
import { SquareProps } from '../interfaces';


const Square: React.FC<SquareProps> = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;

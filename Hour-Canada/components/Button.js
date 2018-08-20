import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Button = ({onClick, label, labelColor, buttonColor}) => {
  return (
    <TouchableOpacity onClick={onClick} style={{
        color: buttonColor
      }}>
      <Text style={{
        color: labelColor
      }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
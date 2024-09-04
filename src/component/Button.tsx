import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import { ThemeContext } from '../context/ThemeContext';


interface ButtonProps {
    title: string;
    onPress: () => void;
    isBlue?: boolean;
    isGrey?: boolean;
}

export default function Button({ title, onPress, isBlue, isGrey }: ButtonProps) {
    const [theme, setTheme] = useState('light');

    return (
        <TouchableOpacity
            style={
                isBlue ? Styles.btnBlue : isGrey ? Styles.btnGrey : theme === 'light' ? Styles.btnLight : Styles.btnDark
            } 
            onPress={onPress}>
            <Text style={isBlue || isGrey ? Styles.smallTextLight : theme === 'dark' ? Styles.smallTextLight : Styles.smallTextDark}>{title}</Text>
            </TouchableOpacity>
    );

}
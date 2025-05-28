import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
}: ButtonProps) => {
  const getBackgroundColor = () => {
    if (disabled) return COLORS.neutral.lightGray;
    switch (variant) {
      case 'primary':
        return COLORS.primary.blue;
      case 'secondary':
        return COLORS.primary.teal;
      case 'accent':
        return COLORS.accent.orange;
      default:
        return COLORS.primary.blue;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: getBackgroundColor() },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
  text: {
    color: COLORS.neutral.white,
    fontSize: SIZES.body1,
    fontFamily: FONTS.medium,
  },
}); 
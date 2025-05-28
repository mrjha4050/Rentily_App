import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export const Input = ({
  label,
  error,
  containerStyle,
  ...props
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
        ]}
        placeholderTextColor={COLORS.neutral.darkGray}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.base,
  },
  label: {
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    marginBottom: SIZES.small,
    fontFamily: FONTS.medium,
  },
  input: {
    height: 48,
    backgroundColor: COLORS.neutral.lightGray,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.base,
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
    ...SHADOWS.light,
  },
  inputError: {
    borderWidth: 1,
    borderColor: COLORS.accent.orange,
  },
  errorText: {
    color: COLORS.accent.orange,
    fontSize: SIZES.body3,
    marginTop: SIZES.small,
    fontFamily: FONTS.regular,
  },
}); 
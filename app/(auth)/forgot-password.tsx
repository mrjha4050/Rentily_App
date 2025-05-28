import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // TODO: Implement password reset logic
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll send you instructions to reset your password.
        </Text>
        
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Button
          title="Send Reset Link"
          variant="primary"
          style={styles.button}
          onPress={handleResetPassword}
        />
        
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral.white,
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.h1,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.bold,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  button: {
    marginBottom: SPACING.xl,
  },
  backButton: {
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: SIZES.body2,
    color: COLORS.primary.blue,
    fontFamily: FONTS.medium,
  },
}); 
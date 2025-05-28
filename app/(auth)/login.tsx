import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back!</Text>
        
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity
          onPress={() => router.push('/(auth)/forgot-password')}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <Button
          title="Login"
          variant="primary"
          style={styles.button}
          onPress={handleLogin}
        />
        
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <Button
              title="Google"
              variant="secondary"
              style={styles.socialButton}
              onPress={() => {/* TODO: Implement Google login */}}
            />
            <Button
              title="Apple"
              variant="secondary"
              style={styles.socialButton}
              onPress={() => {/* TODO: Implement Apple login */}}
            />
          </View>
        </View>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: SPACING.lg,
  },
  forgotPasswordText: {
    color: COLORS.accent.orange,
    fontSize: SIZES.body2,
    fontFamily: FONTS.medium,
  },
  button: {
    marginBottom: SPACING.xl,
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  socialText: {
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    marginBottom: SPACING.md,
    fontFamily: FONTS.regular,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  socialButton: {
    flex: 1,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
  },
  signupLink: {
    fontSize: SIZES.body2,
    color: COLORS.primary.blue,
    fontFamily: FONTS.medium,
  },
}); 
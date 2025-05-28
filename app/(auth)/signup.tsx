import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup logic
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        
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
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <Button
          title="Sign Up"
          variant="secondary"
          style={styles.button}
          onPress={handleSignup}
        />
        
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or sign up with</Text>
          <View style={styles.socialButtons}>
            <Button
              title="Google"
              variant="secondary"
              style={styles.socialButton}
              onPress={() => {/* TODO: Implement Google signup */}}
            />
            <Button
              title="Apple"
              variant="secondary"
              style={styles.socialButton}
              onPress={() => {/* TODO: Implement Apple signup */}}
            />
          </View>
        </View>
        
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}>Login</Text>
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
  },
  loginLink: {
    fontSize: SIZES.body2,
    color: COLORS.primary.blue,
    fontFamily: FONTS.medium,
  },
}); 
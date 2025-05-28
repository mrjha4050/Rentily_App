import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

const { width } = Dimensions.get('window');

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/warzone.jpg')}
          style={styles.heroImage}
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Welcome to Rentily</Text>
        <Text style={styles.subtitle}>Buy, Sell, or Rent Campus Essentials!</Text>
        
        <View style={styles.buttonContainer}> 
         <Button
            title="Get Started"
            variant="primary"
            style={styles.button}
            onPress={() => router.push('/(auth)/signup')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral.lightGray,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },
  heroImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: SPACING.xl,
  },
  title: {
    fontSize: SIZES.h1,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.bold,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.h3,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.medium,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: SPACING.md,
  },
  button: {
    width: '100%',
  },
}); 
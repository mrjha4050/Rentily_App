import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

const menuItems = [
  {
    id: '1',
    title: 'My Listings',
    icon: 'list-outline',
    onPress: () => {},
  },
  {
    id: '2',
    title: 'Saved Items',
    icon: 'heart-outline',
    onPress: () => {},
  },
  {
    id: '3',
    title: 'Settings',
    icon: 'settings-outline',
    onPress: () => {},
  },
  {
    id: '4',
    title: 'Help & Support',
    icon: 'help-circle-outline',
    onPress: () => {},
  },
];

export default function Profile() {
  const handleLogout = () => {
    // TODO: Implement logout logic
    router.replace('/(auth)/welcome');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/warzone.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons
                name={item.icon as any}
                size={24}
                color={COLORS.neutral.darkGray}
              />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={COLORS.neutral.darkGray}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral.white,
  },
  header: {
    alignItems: 'center',
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutral.lightGray,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SPACING.md,
  },
  name: {
    fontSize: SIZES.h2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.bold,
    marginBottom: SPACING.xs,
  },
  email: {
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
  },
  menuContainer: {
    padding: SPACING.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutral.lightGray,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: SIZES.body1,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.medium,
    marginLeft: SPACING.sm,
  },
  logoutButton: {
    margin: SPACING.lg,
    padding: SPACING.md,
    backgroundColor: COLORS.primary.blue,
    borderRadius: SIZES.base,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: COLORS.neutral.white,
    fontSize: SIZES.body1,
    fontFamily: FONTS.medium,
  },
}); 
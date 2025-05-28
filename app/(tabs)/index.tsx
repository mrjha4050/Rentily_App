import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, SPACING } from '../../constants/theme';

type IconName = keyof typeof Ionicons.glyphMap;

interface Category {
  id: string;
  name: string;
  icon: IconName;
}

const categories: Category[] = [
  { id: '1', name: 'Books', icon: 'book-outline' },
  { id: '2', name: 'Electronics', icon: 'laptop-outline' },
  { id: '3', name: 'Furniture', icon: 'bed-outline' },
  { id: '4', name: 'Sports', icon: 'basketball-outline' },
  { id: '5', name: 'Clothing', icon: 'shirt-outline' },
];

const featuredListings = [
  {
    id: '1',
    title: 'Calculus Textbook',
    price: '$45',
    image: require('../../assets/images/warzone.jpg'),
    seller: 'John D.',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'MacBook Pro 2020',
    price: '$1200',
    image: require('../../assets/images/warzone.jpg'),
    seller: 'Sarah M.',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Desk Chair',
    price: '$80',
    image: require('../../assets/images/warzone.jpg'),
    seller: 'Mike R.',
    rating: 4.2,
  },
];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Rentily</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color={COLORS.text.primary} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.text.secondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for items..."
          placeholderTextColor={COLORS.text.light}
        />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <View style={styles.categoryIcon}>
                <Ionicons name={category.icon} size={24} color={COLORS.primary.indigo} />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Featured Listings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Listings</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredListings.map((item) => (
            <TouchableOpacity key={item.id} style={styles.listingCard}>
              <Image source={item.image} style={styles.listingImage} />
              <View style={styles.listingInfo}>
                <Text style={styles.listingTitle}>{item.title}</Text>
                <Text style={styles.listingPrice}>{item.price}</Text>
                <View style={styles.sellerInfo}>
                  <Text style={styles.sellerName}>{item.seller}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color={COLORS.accent.yellow} />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    backgroundColor: COLORS.primary.blue,
    ...SHADOWS.light,
  },
  appName: {
    fontSize: SIZES.h2,
    color: COLORS.neutral.white,
    fontFamily: FONTS.bold,
  },
  notificationButton: {
    padding: SPACING.xs,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.neutral.white,
    margin: SPACING.md,
    padding: SPACING.sm,
    borderRadius: SIZES.base,
    ...SHADOWS.light,
  },
  searchInput: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontSize: SIZES.body2,
    color: COLORS.text.primary,
    fontFamily: FONTS.regular,
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    color: COLORS.text.primary,
    fontFamily: FONTS.bold,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: SPACING.sm,
    width: 80,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.neutral.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
    ...SHADOWS.light,
  },
  categoryName: {
    fontSize: SIZES.body3,
    color: COLORS.text.secondary,
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
  listingCard: {
    width: 200,
    marginHorizontal: SPACING.sm,
    backgroundColor: COLORS.neutral.white,
    borderRadius: SIZES.base,
    ...SHADOWS.medium,
  },
  listingImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: SIZES.base,
    borderTopRightRadius: SIZES.base,
  },
  listingInfo: {
    padding: SPACING.sm,
  },
  listingTitle: {
    fontSize: SIZES.body1,
    color: COLORS.text.primary,
    fontFamily: FONTS.medium,
    marginBottom: SPACING.xs,
  },
  listingPrice: {
    fontSize: SIZES.h4,
    color: COLORS.primary.indigo,
    fontFamily: FONTS.bold,
    marginBottom: SPACING.xs,
  },
  sellerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sellerName: {
    fontSize: SIZES.body3,
    color: COLORS.text.secondary,
    fontFamily: FONTS.regular,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: SIZES.body3,
    color: COLORS.text.secondary,
    fontFamily: FONTS.medium,
    marginLeft: 4,
  },
});

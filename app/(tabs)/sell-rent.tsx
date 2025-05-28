import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Input } from '../../components/Input';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

export default function SellRent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleAddImage = () => {
    // TODO: Implement image picker
  };

  const handleSubmit = () => {
    // TODO: Implement form submission
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>List an Item</Text>
        
        <View style={styles.imageSection}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <View style={styles.imageGrid}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}
              />
            ))}
            <TouchableOpacity
              style={styles.addImageButton}
              onPress={handleAddImage}
            >
              <Ionicons
                name="add-circle-outline"
                size={32}
                color={COLORS.primary.blue}
              />
              <Text style={styles.addImageText}>Add Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formSection}>
          <Input
            label="Title"
            value={title}
            onChangeText={setTitle}
            placeholder="Enter item title"
          />
          
          <Input
            label="Description"
            value={description}
            onChangeText={setDescription}
            placeholder="Describe your item"
            multiline
            numberOfLines={4}
          />
          
          <Input
            label="Price"
            value={price}
            onChangeText={setPrice}
            placeholder="Enter price"
            keyboardType="numeric"
          />
          
          <Input
            label="Category"
            value={category}
            onChangeText={setCategory}
            placeholder="Select category"
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>List Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral.white,
  },
  content: {
    padding: SPACING.md,
  },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.bold,
    marginBottom: SPACING.lg,
  },
  imageSection: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: SIZES.body1,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.medium,
    marginBottom: SPACING.sm,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SIZES.base,
  },
  addImageButton: {
    width: 100,
    height: 100,
    borderRadius: SIZES.base,
    borderWidth: 1,
    borderColor: COLORS.neutral.lightGray,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageText: {
    fontSize: SIZES.body3,
    color: COLORS.primary.blue,
    fontFamily: FONTS.regular,
    marginTop: SPACING.xs,
  },
  formSection: {
    gap: SPACING.md,
  },
  submitButton: {
    backgroundColor: COLORS.primary.blue,
    padding: SPACING.md,
    borderRadius: SIZES.base,
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  submitButtonText: {
    color: COLORS.neutral.white,
    fontSize: SIZES.body1,
    fontFamily: FONTS.medium,
  },
}); 
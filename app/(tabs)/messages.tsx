import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, FONTS, SIZES, SPACING } from '../../constants/theme';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  avatar: any;
}

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Is this still available?',
    time: '2m ago',
    unread: true,
    avatar: require('../../assets/images/warzone.jpg'),
  },
  {
    id: '2',
    name: 'Sarah Smith',
    lastMessage: 'I can pick it up tomorrow',
    time: '1h ago',
    unread: false,
    avatar: require('../../assets/images/warzone.jpg'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    lastMessage: 'Thanks for the quick response!',
    time: '3h ago',
    unread: false,
    avatar: require('../../assets/images/warzone.jpg'),
  },
];

export default function Messages() {
  const renderConversation = ({ item }: { item: Conversation }) => (
    <TouchableOpacity style={styles.conversationItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.conversationInfo}>
        <View style={styles.conversationHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text
            style={[
              styles.lastMessage,
              item.unread && styles.unreadMessage,
            ]}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>
          {item.unread && <View style={styles.unreadDot} />}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral.white,
  },
  listContainer: {
    padding: SPACING.md,
  },
  conversationItem: {
    flexDirection: 'row',
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.neutral.white,
    borderRadius: SIZES.base,
    shadowColor: COLORS.neutral.darkGray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.sm,
  },
  conversationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: SIZES.body1,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.medium,
  },
  time: {
    fontSize: SIZES.body3,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontSize: SIZES.body2,
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.regular,
  },
  unreadMessage: {
    color: COLORS.neutral.darkGray,
    fontFamily: FONTS.medium,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary.blue,
    marginLeft: SPACING.sm,
  },
}); 
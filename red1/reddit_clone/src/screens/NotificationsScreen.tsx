import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: 'upvote',
    title: 'Your post in r/programming is trending',
    description: 'Your post received 1000+ upvotes',
    time: '1h ago',
    read: false,
  },
  {
    id: 2,
    type: 'comment',
    title: 'New comment on your post',
    description: 'u/tech_guru commented: "Great explanation!"',
    time: '2h ago',
    read: true,
  },
  {
    id: 3,
    type: 'award',
    title: 'You received a Silver Award',
    description: 'Anonymous user gave you a Silver Award',
    time: '3h ago',
    read: false,
  },
  {
    id: 4,
    type: 'trending',
    title: 'Trending in r/reactnative',
    description: 'Check out what\'s popular in your community',
    time: '5h ago',
    read: true,
  },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#1A1A1B" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.notificationList}>
        {MOCK_NOTIFICATIONS.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationItem,
              !notification.read && styles.unreadNotification,
            ]}
          >
            <View style={styles.iconContainer}>
              {notification.type === 'upvote' && (
                <Ionicons name="arrow-up-circle" size={24} color="#FF4500" />
              )}
              {notification.type === 'comment' && (
                <Ionicons name="chatbubble-ellipses" size={24} color="#0079D3" />
              )}
              {notification.type === 'award' && (
                <Ionicons name="trophy" size={24} color="#FFB000" />
              )}
              {notification.type === 'trending' && (
                <Ionicons name="trending-up" size={24} color="#44B700" />
              )}
            </View>

            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>
                {notification.description}
              </Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>

            <TouchableOpacity style={styles.moreButton}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#787C7E" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1B',
  },
  notificationList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  unreadNotification: {
    backgroundColor: '#F8F9FA',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F7F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    marginRight: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1B',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#787C7E',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#787C7E',
  },
  moreButton: {
    padding: 4,
  },
}); 
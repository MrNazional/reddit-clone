import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const MOCK_POSTS = [
  {
    id: 1,
    subreddit: 'r/programming',
    title: 'TypeScript 5.0 Released with Major Improvements',
    author: 'dev_enthusiast',
    upvotes: 2547,
    comments: 342,
    timeAgo: '5 hours ago',
  },
  {
    id: 2,
    subreddit: 'r/reactnative',
    title: 'Building Beautiful Apps with React Native',
    author: 'mobile_dev',
    upvotes: 1823,
    comments: 156,
    timeAgo: '8 hours ago',
  },
  {
    id: 3,
    subreddit: 'r/technology',
    title: 'The Future of AI Development',
    author: 'tech_insider',
    upvotes: 4251,
    comments: 892,
    timeAgo: '2 hours ago',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {MOCK_POSTS.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.voteContainer}>
            <TouchableOpacity>
              <Ionicons name="arrow-up" size={24} color="#898989" />
            </TouchableOpacity>
            <Text style={styles.voteCount}>{post.upvotes}</Text>
            <TouchableOpacity>
              <Ionicons name="arrow-down" size={24} color="#898989" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.subreddit}>{post.subreddit}</Text>
              <Text style={styles.postInfo}>Posted by u/{post.author} • {post.timeAgo}</Text>
            </View>
            
            <Text style={styles.title}>{post.title}</Text>
            
            <View style={styles.postFooter}>
              <TouchableOpacity style={styles.footerButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#898989" />
                <Text style={styles.footerText}>{post.comments} Comments</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.footerButton}>
                <Ionicons name="share-outline" size={20} color="#898989" />
                <Text style={styles.footerText}>Share</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.footerButton}>
                <Ionicons name="bookmark-outline" size={20} color="#898989" />
                <Text style={styles.footerText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
  },
  postContainer: {
    backgroundColor: 'white',
    marginBottom: 8,
    flexDirection: 'row',
    padding: 12,
  },
  voteContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  voteCount: {
    marginVertical: 4,
    fontWeight: 'bold',
    color: '#1A1A1B',
  },
  postContent: {
    flex: 1,
  },
  postHeader: {
    marginBottom: 8,
  },
  subreddit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1B',
  },
  postInfo: {
    fontSize: 12,
    color: '#787C7E',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1B',
    marginBottom: 8,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 8,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#787C7E',
  },
}); 
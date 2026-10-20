import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TRENDING_POSTS = [
  {
    id: 1,
    subreddit: 'r/worldnews',
    title: 'Major Scientific Discovery Announced',
    author: 'news_reporter',
    upvotes: 45200,
    comments: 3200,
    timeAgo: '2 hours ago',
    isHot: true,
  },
  {
    id: 2,
    subreddit: 'r/gaming',
    title: 'New Console Announcement Coming Soon',
    author: 'gaming_insider',
    upvotes: 32100,
    comments: 2800,
    timeAgo: '4 hours ago',
    isHot: true,
  },
  {
    id: 3,
    subreddit: 'r/science',
    title: 'Breakthrough in Quantum Computing',
    author: 'quantum_researcher',
    upvotes: 28400,
    comments: 1500,
    timeAgo: '6 hours ago',
    isHot: true,
  },
];

export default function PopularScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Posts</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="flame" size={20} color="#FF4500" />
          <Text style={styles.filterText}>Hot</Text>
          <Ionicons name="chevron-down" size={20} color="#898989" />
        </TouchableOpacity>
      </View>

      {TRENDING_POSTS.map((post) => (
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
              
              {post.isHot && (
                <View style={styles.trendingTag}>
                  <Ionicons name="flame" size={16} color="#FF4500" />
                  <Text style={styles.trendingText}>Trending</Text>
                </View>
              )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1B',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7F8',
    padding: 8,
    borderRadius: 20,
  },
  filterText: {
    marginHorizontal: 8,
    color: '#1A1A1B',
    fontWeight: '500',
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
    alignItems: 'center',
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
  trendingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE9E3',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  trendingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#FF4500',
    fontWeight: '500',
  },
}); 
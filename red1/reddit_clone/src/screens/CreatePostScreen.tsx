import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedType, setSelectedType] = useState('text');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create a post</Text>
        </View>

        <View style={styles.typeSelector}>
          <TouchableOpacity
            style={[styles.typeButton, selectedType === 'text' && styles.selectedType]}
            onPress={() => setSelectedType('text')}
          >
            <Ionicons
              name="document-text-outline"
              size={24}
              color={selectedType === 'text' ? '#FF4500' : '#787C7E'}
            />
            <Text
              style={[
                styles.typeText,
                selectedType === 'text' && styles.selectedTypeText,
              ]}
            >
              Text
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.typeButton, selectedType === 'image' && styles.selectedType]}
            onPress={() => setSelectedType('image')}
          >
            <Ionicons
              name="image-outline"
              size={24}
              color={selectedType === 'image' ? '#FF4500' : '#787C7E'}
            />
            <Text
              style={[
                styles.typeText,
                selectedType === 'image' && styles.selectedTypeText,
              ]}
            >
              Image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.typeButton, selectedType === 'link' && styles.selectedType]}
            onPress={() => setSelectedType('link')}
          >
            <Ionicons
              name="link-outline"
              size={24}
              color={selectedType === 'link' ? '#FF4500' : '#787C7E'}
            />
            <Text
              style={[
                styles.typeText,
                selectedType === 'link' && styles.selectedTypeText,
              ]}
            >
              Link
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            maxLength={300}
            multiline
          />

          <TextInput
            style={styles.contentInput}
            placeholder="Text (optional)"
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
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
  typeSelector: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    marginTop: 8,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  selectedType: {
    backgroundColor: '#FFE9E3',
  },
  typeText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#787C7E',
  },
  selectedTypeText: {
    color: '#FF4500',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 8,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    minHeight: 40,
  },
  contentInput: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    minHeight: 150,
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: '#FF4500',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 
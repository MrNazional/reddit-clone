# Reddit Clone

A static Reddit clone built with React Native and Expo, featuring a modern UI design and core Reddit functionalities.

## Features

- Home feed with posts and voting system
- Popular posts section with trending content
- Create post functionality with multiple post types
- Chat system with message previews
- Notifications center with different notification types
- Modern UI matching Reddit's design
- Static data (no backend required)

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reddit_clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the App

1. Start the development server:
```bash
npm start
# or
yarn start
```

2. Run on specific platform:
- For iOS:
```bash
npm run ios
# or
yarn ios
```

- For Android:
```bash
npm run android
# or
yarn android
```

- For web:
```bash
npm run web
# or
yarn web
```

## Project Structure

```
reddit_clone/
├── src/
│   └── screens/
│       ├── HomeScreen.tsx
│       ├── PopularScreen.tsx
│       ├── CreatePostScreen.tsx
│       ├── ChatScreen.tsx
│       └── NotificationsScreen.tsx
├── assets/
├── App.tsx
├── app.json
└── package.json
```

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Vector Icons

## Notes

This is a static clone of Reddit's mobile app, focusing on the UI implementation. All data is mocked and stored locally in the components. 
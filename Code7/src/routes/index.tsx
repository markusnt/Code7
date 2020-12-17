import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const loading = false;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return <AppRoutes />;
};

export default Routes;

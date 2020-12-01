import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './screens/navigation.component';

import {default as theme} from './theme-cobee.json';



export default () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </NavigationContainer>
);

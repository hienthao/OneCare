import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './screens/navigation.component';

import {default as theme} from './theme-cobee.json';

import {TopNewsView} from './components/TopNewsView';
import {TopCategoriesView} from './components/TopCategoriesView';
import {TopLookingView} from './components/TopLookingView';
import {HotEventsView} from './components/HotEventsView';
import {NavigationView} from './components/NavigationView';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AppNavigator />
      </Layout>
    </ApplicationProvider>
  </>
);

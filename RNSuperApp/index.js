/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {name as appName} from './app.json';
import App from './App';

const resolveURL = Federated.createURLResolver({

  containers: {
    RNMiniAppOne: Platform.OS === 'ios' ? 'http://localhost:8083/[name][ext]': 'http://10.0.2.2:8083/[name][ext]',
    RNMiniAppTwo: Platform.OS === 'ios' ? 'http://localhost:8084/[name][ext]': 'http://10.0.2.2:8084/[name][ext]',
    RNMiniAppThree: Platform.OS === 'ios' ? 'http://localhost:8085/[name][ext]': 'http://10.0.2.2:8085/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);

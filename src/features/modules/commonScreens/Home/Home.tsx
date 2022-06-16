import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Typography } from '@features/components';
import { theme } from '@core/theme';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
import { Alert } from 'react-native';
import { PageLoader } from './components';

const { width } = Dimensions.get('window');

const sampleUrl = 'https://bingoaliens.com';
const HomeScreen = () => {
  const isMount = useRef<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    }
  }, []);

  const handleOnLoadEnd = useCallback(
    (syntheticEvent: WebViewNavigationEvent | WebViewErrorEvent) => {
      const {
        nativeEvent: { loading },
      } = syntheticEvent;

      if (!loading) {
        setIsLoading(false);
        Alert.alert(
          'WebPage Loaded',
          'Would you like to receive SMS notifications?',
        );
      }
    },
    [],
  );

  const renderLoading = () => (
    <Box height={120} width="100%" alignItems="center">
      <LottieView
        source={require('@core/assets/spinner.json')}
        autoPlay
        loop
        hardwareAccelerationAndroid={false}
        style={{
          height: 60,
          width: 60,
        }}
      />
    </Box>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Box flex={1} alignItems="center" paddingTop={'md'}>
        <Typography color={'white'} fontSize={'xl'} variant="bold">
          15 MARKETING DEMO
        </Typography>

        <Box
          mt={'md'}
          alignItems="center"
          justifyContent={isLoading ? 'center' : 'flex-start'}
          flex={1}>
          <Typography>WebViewing: {sampleUrl}</Typography>
          <PageLoader
            url={sampleUrl}
            onLoadEnd={handleOnLoadEnd}
            style={styles.webviewContainer}
            renderLoading={renderLoading}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  webviewContainer: {
    marginTop: 10,
    width: width - 10,
  },
  spinnerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

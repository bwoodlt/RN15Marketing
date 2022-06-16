import React from 'react';
import WebView, { WebViewProps } from 'react-native-webview';
import { Box } from '@features/components';

interface Source {
  uri: string;
}
interface PageLoaderProps extends WebViewProps {
  url: Source['uri'];
}
const PageLoader = ({ url, ...rest }: PageLoaderProps) => {
  return (
    <Box flex={1} alignItems="center" paddingTop="sm">
      <WebView source={{ uri: url }} {...rest} />
    </Box>
  );
};

export default PageLoader;

import React from 'react';
import { render } from '@testing-library/react-native';
import { PageLoader } from '@features/modules/commonScreens/Home/components';

describe('Card People Component', () => {
  it('should render correctly', () => {
    render(<PageLoader url="http://example.com" />);
  });
});

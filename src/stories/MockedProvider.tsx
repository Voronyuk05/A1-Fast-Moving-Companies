import React, { ReactNode } from 'react';
import { Provider } from 'jotai';

interface MockedProviderProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues?: any[]; // Atom-value pairs to mock
}

const MockedProvider = ({children}: MockedProviderProps) => (
  <Provider>
    {children}
  </Provider>
);

export default MockedProvider;
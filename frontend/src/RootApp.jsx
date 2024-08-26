import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';
import mixpanel from 'mixpanel-browser';

const IdurarOs = lazy(() => import('./apps/IdurarOs'));

export default function RoutApp() {
  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <IdurarOs />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

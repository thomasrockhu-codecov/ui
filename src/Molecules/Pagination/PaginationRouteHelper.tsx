import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { action } from '@storybook/addon-actions';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

const View = ({ match, currentPage, setCurrentPage }: any) => {
  useEffect(() => {
    const matchPage = +match.params.page;
    if (currentPage !== matchPage) {
      action('Page change via router')(match);
      setCurrentPage(matchPage);
    }
  }, [match, currentPage, setCurrentPage]);

  return (
    <pre>
      <code>{JSON.stringify(match, null, 2)}</code>
    </pre>
  );
};

const PaginationRouteHelper = ({ children, currentPage, setCurrentPage }: any) => {
  return (
    <Provider>
      {children}
      <Route
        path="/:page"
        component={(props: any) => (
          <View {...props} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      />
    </Provider>
  );
};

export default PaginationRouteHelper;

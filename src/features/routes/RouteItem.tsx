import React from 'react';
import { Route } from 'react-router-dom';
import WithSidebar from '../layouts/WithSidebar';

/* eslint-disable no-undef */
export type RouteItemProps = {
  path: string;
  children?: JSX.Element[] | JSX.Element;
  component?: any;
  customLayout?: any;
  exact: boolean;
};

export default function RouteItem({
  path,
  children,
  component: Component,
  customLayout: Layout,
  exact,
}: RouteItemProps): JSX.Element {
  return (
    <Route path={path} exact={exact}>
      {Layout ? (
        <Layout>{<Component /> || children}</Layout>
      ) : (
        <WithSidebar>{<Component /> || children}</WithSidebar>
      )}
    </Route>
  );
}

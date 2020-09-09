import React from 'react';
import { Switch } from 'react-router-dom';
import NotFound from '../404';
import allTheRoutes from './allTheRoutes';
import RouteItem from './RouteItem';

export default function Routes() {
  return (
    <Switch>
      {allTheRoutes.map((r) => (
        <RouteItem key={r.name} path={r.path} exact component={r.component} />
      ))}

      <RouteItem key="404" path="*" exact={false} component={NotFound} />
    </Switch>
  );
}

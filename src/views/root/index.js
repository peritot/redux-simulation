import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import './index.less';

function App({ route }) {
  const { title, routes } = route;

  document.title = title;

  return <section className="app-root">{renderRoutes(routes)}</section>;
}

App.propTypes = {
  route: PropTypes.shape({ title: PropTypes.string, routes: PropTypes.arrayOf(PropTypes.object) }).isRequired,
};

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './App.less';
// import AppRouter from './router-demo/app-router';
// import Topic from './router-demo/topic';
// import routes from './router-demo/router';
import routes from './router';

function App() {
  return (
    <div className="App">
      <Router>
        {/* kick it all off with the root route */}
        {renderRoutes(routes)}
      </Router>
      {/* <header className="App-header">demo</header>
      <section>
        <AppRouter />
        <Topic />
      </section> */}
    </div>
  );
}

export default App;

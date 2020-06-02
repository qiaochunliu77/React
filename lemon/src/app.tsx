import * as React from 'react';
import { Header, About } from './components';

// StatelessComponent无状态组件 
export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  );
}
// @flow
import React from 'react';
import MainMenu from '../MainMenu/MainMenu';

type Props = {
  children: React.ChildrenArray<React.Element>
}

const PageTemplate = ({children}: Props) => (
  <div className='wrapper'>
    <header className='header'>
      <div className='container'>
        <MainMenu />
      </div>
    </header>
    <main className='main'>
      <div className='container'>
        {children}
      </div>
    </main>
    <footer className='footer'>
      <div className='container'>
        footer
      </div>
    </footer>
  </div>
);

export default PageTemplate;

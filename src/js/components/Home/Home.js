// @flow
import React from 'react';
import PageTemplate from '../containers/PageTemplate/PageTemplate.js';

type Props = {
  // onLinkSelect: (id: number) => void,
}

const getRoute = (match) => {
  console.log(match)
}

const Home = (props: Props) => (
  <PageTemplate>
    <section className="content">
      <h1>[Home]</h1>
      <div>{getRoute(props.match)}</div>
    </section>
    
  </PageTemplate>
);

export default Home;
import React, { Component } from 'react';
import NavBarContainer from './navbar-container';
import ArticlesComponent from '../components/articles';

class ContentList extends Component {
  render() {
    return (


      <div>
        <NavBarContainer />
        <ArticlesComponent />
      </div>

    );
  }
}

export default ContentList;

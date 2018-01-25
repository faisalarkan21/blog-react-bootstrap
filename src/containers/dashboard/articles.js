import React, { Component } from 'react';
import DashboardLayout from './dashboard-layout';

import ArticlesComponent from '../../components/articles';

class ContentList extends Component {
  render() {
    return (
      <div>
        <DashboardLayout>
          <ArticlesComponent />
        </DashboardLayout>
      </div>
    );
  }
}

export default ContentList;

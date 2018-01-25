import React from 'react';


import DashboardLayout from './dashboard-layout';
import DashboardComponent from '../../components/home';


class Dashboard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <DashboardLayout>
          <DashboardComponent />
        </DashboardLayout>
      </div>

    );
  }
}


export default Dashboard;


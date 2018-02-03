import React, { Component } from 'react';
import NotificationsSystem from 'reapop';

import theme from 'reapop-theme-wybo';

class ReapopSnackBar extends Component {
  render() {
    return (
      <div>
        <NotificationsSystem theme={theme} />
      </div>
    );
  }
}

export { ReapopSnackBar };


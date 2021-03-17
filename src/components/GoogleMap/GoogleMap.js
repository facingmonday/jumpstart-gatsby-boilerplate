import React, { Component } from 'react';

class GoogleMap extends Component {
  render() {
    const { width, height, source } = this.props;
    return (
      <div class="gmap-wrapper">
        <iframe 
          src={source}
          width={width}
          height={height}
          frameborder={0}
          style={{ border:0 }}
          allowFullScreen
        />
      </div>
    );
  }
}

export default GoogleMap;
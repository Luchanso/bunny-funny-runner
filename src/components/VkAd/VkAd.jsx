import React, { Component } from 'react';
import { number } from 'prop-types';

import runVkAd from './runVkAd';

class VkAd extends Component {
  static propTypes = {
    id: number.isRequired,
    width: number.isRequired,
    height: number.isRequired
  };

  componentDidMount() {
    runVkAd(this.props.id);
  }

  render() {
    const { id, width, height } = this.props;

    return (
      <div style={{ width, height }}>
        <div id={`vk_ads_${id}`} />
      </div>
    );
  }
}

export default VkAd;

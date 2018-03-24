import React from 'react';
import { func, string } from 'prop-types';

export default class SceneSwitcher extends React.Component {
  static propTypes = {
    sceneType: string.isRequired,
    onSwitchScene: func.isRequired
  };

  handleClick = () => {
    this.props.onPush('/test/test2');
  };

  render() {
    return (
      <div>
        SceneType: {this.props.sceneType}{' '}
        <button onClick={this.handleClick}>Swith scene</button>
        <div style={{ marginBottom: 50 }} />
        <pre>
          My props: { JSON.stringify(this.props, null, 4) }
        </pre>
      </div>
    );
  }
}

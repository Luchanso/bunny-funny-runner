import React from 'react';
import { string } from 'prop-types';

export default class ReactScene extends React.Component {
  static propTypes = {
    scene: string
  };

  static defaultProps = {
    scene: ''
  };

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.initContainer();
  }

  SceneContainer = null;

  async initContainer() {
    const { scene } = this.props;

    // TODO: Проверить на уязвимости XSS
    this.SceneContainer = (await import(`../containers/${scene}`)).default;
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { SceneContainer, state } = this;
    const { isLoading } = state;

    return (
      <div>
        {/* TODO: Написать лоадер для сцены */}
        { isLoading && <h1>Loading</h1> }
        { !isLoading && <SceneContainer /> }
      </div>
    );
  }
}

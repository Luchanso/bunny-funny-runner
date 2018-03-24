import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SceneSwitcher from './SceneSwitcher';

const mapStateToProps = state => ({
    sceneType: 'GAME'
  });

const mapDispatchToProps = {
  onPush: push
};

export default connect(mapStateToProps, mapDispatchToProps)(SceneSwitcher);

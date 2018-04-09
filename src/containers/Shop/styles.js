export default {
  container: {
    // TODO: remove this background
    background: 'aliceblue',
    width: '100%',
    height: '100%'
  },
  header: {
    textAlign: 'center',
    margin: '60px 0 60px'
  },
  scroll: {
    display: 'flex',
    overflow: 'hidden',
    paddingBottom: 5,
    minWidth: 800
  },
  list: {
    display: 'flex',
    alignItems: 'center'
  },
  items: {
    flexShrink: '0',
    transition: '0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
  },
  navigationIcon: {
    width: 100,
    height: 100
  }
};

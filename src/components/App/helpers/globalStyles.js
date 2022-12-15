import 'modern-normalize';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import backgroundImage from 'images/bg.jpg';

export const globalStyles = {
  body: {
    fontFamily: 'Roboto',
    background: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },

  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },

  footer: {
    flexShrink: '0',
    paddingTop: '16px',
    paddingBottom: '16px',
    backgroundColor: '#303846',
  },

  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },

  p: {
    margin: '0',
  },

  ul: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },
};

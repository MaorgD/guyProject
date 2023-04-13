import { Provider } from 'react-redux';
import AppRoutes from './appRoutes';
import myStore from './redux/myStore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {


  return (
    <ThemeProvider theme={darkTheme}>


    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
    </ThemeProvider>
  );
}

export default App;

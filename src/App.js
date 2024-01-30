
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from "react-redux"
import store from './Components/utils/store';

function App() {

  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
        {/**
       * Head
       * Body
       * Sidebar
       *  MenuItems
       * MinContainer
       *  ButtonsList
       *  VideoContainer
       *    videoCard
       */}
      </div>
    </Provider>
  );
}

export default App;
 
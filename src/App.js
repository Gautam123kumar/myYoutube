
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from "react-redux"
import store from './Components/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
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
 
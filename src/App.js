import logo from './logo.svg';
import './App.css';
// import AppComponent from './Assignment_2/AppComponent';
import Book from './Assignment4/Book';
import Note from './Assignment3/Note';
import store from './Assignment3/store';
import { Provider } from 'react-redux';
// import AppComponent from"./Assignment_Route/Assignment_Routing/AppComponent";
import ErrorHandler from './ErrorHandler/ErrorHandler';
import AppComponent from './Assignment2/AppComponent';
function App() {
 

  return (
    <div >
     {/* <AppComponent /> */}
     {/* <Book></Book> */}
     {/* <Provider store={store}>

     
     <Note></Note>
     </Provider> */}
     <ErrorHandler />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';
import BooksDetail from './app/component/books/BooksDetail';
import Content from './app/component/Content';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="books/" element={<Content/>}/>
            <Route path="books/:id" element={<BooksDetail/>}/>
            <Route path="*" element={
              <Typography>There's nothing here!</Typography>
                }
            />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { BASE_URL } from './config/config';
import DetailPage from './Pages/DetailePage';
import MainPage from './Pages/MainPage';


const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div className='mainwraper'>
    <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<MainPage />} />
          {/* Detail Page */}
          <Route path="/pesrson/:personId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    
    </div>
    </ApolloProvider>
  );
}

export default App;

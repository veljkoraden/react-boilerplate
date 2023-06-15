import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { HomePage, PostsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

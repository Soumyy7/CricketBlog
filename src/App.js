import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes >
            <Route path='/'
              element={<Home />} />
            <Route path='/create'
              element={<Create />} />
            <Route path='/blogs/:id'
              element={<BlogDetails />} />
            <Route path='*'
              element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



/*{ <React.Fragment>
<div className="App">
  <Navbar />
  <div className="content">
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/create' element={<Create />} />
    </Routes>
  </div>
</div>
// </React.Fragment> */
// }
// "scripts": {
//   "start": "react-scripts --openssl-legacy-provider start",
//   "build": "react-scripts --openssl-legacy-provider build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }
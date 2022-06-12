import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import HomePage from './HomePage';
import UserDetails from './userDetails';

const LinkManage = () =>{
    return(
        <Router>
           <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
                 <Route exact path='/userdetails/:id' element={< UserDetails />}></Route>
          </Routes>
        </Router>
    )
}

export default LinkManage;
import { Outlet } from 'react-router-dom';

import Devbar from '@/components/Devbar/Devbar';

import { useAuth } from './components/AuthProvider';
import Navbar from './components/NavBar';

const App = () => {

  const {token} = useAuth();
  return (
    <>
      <div className=''>
        {/* <Devbar /> */}
        {token && <Navbar />}
        <Outlet />
      </div>
      
    </>
  );
};

export default App;
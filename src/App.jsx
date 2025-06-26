import { Outlet } from 'react-router-dom';

import Devbar from '@/components/Devbar/Devbar';

import { useAuth } from './components/AuthProvider';
import Navbar from './components/NavBar';

const App = () => {

  const {token} = useAuth();
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        {token && <Navbar />}
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </>
  );
};

export default App;
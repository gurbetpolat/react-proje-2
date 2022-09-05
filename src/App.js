import './App.scss';
import Users from './Users';

import { useSelector, useDispatch } from 'react-redux';

import { INCREMENT } from './slices/siraCounterSlice'
function App() {
  const { hangiSira, veriler } = useSelector((state) => state.siraCounter)
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ backgroundColor: veriler[hangiSira].color }}>

      <p>React Proje 2yl</p>


      <Users />



    </div>
  );
}

export default App;

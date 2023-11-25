import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/index';
import { Create } from '../pages/Create/index';
import { View } from '../pages/View/index';
import { Update } from '../pages/Update/index';

export function AppRoutes(){
   return(
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/view/:id' element={<View />}/>
        <Route path='/update/:id' element={<Update />}/>
    </Routes>
   )
}
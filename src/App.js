import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Edit from './pages/Edit/Edit';
import Index from './pages/Index/Index';
import New from './pages/New/New';
import Show from './pages/Show/Show';
import Welcome from './pages/Welcome/Welcome';


function App() {
    return (
    <div className='App'>
        
            <NavBar />
            <main className='body'>
                <Routes>
                     <Route exact path="/" element={<Welcome />} /> 
                     <Route  path="/songs" element={<Index />} /> 
                     <Route  path="/songs/new" element={<New />} /> 
                     <Route  path="/songs/:id" element={<Show />} /> 
                     <Route  path="/songs/:id/edit" element={<Edit />} /> 
                    
        
                 </Routes> 
            </main> 
        
       
    </div>
    )
};

export default App;
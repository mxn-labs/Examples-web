import { Navigate, Route, Routes} from 'react-router-dom';
import { Navbar } from '../../ui';
import { PetInfo, PetPage, RegisterPet } from '../pages';

export const GenericRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container-xl mt-1">
            <Routes>
                
                <Route path="petpage" element={ <PetPage /> } />
                <Route path="registerpet" element={ <RegisterPet /> } />
                <Route path="petinfo/:id" element={<PetInfo />} />


                <Route path="/" element={<Navigate to="/petpage" />} />

            </Routes>
        </div>


    </>
  )
}
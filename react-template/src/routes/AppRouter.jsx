import { Route, Routes } from 'react-router-dom';

import { PetRoutes } from '../pets';
import { LoginPage, RegisterPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { HomePage } from '../pets/pages/HomePage';

export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path="/" element={ <HomePage/> }
            />
            
            <Route path="login/*" element={
                <PublicRoute>
                  <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                </PublicRoute>
              }
            />

            <Route path="/*" element={
              <PrivateRoute>
                <PetRoutes />
              </PrivateRoute>
              } 
            />

        </Routes>
    
    </>
  )
}
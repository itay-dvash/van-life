import {
    Route, RouterProvider,  
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import HostVans from './pages/Host/HostVans'
import Details from './pages/Host/HostVanDetail/Details'
import Pricing from './pages/Host/HostVanDetail/Pricing'
import Photos from './pages/Host/HostVanDetail/Photos'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import MainLayout from './layouts/MainLayout'
import HostLayout from './layouts/HostLayout'
import HostVanLayout from './layouts/HostVanLayout'
import AuthRequired from './layouts/AuthRequired'
import ErrorOccurred from './layouts/ErrorOccurred'

import { loader } from './utils/data-router-utils'
import './services/server'


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route errorElement={<ErrorOccurred />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} loader={async () => loader('/api/vans')} />
            <Route path='vans/:id' element={<VanDetail />} 
                loader={async ({params}) => loader(`/api/vans/${params.id}`)}
            />

            <Route element={<AuthRequired />}>

                <Route path='host' element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='income' element={<Income />} />
                    <Route path='reviews' element={<Reviews />} />

                    <Route path='vans' element={<HostVans />} 
                        loader={async () => loader('/api/host/vans')}
                    />

                    <Route path='vans/:id' element={<HostVanLayout />} 
                        loader={async ({params}) => loader(`/api/host/vans/${params.id}`)}
                    >
                        <Route index element={<Details />} />
                        <Route path='pricing' element={<Pricing />} />
                        <Route path='photos' element={<Photos />} />
                    </Route>
                </Route>

            </Route>

            <Route path='*' element={<NotFound />} />
        </Route>
    </Route>
))


export default function App() {
    return <RouterProvider router={router} />
}
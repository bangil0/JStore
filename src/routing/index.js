import Landing from 'pages/Landing/LandingPage'
import SignUp from 'pages/SignUp/SignUpPage'
import Home from 'pages/Home/HomePage'
import UploadProduct from 'pages/UploadProduct/UploadProductPage'

export const routes = [
  {
    path: '/',
    exact: true,
    isPrivate: false,
    component: Landing
  },
  {
    path: '/get-started',
    isPrivate: false,
    component: SignUp
  },
  {
    path: '/home',
    exact: true,
    isPrivate: true,
    component: Home
  },
  {
    path: '/upload',
    exact: true,
    isPrivate: true,
    component: UploadProduct
  }
]

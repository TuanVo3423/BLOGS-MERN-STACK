import { Container } from '@mui/system';
import { publicRoutes } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { systemState$ } from './redux/selectors';
import { useSelector } from 'react-redux';
import { Triangle } from 'react-loader-spinner';
import CustomizedSnackbars from './components/ToastMessage';
function App() {
  const {isLoading , message , type , isError } = useSelector(systemState$);
  
  return (
    <BrowserRouter>
    <Routes>
    {publicRoutes.map((route, index) => {
      const Page = route.component;
      return (
        <Route path={route.path}
        key={index}
        element={
          <Container sx={{position : 'relative'}}>
            <Page />
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{position : 'fixed' , top : '50%' , left : '50%'}}
              wrapperClassName=""
              visible={isLoading}
                />
               <CustomizedSnackbars  isOpen={isError} title={message} type={type}  />
          </Container>
        }
        >
        </Route>
      )
    })}
    </Routes>
    </BrowserRouter>
   
  )
}

export default App;

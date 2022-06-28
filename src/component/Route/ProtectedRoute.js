import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet,  } from 'react-router-dom';

function ProtectedRoute(){
    const { loading, isAuthenticatedUser } = useSelector((state) => state.user);
    return isAuthenticatedUser? <Outlet/> : <Navigate to="/login"/>
}

// function ProtectedRoute({ element, ...rest }) {
//     const { loading, isAuthenticatedUser } = useSelector((state) => state.user);
 
//     return (
//       <Route
//         {...rest}
//         element={isAuthenticatedUser ? element : <Navigate to="/login" replace />}
//       />
//     );
//   }

// const ProtectedRoute = ({component: Component, ...rest}) => {
//     const { loading, isAuthenticatedUser } = useSelector((state) => state.user);
//     return (
//         <Fragment>
//             {!loading && (
//                 <Route
//                 {...rest}
//                 render={(props)=>{
//                     if(!isAuthenticatedUser){
//                         return 
//                     }

//                     return <Component {...props} />
//                 }}
                  
//                 />
//             ) }
             

//         </Fragment>
//     );
// };
 export default ProtectedRoute;
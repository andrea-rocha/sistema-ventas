import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '../../vibe';
import {UncontrolledAlert, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    if (isLoading) {
        return <Loader type="bars" />;
    }
    return  isAuthenticated  ? <>{children}</>:
    <div>
        <UncontrolledAlert color="danger">
            No estas autenticado intenta de nuevo.
        </UncontrolledAlert>
        <div className="col text-center">
            <Link to = '/'>
            <Button color="success">ir a Login</Button>
            </Link>
        </div>
  </div>


};

export default PrivateRoute


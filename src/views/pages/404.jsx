import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  Button,
  Table
} from 'reactstrap';


const ErrorPage = () => {
    return ( 
    <div>
    <h1>Empleados</h1>
    <NavLink to={ '/home'}>Go Home!</NavLink>
    <div>
    <Button color="primary">Adicionar Empleado</Button>{' '}
    </div>
    {/* <Card>
            <CardBody>
                Hover Table
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
    </Card> */}
    <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>  
        <th>Nombre</th>
        <th>Cargo/rol</th>
        <th>Telefono</th>
        <th>Direccion de Tienda</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jacob</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-danger">No Autorizado</label></td>
      </tr>
      <tr>
        <td>Messsy</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-warning">Pendiente</label></td>
      </tr>
      <tr>
        <td>John</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-info">Nuevo</label></td>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-success">Autorizado</label></td>
      </tr>
      <tr>
        <td>Dave</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-warning">Pendiente</label></td>
      </tr>
    </tbody>
  </table>
</div>

</div>

    
    )
};

export default ErrorPage;
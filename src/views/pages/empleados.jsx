import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody,  Table, } from 'reactstrap';

class EmpleadosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
    };

      this.toggle = this.toggle.bind(this);
  }
  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }
  render(){
    return ( 

      <div>
      <h1>Empleados</h1>
      <Link to={ '/home'} className="btn btn-primary">ir a Inicio</Link>
      <div>
      <Card>
                <CardBody>
                    <Button color="primary" onClick={this.toggle}>Open Modal</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
      </div>
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
  
    );
  }
}

export default EmpleadosPage;
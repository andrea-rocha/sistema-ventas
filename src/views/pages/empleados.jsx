import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Card, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

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
      <div>
        <Card>
          <div className="card-body d-flex justify-content-between" >
                      <Link to={ '/home'} className="btn btn-primary">ir a Inicio</Link>
                      <Button color="primary" onClick={this.toggle}>Adicionar Empleado</Button>
                      <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}><h2>Adicionar Empleado</h2></ModalHeader>
                          <ModalBody >
                            <Row>
                              <Col>
      
                                <Form>
                                    <FormGroup>
                                      <Label for="nombre">Nombre</Label>
                                      <Input type="text" name="name" id="name" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="cedula">Cedula</Label>
                                      <Input type="text" name="name" id="cedula" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="telefono">Telefono</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="direccion">Direccion</Label>
                                      <Input type="text" name="direccion" id="direccion" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="exampleSelect">Cargo/Rol</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Administrador</option>
                                        <option>Vendedor</option>
                                      </Input>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="exampleSelect">Estado</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Nuevo</option>
                                        <option>Autorizado</option>
                                        <option>No Autorizado</option>
                                      </Input>
                                    </FormGroup>
                                    <Button color="primary" >Adicionar</Button>
                                </Form>
  
                              </Col>
                            </Row>
                          </ModalBody>
                      </Modal>
                  </div>
        </Card>
      </div>

      <div className="table-responsive">
        <table className="table">
      <thead>
        <tr> 
          <th>Código</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Direccion de Tienda</th>
          <th>Cargo/rol</th>
          <th>Estado</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>102284567</td>
          <td>Jacob</td>
          <td>321045875</td>
          <td>Cll 123a #45b-15</td>
          <td>Vendedor</td>
          <td><label className="badge badge-danger">No Autorizado</label></td>
        </tr>
        <tr>
          <td>1648579</td>
          <td>Messsy</td>
          <td>321045875</td>
          <td>Cll 123a #45b-15</td>
          <td>Vendedor</td>
          <td><label className="badge badge-warning">Pendiente</label></td>
        </tr>
        <tr>
          <td>789427</td>
          <td>John</td>
          <td>321045875</td>
          <td>Cll 123a #45b-15</td>
          <td>Vendedor</td>
          <td><label className="badge badge-info">Nuevo</label></td>
        </tr>
        <tr>
          <td>101248759</td>
          <td>Peter</td>
          <td>321045875</td>
          <td>Cll 123a #45b-15</td>
          <td>Vendedor</td>
          <td><label className="badge badge-success">Autorizado</label></td>
        </tr>
        <tr>
          <td>58762154</td>
          <td>Dave</td>
          <td>321045875</td>
          <td>Cll 123a #45b-15</td>
          <td>Vendedor</td>
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
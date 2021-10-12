import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import reactFeature from '../../assets/images/react-feature.svg';
import { Button, Modal, ModalHeader, ModalBody, Card, CardBody,  Table,Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';


class Productos extends Component {
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
    render() {
        return (
            
        <div>
              <h1>Productos</h1>
          <div>
            <Card>
          <div className="card-body d-flex justify-content-between" >
                      <Link to={ '/home'} className="btn btn-primary">ir a Inicio</Link>
                      <Button color="primary" onClick={this.toggle}>Adicionar Producto</Button>
                      <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}><h2>Adicionar Producto</h2></ModalHeader>
                          <ModalBody >
                          <Form>
                            <Row>
                              <Col md={6}>
                                  <FormGroup>
                                      <Label for="cedula">Código</Label>
                                      <Input type="text" name="name" id="cedula" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="direccion">Descripción</Label>
                                      <Input type="text" name="direccion" id="direccion" />
                                    </FormGroup>
                                
                                 
                                  <FormGroup>
                                      <Label for="telefono">Precio de Venta</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="telefono">Cantidad/Stock</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                  </FormGroup>  
                                 
                              </Col>
                              <Col md={6}>
                                
                                  <FormGroup>
                                      <Label for="nombre">Nombre</Label>
                                      <Input type="text" name="name" id="name" />
                                  </FormGroup>
                                    <FormGroup>
                                      <Label for="telefono">Precio de Compra</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="exampleSelect">Categoría</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Tecnología</option>
                                        <option>Calzado</option>
                                        <option>Accesorios</option>
                                      </Input>
                                  </FormGroup>
                                    <FormGroup>
                                      <Label for="exampleSelect">Estado</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Disponible</option>
                                        <option>Sin Stock</option>
                                      </Input>
                                    </FormGroup>
                              </Col>
                            </Row>
                            <Button color="primary" >Adicionar</Button>
                          </Form>
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
          <th>Descripción</th>
          <th>Precio de Compra</th>
          <th>Precio de Venta</th>
          <th>Categoría</th>
          <th>Stock Cantidad</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#6H4G67</td>    
          <td>Laptop</td>
          <td>Portátil HP G7 2P9Q0LT#ABM AMD 247 G7 (CHASIS CORPORATIVO) AMD 3020e 8GB 1TB RADEON VEGA 3</td>
          <td>$1000.00</td>
          <td>$800.00</td>
          <td>Tecnología</td>
          <td>100</td>
          <td><label className="badge badge-danger">No Disponible</label></td>
        </tr>
        <tr>
           <td>#6H4G67</td>   
          <td>Laptop</td>
          <td>Portátil HP G7 2P9Q0LT#ABM AMD 247 G7 (CHASIS CORPORATIVO) AMD 3020e 8GB 1TB RADEON VEGA 3</td>
          <td>$1000.00</td>
          <td>$800.00</td>
          <td>Tecnología</td>
          <td>100</td>
          <td><label className="badge badge-danger">No Disponible</label></td>
        </tr>
        <tr>
          <td>#6H4G67</td>
         
          <td>Laptop</td>
          <td>Portátil HP G7 2P9Q0LT#ABM AMD 247 G7 (CHASIS CORPORATIVO) AMD 3020e 8GB 1TB RADEON VEGA 3</td>
          <td>$1000.00</td>
          <td>$800.00</td>
          <td>Tecnología</td>
          <td>100</td>
          <td><label className="badge badge-danger">No Disponible</label></td>
        </tr>
        <tr>
          <td>#6H4G67</td>    
          <td>Laptop</td>
          <td>Portátil HP G7 2P9Q0LT#ABM AMD 247 G7 (CHASIS CORPORATIVO) AMD 3020e 8GB 1TB RADEON VEGA 3</td>
          <td>$1000.00</td>
          <td>$800.00</td>
          <td>Tecnología</td>
          <td>100</td>
          <td><label className="badge badge-danger">No Disponible</label></td>
        </tr>
 

      </tbody>
    </table>
          </div>

        </div>
            
        );
    }
}
export default Productos;
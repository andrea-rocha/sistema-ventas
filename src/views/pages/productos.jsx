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
                                      <Label for="nombre">Nombre</Label>
                                      <Input type="text" name="name" id="name" />
                                  </FormGroup>
                                  <div class="form-group">
                                      <label className="form-label" for="file">Upload Thumbnail</label>
                                      <div className="form-control-wrap">
                                      <div class="custom-file">
                                        <input type="file" multiple="" class="custom-file-input" id="file"/>
                                        <label class="custom-file-label" for="customFile">Seleccionar Archivo</label>
                                      </div>
                                      </div>
                                  </div>
                                  <FormGroup>
                                      <Label for="telefono">Telefono</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                  </FormGroup>
                                     
                                  <FormGroup>
                                      <Label for="exampleSelect">Cargo/Rol</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Administrador</option>
                                        <option>Vendedor</option>
                                      </Input>
                                  </FormGroup>
                              </Col>
                              <Col md={6}>
                                  <FormGroup>
                                      <Label for="cedula">Código</Label>
                                      <Input type="text" name="name" id="cedula" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="exampleFile">File</Label>
                                      <Input className="custom-file" type="file" name="file" id="exampleFile" />
                                      <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                                      </FormText>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="direccion">Direccion</Label>
                                      <Input type="text" name="direccion" id="direccion" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="exampleSelect">Estado</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Nuevo</option>
                                        <option>Autorizado</option>
                                        <option>No Autorizado</option>
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
          <th>Imágen</th>
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
          <td>
              <span class="user-avatar md">
                <img
                  src={reactFeature}
                  style={{ width: 70, height: 70 }}
                  alt="react.js"
                  aria-hidden={true}
                />
              </span>
          </td>       
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
          <td>
              <span class="user-avatar md">
                <img
                  src={reactFeature}
                  style={{ width: 70, height: 70 }}
                  alt="react.js"
                  aria-hidden={true}
                />
              </span>
          </td>       
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
          <td>
              <span class="user-avatar md">
                <img
                  src={reactFeature}
                  style={{ width: 70, height: 70 }}
                  alt="react.js"
                  aria-hidden={true}
                />
              </span>
          </td>       
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
          <td>
              <span class="user-avatar md">
                <img
                  src={reactFeature}
                  style={{ width: 70, height: 70 }}
                  alt="react.js"
                  aria-hidden={true}
                />
              </span>
          </td>       
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
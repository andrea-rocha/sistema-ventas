import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import reactFeature from '../../assets/images/react-feature.svg';
import { Button, Modal, ModalHeader, ModalBody, Card, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';


class Ventas extends Component {
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
              <h1>Gestión de Ventas</h1>
          <div>
            <Card>
          <div className="card-body d-flex justify-content-between" >
                      <Link to={ '/home'} className="btn btn-primary">ir a Inicio</Link>
                      <Button color="primary" onClick={this.toggle}>Adicionar Venta</Button>
                      <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}><h2>Adicionar Venta</h2></ModalHeader>
                          <ModalBody >
                          <Form>
                            <Row>
                              <Col md={6}>
                                  <FormGroup>
                                      <Label for="cedula">Código</Label>
                                      <Input type="text" name="name" id="cedula" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="direccion">Código Vendedor</Label>
                                      <Input type="text" name="direccion" id="direccion" />
                                    </FormGroup>
                                
                
                                  <FormGroup>
                                      <Label for="telefono">Código producto</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="telefono">Valor</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                  </FormGroup>  
                                 
                              </Col>
                              <Col md={6}>
                                
                                  <FormGroup>
                                      <Label for="nombre">Fecha de Venta</Label>
                                      <Input type="text" name="name" id="name" />
                                  </FormGroup>
                                    <FormGroup>
                                      <Label for="telefono">Codigó Cliente</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="telefono">Cantidad</Label>
                                      <Input type="text" name="telefono" id="telefono" />
                                  </FormGroup>  
                                    <FormGroup>
                                      <Label for="exampleSelect">Estado</Label>
                                      <Input type="select" name="select" id="exampleSelect">
                                        <option>Entregado</option>  
                                        <option>En proceso</option>
                                        <option>Cancelado</option>
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
          <th>Fecha</th>
          <th>Vendedor</th>
          <th>Cliente</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Valor </th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#6H4G67</td>    
          <td>10-16-2021</td>
          <td>Jacob</td>
          <td>Oscar</td>
          <td>Camiseta Nike</td>
          <td>2</td>
          <td>300.000</td>
          <td><label className="badge badge-success">Entregado</label></td>
        </tr>
        <tr>
          <td>#6H4G67</td>   
          <td>10-15-2021</td>
          <td>Jacob</td>
          <td>Oscar</td>
          <td>Camiseta Nike</td>
          <td>2</td>
          <td>300.000</td>
          <td><label className="badge badge-info">En Proceso</label></td>
        </tr>
        <tr>
          <td>#6H4G67</td>
          <td>10-16-2021</td>
          <td>Jacob</td>
          <td>Oscar</td>
          <td>Camiseta Nike</td>
          <td>2</td>
          <td>300.000</td>
          <td><label className="badge badge-success">Entregado</label></td>
        </tr>
        <tr>
          <td>#6H4G67</td>    
          <td>10-16-2021</td>
          <td>Jacob</td>
          <td>Oscar</td>
          <td>Camiseta Nike</td>
          <td>2</td>
          <td>300.000</td>
          <td><label className="badge badge-warning">Cancelado</label></td>
        </tr>
 

      </tbody>
    </table>
          </div>

        </div>
            
        );
    }
}
export default Ventas;
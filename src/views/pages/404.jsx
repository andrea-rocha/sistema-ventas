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
    <Button color="primary">Primary</Button>{' '}
    <Card>
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
    </Card>
    <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>  
        <th>Nombre</th>
        <th>Departamento</th>
        <th>Cargo/rol</th>
        <th>Telefono</th>
        <th>Direccion de Tienda</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jacob</td>
        <td>Ventas</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-danger">No Autorizado</label></td>
      </tr>
      <tr>
        <td>Messsy</td>
        <td>Ventas</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-warning">Pendiente</label></td>
      </tr>
      <tr>
        <td>John</td>
        <td>Ventas</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-info">Nuevo</label></td>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Ventas</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-success">Autorizado</label></td>
      </tr>
      <tr>
        <td>Dave</td>
        <td>Ventas</td>
        <td>Vendedor</td>
        <td>321045875</td>
        <td>Cll 123a #45b-15</td>
        <td><label className="badge badge-warning">Pendiente</label></td>
      </tr>
    </tbody>
  </table>
</div>

<div className="nk-content ">
  <div className="container-fluid">
    <div className="nk-content-inner">
      <div className="nk-content-body">
        <div className="nk-block-head nk-block-head-sm">
          <div className="nk-block-between">
            <div className="nk-block-head-content">
              <h3 className="nk-block-title page-title">Employees</h3>
              <div className="nk-block-des text-soft">
                <p>Department Member's Information Details </p>
              </div>
            </div>
            <div className="nk-block-head-content">
              <div className="toggle-wrap nk-block-tools-toggle">
                <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu">
                  <em className="icon ni ni-menu-alt-r" />
                </a>
                <div className="toggle-expand-content" data-content="pageMenu">
                  <ul className="nk-block-tools g-3">
                    <li>
                      <a href="#" className="btn btn-white btn-outline-light">
                        <em className="icon ni ni-download-cloud" /> <span>Export</span>
                      </a>
                    </li>
                    <li className="nk-block-tools-opt">
                      <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-primary" data-toggle="dropdown" aria-expanded="false"><em className="icon ni ni-plus" /></a>
                        <div className="dropdown-menu dropdown-menu-right" style={{}}>
                          <ul className="link-list-opt no-bdr">
                            <li><a href="#" data-toggle="modal" data-target="#addData"><span>Add Member</span></a></li>
                            <li><a href="#"><span>Add Team</span></a></li>
                            <li><a href="#"><span>Import User</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-block">
          <div className="card card-bordered card-stretch">
            <div className="card-inner-group">
              <div className="card-inner position-relative card-tools-toggle">
                <div className="card-title-group">
                  <div className="card-tools">
                    <div className="form-inline flex-nowrap gx-3">
                      <div className="form-wrap w-150px"><select className="form-select form-select-sm select2-hidden-accessible" data-search="off" data-placeholder="Bulk Action" data-select2-id={1} tabIndex={-1} aria-hidden="true"><option value data-select2-id={3}>Bulk Action</option><option value="email">Send Email</option><option value="group">Change Group</option><option value="suspend">Suspend User</option><option value="delete">Delete User</option></select>
                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: 113}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-x246-container"><span className="select2-selection__rendered" id="select2-x246-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Bulk Action</span></span>
                              <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                            </span>
                          </span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                      </div>
                      <div className="btn-wrap"><span className="d-none d-md-block"><button className="btn btn-dim btn-outline-light disabled">Apply</button></span><span className="d-md-none"><button className="btn btn-dim btn-outline-light btn-icon disabled"><em className="icon ni ni-arrow-right" /></button></span></div>
                    </div>
                  </div>
                  <div className="card-tools mr-n1">
                    <ul className="btn-toolbar gx-1">
                      <li><a href="#" className="btn btn-icon search-toggle toggle-search" data-target="search"><em className="icon ni ni-search" /></a></li>
                      <li className="btn-toolbar-sep" />
                      <li>
                        <div className="toggle-wrap"><a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-menu-right" /></a>
                          <div className="toggle-content" data-content="cardTools">
                            <ul className="btn-toolbar gx-1">
                              <li className="toggle-close"><a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-arrow-left" /></a></li>
                              <li>
                                <div className="dropdown">
                                  <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                    <div className="dot dot-primary" /><em className="icon ni ni-filter-alt" /></a>
                                  <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                    <div className="dropdown-head"><span className="sub-title dropdown-title">Filter Member</span>
                                      <div className="dropdown"><a href="#" className="btn btn-sm btn-icon"><em className="icon ni ni-more-h" /></a></div>
                                    </div>
                                    <div className="dropdown-body dropdown-body-rg">
                                      <div className="row gx-6 gy-3">
                                        <div className="col-6">
                                          <div className="custom-control custom-control-sm custom-checkbox"><input type="checkbox" className="custom-control-input" id="hasBalance" /><label className="custom-control-label" htmlFor="hasBalance"> Have Balance</label></div>
                                        </div>
                                        <div className="col-6">
                                          <div className="custom-control custom-control-sm custom-checkbox"><input type="checkbox" className="custom-control-input" id="hasKYC" /><label className="custom-control-label" htmlFor="hasKYC"> KYC Verified</label></div>
                                        </div>
                                        <div className="col-6">
                                          <div className="form-group"><label className="overline-title overline-title-alt">Department</label><select className="form-select form-select-sm select2-hidden-accessible" data-select2-id={4} tabIndex={-1} aria-hidden="true"><option value="finance" data-select2-id={6}>Finance</option><option value="technology">Information Technology</option><option value="human resource">Human Resource</option><option value="marketing">Marketing</option></select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={5} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-uzws-container"><span className="select2-selection__rendered" id="select2-uzws-container" role="textbox" aria-readonly="true" title="Finance">Finance</span>
                                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                                                </span>
                                              </span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="form-group"><label className="overline-title overline-title-alt">Designation</label><select className="form-select form-select-sm select2-hidden-accessible" data-select2-id={7} tabIndex={-1} aria-hidden="true"><option value="any" data-select2-id={9}>Admin</option><option value="active">Department Head</option><option value="deleted">Managing Director</option><option value="deleted">General Manager</option><option value="pending">Softwear Developer</option><option value="suspend">Assistant Engineer</option><option value="deleted">Designer</option><option value="deleted">Marketer</option></select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={8} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-m6ns-container"><span className="select2-selection__rendered" id="select2-m6ns-container" role="textbox" aria-readonly="true" title="Admin">Admin</span>
                                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                                                </span>
                                              </span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                          </div>
                                        </div>
                                        <div className="col-12">
                                          <div className="form-group"><button type="button" className="btn btn-secondary">Filter</button></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="dropdown-foot between"><a className="clickable" href="#">Reset Filter</a><a href="#">Save Filter</a></div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="dropdown"><a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown"><em className="icon ni ni-setting" /></a>
                                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                    <ul className="link-check">
                                      <li><span>Show</span></li>
                                      <li className="active"><a href="#">10</a></li>
                                      <li><a href="#">20</a></li>
                                      <li><a href="#">50</a></li>
                                    </ul>
                                    <ul className="link-check">
                                      <li><span>Order</span></li>
                                      <li className="active"><a href="#">DESC</a></li>
                                      <li><a href="#">ASC</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-search search-wrap" data-search="search">
                  <div className="card-body">
                    <div className="search-content"><a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left" /></a><input type="text" className="form-control border-transparent form-focus-none" placeholder="Search by user or email" />
                      <button className="search-submit btn btn-icon"><em className="icon ni ni-search" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-inner p-0">
                <div className="nk-tb-list nk-tb-ulist">
                  <div className="nk-tb-item nk-tb-head">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid" /><label className="custom-control-label" htmlFor="uid" /></div>
                    </div>
                    <div className="nk-tb-col"><span className="sub-text">Employee</span></div>
                    <div className="nk-tb-col tb-col-mb">
                      <span className="sub-text">Department</span>
                    </div>
                    <div className="nk-tb-col tb-col-xxl">
                      <span className="sub-text">Designation</span>
                    </div>
                    <div className="nk-tb-col tb-col-md">
                      <span className="sub-text">
                        Phone</span>
                    </div>
                    <div className="nk-tb-col tb-col-lg">
                      <span className="sub-text">Address</span></div>
                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">Verified</span></div>
                    <div className="nk-tb-col tb-col-md"><span className="sub-text">Status</span></div>
                    <div className="nk-tb-col nk-tb-col-tools text-right">
                      <div className="dropdown"><a href="#" className="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-toggle="dropdown" data-offset="0,5"><em className="icon ni ni-plus" /></a>
                        <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                          <ul className="link-tidy sm no-bdr">
                            <li>
                              <div className="custom-control custom-control-sm custom-checkbox checked"><input type="checkbox" className="custom-control-input" defaultChecked id="ph" /><label className="custom-control-label" htmlFor="ph">Phone</label></div>
                            </li>
                            <li>
                              <div className="custom-control custom-control-sm custom-checkbox"><input type="checkbox" className="custom-control-input" id="vri" /><label className="custom-control-label" htmlFor="vri">Verified</label></div>
                            </li>
                            <li>
                              <div className="custom-control custom-control-sm custom-checkbox"><input type="checkbox" className="custom-control-input" id="st" /><label className="custom-control-label" htmlFor="st">Status</label></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid1" /><label className="custom-control-label" htmlFor="uid1" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar bg-primary"><span>AB</span></div>
                        <div className="user-info"><span className="tb-lead">Abu Bin Ishtiyak <span className="dot dot-success d-md-none ml-1" /></span><span>info@softnio.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Information Technology</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>CEO</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+124 394-1787</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>199 Bishopsgate, London</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                        <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid2" /><label className="custom-control-label" htmlFor="uid2" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar"><img src="/demo1/images/avatar/a-sm.jpg" alt /></div>
                        <div className="user-info"><span className="tb-lead">Ashley Lawson <span className="dot dot-warning d-md-none ml-1" /></span><span>ashley@softnio.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Accounting</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Managing Director</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+811 847-4958</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>Narottam Morarji Marg, Mumbai</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                        <li><em className="icon text-info ni ni-alarm-alt" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-warning">Pending</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid3" /><label className="custom-control-label" htmlFor="uid3" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar bg-info"><span>JL</span></div>
                        <div className="user-info"><span className="tb-lead">Joe Larson <span className="dot dot-success d-md-none ml-1" /></span><span>larson@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Human Resource</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Admin</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+124 394-1787</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>182/A Y-ra, Boston</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                        <li><em className="icon text-success ni ni-check-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid4" /><label className="custom-control-label" htmlFor="uid4" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar bg-danger"><span>JM</span></div>
                        <div className="user-info"><span className="tb-lead">Jane Montgomery <span className="dot dot-danger d-md-none ml-1" /></span><span>jane84@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Finance</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>General Manager</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+811 985-4846</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>Gran Vía, Madrid</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon ni ni-alert-circle" /> <span>Email</span></li>
                        <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-danger">Suspend</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid5" /><label className="custom-control-label" htmlFor="uid5" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar"><img src="/demo1/images/avatar/b-sm.jpg" alt /></div>
                        <div className="user-info"><span className="tb-lead">Frances Burns <span className="dot dot-success d-md-none ml-1" /></span><span>frances@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Human Research</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Department Head</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+463 471-7173</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>Narottam Morarji Marg, Mumbai</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-info ni ni-alarm-alt" /> <span>Email</span></li>
                        <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid6" /><label className="custom-control-label" htmlFor="uid6" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar"><img src="/demo1/images/avatar/c-sm.jpg" alt /></div>
                        <div className="user-info"><span className="tb-lead">Alan Butler <span className="dot dot-info d-md-none ml-1" /></span><span>butler@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Marketing</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Designer</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+963 309-1706</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>199 Bishopsgate, London</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-info ni ni-alarm-alt" /> <span>Email</span></li>
                        <li><em className="icon text-warning ni ni-alert-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-info">Inactive</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid7" /><label className="custom-control-label" htmlFor="uid7" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar bg-warning"><span>VL</span></div>
                        <div className="user-info"><span className="tb-lead">Victoria Lynch <span className="dot dot-success d-md-none ml-1" /></span><span>victoria@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Information Technology</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Software Developer</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+124 394-1787</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>House 165, Lane No 3, Mohakhali DOHS,Dhaka</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                        <li><em className="icon text-success ni ni-check-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid8" /><label className="custom-control-label" htmlFor="uid8" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar bg-success"><span>PN</span></div>
                        <div className="user-info"><span className="tb-lead">Patrick Newman <span className="dot dot-success d-md-none ml-1" /></span><span>patrick@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Information Technology</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Assistant Engineer</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+963 309-1706</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>Ipoh, Johor Bahru, Kualalampur</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                        <li><em className="icon text-info ni ni-alarm-alt" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid9" /><label className="custom-control-label" htmlFor="uid9" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar"><img src="/demo1/images/avatar/d-sm.jpg" alt /></div>
                        <div className="user-info"><span className="tb-lead">Jane Harris <span className="dot dot-warning d-md-none ml-1" /></span><span>harris@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Marketing</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Department Head</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+168 603-2320</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>182/A Y-ra, Boston</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-info ni ni-alarm-alt" /> <span>Email</span></li>
                        <li><em className="icon text-info ni ni-alarm-alt" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-warning">Pending</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" className="custom-control-input" id="uid10" /><label className="custom-control-label" htmlFor="uid10" /></div>
                    </div>
                    <div className="nk-tb-col">
                      <div className="user-card">
                        <div className="user-avatar bg-purple"><span>EW</span></div>
                        <div className="user-info"><span className="tb-lead">Emma Walker <span className="dot dot-success d-md-none ml-1" /></span><span>walker@example.com</span></div>
                      </div>
                    </div>
                    <div className="nk-tb-col tb-col-mb"><span>Finance</span></div>
                    <div className="nk-tb-col tb-col-xxl"><span>Account Manager</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>+168 603-2320</span></div>
                    <div className="nk-tb-col tb-col-lg"><span>199 Bishopsgate, London</span></div>
                    <div className="nk-tb-col tb-col-lg">
                      <ul className="list-status">
                        <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                        <li><em className="icon text-success ni ni-check-circle" /> <span>KYC</span></li>
                      </ul>
                    </div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email"><em className="icon ni ni-mail-fill" /></a></li>
                        <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend"><em className="icon ni ni-user-cross-fill" /></a></li>
                        <li>
                          <div className="drodown"><a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-opt no-bdr">
                                <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#editData"><em className="icon ni ni-edit" /><span>Edit Data</span></a></li>
                                <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-inner">
                <div className="nk-block-between-md g-3">
                  <div className="g">
                    <ul className="pagination justify-content-center justify-content-md-start">
                      <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>
                      <li className="page-item"><a className="page-link" href="#">6</a></li>
                      <li className="page-item"><a className="page-link" href="#">7</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                  </div>
                  <div className="g">
                    <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                      <div>Page</div>
                      <div><select className="form-select form-select-sm select2-hidden-accessible" data-search="on" data-dropdown="xs center" data-select2-id={10} tabIndex={-1} aria-hidden="true"><option value="page-1" data-select2-id={12}>1</option><option value="page-2">2</option><option value="page-4">4</option><option value="page-5">5</option><option value="page-6">6</option><option value="page-7">7</option><option value="page-8">8</option><option value="page-9">9</option><option value="page-10">10</option><option value="page-11">11</option><option value="page-12">12</option><option value="page-13">13</option><option value="page-14">14</option><option value="page-15">15</option><option value="page-16">16</option><option value="page-17">17</option><option value="page-18">18</option><option value="page-19">19</option><option value="page-20">20</option></select>
                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={11} style={{width: 39}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-9mhp-container"><span className="select2-selection__rendered" id="select2-9mhp-container" role="textbox" aria-readonly="true" title={1}>1</span>
                              <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                            </span>
                          </span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                      </div>
                      <div>OF 102</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    
    )
};

export default ErrorPage;
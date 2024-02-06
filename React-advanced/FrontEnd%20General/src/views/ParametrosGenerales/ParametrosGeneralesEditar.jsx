// import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import Footer from "../../layouts/Footer";
// import Header from "../../layouts/Header";
// import { Card, Col, Row, Button, Form, Container } from "react-bootstrap";
// import { useForm } from '../../hooks';
// import { useTipoSolicitudStore } from '../../hooks/useTipoSolicitudStore';
// import { Link } from "react-router-dom";

// const TipoSolicitudFormFields = {
//   id:            0,
//   nombre:       '',
//   estado:        true,
// }

// export default function ParametrosGeneralesEditar() {

//   const { TipoSolicitudUpsert } = useTipoSolicitudStore();
//   const { getDataForm } = useSelector(state => state.tipoSolicitud);
//   let DataForm = "";
//   DataForm = getDataForm;

//   const { id, nombre, estado,  onInputChange:onUpsertInputChange } = useForm( TipoSolicitudFormFields );

//   //Obtiene los valores si existen en redux con el componente global.
//   if(DataForm){
//     TipoSolicitudFormFields.id = DataForm.tso_id;
//     TipoSolicitudFormFields.nombre = DataForm.tso_nombre;    
//     TipoSolicitudFormFields.estado = DataForm.tso_estado;     
//   }
//   //Sino existen en redux los componentes, deben limpiarse de esta manera.
//   if(!DataForm){
//     TipoSolicitudFormFields.id = 0;
//     TipoSolicitudFormFields.nombre = " ";    
//     TipoSolicitudFormFields.estado = true;    
//   }

//   const UpsertTipoSolicitud = ( event ) => {
//     event.preventDefault();
//     TipoSolicitudUpsert({ tso_id: id,  tso_nombre: nombre, tso_estado: estado });
//     console.log({ tso_id: id,  tso_nombre: nombre, tso_estado: estado });
// }

//   useEffect(() => {

//   }, []);

//   return (
//     <React.Fragment>
//       <Container fluid="md">
//       <Header />
//       <div className="main main-app p-3 p-lg-4">
//         <div className="d-md-flex align-items-center justify-content-between mb-4">
//           <div>
//             <h4 className="main-title mb-0">Mantenimiento de TipoSolicitud</h4>
//           </div>
//         </div>
//         <Card.Body>
//           <Form onSubmit={ UpsertTipoSolicitud } >
//             <Row  className="g-12">
//             {/* <Form.Group as={Col}>
//               <Form.Label htmlFor="formGroupExampleInput">ID</Form.Label>*/}
//               <Form.Control type="hidden" placeholder="id" name="id" value={ id } onChange={ onUpsertInputChange } aria-label="id" disabled required/>          
//             {/* <Form.Group as={Col}>
//             </Form.Group>  */}

//             <Form.Group as={Col}>
//                 <Form.Label htmlFor="formGroupExampleInput">Nombre</Form.Label>
//                 <Form.Control type="text" placeholder="Nombre" name="nombre" value={ nombre } onChange={ onUpsertInputChange } aria-label="Nombre" required/>
//             </Form.Group> 
//             <Form.Group as={Col}>
//             <div className="mb-4">
//                   <Form.Label >Estado</Form.Label>
//                   <Form.Select name="estado" value={ estado } onChange={ onUpsertInputChange } aria-label="Default select example" >
//                     <option>Seleccione una opción</option>
//                     <option value={true}>Activo</option>
//                     <option value={false}>Inactivo</option>
//                   </Form.Select>
//                 </div>
//             </Form.Group>
//             </Row>
//               <hr />
//               <div>
//               <Col sm="12">
//               <Button type="submit" variant="success" className="btn-sign">Guardar</Button>
//               <Button type="submit" variant="danger" as={Link} to="/pages/TipoSolicitud" className="btn-sign">Cancelar</Button>
//               </Col>
//               </div>
//           </Form>
//             </Card.Body>
//         {/* <Footer /> */}
//       </div>
//       </Container>
//     </React.Fragment>
//   );
// }

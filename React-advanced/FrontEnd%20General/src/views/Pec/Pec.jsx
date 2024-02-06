import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { Grid, html, _  } from "gridjs-react";
import { h } from "gridjs";
import { Card, Button, Container } from "react-bootstrap";
// import { useTipoSolicitudStore } from '../../hooks/useTipoSolicitudStore';


export default function Pec() {

  // const { listTipoSolicitudes, getTipoSolicitudUpdate, limpiaTipoSolicitud } = useTipoSolicitudStore();
  // const { tiposolicitudes } = useSelector(state => state.tipoSolicitud);
  
  // useEffect(() => {
  //   listTipoSolicitudes();
  //   limpiaTipoSolicitud();
  // }, []);

  // console.log( JSON.stringify(tiposolicitudes.solicitudes));
 

  return (
    <React.Fragment>
      <Container fluid="md">
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <h4 className="main-title mb-0">Mantenimiento</h4>
          </div>
          <Button variant="success" as={Link} to="/pages/camposEditar">Agregar</Button>
        </div>
        <Card.Body>
              <Grid
                data={{/*tiposolicitudes.solicitudes*/}||[]}
                columns={[ {name: 'tso_id', hidden: true}, {id: 'tso_nombre', name: 'Nombre'}, {id: 'tso_estado', name: 'Estado'}, { 
                  name: 'Editar',
                  formatter: (cell, row) => {
                    return h('Button', {
                      className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-warning bg-blue-600',
                      // onClick: () => getTipoSolicitudUpdate(`${row.cells[0].data}`)
                    }, 'Editar');
                  }
                }, 
                // { 
                //   name: 'Eliminar',
                //   formatter: (cell, row) => {
                //     return h('Button', {
                //       className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-danger',
                //       onClick: () => alert(`Datos seleccionados "${row.cells[0].data}"`)
                //     }, 'Eliminar');
                //   }
                // },
              ]}
                search={true}
                pagination={true}
                sort={true}
                resizable={true}
                language={{
                  search: {
                    placeholder: 'Escribe para buscar...',
                  },
                  sort: {
                    sortAsc: 'Orden de columna ascendente.',
                    sortDesc: 'Orden de columna descendente.',
                  },
                  pagination: {
                    previous: 'Anterior',
                    next: 'Siguiente',
                    navigate: (page, pages) => `Página ${page} de ${pages}`,
                    page: (page) => `Página ${page}`,
                    showing: 'Mostrando del',
                    of: 'de',
                    to: 'al',
                    results: 'registros',
                  },
                  loading: 'Cargando...',
                  noRecordsFound: 'Sin coincidencias encontradas.',
                  error: 'Ocurrió un error al obtener los datos.',
                }}
                className={{
                  table: 'table table-bordered mb-0'
                }}
              />
          </Card.Body>
        {/* <Footer /> */}
      </div>
      </Container>
    </React.Fragment>
  );
}

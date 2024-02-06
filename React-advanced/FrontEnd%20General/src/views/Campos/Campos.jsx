import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { Grid, html, _  } from "gridjs-react";
import { h } from "gridjs";
import { Card, Button, Container } from "react-bootstrap";
// import { useMonedaXOperativaStore } from '../../hooks/useMonedaXOperativaStore';
import { useCamposStore } from "../../hooks/useCamposStore";



export default function Campos() {

  const { listCampos, getCamposUpdate, limpiaCampos } = useCamposStore();
  const { campos } = useSelector(state => state.campo); // Extraemos el estado de tiposolicitudes del estado llamado tipoSolicitud

  useEffect(() => {
    listCampos();
    limpiaCampos();
  }, []);


 

  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <h4 className="main-title mb-0">Mantenimiento de campos</h4>
          </div>
          <Button variant="success" as={Link} to="/pages/camposEditar">Agregar</Button>
        </div>
        <Card.Body>
              <Grid
                data={{campos}||[]}
                columns={[ {name: 'CAMP_ID', hidden: true},
                 {id: 'CAMP_NOMBRE', name: 'Nombre'}, 
                 {id: 'CAMP_DESCRIPCION', name: 'Descripción'}, 
                 {id: 'CAMP_REQUERIDO', name: 'Requerido'}, 
                 {id: 'CAMP_VALIDACION', name: 'Validación'}, 
                 {id: 'TIP_CAMP_ID', name: 'Id tipo de campo'}, 
                 {id: 'CAMPO_DETALLES', name: 'Detalles'}, 
                 {id: 'USUARIO_REGISTRA', name: 'Usuario registra'}, 
                 {id: 'CAMP_ACTIVO', name: 'Estado'}, 
                 { name: 'Editar',
                  formatter: (cell, row) => {
                    return h('Button', {
                      className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-warning bg-blue-600',
                      onClick: () => getCamposUpdate(`${row.cells[0].data}`)
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
    </React.Fragment>
  );
}

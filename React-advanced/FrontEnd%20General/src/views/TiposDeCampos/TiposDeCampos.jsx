import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { Grid, html, _ } from "gridjs-react";
import { h } from "gridjs";
import { Card, Button, Container } from "react-bootstrap";
import { useTiposDeCamposStore } from '../../hooks/useTiposDeCamposStore';


export default function TiposDeCampos() {

  const { listTiposDeCampos, getTiposDeCamposUpdate, limpiaTiposDeCampos } = useTiposDeCamposStore();
  const { tiposDeCampos } = useSelector(state => state.tiposDeCampo);

  useEffect(() => {
    listTiposDeCampos();
    limpiaTiposDeCampos();
  }, []);

  return (
    <React.Fragment>
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
         data={tiposDeCampos.campos||[]}
            
            // columns={[{ name: 'tso_id', hidden: true }, { id: 'tso_nombre', name: 'Nombre' }, { id: 'tso_estado', name: 'Estado' }, {
              columns={[
                { id: 'TIP_CAMP_ID', name: 'Campo ID', hidden: true },
                { id: 'TIP_NOMBRE', name: 'Nombre del Campo' },
                { id: 'TIP_CAMP_DESCRIPCION', name: 'Descripción del Campo' },
                { id: 'TIP_CAMP_ACTIVO', name: 'Estado' },
                { id: 'USUARIO_REGISTRA', name: 'Usuario que Registra' },
                { id: 'FECHA_REGISTRA', name: 'Fecha de Registro' }, {
              
              name: 'Editar',
              formatter: (cell, row) => {
                return h('Button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-warning bg-blue-600',
                  onClick: () => getTiposDeCamposUpdate(`${row.cells[0].data}`)
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

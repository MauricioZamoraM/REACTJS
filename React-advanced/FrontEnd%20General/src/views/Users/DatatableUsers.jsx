import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Modal, Form, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/assets/css/maintenance/manage-users.css'
import { Container, Row, Col, FormControl } from 'react-bootstrap';

import {
  fetchUsers,
  addUser,
  deleteUser,
  selectUsers,
  updateUser,
  selectFilteredUsers,
  selectPageSize,
  setPageSize,
  setFilteredUsers,
} from '../../store/users/usersSlice'; // Importa las acciones y selectores del slice de usuarios

const { Column } = Table;
const { Option } = Select;


const DatatableUsers = () => {

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const filteredUsers = useSelector(selectFilteredUsers)
  const pageSize = useSelector(selectPageSize);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [getUser, setGetUser]=useState('');
  const [editingUserId, setEditingUserId] = useState(null);

 useEffect(() => {
    if (editingUserId) {
      console.log('Entra al useEffect de editingUserId y al condicional')
      form.setFieldsValue(users.find((user) => user.id === editingUserId));
    }
  }, [editingUserId, users]);

  const showModal = (userId) => {
    setEditingUserId(userId); // Establece el ID del usuario en edición
    setIsModalVisible(true);
    if (userId) {
      const editingUser = users.find((user) => user.id === userId);
      form.setFieldsValue(editingUser); // Establece los valores del usuario en el formulario de edición
    } else {
      form.resetFields(); // Restablece los campos del formulario para crear un nuevo usuario
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    setEditingUserId(null); // Restablece el ID del usuario en edición
  };

  const handleRefresh = () => {
    dispatch(fetchUsers());
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      setIsModalVisible(false);
      if (editingUserId) {
        dispatch(updateUser({ id: editingUserId, ...values }));
      } else {
        dispatch(addUser(values));
      }
      setEditingUserId(null);
      handleRefresh();
    });
  };


  const handleDelete = () => {
    dispatch(deleteUser(getUser));
    abrirCerrarModalEliminar();
  };

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const selectUser = (record, action) => {
    setGetUser(record.id);
    (action==="Editar")?abrirCerrarModalEliminar():abrirCerrarModalEliminar()
  }

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();

    if (searchValue === "") {
      // Si el valor de búsqueda está vacío, establece filteredUsers como un arreglo vacío
      dispatch(setFilteredUsers([]));
      return;
    }

    // Filtra los usuarios en base al valor de búsqueda
    const filteredUsers = users.filter((user) => {
      const userName = user.name.toLowerCase();
      const userEmail = user.email.toLowerCase();
      const userPhone = user.phone.toLowerCase();

      return (
        userName.includes(searchValue) ||
        userEmail.includes(searchValue) ||
        userPhone.includes(searchValue)
      );
    });
    // Actualiza el estado de los usuarios filtrados utilizando la acción setFilteredUsers
    dispatch(setFilteredUsers(filteredUsers));
  };

  const handlePageSizeChange = (value) => {
    dispatch(setPageSize(value));
  };

  const generateOptions = () => {
    return [10, 20, 30, 40, 50].map((value) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    ));
  };

  return (
    <Container>
      <Row className="my-3">
        <Col xs={6}>
          <FormControl
            placeholder="Buscar"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
        <Col xs={6} className="d-flex justify-content-end">
          <Button type="primary" className='button-primary' onClick={() => showModal()}>
            <PlusOutlined /> Nuevo Usuario
          </Button>
        </Col>
      </Row>
      <Table
        dataSource={filteredUsers.length > 0 ? filteredUsers : users}
        pagination={{ pageSize: pageSize }}
        onChange={(pagination) => handlePageSizeChange(pagination.pageSize)}
      >
        <Column title="Nombre" dataIndex="name" key="name" />
        <Column title="Correo Electrónico" dataIndex="email" key="email" />
        <Column title="Teléfono" dataIndex="phone" key="phone" />
        <Column
          title="Editar"
          key="editar"
          render={(_, record) => (
            <div className='container-icon' onClick={() => showModal(record.id)}>
              <EditOutlined className='size-icon' />
            </div>
          )}
        />
        <Column
          title="Eliminar"
          key="eliminar"
          render={(_, record) => (
            <div className='container-icon' onClick={() => selectUser(record)}>
              <DeleteOutlined className='size-icon' />
            </div>
          )}
        />
      </Table>
      <Row className="my-3">
        <Col xs={12} className="d-flex justify-content-end">
          <span className='select-text'>Mostrar</span>
          <Select
            value={pageSize}
            className='select-page'
            onChange={handlePageSizeChange}
          >
            {generateOptions()}
          </Select>
          <span className='select-text'>registros por página</span>
        </Col>
      </Row>
      <Modal
        title={editingUserId ? 'Editar Usuario' : 'Crear Usuario'}
        visible={isModalVisible}
        onOk={handleSave}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Cancelar</Button>,
          <Button type="primary" className = 'button-primary' onClick={handleSave}>{editingUserId ? 'Actualizar' : 'Agregar'}</Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Correo Electrónico"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Teléfono"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
      visible={modalEliminar}
      onCancel={abrirCerrarModalEliminar}
      centered
      footer={[
        <Button  onClick={abrirCerrarModalEliminar}>No</Button>,
        <Button type="primary" danger onClick={handleDelete}>Sí</Button>,
      ]}
      >
¿Estas seguro que deseas eliminar el usuario? Si lo eliminas no podrás revertir esta acción.
      </Modal>
    </Container>
  );
};

export default DatatableUsers;
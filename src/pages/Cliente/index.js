import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button, Popconfirm } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import  Header  from '../../components/Header/Header'
import  Titulo  from '../../components/Titulo/Titulo'
import { Link } from 'react-router-dom';
import api from '../../services/api'
import  Footer  from '../../components/Footer/Footer'

function Cliente() {

  const excluir = (dados) => {
      api.delete('cliente/' + dados.id).then(response => {
        setClientes(clientes.filter(cliente => cliente.id !== dados.id))
        toast.success("Removido com sucesso");
      }).catch((erro) => {
        toast.error(`Erro na exclusão : ${erro}`);
      })
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
    {
      title: 'Data de nascimento',
      key: 'dataNascimento',
      dataIndex: 'dataNascimento',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (dados) => (
        <Space size="middle">
          <Link to={`/cliente/form/${dados.id}`}><Button type="primary">Editar</Button></Link>
          <Popconfirm title="Desaja deletar?" onConfirm={() => excluir(dados)}>
            <Button type="primary" danger>
              <ToastContainer />
              Deletar
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [clientes, setClientes] = useState([]);
  useEffect( () => {
    api.get('cliente').then(response => {
      setClientes(response.data);
    })
  }, [] );

  return (
    <>
    <Header />
    <Titulo nome="Clientes" link="/cliente/form" textoBotao="Adicionar cliente" />
    <Table columns={columns} dataSource={clientes} />
    <Footer />
    </>
    );
}



export default Cliente;

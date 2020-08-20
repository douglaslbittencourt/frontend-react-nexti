import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Table, Space, Button, Popconfirm } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import  Header  from '../../components/Header/Header'
import api from '../../services/api'
import  Titulo  from '../../components/Titulo/Titulo'
import  Footer  from '../../components/Footer/Footer'


function Produto() {

  const [produtos, setProdutos] = useState([]);

  useEffect( () => {
    api.get('produto').then(response => {
      setProdutos(response.data);
    })
  }, [] );

  const excluir = (dados) => {
    api.delete('produto/' + dados.id).then(response => {
      setProdutos(produtos.filter(produto => produto.id !== dados.id))
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
      title: 'Sku',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      key: 'descricao',
    },
    {
      title: 'Preço',
      key: 'preco',
      dataIndex: 'preco',
    },
    {
      title: 'Preço',
      key: 'preco',
      dataIndex: 'preco',
    },
    {
      title: 'Quantidade',
      key: 'quantidade',
      dataIndex: 'quantidade',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (dados) => (
        <Space size="middle">
          <Link to={`/produto/form/${dados.id}`}><Button type="primary">Editar</Button></Link>
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

  return (
    <>
    <Header />
    <Titulo nome="Produtos" link="produto/form" textoBotao="Adicionar produto" />
    <Table columns={columns} dataSource={produtos} />
    <Footer />
    </>
    );
}



export default Produto;

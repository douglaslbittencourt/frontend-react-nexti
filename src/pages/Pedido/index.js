import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button, Tag, Popconfirm } from 'antd';
import  Header  from '../../components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import  Titulo  from '../../components/Titulo/Titulo'
import  Footer  from '../../components/Footer/Footer'

function Pedido() {
  const [pedidos, setPedidos] = useState([]);

  useEffect( () => {
    api.get('pedido').then(response => {
      setPedidos(response.data);
    })
  }, [] );

  const excluir = (dados) => {
    api.delete('pedido/' + dados.id).then(response => {
      setPedidos(pedidos.filter(pedido => pedido.id !== dados.id));
      toast.success("Removido com sucesso");
    }).catch((erro) => {
      toast.error(`Erro na exclusão : ${erro}`);
    })
  };

  const finalizar = (dados) => {
    api.get('pedido/' + dados.id).then(response => {
      response.data.dataCompra = Date.now();
      api.put('pedido', response.data).then(editado => {
        toast.success("Finalizado com sucesso");
      });
    }).catch((erro) => {
      toast.error(`Erro na exclusão : ${erro}`);
    })
  };


  const { Column, ColumnGroup } = Table;

  return (
    <>
    <Header />
    <Titulo nome="Pedidos" link="pedido/form" textoBotao="Adicionar pedido" />
    <Table dataSource={pedidos}>
    <Column title="Id" dataIndex="id" key="id" />
    <ColumnGroup title="Cliente">
      <Column title="Id" dataIndex={['cliente', 'id']} key={['cliente', 'id']} />
      <Column title="Nome" dataIndex={['cliente', 'nome']} key={['cliente', 'nome']} />
    </ColumnGroup>
    <Column
      title="Produtos"
      dataIndex="produtos"
      key="produtos"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag.produto.id}>
              {tag.produto.sku}
            </Tag>
          ))}
        </>
      )}
    />
    <Column title="Data da Compra" dataIndex="dataCompra" key="dataCompra" />
    <Column title="Total da compra" dataIndex="totalCompra" key="totalCompra" />
    <Column
      title="Action"
      key="action"
      render={(dados) => (
        <Space size="middle">
          <Link to={`/pedido/form/${dados.id}`}><Button type="primary">Editar</Button></Link>
          <Popconfirm title="Desaja Finalizar?" onConfirm={() => finalizar(dados)}>
            <Button type="default" >
              <ToastContainer />
              Finalizar Compra
            </Button>
          </Popconfirm>
          <Popconfirm title="Desaja deletar?" onConfirm={() => excluir(dados)}>
            <Button type="primary" danger>
              <ToastContainer />
              Deletar
            </Button>
          </Popconfirm>
        </Space>
      )}
    />
  </Table>
  <Footer />
    </>
    );
}


export default Pedido;

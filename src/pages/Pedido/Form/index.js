import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import api from '../../../services/api'
import { Button,  Table, Space, Popconfirm, Form } from 'antd';
import { toast } from 'react-toastify';
import  Header  from '../../../components/Header/Header'
import  Titulo  from '../../../components/Titulo/Titulo'
import FormEdit from './Edit'
import FormSave from './Save'


import  Footer  from '../../../components/Footer/Footer'

function FormPedido( {match} ) {

  const [pedido, setPedido] = useState(false);

  const [clientes, setClientes] = useState('');

  const [produtos, setProdutos] = useState('');

  const [dadosTabela, setDadosTabela] = useState([]);

  const [dadosEdit, setDadosEdit] = useState(false);

  useEffect( () => {
    api.get('/cliente').then(clis => {
      setClientes(clis.data);
    });
    api.get('/produto').then(pros => {
      setProdutos(pros.data);
    });
    api.get(`/pedido/${match.params.pedidoId}`).then(response => {
      setPedido(response.data);
    });
  }, [match.params.pedidoId]);

  useEffect( () => {
    setDadosEdit(
      (pedido) && ({
      finish : onFinish,
      faled : onFinishFailed,
      dadosPedido : pedido,
      layouts : {
        layout : layout,
        tail : tailLayout
      },
      clientes : clientes,
      produtos : produtos
    }))
  }, [pedido]);

  useEffect( () => {
      if (pedido) {
        const novaTabela = [];
        pedido.produtos.forEach(produtos => {
          novaTabela.push({
            cliente : {
              id : pedido.cliente.id,
              nome : pedido.cliente.nome,
              cpf : pedido.cliente.cpf
            },
            id : produtos.id,
            quantidade : produtos.quantidade,
            produto : {
              id : produtos.produto.id,
              sku : produtos.produto.sku,
              preco : produtos.produto.preco
            }
          })
        });
        setDadosTabela(novaTabela);
      }
  }, [pedido]);



  const excluir = (dados) => {
    if (match.params.pedidoId) {
      api.put(`pedido/removerProduto/${match.params.pedidoId}/${dados.id}`).then(response => {
        removeDado(dados.id)
      }).catch((error) => {
      })
    } else {
      removeDado(dados.id)
    }
  };

  function removeDado (id) {
    setDadosTabela(dadosTabela.filter(dadoTabela => dadoTabela.id !== id));
  }

  const onFinish = values => {
    if (pedido) {
      const pedidoAdicionado = {
        pedido : {
          id : values.id
        },
        produto : {
          id : values.produto
        },
        quantidade : values.quantidade
      }
      api.put(`pedido/adicionarProduto/${pedido.id}`, pedidoAdicionado).then(novoPedido => {
        toast.success("adicionado com sucesso");
        setPedido(novoPedido.data)
      })
    } else {
      const payload = {
        cliente : {
          id : values.cliente
        },
        produtos : [{
          produto : {
            id: values.produto
          },
          quantidade : values.quantidade
        }]
      }
      api.post("pedido", payload).then(novoPedido => {
        toast.success("Salvo com sucesso");
        form.resetFields();
      })

    }
  };

  const onFinishFailed = errorInfo => {
  };

  const layout = {
    labelCol: {
      span: 11,
    },
    wrapperCol: {
      span: 1,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 11,
      span: 16,
    },
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const { Column, ColumnGroup } = Table;

  const Tabela = () => {
    return(
    <Table dataSource={dadosTabela}>
      <Column title="Id" dataIndex="id" key="id" />

      <ColumnGroup title="Cliente">
        <Column title="Nome" dataIndex={['cliente', 'nome']} key={['cliente', 'nome']} />
        <Column title="CPF" dataIndex={['cliente', 'cpf']} key={['cliente', 'cpf']} />
      </ColumnGroup>

      <ColumnGroup title="Produto">
        <Column title="Sku" dataIndex={['produto', 'sku']} key={['produto', 'sku']} />
        <Column title="Preço" dataIndex={['produto', 'preco']} key={['produto', 'preco']} />
      </ColumnGroup>

      <Column title="Quantidade" dataIndex="quantidade" key="quantidade" />
      <Column
      title="Action"
      key="action"
      render={(dados) => (
        <Space size="middle">
          <Popconfirm title="Desaja deletar?" onConfirm={() => excluir(dados)}>
            <Button type="primary" danger>
              Deletar
            </Button>
          </Popconfirm>
        </Space>
      )}
    />
    </Table>);
  };

  const dadosSave = {
    onFinish : onFinish,
    onFinishFailed : onFinishFailed,
    layout : layout,
    tailLayout : tailLayout,
    onReset : onReset,
    form : form,
    clientes : clientes,
    produtos : produtos
  }


  return (
    <>
    <Header />
    <Titulo nome="Pedido"/>
    {dadosEdit ? <FormEdit dados={dadosEdit} /> : (<FormSave dados={dadosSave} />)}
    <Tabela />
    <Footer />
    </>
    );
}

export default FormPedido;

import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function FormEdit( {dados} ) {

  const { Option } = Select;

  return (
  <Form
    {...dados.layouts.layout}
    name="basic"
    initialValues={{
      id:dados.dadosPedido.id,
      cliente : dados.dadosPedido.cliente.id,
      quantidade : 1
    }}
    onFinish={dados.finish}
    onFinishFailed={dados.failed}
  >
    <Form.Item
      label="Id"
      name="id"
    >
      <Input disabled />
    </Form.Item>

    <Form.Item
      name="cliente"
      label="Cliente"
      rules={[{ required: true, message: 'Por favor informe um cliente!' }]}
    >
      <Select
      showSearch
      disabled
      style={{ width: 200 }}
      placeholder="Selecione um cliente"

      >
        {dados.clientes.length > 0 && dados.clientes.map(cliente => (
          <Option value={cliente.id}>{cliente.cpf} - {cliente.nome}</Option>
        ))}

      </Select>
    </Form.Item>

    <Form.Item
      name="produto"
      label="Produto"
      rules={[{ required: true, message: 'Por favor informe um produto!' }]}
    >
      <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      >
        {dados.produtos.length > 0 && dados.produtos.map(produto => (
          <Option value={produto.id}>{produto.sku} - {produto.nome}</Option>
        ))}
      </Select>
    </Form.Item>

    <Form.Item
      label="Quantidade"
      name="quantidade">
      <InputNumber
        max = {99999999}
        min = {0}
      />
    </Form.Item>

    <Form.Item {...dados.layouts.tail}>
      <ToastContainer />
      <Button type="primary" htmlType="submit" style={{marginRight: 10}}>
        Adicionar
      </Button>
      <Link to="/pedido">
        <Button htmlType="button">
        Voltar
        </Button>
      </Link>
    </Form.Item>
    </Form>
  )
}

export default FormEdit;

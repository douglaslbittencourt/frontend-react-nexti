import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, InputNumber, Select } from 'antd';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function FormSave( {dados} ) {

  const { Option } = Select;

  return (
    <Form
        {...dados.layout}
        form={dados.form}
        name="basic"
        initialValues={{
          quantidade: 1,
        }}
        onFinish={dados.onFinish}
        onFinishFailed={dados.onFinishFailed}
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

        <Form.Item {...dados.tailLayout}>
          <ToastContainer />
            <Button type="primary" htmlType="submit" style={{marginRight: 10}}>
              Salvar
            </Button>
          <Button htmlType="button" onClick={dados.onReset} style={{marginRight: 10}}>
            Limpar
          </Button>
          <Link to="/pedido">
            <Button htmlType="button">
            Voltar
            </Button>
          </Link>
        </Form.Item>
        </Form>
  );
}
export default FormSave;

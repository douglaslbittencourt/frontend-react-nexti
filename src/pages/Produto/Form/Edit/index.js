import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, InputNumber } from 'antd';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function FormEdit( {dados} ) {

  const [form] = Form.useForm();

  return (
    <Form
      {...dados.layout}
      form={form}
      name="basic"
      initialValues={
        {id : dados.produto.id, sku : dados.produto.sku, nome : dados.produto.nome, descricao : dados.produto.descricao, preco : dados.produto.preco, quantidade : dados.produto.quantidade}
      }
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
        label="SKU"
        name="sku"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Nome"
        name="nome"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Descrição"
        name="descricao">
        <Input />
      </Form.Item>

      <Form.Item
        label="Preço"
        name="preco">
        <InputNumber
          defaultValue={1.1}
          max = {99999999}
          min = {0}
          formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/[R$]\s?|(,*)/g, '')}
        />
      </Form.Item>

      <Form.Item
        label="Quantidade"
        name="quantidade">
        <InputNumber
          defaultValue={1}
          max = {99999999}
          min = {0}
        />
      </Form.Item>
      <Form.Item {...dados.tailLayout}>
      <ToastContainer />
      <Button type="primary" htmlType="submit" style={{marginRight: 10}}>
        Salvar
      </Button>
      <Link to="/produto">
        <Button htmlType="button">
        Voltar
        </Button>
      </Link>
    </Form.Item>
    </Form>
  );

}

export default FormEdit;

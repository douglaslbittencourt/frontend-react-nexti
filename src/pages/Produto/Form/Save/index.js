import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, InputNumber } from 'antd';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function FormSave( {dados} ) {
  return (
    <Form
      {...dados.layout}
      form={dados.form}
      name="basic"
      onFinish={dados.onFinish}
      onFinishFailed={dados.onFinishFailed}
      initialValues={{
        quantidade: 1,
        preco: 1.1
      }}
    >
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
        <Link to="/produto">
          <Button htmlType="button">
          Voltar
          </Button>
        </Link>
    </Form.Item>
    </Form>
  );

}

export default FormSave;

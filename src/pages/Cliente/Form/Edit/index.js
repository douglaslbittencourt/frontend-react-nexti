import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, DatePicker } from 'antd';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import { Link } from 'react-router-dom';

function FormEdit( {dados} ) {

  const [form] = Form.useForm();

  return(
    <Form
      {...dados.layout}
      form={form}
      name="basic"
      initialValues={
        {id: dados.cliente.id, nome: dados.cliente.nome, cpf: dados.cliente.cpf, dataNascimento: moment(dados.cliente.dataNascimento, 'YYYY-MM-DD')}
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
          label="Nome"
          name="nome"
          rules={[
            {
              required: true,
              message: 'Por favor informe o nome!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CPF"
          name="cpf"
          rules={[
            {
              required: true,
              message: 'Por favor informe o CPF!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="dataNascimento" label="Data de nascimento">
          <DatePicker />
        </Form.Item>

        <Form.Item {...dados.tailLayout}>
            <ToastContainer />
            <Button type="primary" htmlType="submit" style={{marginRight: 10}}>
              Salvar
            </Button>
            <Link to="/cliente">
              <Button htmlType="button">
              Voltar
              </Button>
            </Link>
        </Form.Item>
      </Form>
  )
}

export default FormEdit;

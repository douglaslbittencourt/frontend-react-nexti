import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, DatePicker } from 'antd';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function FormSave( {dados} ) {
  return(
    <Form
      {...dados.layout}
      form={dados.form}
      name="basic"
      onFinish={dados.onFinish}
      onFinishFailed={dados.onFinishFailed}
      >
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
            <Button htmlType="button" onClick={dados.onReset} style={{marginRight: 10}}>
              Limpar
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

export default FormSave;

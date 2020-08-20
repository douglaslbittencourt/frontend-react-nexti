import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import  Header  from '../../../components/Header/Header'
import  Titulo  from '../../../components/Titulo/Titulo'
import api from '../../../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import FormEdit from './Edit'
import FormSave from './Save'
import  Footer  from '../../../components/Footer/Footer'

function FormCliente( { match } ) {

  const [cliente, setCliente] = useState(false);

  const [dadosEdit, setDadosEdit] = useState(false);

  useEffect( () => {
    api.get(`/cliente/${match.params.clienteId}`).then(response => {
      setCliente(response.data);
    })
  }, [match.params.clienteId]);

  const onFinish = values => {
    if (values.id != null) {
      api.put('cliente', values).then(() => {
        toast.success("Alterado com sucesso");
      }).catch((erro) => {
        toast.error(`Erro na alteração ${erro}`);
      });
    } else {
      api.post('cliente', values).then(() => {
        toast.success("Criado com sucesso");
        form.resetFields();
      }).catch((erro) => {
        toast.error(`Erro ao cadastrar ${erro}`);
      });
    }
  };

  function onFinishFailed (errorInfo) {
    toast.error('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const dadosSave = {
    onFinish : onFinish,
    onFinishFailed : onFinishFailed,
    layout : layout,
    tailLayout : tailLayout,
    onReset : onReset,
    form : form
  }

  useEffect( () => {
    setDadosEdit(
      (cliente) && ({
      onFinish : onFinish,
      onFinishFailed : onFinishFailed,
      layout : layout,
      tailLayout : tailLayout,
      cliente : cliente
    }))
  }, [cliente]);

  return (
    <>
    <Header />
    <Titulo nome="Cliente"/>
    {dadosEdit ? <FormEdit dados={dadosEdit} /> : <FormSave dados={dadosSave} /> }
    <Footer />
    </>
    );
}

export default FormCliente;

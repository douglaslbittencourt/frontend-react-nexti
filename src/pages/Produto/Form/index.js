import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import  Header  from '../../../components/Header/Header'
import api from '../../../services/api'
import  Titulo  from '../../../components/Titulo/Titulo'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import FormEdit from './Edit'
import FormSave from './Save'
import  Footer  from '../../../components/Footer/Footer'

function FormProduto( { match } ) {

  const [produto, setProduto] = useState(false);

  const [dadosEdit, setDadosEdit] = useState(false);

  useEffect( () => {
    api.get(`/produto/${match.params.produtoId}`).then(response => {
      setProduto(response.data);
    })
  }, [match.params.produtoId]);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = values => {
    if (values.id != null) {
      api.put('produto', values).then(() => {
        toast.success("Alterado com sucesso");
      }).catch((erro) => {
        toast.error(`Erro na alteração ${erro}`);
      });
    } else {
      api.post('produto', values).then(() => {
        toast.success("Criado com sucesso");
        form.resetFields();
      }).catch((erro) => {
        toast.error(`Erro ao cadastrar ${erro}`);
      });
    }
  };

  const onFinishFailed = errorInfo => {
    toast.error('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
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
      (produto) && ({
      onFinish : onFinish,
      onFinishFailed : onFinishFailed,
      layout : layout,
      tailLayout : tailLayout,
      produto : produto
    }))
  }, [produto]);

  return (
    <>
    <Header />
    <Titulo nome="Produto"/>
    {dadosEdit ? <FormEdit dados={dadosEdit} /> : <FormSave dados={dadosSave} /> };
    <Footer />
    </>
    );
}




export default FormProduto;

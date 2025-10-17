import React, {useState} from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from "../../MenuSistema";

export default function FormProduto () {

    const [titulo, setTitulo] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState('');
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState('');

    function salvar() {

        let produtoRequest = {
            titulo,
            codigo,
            valorUnitario,
            tempoEntregaMinimo,
            tempoEntregaMaximo,
        }

        axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um produto.')
            })
    }

    return (

        <div>

            <MenuSistema tela={'produto'}/>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cadastro &nbsp;<Icon name='angle double right' size="small" /> </span> Produto </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    placeholder={"Informe o titulo do produto"}
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder={"Informe o código do produto"}
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.TextArea
                                    fluid
                                    label='Descrição'
                                    placeholder="Insira uma breve descrição do produto"
                                    width={16}
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    width={6}
                                    label='Valor Unitário'
                                    placeholder={"Exemplo: 10.00"}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                />

                                <Form.Input
                                    width={6}
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    placeholder={"Ex: 30"}
                                    value={tempoEntregaMinimo}
                                    onChange={e => setTempoEntregaMinimo(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    width={6}
                                    label='Tempo de Entrega Máximo em Minutos'
                                    placeholder={"Ex: 40"}
                                    value={tempoEntregaMaximo}
                                    onChange={e => setTempoEntregaMaximo(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                onClick={() => salvar()}
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}

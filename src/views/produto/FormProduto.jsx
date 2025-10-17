import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Produto </h2>

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
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder={"Informe o código do produto"}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.TextArea
                                    fluid
                                    label='Descrição'
                                    placeholder={"Insira uma breve descrição do produto"}
                                    width={16}>
                                </Form.TextArea>
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    width={6}
                                    label='Valor Unitário'
                                    placeholder={"Exemplo: 10.00"}
                                />

                                <Form.Input
                                    width={6}
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    placeholder={"Ex: 30"}
                                >
                                </Form.Input>

                                <Form.Input
                                    width={6}
                                    label='Tempo de Entrega Máximo em Minutos'
                                    placeholder={"Ex: 40"}
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

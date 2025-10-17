import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import {Button, Container, Divider, Form, Icon, Select} from 'semantic-ui-react';

export default function FormEntregador () {

    const [ativo, setAtivo] = React.useState(null);

    const estadoOptions = [
        { key: 'ac', value: 'AC', text: 'Acre' },
        { key: 'al', value: 'AL', text: 'Alagoas' },
        { key: 'ap', value: 'AP', text: 'Amapá' },
        { key: 'am', value: 'AM', text: 'Amazonas' },
        { key: 'ba', value: 'BA', text: 'Bahia' },
        { key: 'ce', value: 'CE', text: 'Ceará' },
        { key: 'df', value: 'DF', text: 'Distrito Federal' },
        { key: 'es', value: 'ES', text: 'Espírito Santo' },
        { key: 'go', value: 'GO', text: 'Goiás' },
        { key: 'ma', value: 'MA', text: 'Maranhão' },
        { key: 'mt', value: 'MT', text: 'Mato Grosso' },
        { key: 'ms', value: 'MS', text: 'Mato Grosso do Sul' },
        { key: 'mg', value: 'MG', text: 'Minas Gerais' },
        { key: 'pa', value: 'PA', text: 'Pará' },
        { key: 'pb', value: 'PB', text: 'Paraíba' },
        { key: 'pr', value: 'PR', text: 'Paraná' },
        { key: 'pe', value: 'PE', text: 'Pernambuco' },
        { key: 'pi', value: 'PI', text: 'Piauí' },
        { key: 'rj', value: 'RJ', text: 'Rio de Janeiro' },
        { key: 'rn', value: 'RN', text: 'Rio Grande do Norte' },
        { key: 'rs', value: 'RS', text: 'Rio Grande do Sul' },
        { key: 'ro', value: 'RO', text: 'Rondônia' },
        { key: 'rr', value: 'RR', text: 'Roraima' },
        { key: 'sc', value: 'SC', text: 'Santa Catarina' },
        { key: 'sp', value: 'SP', text: 'São Paulo' },
        { key: 'se', value: 'SE', text: 'Sergipe' },
        { key: 'to', value: 'TO', text: 'Tocantins' }
    ].sort((a, b) => a.text.localeCompare(b.text));

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Entregador </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    placeholder={"Informe o titulo do produto"}
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        placeholder={"Ex: 99.999.999-9"}
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        placeholder="Ex: 99.999.999-9"
                                        mask="999.999.999-9"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='DT Nascimento'>
                                    <InputMask
                                        required
                                        placeholder="Ex: 13/01/2000"
                                        mask="99/99/9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Fone Celular'>
                                    <InputMask
                                        required
                                        placeholder="81 99999-9999"
                                        mask=""
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Fone Fixo'>
                                    <InputMask
                                        required
                                        placeholder="81 99999-9999"
                                        mask=""
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='QTD Entregas Realizadas'>
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='Valor Por Frete'>
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    width={12}
                                    label='Rua'
                                />

                                <Form.Input
                                    width={4}
                                    label='Número'
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    width={6}
                                    label='Bairro'
                                />

                                <Form.Input
                                    width={6}
                                    label='Cidade'
                                >
                                </Form.Input>

                                <Form.Input
                                    width={6}
                                    label='CEP'
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Select
                                    label={'UF'}
                                    placeholder='Selecione seu estado'
                                    options={estadoOptions}
                                    width={16}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.TextArea
                                    label={'Complemento'}
                                    width={16}
                                />

                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo</label>
                                <Form.Radio
                                    label='Sim'
                                    value='true'
                                    checked={ativo === true}
                                    onChange={(e, { value }) => setAtivo(value === 'true')}
                                />
                                <Form.Radio
                                    label='Não'
                                    value='false'
                                    checked={ativo === false}
                                    onChange={(e, { value }) => setAtivo(value === 'true')}
                                />
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

import InputMask from 'comigo-tech-react-input-mask';
import React, {useEffect, useState} from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from "../../MenuSistema";
import {Link, useLocation, useNavigate} from "react-router-dom";

export default function FormClienteEndereco () {

    const [enderecoRua, setEnderecoRua] = useState('');
    const [enderecoComplemento, setEnderecoComplemento] = useState('');
    const [enderecoNumero, setEnderecoNumero] = useState('');
    const [enderecoBairro, setEnderecoBairro] = useState('');
    const [enderecoCidade, setEnderecoCidade] = useState('');
    const [enderecoCep, setEnderecoCep] = useState('');
    const [enderecoUf, setEnderecoUf] = useState('');

    const [enderecoId, setEnderecoId] = useState(null); // ← NOVO ESTADO

    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (state != null && state.id != null) {
            setIdCliente(state.id);
            carregarEnderecoCliente(state.id);
        }
    }, [state])

    // NOVA FUNÇÃO: Carrega o endereço existente do cliente
    async function carregarEnderecoCliente(clienteId) {
        try {
            const response = await axios.get(`http://localhost:8080/api/cliente/${clienteId}`);
            const cliente = response.data;

            // Verifica se o cliente tem endereços
            if (cliente.enderecos && cliente.enderecos.length > 0) {
                const endereco = cliente.enderecos[0]; // Pega o primeiro endereço
                setEnderecoId(endereco.id);
                setEnderecoRua(endereco.rua || '');
                setEnderecoNumero(endereco.numero || '');
                setEnderecoBairro(endereco.bairro || '');
                setEnderecoCidade(endereco.cidade || '');
                setEnderecoCep(endereco.cep || '');
                setEnderecoUf(endereco.estado || '');
                setEnderecoComplemento(endereco.complemento || '');
            }
        } catch (error) {
            console.log('Erro ao carregar endereço do cliente:', error);
        }
    }

    async function salvar() {
        let enderecoRequest = {
            rua: enderecoRua,
            numero: enderecoNumero,
            bairro: enderecoBairro,
            cidade: enderecoCidade,
            cep: enderecoCep,
            estado: enderecoUf,
            complemento: enderecoComplemento
        }

        try {
            if (enderecoId) {
                // ATUALIZAR endereço existente
                await axios.put(`http://localhost:8080/api/cliente/endereco/${enderecoId}`, enderecoRequest);
                console.log('Endereço do cliente atualizado com sucesso.');
            } else {
                // ADICIONAR novo endereço
                await axios.post(`http://localhost:8080/api/cliente/endereco/${idCliente}`, enderecoRequest);
                console.log('Endereço do cliente adicionado com sucesso.');
            }

            // Redireciona para a lista após salvar
            navigate('/list-cliente');

        } catch (error) {
            console.log('Erro ao salvar endereço:', error);
        }
    }

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

            <MenuSistema tela={'cliente'}/>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    { enderecoRua === '' &&
                        <h2> <span style={{color: 'darkgray'}}> Endereço Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { enderecoRua != '' &&
                        <h2> <span style={{color: 'darkgray'}}> Endereço Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>
                                <Form.Input
                                    width={12}
                                    label='Rua'
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                />

                                <Form.Input
                                    width={4}
                                    label='Número'
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    width={6}
                                    label='Bairro'
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    width={6}
                                    label='Cidade'
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    width={6}
                                    label='CEP'
                                >
                                    <InputMask
                                        required
                                        placeholder="Ex: 99999-999"
                                        mask="99999-999"
                                        value={enderecoCep}
                                        onChange={e => setEnderecoCep(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Select
                                    label={'UF'}
                                    placeholder='Selecione seu estado'
                                    options={estadoOptions}
                                    value={enderecoUf}
                                    onChange={(e, { value }) => setEnderecoUf(value)}
                                    width={16}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.TextArea
                                    label={'Complemento'}
                                    width={16}
                                    value={enderecoComplemento}
                                    onChange={e => setEnderecoComplemento(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Link to={'/list-cliente'}>
                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' /> Voltar
                                </Button>
                            </Link>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
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

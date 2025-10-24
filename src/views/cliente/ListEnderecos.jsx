import axios from 'axios';
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Button, Container, Divider, Header, Icon, Modal, Table, Message} from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListEnderecos() {

    const [enderecos, setEnderecos] = useState([]);
    const [cliente, setCliente] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    const { state } = useLocation();

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {
        await axios.delete('http://localhost:8080/api/cliente/endereco/' + idRemover)
            .then((response) => {
                console.log('Endereço removido com sucesso.')
                carregarEnderecosCliente(state.id); // Recarrega os endereços
            })
            .catch((error) => {
                console.log('Erro ao remover um endereço.')
            })
        setOpenModal(false)
    }

    useEffect(() => {
        if (state != null && state.id != null) {
            carregarEnderecosCliente(state.id);
        }
    }, [state])

    async function carregarEnderecosCliente(clienteId) {
        try {
            const response = await axios.get(`http://localhost:8080/api/cliente/${clienteId}`);
            const clienteData = response.data;
            setCliente(clienteData);
            setEnderecos(clienteData.enderecos || []);
        } catch (error) {
            console.log('Erro ao carregar endereços do cliente:', error)
        }
    }

    return (
        <div>
            <MenuSistema tela={'cliente'}/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified'>

                    <h2>
                        Endereços do Cliente
                        {cliente && ` - ${cliente.nome}`}
                    </h2>
                    <Divider/>

                    <div style={{marginTop: '4%'}}>

                        {/* CORREÇÃO: Mudar para /form-cliente-endereco */}
                        <Button
                            label='Adicionar Endereço'
                            circular
                            color='orange'
                            icon='plus'
                            floated='right'
                            as={Link}
                            to='/form-endereco'
                            state={{
                                id: state?.id,  // ID do cliente específico
                            }}
                        />
                        <br/><br/><br/>

                        {/* Lista de endereços do cliente específico */}
                        {enderecos.length > 0 ? (
                            <Table color='orange' sortable celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Rua</Table.HeaderCell>
                                        <Table.HeaderCell>Número</Table.HeaderCell>
                                        <Table.HeaderCell>Bairro</Table.HeaderCell>
                                        <Table.HeaderCell>Cidade</Table.HeaderCell>
                                        <Table.HeaderCell>Estado</Table.HeaderCell>
                                        <Table.HeaderCell>CEP</Table.HeaderCell>
                                        <Table.HeaderCell>Complemento</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {enderecos.map((endereco) => (
                                        <Table.Row key={endereco.id}>
                                            <Table.Cell>{endereco.rua}</Table.Cell>
                                            <Table.Cell>{endereco.numero}</Table.Cell>
                                            <Table.Cell>{endereco.bairro}</Table.Cell>
                                            <Table.Cell>{endereco.cidade}</Table.Cell>
                                            <Table.Cell>{endereco.estado}</Table.Cell>
                                            <Table.Cell>{endereco.cep}</Table.Cell>
                                            <Table.Cell>{endereco.complemento || '-'}</Table.Cell>
                                            <Table.Cell textAlign='center'>
                                                {/* CORREÇÃO: Mudar para /form-cliente-endereco */}
                                                <Link
                                                    to="/form-endereco"
                                                    state={{
                                                        id: state?.id,           // ID do cliente
                                                        enderecoId: endereco.id  // ID específico do endereço
                                                    }}
                                                    style={{color: 'green'}}
                                                >
                                                    <Button
                                                        inverted
                                                        circular
                                                        color='green'
                                                        title='Editar este endereço'
                                                        icon
                                                    >
                                                        <Icon name='edit' size={"small"}/>
                                                    </Button> &nbsp;
                                                </Link>

                                                <Button
                                                    style={{margin: 0}}
                                                    inverted
                                                    circular
                                                    color='red'
                                                    title='Remover este endereço'
                                                    icon
                                                    onClick={e => confirmaRemover(endereco.id)}
                                                >
                                                    <Icon name='trash'/>
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        ) : (
                            <Message info>
                                <Message.Header>Nenhum endereço cadastrado</Message.Header>
                                <p>Este cliente ainda não possui endereços cadastrados.</p>
                            </Message>
                        )}
                    </div>

                    {/* Botão para voltar à lista de clientes */}
                    <div style={{marginTop: '20px'}}>
                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='blue'
                            as={Link}
                            to="/list-cliente"
                        >
                            <Icon name='reply' /> Voltar para Lista de Clientes
                        </Button>
                    </div>
                </Container>
            </div>

            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{marginTop: '5%'}}> Tem certeza que deseja remover este endereço? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
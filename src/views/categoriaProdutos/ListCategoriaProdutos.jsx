import axios from 'axios';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Divider, Header, Icon, Modal, Table} from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCategoriaProdutos() {

    const [lista, setLista] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/categorias-produtos/' + idRemover)
            .then((response) => {

                console.log('Categoria removida com sucesso.')

                axios.get("http://localhost:8080/api/categorias-produtos")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover uma categoria.')
            })
        setOpenModal(false)
    }

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/categorias-produtos")
            .then((response) => {
                setLista(response.data)
            })
    }

    return (
        <div>
            <MenuSistema tela={'list-categoria-produtos'}/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified'>

                    <h2> Categoria Produtos </h2>
                    <Divider/>

                    <div style={{marginTop: '4%'}}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-categoria-produtos'
                        />
                        <br/><br/><br/>

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={14}>Descrição</Table.HeaderCell>
                                    <Table.HeaderCell width={2} textAlign={"center"}>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(categoria => (

                                    <Table.Row key={categoria.id}>
                                        <Table.Cell>{categoria.descricao}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Link to="/form-categoria-produtos" state={{id: categoria.id}} style={{color: 'green'}}>
                                                <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados deste cliente'
                                                    icon>

                                                    <Icon name='edit' size={"small"}/>

                                                </Button> &nbsp;
                                            </Link>

                                            <Button
                                                style={{margin: 0}}
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cliente'
                                                icon
                                                onClick={e => confirmaRemover(categoria.id)}
                                            >
                                                <Icon name='trash'/>
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
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
                    <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
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


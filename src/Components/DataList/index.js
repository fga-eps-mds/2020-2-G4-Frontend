import React, { useState } from 'react';
import { BsThreeDotsVertical, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Personalbox, TableContent, Name, Box, Ul, Li, Icon, Button,
  P, Content, TableContainer, DotContent,
} from './Style';
import ModalComp from '../ModalComp';

const DataList = ({
  content, getContent, axiosDelete, color, type,
}) => {
  const [optionsMenuState, setOptionsMenuState] = useState(false);
  const [modalState, setModalState] = useState(false);
  // Abrir modal e fechar menu
  const toggleMenu = () => {
    setModalState(true);
    setOptionsMenuState(false);
  };
  // Muda atual estado da modal
  const toggleModal = () => {
    setModalState(!modalState);
  };
  // Fecha o menu
  const closeMenu = () => {
    if (optionsMenuState) {
      setOptionsMenuState(false);
    }
  };

  const deleteContent = async () => {
    await axiosDelete(content._id);
    getContent();
  };

  return (
    <Content onMouseLeave={closeMenu} onClick={closeMenu}>
      <Personalbox>
        <TableContainer>
          <TableContent width={24}>
            <Name color={color}>{content.name}</Name>
          </TableContent>

          <TableContent width={50}>
            <P>{content.description}</P>
          </TableContent>

          <TableContent width={24}>
            <P>{content.updatedAt.slice(0, 10).replaceAll('-', '/')}</P>
          </TableContent>

          <DotContent width={2}>
            <P>
              <BsThreeDotsVertical onClick={() => { setOptionsMenuState(!optionsMenuState); }} />
            </P>
          </DotContent>
        </TableContainer>
      </Personalbox>

      {optionsMenuState ? (
        <Box>
          <Ul>
            <Li>
              <Button onClick={() => { toggleMenu(); }}>
                Editar
              </Button>
              <Icon onClick={() => { toggleMenu(); }}>
                <BsPencil />
              </Icon>
            </Li>
            <Li>
              <Button onClick={deleteContent}>
                Remover
              </Button>
              <Icon onClick={deleteContent}>
                <FaRegTrashAlt />
              </Icon>
            </Li>
          </Ul>
        </Box>
      ) : null}
      {modalState ? <ModalComp show={modalState} type={type} operation="Editar " idName={content.name} idDescription={content.description} getContent={getContent} handleClose={toggleModal} id={content._id} idColor={color} /> : null}
    </Content>
  );
};

export default DataList;

import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';
import { ForwardDiv, ForwardIcon } from './Style';

const SendDemandModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ForwardDiv onClick={handleShow}>
        <p style={{ marginRight: '5px', marginBottom: '0px' }}>
          Encaminhar
        </p>
        <ForwardIcon
          style={{
            color: `${colors.secondary}`,
            backgroundColor: `${colors.navHeaders}`,
            marginRight: '3%',
          }}
        />
      </ForwardDiv>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alerta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você tem certeza que deseja encaminhar essa demanda pra esse setor?
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
          <TinyButton
            type="primary"
            title="Cancelar"
            click={handleClose}
            style={{
              backgroundColor: colors.alertMessages,
              borderColor: colors.alertMessages,
            }}
          />
          <TinyButton
            type="primary"
            title="Confirmar"
            click={handleClose}
            style={{
              backgroundColor: colors.primary,
            }}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SendDemandModal;
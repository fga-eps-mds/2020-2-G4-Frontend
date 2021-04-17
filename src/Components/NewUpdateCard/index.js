import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { createDemandUpdate } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';
import { useProfileUser } from '../../Context';
import {
  Card, TopSide, BottomSide, TextareaComp,
  CheckboxContainer,
} from './Style';
import colors from '../../Constants/colors';

const NewUpdateCard = ({
  demand, userName, getDemandApi, changeState, setChangeState,
}) => {
  const [description, setDescription] = useState('');
  const [visibilityRestriction, setVisibilityRestriction] = useState(true);
  const { user } = useProfileUser();
  const submit = () => {
    createDemandUpdate(userName, description, visibilityRestriction, demand._id, user.sector);
    getDemandApi();
    setDescription('');
  };

  return (
    <Card>
      <TopSide>
        <TextareaComp
          rowsMax={4}
          rowsMin={3}
          aria-label="maximum height"
          placeholder=" Insira uma atualização de demanda."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </TopSide>
      <BottomSide>
        <CheckboxContainer>
          <FormControlLabel
            control={
              (
                <Checkbox
                  value={visibilityRestriction}
                  defaultChecked
                  onClick={() => setVisibilityRestriction(!visibilityRestriction)}
                  inputProps={{ 'aria-label': 'Checkbox A' }}
                  style={{ color: `${colors.navHeaders}` }}
                />
              )
            }
            label="Visível somente para o meu setor"
          />
        </CheckboxContainer>
        <TinyButton
          type="primary"
          title="Adicionar Atualização"
          click={() => { submit(); setChangeState(!changeState); }}
          style={{
            width: 'max-content',
            padding: '0% 3% 0 3%',
          }}
        />
      </BottomSide>
    </Card>
  );
};

export default NewUpdateCard;

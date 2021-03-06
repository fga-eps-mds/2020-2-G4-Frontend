const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: 'black',
    padding: '5%',
  }),
  control: () => ({
    color: 'white',
    display: 'flex',
    borderRadius: '10px',
    border: '1px solid #FFFFFF',
    width: '25vw',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = 'white';
    return {
      ...provided, opacity, transition, color,
    };
  },
};

export default customStyles;

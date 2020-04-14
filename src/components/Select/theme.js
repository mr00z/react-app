import variables from '../../styles/variables.scss';

export default (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: variables.jinn_secondary,
    primary50: variables.jinn_secondary_50,
    primary25: variables.jinn_secondary_25,
  },
});

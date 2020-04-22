import variables from '../../styles/variables.scss';

export default (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: variables.jinn_primary,
    primary50: variables.jinn_primary_50,
    primary25: variables.jinn_primary_25,
  },
});

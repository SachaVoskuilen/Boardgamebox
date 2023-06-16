import { CSSObjectWithLabel } from 'react-select';

export const selectStyle = {
  option: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    fontSize: '14px',
    minWidth: '200px',
    maxWidth: '250px',
  }),
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    fontSize: '14px',
    minWidth: '200px',
    maxWidth: '250px',
  }),
};

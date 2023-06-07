import Select, { GroupBase, OptionsOrGroups, SingleValue } from 'react-select';
import { selectStyle } from '.';
import { SelectType } from '@/types';

export interface SelectorProps {
  options: OptionsOrGroups<any, GroupBase<any>> | undefined;
  handleChange: (updated: string) => void;
  defaultValue: SelectType | SelectType[] | undefined;
}

export function Selector({ options, handleChange, defaultValue }: SelectorProps) {
  return (
    <Select
      options={options}
      onChange={(newValue) => handleChange(newValue!.value)}
      defaultValue={defaultValue}
      styles={selectStyle}
      isSearchable={false}
    />
  );
}

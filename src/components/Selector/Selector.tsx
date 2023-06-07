import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import { selectStyle } from '.';
import { OptionType } from '@/types';

export interface SelectorProps {
  options: OptionsOrGroups<OptionType, GroupBase<OptionType>> | undefined;
  handleChange: (updated: string) => void;
  defaultValue: OptionType | OptionType[] | undefined;
}

export function Selector({ options, handleChange, defaultValue }: SelectorProps) {
  return (
    <Select
      options={options}
      onChange={(newValue) => handleChange(newValue ? newValue.value : '')}
      defaultValue={defaultValue}
      styles={selectStyle}
      isSearchable={false}
    />
  );
}

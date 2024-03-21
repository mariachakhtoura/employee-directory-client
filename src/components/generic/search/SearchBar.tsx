import { InputText } from 'primereact/inputtext';
import { ISearchBarProps } from './model';

const SearchBar = ({ value, placeholder, onSearch }: ISearchBarProps) => {
  return (
    <div className='flex justify-content-between align-items-center'>
      <span className='w-full p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText
          className='w-full max-w-20rem'
          value={value}
          onChange={(event) => {
            onSearch(event.target.value);
          }}
          placeholder={placeholder}
        />
      </span>
    </div>
  );
};

export default SearchBar;

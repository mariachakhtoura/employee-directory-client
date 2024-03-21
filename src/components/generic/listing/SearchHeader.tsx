import { InputText } from "primereact/inputtext";
import { useState } from "react";

const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className='flex justify-content-between align-items-center'>
      <span className='p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
          placeholder='Search employees'
        />
      </span>
    </div>
  );
}

export default SearchHeader;
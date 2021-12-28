import React from 'react';

export interface SearchBoxProps {
  onSearchKeywordChange?: (keyword: string) => void;
}

export function SearchBox(props: SearchBoxProps) {
  const [searchKeyword, setSearchKeyword] = React.useState<string>('');

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!props?.onSearchKeywordChange) {
      throw new Error('onSearchKeywordChange is required to get random album');
    }
    console.log('onInputChange: ' + e.target.value);
    props?.onSearchKeywordChange(e.target.value);
    setSearchKeyword(e.target.value);
  }

  return (
    <input className="rounded-md" value={searchKeyword} onChange={onInputChange} placeholder='Type any string here'></input>
  )
}

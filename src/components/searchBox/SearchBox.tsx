import React from 'react';

export interface SearchBoxProps {
  onSearchKeywordChange?: (keyword: string) => void;
}

export function SearchBox(props?: SearchBoxProps) {

  async function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!props?.onSearchKeywordChange) {
      return;
    }
    console.log('onInputChange: ' + e.target.value);
    props?.onSearchKeywordChange(e.target.value);
  }

  return (
    <input className="rounded-md" onChange={onInputChange} placeholder='Type any string here'></input>
  )
}

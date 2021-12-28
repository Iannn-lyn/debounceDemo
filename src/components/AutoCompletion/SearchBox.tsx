import React from 'react';
import { getPhotoById } from '../../queries/mockQueries';
import { generateNumberFromStringWithSha256 } from '../../utils/hashHelper';

export interface SearchBoxProps {
  onSearchKeywordChange?: () => void;
}

export function SearchBox(props?: SearchBoxProps) {

  function getPhotoIdFromSha256(generatedSha256: number[]): number {
    /** JSON placeholder contains 5000 photos
     * https://jsonplaceholder.typicode.com/
     */
    const MAX_PHOTO_NUMBER = 5000;
    return Number(generatedSha256.slice(0, 4).join('')) % MAX_PHOTO_NUMBER;
  }

  async function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const generatedSha256 = generateNumberFromStringWithSha256(e.target.value);
    const photoId = getPhotoIdFromSha256(generatedSha256);
    const res = await getPhotoById(photoId);
    console.log('onInputChange: ' + e.target.value);
    console.log(JSON.stringify(res, null, 2));
  }

  return (
    <input onChange={onInputChange}></input>
  )
}

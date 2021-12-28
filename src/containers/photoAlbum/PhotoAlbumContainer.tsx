import React from 'react';
import { Album } from '../../components/album/Album';
import { SearchBox } from '../../components/searchBox';
import { getPhotoById } from '../../queries/mockQueries';
import { generateNumberFromStringWithSha256 } from '../../utils/hashHelper';
import '../../index.css';

export function PhotoAlbumContainer() {

  const [photo, setPhoto] = React.useState(undefined);

  function getPhotoIdFromSha256(generatedSha256: number[]): number {
    /** JSON placeholder contains 5000 photos
     * https://jsonplaceholder.typicode.com/
     */
    const MAX_PHOTO_NUMBER = 5000;
    return Number(generatedSha256.slice(0, 4).join('')) % MAX_PHOTO_NUMBER;
  }

  function onSearchKeywordChange(keyword: string) {
    if (keyword === undefined || keyword === '') {
      setPhoto(undefined);
    }
    const generatedSha256 = generateNumberFromStringWithSha256(keyword);
    const photoId = getPhotoIdFromSha256(generatedSha256);
    const res = getPhotoById(photoId);
    res.then((response) => {
      console.log(JSON.stringify(response, null, 2));
      setPhoto(response);
    })
  }

  return <div>
    <div>
      <SearchBox onSearchKeywordChange={onSearchKeywordChange} />
      <Album photo={photo}/>
    </div>
  </div>
}

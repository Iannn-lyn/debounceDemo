import React from 'react';
import { Album } from '../../components/album/Album';
import { SearchBox } from '../../components/searchBox';
import { getPhotoById } from '../../queries/mockQueries';
import { generateNumberFromStringWithSha256 } from '../../utils/hashHelper';
import { TrackerPad } from '../../components/requestTracker';
import debounce from 'lodash/debounce';

export function PhotoAlbumContainer() {

  console.log('render PhotoAlbumContainer');
  const [photo, setPhoto] = React.useState(undefined);
  const [requestCounter, setRequestCounter] = React.useState(0);
  const [keywordCounter, setKeyworkCounter] = React.useState(0);

  function getPhotoIdFromSha256(generatedSha256: number[]): number {
    /** JSON placeholder contains 5000 photos
     * https://jsonplaceholder.typicode.com/
     */
    const MAX_PHOTO_NUMBER = 5000;
    return Number(generatedSha256.slice(0, 4).join('')) % MAX_PHOTO_NUMBER;
  }

  const incrementalRequestCounter = () => setRequestCounter(prevCount => prevCount + 1)
  const incrementalKeywordChangeCounter = () => setKeyworkCounter(prevCount => prevCount + 1)

  const debouncedGetPhotoQuery = React.useCallback(debounce((photoId) => {
      getPhotoById(photoId).then(response => {
        console.log(JSON.stringify(response, null, 2));
        setPhoto(response);
        incrementalRequestCounter();
      });
    }, 500, {
      trailing: true,
      leading: false
    }), []);

  function onSearchKeywordChange(keyword: string) {
    incrementalKeywordChangeCounter();
    if (keyword === undefined || keyword === '') {
      setPhoto(undefined);
      return;
    }
    const generatedSha256 = generateNumberFromStringWithSha256(keyword);
    const photoId = getPhotoIdFromSha256(generatedSha256);
    console.log('onSearchKeywordChange\n' + photoId);
    debouncedGetPhotoQuery.cancel;
    debouncedGetPhotoQuery(photoId);
  }

  return <div className='min-h-screen'>
    <SearchBox onSearchKeywordChange={onSearchKeywordChange} />
    <Album photo={photo} />
    <TrackerPad requestCounter={requestCounter} keywordChangeCounter={keywordCounter} />
  </div>
}

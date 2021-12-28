import React from 'react';

/**
 * "data": {
    "albumId": 63,
    "id": 3135,
    "title": "dolor dolorem expedita ut",
    "url": "https://via.placeholder.com/600/71c02",
    "thumbnailUrl": "https://via.placeholder.com/150/71c02"
  },
 */
/**
 * Defined property for a photo.
 * Each photo contains the property from JSON placeholder photo api
 * https://jsonplaceholder.typicode.com/
 */
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface AlbumProps {
  photo?: Photo;
}

export function Album(props: AlbumProps) {
  const { photo } = props;
  console.log('photo\n' + JSON.stringify(photo));
  return photo ? <div className='my-5 py-2 px-8 max-w-md mx-auto bg-gray-300 rounded-xl max-h-48 grid grid-cols-3 gap-4 overflow-hidden'>
    <img className='rounded-full w-20 h-20 col-span-1' src={photo.thumbnailUrl}></img>
    <p className='w-auto h-20 col-span-2 my-auto text-left py-2 py-auto'>{photo.title}</p>
    <img className='object-fill h-20 w-96 rounded-lg col-span-3' src={photo.url}></img>
  </div> : null;
}
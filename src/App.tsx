import React from 'react';
import { PhotoAlbumContainer } from './containers/photoAlbum';
import './index.css'; // Import Tailwind css module at top level

function App() {
  return (
    <div className='max-w-2xl mx-auto bg-gray-500 rounded-xl shadow-md md:max-w-2xl text-center min-h-screen my-10'>
      <h1 className='text-zinc-100 text-xl pb-2'>Get a random color block album</h1>
      <PhotoAlbumContainer />
    </div>
  );
}

export default App;

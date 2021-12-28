import React from 'react';

export interface TrackerPadProps {
  requestCounter: number;
  keywordChangeCounter: number;
}

export function TrackerPad(props: TrackerPadProps) {
  return <div className='bg-sky-200 rounded-lg h-20 w-60 text-center mb-0 mx-auto my-2 absolute bottom-0 right-0'>
    <p>Request counter: {props.requestCounter}</p>
    <p>Keyword change counter: {props.keywordChangeCounter}</p>
  </div>
}
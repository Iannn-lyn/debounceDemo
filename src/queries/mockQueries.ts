import axios from 'axios';
import { JSON_PLACEHOLDER_URL } from '../utils/url';

/** Query for random photos */
export async function getPhotoById(id: number) {
  const PHOTO = 'photos';
  const photoUrl = new URL(`${JSON_PLACEHOLDER_URL}/${PHOTO}/${id.toString()}`);
  try {
    const res = await axios.get(photoUrl.toString());
    return res;
  } catch (e) {
    // TODO 12/27 Showing the error to users.
    console.log(e);
  }
}

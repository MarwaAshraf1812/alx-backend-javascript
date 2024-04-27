import {uploadPhoto, createUser} from './utils';

export default async function asyncUploadUser() {
  let results = [];

  try {
    const image = await uploadPhoto();
    const user = await createUser();
    results = {image, user};
  } catch (error) {
    results = {image: null, user: null};
  }

  return results;
}

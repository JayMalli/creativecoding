import { firebase } from "../lib/firebase";

export async function getAllProjectsImages() {
  try {
    const result = firebase
      .storage()
      .ref("creativecoding")
      .child("img")
      .listAll();

    const downloadURLs = await Promise.all(
      (
        await result
      ).items.map(async (img) => {
        try {
          const url = await img.getDownloadURL();
          return url;
        } catch (err) {
          console.log(err.message);
          return null;
        }
      })
    );
    return downloadURLs;
  } catch (error) {
    console.log(error.message);
    // Handle the error as needed
    return [];
  }
}

export async function getAllProjectsVideos() {
  try {
    const result = firebase
      .storage()
      .ref("creativecoding")
      .child("video")
      .listAll();

    const downloadURLs = await Promise.all(
      (
        await result
      ).items.map(async (video) => {
        try {
          const url = await video.getDownloadURL();
          return url;
        } catch (err) {
          console.log(err.message);
          return null;
        }
      })
    );
    return downloadURLs;
  } catch (error) {
    console.log(error.message);
    // Handle the error as needed
    return [];
  }
}

export async function getAllProjectsDetails() {
  try {
    const result = await firebase
      .firestore()
      .collection("creativecoding")
      .get();
    return result.docs.map((item) => ({ ...item.data(), id: item.id }));
  } catch (ex) {
    console.log(ex.mesage);
  }
  return [];
}

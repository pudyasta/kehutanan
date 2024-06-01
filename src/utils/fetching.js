import { axiosInstance } from "./axios";

export const fetchPosts = async () => {
  const res = await axiosInstance.get(`/posts/?populate=*`);
  return res.data;
};
export const fetchVote = async () => {
  const res = await axiosInstance.get(`/votes/?populate=*`);
  return res.data;
};

export const fetchGalleryIntro = async () => {
  const res = await axiosInstance.get(
    `/galleries/?populate=*&?pagination[start]=0&pagination[limit]=3`
  );
  return res.data;
};

import { axiosInstance } from "./axios";

export const fetchPosts = async () => {
  const res = await axiosInstance.get(`/posts/?populate=*`);
  return res.data;
};
export const fetchVote = async () => {
  const res = await axiosInstance.get(`/votes/?populate=*`);

  const countMap = res.data.data.reduce((acc, item) => {
    acc[item.attributes.post_id] = (acc[item.attributes.post_id] || 0) + 1;
    return acc;
  }, {});

  const sortedPostIdsWithCount = Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => ({ id: parseInt(entry[0]), count: entry[1] }));
  return sortedPostIdsWithCount;
};

export const fetchGalleryIntro = async () => {
  const res = await axiosInstance.get(
    `/galleries/?populate=*&?pagination[start]=0&pagination[limit]=3`
  );
  return res.data;
};

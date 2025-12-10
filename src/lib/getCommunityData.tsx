import { type CommunityPostData } from "@/types/CommunityPostData";
import data from "@/data/data.json";
import community1 from "@/assets/community1.webp";
import community2 from "@/assets/community2.webp";
import community3 from "@/assets/community3.webp";
import community4 from "@/assets/community4.webp";

const communityImages = [community1, community2, community3, community4];
const communityData = data.community.post;

const communityPosts: CommunityPostData[] = communityData.map((post, i) => {
  return {
    image: communityImages[i],
    title: post.title,
    tags: post.tags,
    author: post.author,
    timestamp: post.timestamp,
    views: post.views,
    likes: post.likes,
    comments: post.comments,
  };
});

export default communityPosts;

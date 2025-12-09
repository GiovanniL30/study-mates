import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

interface CommunityPostProps {
  image: string;
  title: string;
  tags: string[];
  author: string;
  timestamp: string;
  views: string;
  likes: string;
  comments: string;
}

const CommunityPost = ({ image, title, tags, author, timestamp, views, likes, comments }: CommunityPostProps) => {
  return (
    <div className="flex gap-2 bg-q-header p-4 rounded-md text-white">
      <img className="h-[150px] w-[150px] rounded-md" src={image} alt="Post Picture" />
      <div className="flex flex-col justify-between gap-1 w-full">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">{title}</h1>
            <div className="flex gap-0.5">
              {tags.map((tag, i) => {
                return (
                  <div key={i} className="text-xs opacity-70 font-extralight bg-q-body px-2 py-0.5 rounded-full">
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
          <CiHeart size={36} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="p-1 rounded-full bg-white">
              <IoPersonOutline size={24} color="black" />
            </div>
            <div className="flex flex-col gap">
              <span className="font-semibold">{author}</span>
              <span className="text-xs font-extralight">{timestamp}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-sm font-light">{views + " Views"}</span>
            <span className="text-sm font-light">{likes + " Likes"}</span>
            <span className="text-sm font-light">{comments + " Comments"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;

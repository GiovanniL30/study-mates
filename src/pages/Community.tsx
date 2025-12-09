import Card from "@/components/ui/Card";
import CommunityDisplay from "@/components/ui/CommunityDisplay";
import data from "@/data/data.json";
import { IoPersonOutline } from "react-icons/io5";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import communityPosts from "@/lib/getCommunityData";
import CommunityPost from "@/components/ui/CommunityPost";

const Community = () => {
  const primaryCommunity = data.community.primary;
  const popularCommunity = data.community.popular;
  const pinnedCommunity = data.community.pinned;
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-[25%]">
        <Card className="flex flex-col gap-1 bg-q-header">
          {primaryCommunity.map((com, i) => {
            return <CommunityDisplay key={i} title={com.title} description={com.description} />;
          })}
        </Card>
        <Card className="flex flex-col gap-1 bg-q-header">
          <h1 className="text-white font-bold text-xl">Popular Tags</h1>
          {popularCommunity.map((com, i) => {
            return <CommunityDisplay key={i} title={com.title} description={com.description} />;
          })}
        </Card>
        <Card className="flex flex-col gap-1 bg-q-header">
          <h1 className="text-white font-bold text-xl">Pinned Groups</h1>
          {pinnedCommunity.map((com, i) => {
            return <CommunityDisplay key={i} title={com.title} description={com.description} />;
          })}
        </Card>
      </div>
      <div className="flex flex-col gap-2 w-[75%]">
        <Card className="flex gap-2 bg-q-header">
          <div className="flex gap-1 w-full">
            <div className="p-2 rounded-full border bg-white">
              <IoPersonOutline size={24} />
            </div>
            <Input className="bg-white rounded w-full" placeholder="Share what you feel!" />
          </div>
          <Button className="bg-orange-500 hover:cursor-pointer" label={"Post"} />
        </Card>
        {communityPosts.map((post, i) => {
          return (
            <CommunityPost
              key={i}
              image={post.image}
              title={post.title}
              tags={post.tags}
              author={post.author}
              timestamp={post.timestamp}
              views={post.views}
              likes={post.likes}
              comments={post.comments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Community;

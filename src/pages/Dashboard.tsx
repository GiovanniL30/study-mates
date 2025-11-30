import { ContentWrapper } from "@/components/ui/Wrapper";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import ForumDisplay from "@/components/ui/ForumDisplay";
import Table, { type TableHeader } from "@/components/ui/Table";
import data from "@/data/data.json";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { RiProgress6Line } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";

const Dashboard = () => {
  const tableData = data.task;
  const forumData = data.forums;
  const tableHeaders: TableHeader[] = [
    { label: "No", key: "no" },
    { label: "Task", key: "task" },
    { label: "Course", key: "course" },
    { label: "Status", key: "status" },
  ];

  return (
    <ContentWrapper>
      <div className="grid grid-cols-3 grid-rows-8 gap-2">
        <Card className="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-between items-center">
          <div className="flex flex-col gap-2 w-[50%]">
            <h1 className="font-semibold text-3xl">Hey Student!</h1>
            <p className="font-extralight">
              Welcome back! We're here to support you on your learning journey. Dive into your classes and keep
              progressing towards your goals.
            </p>
          </div>
          <span>Image Here</span>
        </Card>
        <Card className="col-start-3 col-end-4 row-start-1 row-end-4">Calendar Small Card</Card>
        <Card className="col-start-1 col-end-3 row-start-3 row-end-5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Assignments</h1>
            <Input className="bg-gray-100 rounded-xl" placeholder="Search by Subject" />
          </div>
          <Table data={tableData} headers={tableHeaders} />
        </Card>
        <Card className="col-start-3 col-end-4 row-start-4 row-end-7">Attendance Small Card</Card>
        <Card className="col-start-1 col-end-2 row-start-5 row-end-9 flex flex-col gap-2">
          <h1 className="font-semibold">Forums</h1>
          <div className="flex flex-col gap-2">
            {forumData.map((forum, i) => {
              return <ForumDisplay key={i} forumTitle={forum.forumTitle} postedBy={forum.postedBy} />;
            })}
          </div>
        </Card>
        {/* Create own card components for this grid pag sinipag */}
        <Card className="col-start-2 col-end-3 row-start-5 row-end-7 ">
          <div className="grid grid-cols-2 grid-rows-2 place-items-center h-full gap-2">
            <Card className="flex flex-col items-center shadow w-full">
              <div className="flex gap-2 items-center">
                <FaPeopleGroup />
                <span className="text-2xl font-semibold">80%</span>
              </div>
              <h2 className="text-sm font-extralight text-gray-400">Attendance</h2>
            </Card>
            <Card className="flex flex-col items-center shadow w-full">
              <div className="flex gap-2 items-center">
                <GoChecklist />
                <span className="text-2xl font-semibold">258</span>
              </div>
              <h2 className="text-sm font-extralight text-gray-400">Task Completed</h2>
            </Card>
            <Card className="flex flex-col items-center shadow w-full">
              <div className="flex gap-2 items-center">
                <RiProgress6Line />
                <span className="text-2xl font-semibold">67%</span>
              </div>
              <h2 className="text-sm font-extralight text-gray-400">Task in Progress</h2>
            </Card>
            <Card className="flex flex-col items-center shadow w-full">
              <div className="flex gap-2 items-center">
                <FaMedal />
                <span className="text-2xl font-semibold">264</span>
              </div>
              <h2 className="text-sm font-extralight text-gray-400">Reward Points</h2>
            </Card>
          </div>
        </Card>
        <Card className="col-start-2 col-end-3 row-start-7 row-end-9">Resources Mini Card</Card>
        <Card className="col-start-3 col-end-4 row-start-7 row-end-9">Notice Board</Card>
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;

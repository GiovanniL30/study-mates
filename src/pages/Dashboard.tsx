import { useState } from "react";
import { ContentWrapper } from "@/components/ui/Wrapper";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import ForumDisplay from "@/components/ui/ForumDisplay";
import NoticeDisplay from "@/components/ui/NoticeDisplay";
import Table, { type TableHeader } from "@/components/ui/Table";
import data from "@/data/data.json";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { RiProgress6Line } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import dashboard1 from "@/assets/dashboard1.webp";
import Calendar from "react-calendar";
import { FaCircle } from "react-icons/fa";

const Dashboard = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const changeDateValue = (nextValue: Date) => {
    setDateValue(nextValue);
  };
  const tableData = data.task;
  const forumData = data.forums;
  const noticeData = data.notices;
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
          <div className="flex flex-col gap-2 w-[70%]">
            <h1 className="font-semibold text-3xl">Hey Student!</h1>
            <p className="font-extralight">
              Welcome back! We’re excited to have you here and ready to support you on your learning journey. Jump back into your classes, stay
              motivated, and keep working toward the accomplishments you’re aiming for!
            </p>
          </div>
          <img className="rotate-y-180 size-[200px]" src={dashboard1} alt="Guy sitting on chair" />
        </Card>
        <Card className="col-start-3 col-end-4 row-start-1 row-end-3 flex items-center justify-center h-fit">
          <Calendar className={"text-center text-lg flex flex-col gap-2 font-extralight"} onChange={() => changeDateValue} value={dateValue} />
        </Card>
        <Card className="col-start-1 col-end-3 row-start-3 row-end-5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Assignments</h1>
            <Input className="bg-gray-100 rounded-xl" placeholder="Search by Subject" />
          </div>
          <Table data={tableData} headers={tableHeaders} />
        </Card>
        <Card className="col-start-3 col-end-4 row-start-3 row-end-5 flex flex-col gap-6">
          <h1 className="font-semibold">Attendance</h1>
          <div className="flex flex-col gap-2">
            <div className="p-2 flex rounded-full">
              <div className="bg-green-500 w-[76%] text-green-500 rounded-l-full">1</div>
              <div className="bg-red-500 w-[24%] rounded-r-full"></div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex gap-2 items-center">
                <FaCircle color="oklch(72.3% 0.219 149.579)" />
                <span className="text-sm font-light">Present</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircle color="fb2c36" />
                <span className="text-sm font-light">Absent</span>
              </div>
            </div>
            <div className="flex gap-2 justify-evenly text-sm">
              <span className="text-center text-sm font-light">
                Total School Days <br />
                100
              </span>
              <span className="text-center text-sm font-light">
                Present Days <br />
                76
              </span>
              <span className="text-center text-sm font-light">
                Absent Days <br />
                24
              </span>
            </div>
          </div>
        </Card>
        <Card className="col-start-1 col-end-2 row-start-5 row-end-9 flex flex-col gap-2">
          <h1 className="font-semibold">Forums</h1>
          <div className="flex flex-col gap-2">
            {forumData.map((forum, i) => {
              return <ForumDisplay key={i} forumTitle={forum.forumTitle} postedBy={forum.postedBy} />;
            })}
          </div>
        </Card>
        {/* Create own card components for this grid pag sinipag */}
        <Card className="col-start-2 col-end-3 row-start-5 row-end-7">
          <div className="grid grid-cols-2 grid-rows-2 place-items-center h-full gap-2">
            <Card className="flex flex-col items-center shadow w-full">
              <div className="flex gap-2 items-center">
                <FaPeopleGroup />
                <span className="text-2xl font-semibold">80%</span>
              </div>
              <h2 className="text-sm font-extralight text-gray-400">Friendly</h2>
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
        <Card className="col-start-2 col-end-3 row-start-7 row-end-9">
          <div className="flex gap-2 h-full justify-evenly items-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="p-4 bg-[#fef4f0] rounded-2xl hover:cursor-pointer">
                <FaBook size={48} color="brown" />
              </div>
              <span className="text-xl font-semibold">Books</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="p-4 bg-[#d7fbed] rounded-2xl hover:cursor-pointer">
                <FaVideo size={48} />
              </div>
              <span className="text-xl font-semibold">Videos</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="p-4 bg-[#e2d8fc] rounded-2xl hover:cursor-pointer">
                <IoIosDocument size={48} color="white" />
              </div>
              <span className="text-xl font-semibold">Papers</span>
            </div>
          </div>
        </Card>
        <Card className="col-start-3 col-end-4 row-start-5 row-end-9">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Notice Board</h1>
            {noticeData.map((notice, i) => {
              return <NoticeDisplay key={i} title={notice.title} description={notice.description} />;
            })}
          </div>
        </Card>
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;

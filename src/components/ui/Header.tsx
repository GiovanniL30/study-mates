import Input from "@/components/ui/Input";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { RiMessage3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import IconContainer from "@/components/ui/IconContainer";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between ">
      <div className="flex gap-2 w-[30%]">
        <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-md bg-white shadow hover:cursor-pointer">
          <IoMdArrowBack />
        </button>
        <Input className="rounded-2xl w-full bg-white" placeholder={"Search"} />
      </div>
      <div className="flex gap-2 items-center">
        <IconContainer>
          <CiBellOn />
        </IconContainer>
        <IconContainer>
          <RiMessage3Line />
        </IconContainer>
        <IconContainer>
          <IoSettingsOutline />
        </IconContainer>
        <IconContainer>
          <IoPersonOutline />
        </IconContainer>
      </div>
    </header>
  );
};

export default Header;

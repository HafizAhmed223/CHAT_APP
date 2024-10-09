import React, { useState } from "react";
import userIcon from "../../asserts/userIcon.png";
import Icon from "../../asserts/call_Icon.svg";
import Add from "../../asserts/add.svg";
import Send from "../../asserts/send.svg";
import Input from "../../components/Input";
const Dashboard = () => {
  const users = [
    { id: 1, image: userIcon, status: "Available", name: "Ali" },
    { id: 2, image: userIcon, status: "Available", name: "John" },
    { id: 3, image: userIcon, status: "Available", name: "Harry" },
    { id: 4, image: userIcon, status: "Available", name: "Fahad" },
    { id: 5, image: userIcon, status: "Available", name: "Umer" },
  ];
  const [data, setData] = useState({ inputField: "" });
  console.log("Data=>>", data);
  return (
    <div className="w-screen flex">
      <div className="w-[25%] bg-secondary ">
        <div className="">
          <div className="flex justify-center py-5">
            <div className="w-[75] h-[75] border-gray-300 border-2 rounded-full mr-3">
              <img src={userIcon} alt="Avatar" />
            </div>
            <div className="flex flex-col cursor-pointer">
              <p className="text-2xl font-semibold">Chat App</p>
              <p className="text-lg font-light">My Account</p>
            </div>
          </div>
          <hr />
          <div className="ml-12 mt-4 mx-8">
            <div className="text-primary text-lg font-semibold">Messages</div>
            {users.map(({ name, status, image }) => {
              return (
                <div className="flex py-6  border-b border-gray-300">
                  <div className="w-[50px] h-[50px] rounded-full mr-3">
                    <img src={image} alt="Avatar" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-sm font-light">{status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen flex flex-col items-center bg-white">
        <div className="w-[75%] h-[60px] rounded-full bg-secondary flex items-center mt-14 px-14 py-3">
          <img
            className="w-[50px] h-[50px] rounded-full border border-gray-300 cursor-pointer"
            src={userIcon}
            alt="Avatar"
          />
          <div className="ml-6 mr-auto">
            <p className="text-lg font-semibold">Alexander</p>
            <p className="text-sm font-light">online</p>
          </div>
          <img
            className="w-[30px] h-[30px] cursor-pointer"
            src={Icon}
            alt="call_icon"
          />
        </div>
        <div className="h-[85%] w-full overflow-scroll border-b-0 overflow-y-auto overflow-x-hidden ">
          {/* <div className="h-[85%] w-full overflow-scroll border-b-0 scrollbar scrollbar-thumb-blue-400 scrollbar-track-blue-100 overflow-y-auto overflow-x-hidden"> */}
          <div className="p-14">
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-6 mr-auto p-3">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
            <div className="max-w-[40%] bg-primary text-white mb-6 rounded-b-xl rounded-tl-xl ml-auto p-3">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-6 mr-auto p-3">
              Lorem ipsum dolor sit amet,
            </div>
            <div className="max-w-[40%] bg-primary text-white mb-6 rounded-b-xl rounded-tl-xl ml-auto p-3">
              Lorem ipsum dolor sit amet,
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-6 mr-auto p-3">
              Lorem ipsum dolor sit amet,
            </div>
            <div className="max-w-[40%] bg-primary text-white mb-6 rounded-b-xl rounded-tl-xl ml-auto p-3">
              Lorem ipsum dolor sit amet,
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-6 mr-auto p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="max-w-[40%] bg-primary text-white mb-6 rounded-b-xl rounded-tl-xl ml-auto p-3">
              Lorem ipsum dolor
            </div>
          </div>
        </div>
        <div className="p-14 w-full flex items-center">
          <Input
            placeholder="type a message..."
            inputClassName=" rounded-full w-[500px] max-w-[95%] h-[45px] px-6 border-0 shadow-md"
            value={data.inputField}
            onChange={(e) => setData({ ...data, inputField: e.target.value })}
          />
          <div className="flex ml-auto pr-14">
            <img
              className="rounded-full w-[35px] h-[35px] mx-3 bg-secondary cursor-pointer shadow-md"
              src={Send}
              alt="SendIcon"
            />
            <img
              className="rounded-full w-[35px] h-[35px] bg-secondary cursor-pointer shadow-md"
              src={Add}
              alt="AddIcon"
            />
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-secondary"></div>
    </div>
  );
};

export default Dashboard;

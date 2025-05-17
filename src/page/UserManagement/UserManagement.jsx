import { Modal, Table } from "antd";
import ActiveListings from "./ActiveListings";
import UserStats from "./UserStatics";
import { useState } from "react";
import { MdBlockFlipped } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import AllUser from "./AllUser";
import BlockUser from "./BlockUser";

const UserManagement = () => {
    const [activeTab, setActiveTab] = useState("list");
    return (
        <div>
            <div>
                User Management
            </div>

            <div className="flex gap-4 mt-6  border-b">
                <button
                    onClick={() => setActiveTab("list")}
                    className={`${activeTab === "list"
                            ? " border-t border-l border-r bg-[#DCFCE7] text-[#205D39] border-b-white border-[#205D39] rounded-t"
                            : "bg-transparent"
                        } lg:px-7 py-1 text-lg`}
                >
                   All User
                </button>
                <button
                    onClick={() => setActiveTab("calendar")}
                    className={`${activeTab === "calendar"
                            ? " border-t border-l border-r bg-[#DCFCE7] text-[#205D39] border-b-white border-[#205D39] rounded-t"
                            : "bg-transparent"
                        } lg:px-7 py-1 text-lg`}
                >
                    Blocked User
                </button>
            </div>


           <div className="mt-4">
             {activeTab === "list" && (
                <>
                    {/* Pagination Codntrols */}

                    <AllUser></AllUser>
                </>
            )}

            {activeTab === "calendar" && (
                <div className="">
                    {/* Calendar View */}
                    <BlockUser></BlockUser>
                </div>
            )}
           </div>




        </div>
    );
};

export default UserManagement;

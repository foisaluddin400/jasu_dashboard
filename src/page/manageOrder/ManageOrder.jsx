import React, { useState } from 'react'
import NewOrder from './NewOrder';
import Shipped from './Shipped';
import Completed from './Completed';

const ManageOrder = () => {
    const [activeTab, setActiveTab] = useState("list");
    return (
        <div className='h-screen'>
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
                    New Order
                </button>
                <button
                    onClick={() => setActiveTab("calendar")}
                    className={`${activeTab === "calendar"
                        ? " border-t border-l border-r bg-[#DCFCE7] text-[#205D39] border-b-white border-[#205D39] rounded-t"
                        : "bg-transparent"
                        } lg:px-7 py-1 text-lg`}
                >
                    Shipped
                </button>
                  <button
                    onClick={() => setActiveTab("complete")}
                    className={`${activeTab === "complete"
                        ? " border-t border-l border-r bg-[#DCFCE7] text-[#205D39] border-b-white border-[#205D39] rounded-t"
                        : "bg-transparent"
                        } lg:px-7 py-1 text-lg`}
                >
                    Complete
                </button>
            </div>


            <div className="mt-4">
                {activeTab === "list" && (
                    <>
                        {/* Pagination Codntrols */}

                        <NewOrder></NewOrder>
                    </>
                )}

                {activeTab === "calendar" && (
                    <div className="">
                        {/* Calendar View */}
                        <Shipped></Shipped>
                    </div>
                )}
                 {activeTab === "complete" && (
                    <div className="">
                        {/* Calendar View */}
                        <Completed></Completed>
                    </div>
                )}
            </div>




        </div>
    )
}

export default ManageOrder
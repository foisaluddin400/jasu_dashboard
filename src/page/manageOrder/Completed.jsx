import React from 'react'
import { Modal, Select, Table } from "antd";
import img1 from '../../assets/header/img1.png';
import { useState } from "react";
import { MdBlockFlipped } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Completed = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModal2 = () => {
        setIsModalOpen2(true);
    };


    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };
    const dataSource = [
        {
            key: "1",
            name: "Fddddloyd Miles",
            orderedItem: "Apple Concentrate - Guava",
            price: "$120.00",
            date: "2025-04-10",
            qty: 1,
            orderStatus: "Processing",
            email: "danten@mail.ru",
            phone: "+1 123 456 7890",
            location: "Shiloh, Hawaii",
        },
        {
            key: "2",
            name: "Arlene McCoy",
            orderedItem: "Apple Concentrate - Guava",
            price: "$120.00",
            date: "2025-04-10",
            qty: 1,
            orderStatus: "Processing",
            email: "cedennar@gmail.com",
            phone: "+1 987 654 3210",
            location: "Shiloh, Hawaii",
        },
        // Add other orders similarly
    ];

    const columns = [
        { title: "No", dataIndex: "key", key: "key" },
        {
            title: "Ordered By",
            key: "name",
            render: (_, record) => (
                <div className="flex items-center gap-3">
                    <img
                        src={`https://avatar.iran.liara.run/public/${record.key}`} // Replace with actual avatar URL
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User Avatar"
                    />
                    <span>{record.name}</span>
                </div>
            ),
        },
        { title: "Ordered Item", dataIndex: "orderedItem", key: "orderedItem" },
        { title: "Price", dataIndex: "price", key: "price" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Quantity", dataIndex: "qty", key: "qty" },
        {
            title: "Order Status",
            key: "actproccession",
            render: (_, record) => {
                return (
                    <div className="flex gap-2">
                        <Select
                            labelInValue
                            defaultValue={{ value: 'process', label: 'Processing' }}
                            style={{ width: 120 }}
                      
                            options={[
                                {
                                    value: 'process',
                                    label: 'Processing',
                                },
                                {
                                    value: 'shipped',
                                    label: 'Shipped',
                                },
                                 {
                                    value: 'completed',
                                    label: 'Completed',
                                },
                            ]}
                        />
                    </div>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => {
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => showModal2(record)}
                            className="border border-[#14803c] rounded-lg p-1 bg-[#d3e8e6] text-[#14803c]"
                        >
                            <FaRegEye className="w-8 h-8 text-[#14803c]" />
                        </button>
                    </div>
                );
            },
        },
    ];
    return (
        <div className=''>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 10 }}
                scroll={{ x: "max-content" }}
            />

            <Modal
                open={isModalOpen2}
                centered
                onCancel={handleCancel2}
                footer={null}
            >
                <div className="w-full max-w-md  p-5 relative mx-auto">
                    {/* Profile header */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="border mb-3">
                            <img
                                src={img1}
                                alt="Profile avatar"
                                className="w-full "
                            />
                        </div>
                        <h2 className="text-xl font-bold">Ely Mohammed</h2>

                        {/* Contact info */}
                        <div className="flex items-center text-gray-500 mt-1">
                            <AiOutlinePhone size={16} className="text-gray-400" />
                            <span className="ml-1 text-sm">(629) 555-0129</span>
                        </div>

                        <div className="flex items-center text-gray-500 mt-1">
                            <GoLocation size={16} className="text-gray-400" />
                            <span className="ml-1 text-sm">Great Falls, Maryland</span>
                        </div>

                        <div className="flex items-center text-gray-500 mt-1">
                            <AiOutlineMail size={16} className="text-gray-400" />
                            <span className="ml-1 text-sm">Marvin@gmail.com</span>
                        </div>
                    </div>




                </div>
            </Modal></div>
    )
}

export default Completed
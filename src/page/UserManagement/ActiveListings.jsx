import { ConfigProvider, Modal, Table } from 'antd';
import React, { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
// import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
// import img from "../../assets/product.png"


const ActiveListings = ({ setIsModalOpen2 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };
    const showModal = () => {
        setIsModalOpen(true);
        setIsModalOpen2(false)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const dataSource = [
        { key: "1", no: "1", Title: "iPhone 13-128GB", PostedOn: "05/03/2025", Price: "$799", Category: "Electronics" },
        { key: "2", no: "2", Title: "Samsung Galaxy S21", PostedOn: "05/02/2025", Price: "$699", Category: "Electronics" },
        { key: "3", no: "3", Title: "MacBook Pro 13-inch", PostedOn: "04/30/2025", Price: "$1299", Category: "Computers" },
        { key: "4", no: "4", Title: "Sony WH-1000XM4 Headphones", PostedOn: "04/29/2025", Price: "$348", Category: "Electronics" },
        { key: "5", no: "5", Title: "Dell XPS 15", PostedOn: "04/28/2025", Price: "$1599", Category: "Computers" },
        { key: "6", no: "6", Title: "iPad Air 4th Gen", PostedOn: "04/27/2025", Price: "$599", Category: "Tablets" },
        { key: "7", no: "7", Title: "Apple Watch Series 8", PostedOn: "04/26/2025", Price: "$399", Category: "Accessories" },
        { key: "8", no: "8", Title: "GoPro HERO10 Black", PostedOn: "04/25/2025", Price: "$499", Category: "Electronics" },
        { key: "9", no: "9", Title: "HP Spectre x360", PostedOn: "04/24/2025", Price: "$1349", Category: "Computers" },
        { key: "10", no: "10", Title: "Google Pixel 6", PostedOn: "04/23/2025", Price: "$599", Category: "Electronics" },
        { key: "11", no: "11", Title: "Apple AirPods Pro", PostedOn: "04/22/2025", Price: "$249", Category: "Accessories" },
        { key: "12", no: "12", Title: "Sony 65-inch 4K TV", PostedOn: "04/21/2025", Price: "$999", Category: "Electronics" },
        { key: "13", no: "13", Title: "Microsoft Surface Laptop 4", PostedOn: "04/20/2025", Price: "$1199", Category: "Computers" },
        { key: "14", no: "14", Title: "Nintendo Switch OLED", PostedOn: "04/19/2025", Price: "$349", Category: "Gaming" },
        { key: "15", no: "15", Title: "Amazon Echo Show 8", PostedOn: "04/18/2025", Price: "$129", Category: "Smart Home" },
        { key: "16", no: "16", Title: "Bose SoundLink Revolve", PostedOn: "04/17/2025", Price: "$199", Category: "Electronics" },
        { key: "17", no: "17", Title: "Fitbit Charge 5", PostedOn: "04/16/2025", Price: "$149", Category: "Accessories" },
        { key: "18", no: "18", Title: "Lenovo ThinkPad X1 Carbon", PostedOn: "04/15/2025", Price: "$1599", Category: "Computers" },
        { key: "19", no: "19", Title: "Razer Blade 15", PostedOn: "04/14/2025", Price: "$1899", Category: "Computers" },
        { key: "20", no: "20", Title: "LG UltraGear 27-inch Monitor", PostedOn: "04/13/2025", Price: "$349", Category: "Electronics" }
    ];

    const columns = [
        { title: "No", dataIndex: "no", key: "no" },
        { title: "Title", dataIndex: "Title", key: "Title" },
        { title: "Posted On", dataIndex: "PostedOn", key: "PostedOn" },
        { title: "Price", dataIndex: "Price", key: "Price" },
        { title: "Category", dataIndex: "Category", key: "Category" },
        {
            title: "Action",
            key: "action",
            render: (_, record) => {
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => showModal(record)}
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
        <ConfigProvider
            theme={{
                components: {
                    InputNumber: {
                        activeBorderColor: "#14803c",
                    },
                    Pagination: {
                        colorPrimary: "#14803c",
                        colorPrimaryHover: "#14803c",
                        itemActiveBg: "#14803c",
                        itemActiveColor: "#ffffff",
                        colorBgTextHover: "#14803c",
                        colorText: "#14803c",
                    },
                    Table: {
                        headerBg: "#14803c",
                        headerColor: "rgb(255,255,255)",
                        cellFontSize: 16,
                        headerSplitColor: "#14803c",
                    },
                },
            }}
        >
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 5 }}
                scroll={{ x: "max-content" }}
            />
            <Modal open={isModalOpen} centered onCancel={handleCancel} footer={null}>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col gap-5">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="relative rounded-lg overflow-hidden">
                                <img
                                    src='fff'
                                    alt="Pink necklace with diamond gemstones"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold">Neck V Jewelry</h1>
                                <div className="flex items-center mt-2">
                                    <span className="text-2xl font-semibold">UM 49.99</span>
                                    <p className="ml-2 text-green-500">In Stock</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">Product Details</h2>
                                    <p className="text-gray-600">
                                        Elegant necklace featuring a stunning design with pink/coral beads and diamond-shaped gemstones. Perfect for special occasions and formal events.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Product Category</h3>
                                        <p className="mt-1 bg-green-50 text-green-700 hover:bg-green-50">Jewelry</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Product Type</h3>
                                        <p className="mt-1 bg-green-50 text-green-700 hover:bg-green-50">Necklaces</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Condition</h3>
                                        <p className="mt-1 bg-green-50 text-green-700 hover:bg-green-50">New</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Material</h3>
                                        <p className="mt-1 bg-green-50 text-green-700 hover:bg-green-50">Mixed</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="pt-4 border-t">
                                                                                <h3 className="text-sm font-medium text-gray-500 mb-2">Share</h3>
                                                                                <div className="flex space-x-4 gap-5">
                                                                                          <button className="flex items-center">
                                                                                                    <FaFacebookF className="mr-2" /> Facebook
                                                                                          </button>
                                                                                          <button className="flex items-center">
                                                                                                    <FaTwitter className="mr-2" /> Twitter
                                                                                          </button>
                                                                                          <button className="flex items-center">
                                                                                                    <FaPinterestP className="mr-2" /> Pinterest
                                                                                          </button>
                                                                                </div>
                                                                      </div> */}
                        </div>
                    </div>
                </div>
            </Modal>

        </ConfigProvider>
    );
};

export default ActiveListings;
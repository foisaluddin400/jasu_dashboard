import { useEffect, useState } from "react";

import img1 from '../../assets/header/bb.png'
import img2 from '../../assets/header/mm.png'
import img3 from '../../assets/header/nn.png'
import UserGrowthChart from "./UserGrowthChart";
import ActivityStatisticsChart from "./ActivityChart";
const Dashboard = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        TotalUsers: 1576,
        TotalListings: 76,
        Categories: 30,
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  const cardData = [
    {
      title: "Total Users",
      value:  data?.TotalUsers ?? 0,
      icon: <img src={img1} alt="" />,
    },
    {
      title: "Total Listings",
      value: data?.TotalListings ?? 0,
      icon: <img src={img2} alt="" />,
    },
    {
      title: "Categories",
      value:  data?.Categories ?? 0,
      icon: <img src={img3} alt="" />,
    },
  ];
  return (
    <div className="p-2 min-h-screen">
       <div className="flex items-center justify-between bg-gradient-to-tr from-[#ffffff] via-white to-[#62e391] p-12 rounded-xl">
        {cardData.map((card, index) => (
          <div
            className={`w-full ${
              index !== cardData.length - 1
                ? "border-r-2 border-gray-800 pr-6"
                : "pl-6"
            }`}
            key={index}
          >
            <div className="flex items-center gap-3">
              <h1>{card.icon}</h1>
              <div>
                <h1 className="text-3xl font-semibold">{card.title}</h1>
                <h1 className="text-3xl font-semibold text-[#15803D]">
                  {card.value}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="grid grid-cols-4 gap-4 mt-4 xl:h-[450px]">
        <div className="w-full col-span-4 xl:col-span-3 h-full">
          <UserGrowthChart />
        </div>
        <div className="xl:col-span-1 col-span-4 shadow-lg">
          <ActivityStatisticsChart />
        </div>
      </div>

      {/* Recently Joined Users Section */}
      {/* <div className="mt-4">
        <RecentlyJoinedUsers />
      </div> */}
    </div>
  );
};

export default Dashboard

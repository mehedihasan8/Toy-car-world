import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabs, setActiveTabs] = useState("Sports-car");
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    fetch(`https://toy-car-server-rho.vercel.app/mytoyCategory/${activeTabs}`)
      .then((res) => res.json())
      .then((data) => {
        setTabData(data);
      });
  }, [activeTabs]);

  const handleTabClick = (tabName) => {
    setActiveTabs(tabName);
  };

  return (
    <div>
      <div className="  ">
        <h1
          data-aos="fade-up"
          className=" text-3xl text-center pt-12  lg:text-6xl font-extrabold text-white  bg-[#363636] "
        >
          Shop by Category
        </h1>
        <p className=" text-center  pt-6 font-semibold text-white  bg-[#363636] ">
          Using 'Content here, content here', making it look like readable
        </p>
        <Tabs
          className="bg-[#363636]  text-black pb-12  text-center mx-auto pt-4  font-semibold"
          selectedIndex={activeTab}
          onSelect={(index) => setActiveTab(index)}
        >
          <TabList>
            <div data-aos="fade-up" className="py-6">
              <Tab
                className="btn bg-[#f65829]"
                onClick={() => handleTabClick("Sports-car")}
              >
                See Sports Car
              </Tab>
              <Tab
                className="btn bg-[#f65829] mx-6"
                onClick={() => handleTabClick("Truck")}
              >
                See Truck{" "}
              </Tab>
              <Tab
                className="btn bg-[#f65829] mt-5 "
                onClick={() => handleTabClick("Regular-car")}
              >
                See Regular Car
              </Tab>
            </div>
          </TabList>
        </Tabs>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="my-cunstom-container grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-6"
        >
          {tabData?.map((toy) => (
            <CategoryCard key={toy._id} toy={toy}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

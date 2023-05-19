import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabs, setActiveTabs] = useState("Sports-car");
  const [tabData, setTabData] = useState([]);

  console.log(activeTabs, tabData);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoyCategory/${activeTabs}`)
      .then((res) => res.json())
      .then((data) => {
        setTabData(data);
      });
  }, [activeTabs]);

  const handleTabClick = (tabName) => {
    setActiveTabs(tabName);
  };

  return (
    <div className="my-cunstom-container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold mb-4 text-center">Shop by Category</h1>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList>
          <div className="text-center">
            <Tab onClick={() => handleTabClick("Sports-car")}>Sports Car</Tab>
            <Tab onClick={() => handleTabClick("Truck")}>Truck </Tab>
            <Tab onClick={() => handleTabClick("Regular-car")}>Regular Car</Tab>
          </div>
        </TabList>
        <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {tabData?.map((toy) => (
            <CategoryCard key={toy._id} toy={toy}></CategoryCard>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Category;

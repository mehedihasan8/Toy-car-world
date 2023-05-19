import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchTabData = async (category) => {
      try {
        const response = await fetch(
          `http://localhost:5000/mytoyCategory/${category}`
        );
        //   http://localhost:5000/mytoyCategory/Sports-car
        const data = await response.json();

        // Set the fetched data in state
        setTabData((prevTabData) => [...prevTabData, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const categories = ["Sports-car", "Truck", "Regular-car"];

    categories.forEach((category) => fetchTabData(category));
  }, []);

  return (
    <div className="my-cunstom-container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold mb-4 text-center">Shop by Category</h1>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList>
          <div className="text-center">
            <Tab>Sports Car</Tab>
            <Tab>Truck </Tab>
            <Tab>Regular Car</Tab>
          </div>
        </TabList>

        {tabData.map((data, index) => (
          <TabPanel key={index}>
            <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {activeTab === index &&
                data?.map((toy) => (
                  <CategoryCard key={toy._id} toy={toy}></CategoryCard>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;

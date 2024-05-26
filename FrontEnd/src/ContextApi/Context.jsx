// DataContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a new context
export const DataContext = createContext();

// Create a DataProvider component
export const DataProvider = ({ children }) => {
    // State to hold the fetched data
    const [data, setData] = useState([]);

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:6969/api/getProjects');
            const jsonData = await response.json();
            console.log(jsonData.data)
            setData(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

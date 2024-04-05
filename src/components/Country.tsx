import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);

  const fetchCountryData = async () => {
    try {
      console.log("Name:", name); 
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      if (!response.ok) {
        throw new Error("Country not found");
      }
      const countryData = await response.json();
      setCountry(countryData);
      console.log(countryData);
    } catch (error) {
      console.error("Error fetching country data:");
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, [name]);

  return (
    <>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </>
  );
};

export default Country;

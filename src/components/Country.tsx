
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({})

      const fetchCountryData = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const country = await response.json();
        setCountry(country);
        console.log(country);
      };

  useEffect(() => {
    fetchCountryData();
  }, [])

  return (
    <>
      <Link to="/" className="btn">
        Back Home</Link>
    </>
  );
};

export default Country;

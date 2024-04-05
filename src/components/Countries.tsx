
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

interface CountryProps {
  common: any;
  population: number;
  region: string;
  capital: string;
  flags: { png: string };
  name: string;
}

const Countries = () => {
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const countriesData = await response.json();
      setCountries(countriesData);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);



return (
  <>
    <section>
      {countries.map((country) => {
        return (
          <article key={country.common}>
            <div>
              <img src={country.flags.png} alt={country.name.common} />
              <div className="details">
                <h3>{country.name.common}</h3>
                <h4>
                  Population: <span>{country.population}</span>
                </h4>
                <h4>
                  Region: <span>{country.region}</span>
                </h4>
                <h4>
                  Capital: <span>{country.capital}</span>
                </h4>
                <Link to={`/country/${country.name}`}>Learn more</Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  </>
);

};

export default Countries;



  

  



import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountriesData } from "../../api";

import styles from "./countryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountry, setFetchCountry] = useState([]);
  useEffect(() => {
    const fetchCountry = async () => {
      setFetchCountry(await fetchCountriesData());
    };
    fetchCountry();
  }, [setFetchCountry]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="Global">Global</option>
        {fetchCountry.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

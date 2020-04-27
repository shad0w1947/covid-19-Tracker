import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component {

    constructor() {
        super();
        this.state = { data: {}, country: '' };
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data: data });

    }

    handleCountryChange = async (country) => {
        console.log(country)
        let data = {};
        if (country === "Global") {
            data = await fetchData();
            this.setState({ data: data, country: '' });
        }
        else {
            data = await fetchData(country);
            this.setState({ data: data, country: country });
        }

    }

    render() {
        /// it is eqal to data= this.state.data;
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="covid19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App;
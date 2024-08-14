import React, { useState } from 'react';
import Hero from '../component/Hero';
import ExploreMenu from '../component/ExploreMenu';
import DisplayItems from '../component/DisplayItems';
import AppDownload from '../component/AppDownload';

const Home = () => {
    const [category, setCategory] = useState("All");

    return (
        <>
            <Hero />
            <ExploreMenu category={category} setCategory={setCategory} />
            <DisplayItems category={category} />

            <AppDownload/>
        </>
    );
};

export default Home;

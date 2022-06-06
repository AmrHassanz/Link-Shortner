import React, { useState } from 'react';
import Header from './Header';
import Shortner from './Shortner';
import Links from './Links';
import Statistics from './Statistics';
import AdvancedStat from './AdvancedStat';
import axios from 'axios';

export default function Home() {

  

    return (
        <>
            <Header />
            <Shortner />
            <Links  />
            <Statistics />
            <AdvancedStat />
        </>
    )
}

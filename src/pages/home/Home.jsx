import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { getFavoriteTravelPlace } from '@/apis/request/travel';

const HomePage = () => {
  const [data, setData] = useState([]);
  const getFavoriteTravels = async () => {
    try {
      const res = await getFavoriteTravelPlace();
      const members = res.data;
      setData(members);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFavoriteTravels();
  }, []);
  return (
    <div>
      <h3>
        {data.map(d => (
          <div key={d.id}>{d.title}</div>
        ))}
      </h3>
    </div>
  );
};

export default HomePage;

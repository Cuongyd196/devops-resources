import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios';

export default function Hello() {

    const [data, setData] =  useState([])

    useEffect(() => {
        getData();
    },[]);

    const getData = async ()  =>{
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setData(res.data)
      })
      .catch(error => console.log(error));
    }


  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload. {data[0]?.name}
        </p>
      </div>
    </Layout>
  );
}
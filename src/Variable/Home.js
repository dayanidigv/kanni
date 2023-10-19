import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc , setDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCVu4iJsvm3YsQQwYtHleXwHaEcpaEe4Yw",
  authDomain: "innak-91479.firebaseapp.com",
  projectId: "innak-91479",
  storageBucket: "innak-91479.appspot.com",
  messagingSenderId: "385236608299",
  appId: "1:385236608299:web:fa8f053976b412c4e6516e",
  measurementId: "G-E08J05CFPE"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const timelineDataFor = [
  {
    msg : "Welcome To innak!",
    quote : "Unleashes Our Possibilities"
  }
]

const storeTimelineData = async () => {
    console.log("Storing timeline data...");
    try {
      await setDoc(doc(firestore, 'InnakWebSiteData', 'homeSection'), {
        data: timelineDataFor
      });
      console.log('Timeline data stored successfully!');
    } catch (error) {
      console.error('Error storing timeline data: ', error);
    }
  };


const fetchWhyChooseSectionData = async () => {
  try {
    const docRef = doc(firestore, 'InnakWebSiteData', 'whyChooseSection');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data().data;
      return data;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching Why Choose Section data: ', error);
    return null;
  }
};

export const fetchForSectionData = async () => {
    try {
      const docRef = doc(firestore, 'InnakWebSiteData', 'ForSection');
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const data = docSnap.data().data;
        console.log('Data get');
        return data;
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching For Section data: ', error);
      return null;
    }
  };
  

  export const fetchHomeSectionData = async () => {
    try {
      const docRef = doc(firestore, 'InnakWebSiteData', 'homeSection');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data().data;
        console.log('Data get');
        return data;
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching For Section data: ', error);
      return null;
    }
  };

const WhyChooseSection = () => {
  const [whyChooseData, setWhyChooseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWhyChooseSectionData();
      if (data) {
        setWhyChooseData(data);
      }
    };

    fetchData();
  }, []);

  const WhyChooseItem = ({ data }) => (
    <div className="timeline-item">
    <div className="timeline-item-content">
      <b className="secondaryStrong">{data.title}</b>
      <p>{data.data}</p>
      <span className="circle" />
    </div>
  </div>
  );

  return (
    <div className="timeline-container">
      {whyChooseData.map((item, index) => (
        <WhyChooseItem data={item} key={index} />
      ))}
    </div>
  );
};

export default WhyChooseSection;

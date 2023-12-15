import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";

const cardData = [
    {
        id: 1,
        buttonText: "Bet Now",
        smallDesc: "Are you a pervert?",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"

    },
    {
        id: 2,
        buttonText: "Sign Up",
        smallDesc: "Hey Sirshendu!!",
        imageUrl: "https://avatars.githubusercontent.com/u/38598675?v=4"

    },
    {
        id: 3,
        buttonText: "Bet Now",
        smallDesc: "Are you a pervert?",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"

    },
    {
        id: 4,
        buttonText: "Sign Up",
        smallDesc: "Hey Sirshendu!!",
        imageUrl: "https://avatars.githubusercontent.com/u/38598675?v=4"

    }
];



const Home = () => {
    const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => (prevPercent < 100 ? prevPercent+10: 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <div>
            <Header />
            <div style={{ display:'flex', marginLeft:'120px', marginRight:'120px', flexWrap:'wrap'}}>

            {cardData.map((card) => (
                <SmallCard
                    key={card.id}
                    buttonText={card.buttonText}
                    smallText={card.smallText}
                    imageUrl={card.imageUrl}
                />
            ))}
            <MainCard percent={percent} />
 
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
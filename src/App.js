import React from "react";

// how to use props
function Potato({ name, image }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={image} />
    </div>
  )
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://img.khan.co.kr/news/2016/12/09/l_2016120901001299800104967.jpg"
  },
  {
    name: "samgyeopsal",
    image: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg"
  },
  {
    name: "bibimbap",
    image: "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg"
  }
  , {
    name: "doncasu",
    image: "https://funshop.akamaized.net/products/0000076768/vs_image800.jpg"
  }
  , {
    name: "kimbap",
    image: "https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=1024x"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(food => (
        <Potato name={food.name} image={food.image} />
      ))}
    </div>
  );
}

export default App;

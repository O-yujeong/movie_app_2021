import React from "react";
import axios from "axios";
import { throwStatement } from "@babel/types";


//#region function component
// how to use props
/*
function Food({ name, image, ratings }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h2>{ratings}/5.0</h2>
      <img src={image} alt={name} width="100" height="100" />
    </div>
  )
}

// propTypes <-- 정해져있음, case-sensitive
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://img.khan.co.kr/news/2016/12/09/l_2016120901001299800104967.jpg",
    ratings: 5.0
  },
  {
    id: 2,
    name: "samgyeopsal",
    image: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg",
    ratings: 4.5
  },
  {
    id: 3,
    name: "bibimbap",
    image: "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    ratings: 4.0
  }
  ,
  {
    id: 4,
    name: "doncasu",
    image: "https://funshop.akamaized.net/products/0000076768/vs_image800.jpg",
    ratings: 3.5
  }
  ,
  {
    id: 5,
    name: "kimbap",
    image: "https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=1024x",
    ratings: 5.5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(food => (
        <Food key={food.id} name={food.name} image={food.image} ratings={food.ratings} />
      ))}
    </div>
  );
}
*/
//#endregion

//#region class component

// class component : state 사용가능
/*
class App extends React.Component {
  state = {
    count: 0
  }

  // setState()를 쓰는 이유 : state를 direct mutate하게 될 경우 render()를 타지 않으므로
  add = () => {
    //this.state.count = 1 (direct mutation)
    this.setState({ count: this.state.count + 1 })              // --> 이렇게 this.state를 쓰는것은 안좋다
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))    // --> current 사용해줘야 더 좋음
  };

  // component lifecycle
  // 1. mounting  (constructor -> render -> componentDidMount)
  constructor(props) {
    super(props);
    console.log("hello")
  }
  componentDidMount() {
    console.log("Component rendered")
  }
  // 2. updating  (render -> componentDidUpdate)
  componentDidUpdate() {
    console.log("I just updated")
  }
  // 3. unmounting  --> 어떻게 해야 작동하는지 모르지만,, component가 사라질 때 작동함
  componentWillUnmount(){
    console.log("Goodbye cruel world")
  }

  render() {
    console.log("I'm rendering")
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
*/
//#endregion

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  // 비동기 : async, await 사용
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false })
    // }, 3000)
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready!"}</div>
    );
  }
}

export default App;

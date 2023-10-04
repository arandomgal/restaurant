
import './App.css';
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
function Main(props) {
  return (
    <section>
      <img
        height={200}
        src="./restaurant.jpeg"
        alt="A server presents two plates at a fancy restaurant"
      />
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>
            {dish.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Salmon and Potatoes",
  "Pizza"
];
const dishObjects = dishes.map(
  (dish, i) => ({
    id: i,
    title: dish
  })
);

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main
        adjective="amazing"
        dishes={dishObjects}
      />
      <Footer
        year={new Date().getFullYear()}
      />
    </div>
  );
}

export default App;

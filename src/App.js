import logo from './logo.svg';
import './App.css';

const dishesWithKeys = [
  {
      id: 3, // Used in JSX as a key
      name: 'Mapo Tofu'
  },
  {
      id: 2, // Used in JSX as a key
      name: 'Chili with Cornbread'
  },
  {
      id: 1, // Used in JSX as a key
      name: 'Beef Curry'
  }
];

function ImageSection() {
  return (
      <img src="restaurant.jpeg" height={200} alt="A server presents 2 plates in a restaurant." />
  )
}

function Header({name}) {
  return (
      <header>
          <h1>Welcome to {name}'s Kitchen</h1>
      </header>
  );
}

function Main(x) {
  return (
      <section>
          <ul>
              {x.dishlist.sort((a, b) => a.id - b.id).map(dish => (<li key={dish.id}>{dish.name}</li>))}
          </ul>
      </section>
  );
}

function Footer(p) {
  return (
      <footer>
          <p>Copyright {p.year}</p>
      </footer>
  );
}

function App() {
  return (
    <div className="App">
           <Header name="Michelle" />
           <ImageSection />
           <Main dishlist={dishesWithKeys} />
           <Footer
               year={new Date().getFullYear()}
           />
    </div>
  );
}

export default App;

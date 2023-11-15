import './App.css';
import { useState, useEffect } from 'react';

const englishMenu = [
  {
      id: 3, // Used in JSX as a key
      name: 'Mapo Tofu'
  },
  {
      id: 2, // Used in JSX as a key
      name: 'Chili & Cornbread'
  },
  {
      id: 1, // Used in JSX as a key
      name: 'Beef Curry'
  }
];

const japaneseMenu = [
  {
      id: 3, // Used in JSX as a key
      name: '麻婆豆腐'
  },
  {
      id: 2, // Used in JSX as a key
      name: 'チリ＆コーンブレッド'
  },
  {
      id: 1, // Used in JSX as a key
      name: 'ビーフカレー'
  }
];

function ImageSection() {
  return (
      <img src="restaurant.jpeg" height={200} alt="A server presents 2 plates in a restaurant." />
  )
}

function Header(p) {
  if (p.menuName == "englishMenu")
    return (
        <header>
            <h1>Welcome to {p.name}'s Kitchen</h1>
        </header>
    );
  else if (p.menuName == "japaneseMenu")
    return (
      <header>
          <h1>いらっしゃいませ</h1>
      </header>
    );
}

function Main(p) {
  if (p.menu == "englishMenu")
    return (
      <section>
          <ul>
            {englishMenu.map((dish) => (<li key={dish.id}>{dish.name}</li>) )} 
          </ul>
      </section>
    );
  else if (p.menu == "japaneseMenu")
    return (
      <section>
          <ul>
            {japaneseMenu.map((dish) => (<li key={dish.id}>{dish.name}</li>) )} 
          </ul>
      </section>
    );
  else
    return (
      <section>
          <ul>
            {englishMenu.map((dish) => (<li key={dish.id}>{dish.name}</li>) )} 
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
  const [menuName, setLanguage] = useState("englishMenu");

  useEffect(() => {
    console.log(`${menuName} is being viewed`)
  });

  return (
    <div className="App">
           <Header name="Michelle" menuName={menuName}/>
           <ImageSection />
           <Main menu={menuName}/>
           <button onClick={() => setLanguage("englishMenu")}>English Menu</button>
           <button onClick={() => setLanguage("japaneseMenu")}>Japanese Menu</button>
           <Footer
               year={new Date().getFullYear()}
           />
    </div>
  );
}

export default App;

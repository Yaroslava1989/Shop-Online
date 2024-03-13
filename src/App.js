import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="App_header_main_logo">
             <h1>
                BaliExpress
             </h1>
            </div>
              <label>
                <input name="myInput" placeholder={"введіть товар"}/>
                <button className="App_header_search__btn">Пошук</button>
              </label>

            <div className="App_header__settings">
                <div className="App_header_settings__lang">
                    <span>обрати мову </span>
                    <select>
                        <option value="eng">English</option>
                        <option value="ukr">Українська</option>
                    </select>
                </div>

                <div className="App_header_settings__money">
                    <span>обрати валюту </span>
                    <select>
                        <option value="usd">USD</option>
                        <option value="uah">UAH</option>
                    </select>
                </div>
            </div>
            <div className="App_header__cart">
                <a href="#" className="App_header_cart__logo" title="кошик">
                    <img src="https://cdn-icons-png.freepik.com/256/9534/9534249.png?ga=GA1.1.1800163945.1710259261&"/>
                </a>
            </div>
            <div className="App_header__login">
                <a href="#" className="App_header_login__logo" title="зареєструватися">
                    <img src="https://th.bing.com/th/id/R.6fad6b1f07f2be574123a910448efc8e?rik=gyekzkOw3Sjw3A&pid=ImgRaw&r=0"/>
                </a>
            </div>

        </header>
    </div>
  );
}

export default App;

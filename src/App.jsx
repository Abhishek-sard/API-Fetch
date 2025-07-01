import React, {useState, useEffect} from 'react'
import './App.css';
const App = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState (false);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) =>{
      setItems(json);
      setDataIsLoaded(true);

    });
  }, []);

  if (!dataIsLoaded) {
    return(
      <div>
        <h1>Please wait some times ....</h1>
      </div>
    );
  }
  return (
    <div className='App'>
      <h1 className='geeks'>GeeksForGeeks</h1>
      <h3>Fetch data from an API in React</h3>
      <div className="container">
        {items.map((item) =>(
          <div className="item" key={item.id}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {items.username},
              </div>
              <div>Full_Name : {item.name}</div>
              <div>User_Email : {item.email}</div>
            </ol>

          </div>
        ))}
      </div>
      
    </div>
  )
}

export default App

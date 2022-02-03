import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import items from './data/transactions.json'

export default function App() {
  return (
    <div>
      <Container title='User profile'>
      <Profile
        avatar={user.avatar}
        tag={user.tag}
        name={user.username}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
        </Container>
      <Container title='Upload stats'>
        <Statistics stats ={data} />
      </Container>
      <Container title='Friends list'>
        <FriendsList items={friends} />
      </Container>
      <Container title='Transaction history'>
        <TransactionHistory items={items} />
      </Container>
           
    </div>
  );
}






/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

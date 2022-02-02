import ReactDOM from 'react-dom'
import App from './App.js';
import user from './data/user.json';


function Profile(props) {
  console.log(props);

  const { avatar, tag, username, location, stats } = props;
  return <div class="profile">
  <div class="description">
    <img
      src= {avatar}
      alt={tag}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}


/*ReactDOM.render(<Profile
  avatar={user.avatar}
  tag={user.tag}
  name={user.username}
  location={user.location}
  stats={user.stats}
/>, document.querySelector('#root'));*/


ReactDOM.render(<App />, document.querySelector('#root'));



/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

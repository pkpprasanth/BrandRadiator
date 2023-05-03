import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css"
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });
  useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((data) => setUsers(data.data))
      .catch((er) => console.log(er));
    }, []);

  const openPopup = (id) => {
    const selectedUser = users.find((user) => user.id === id);
    setSelectedUser(selectedUser);
    setUserData({
      name: selectedUser.name,
      email: selectedUser.email,
      phone: selectedUser.phone,
      website: selectedUser.website,
    });
  };

  const onCancel = () => {
    setSelectedUser([]);
  };

  return (
    <div>
      {selectedUser && selectedUser?.name && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popupBody">
            <p>
              Name : {userData.name}
            </p>
            <p>
              Email : {userData.email}
            </p>
            <p>
              Phone : {userData.phone}
            </p>
            <p>
              Website : {userData.website}
            </p>
            <div className="item">
                  <a href="#"  onClick={onCancel}title="About Us Button">Close</a>
                </div>
          </div>
        </div>
      )}
      <div className="basic-grid">
        {users &&
          users.map((user) => (
            <div className="card" key={user.id}>
              <div className="card-header">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`}
                />
              </div>
              <div className="card-body">
                <div className="title">{user.name}</div>
                <div className="email">{user.email}</div>
                <div className="phone">{user.phone}</div>
                <div className="web">{user.website}</div>
              </div>

              <div className="row_group">
                <div className="item">
                  <a href="#" onClick={openPopup.bind(this, user.id)}title="About Us Button">View</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
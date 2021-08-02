import React from 'react';

function User({ user }) {
  return (
     <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'jb',
      email: 'wnsqja8888@naver.com'
    },
    {
      id: 2,
      username: 'jbp',
      email: 'wnsqja1149@hanmail.net'
    },
    {
      id: 3,
      username: 'jbpark',
      email: 'wnsqja8888@gmail.com'
    }
  ];

  return (
    <div>
      {
        users.map(
          user => (<User user={user} key={user.id} />)
        )
      }
      {/* <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/> */}
    </div>
  )
}

export default UserList;
import React from 'react';
import './SidebarUsers.css';
import { Link } from 'react-router-dom';
import { Badge} from 'react-bootstrap';

export default ({ users, currentUrl }) => (
  <div>
      {users.map((user, index) => (
        <Badge className={user.card ? 'backgroundGreen' : 'nothing'} key={index}>
          {user.name}
        </Badge>
      ))}
      <br/>
      <Link to={`/${currentUrl}/results`}>
        <button className="center" >Show Result</button>
      </Link>
  </div>
);

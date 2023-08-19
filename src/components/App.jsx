import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
    <Profile items={user}/>
    <Statistics title="Upload stats" data={data}/>
    <FriendList friends={friends}/>
    </div>
  );
};

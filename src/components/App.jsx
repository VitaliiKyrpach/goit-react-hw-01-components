import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friendData from '../data/friends.json';
import userData from '../data/user.json';
import data from '../data/data.json';
import transactionsData from '../data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile data={userData} />
      <Statistics title="Upload stats" data={data} />
      <FriendList data={friendData} />
      <TransactionHistory data={transactionsData} />
    </>
  );
};

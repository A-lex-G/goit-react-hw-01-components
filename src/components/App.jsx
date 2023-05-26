import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'
import {CreateProfile} from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import {FriendList} from "./FriendList/FriendList";
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return <>
    <CreateProfile
      image={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
    </>;
}

// =============================================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

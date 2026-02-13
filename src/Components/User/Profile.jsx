import { useParams } from 'react-router-dom';
import Home from '../Home';
const Profile = () => {
  const { author } = useParams();
  return (
    <section>
      <Home user={author} total={6} authorExternal={true} />
    </section>
  );
};
export default Profile;

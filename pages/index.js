import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../all_structure/redux/features/userSlice";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userR);
  console.log(user);
  return (
    <div>
      <h1 className="text-3xl">home</h1>
      
    </div>
  )
}

export default Home
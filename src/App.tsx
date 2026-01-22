import { fetchMetrics } from "@features/dashboard/state";
import { useDispatch } from "@store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  return <p>hello</p>;
}

export default App;

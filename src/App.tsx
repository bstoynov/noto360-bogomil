import MetricList from "@features/dashboard/components/MetricList/MetricList";
import { fetchMetrics } from "@features/dashboard/state";
import { useDispatch } from "@store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  return <MetricList />;
}

export default App;

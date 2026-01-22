import { useSelector } from "react-redux";
import type { RootState } from "../store.types";

export default useSelector.withTypes<RootState>();

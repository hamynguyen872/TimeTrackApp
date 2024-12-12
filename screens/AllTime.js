import { useContext } from "react";
import TimeOutput from "../components/TimeOutput";
import { TimeContext } from "../store/expenses-context";


function AllTime() {
    const timeCtx = useContext(TimeContext)
    return <TimeOutput time={timeCtx.time} timePeriod="Total" />
}

export default AllTime;
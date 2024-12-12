import { useContext } from "react";
import TimeOutput from "../components/TimeOutput";
import { TimeContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function TodayTime() {
    const timeCtx = useContext(TimeContext)

    const recentTime = timeCtx.time.filter((time) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return time.date >= date7DaysAgo && time.date <= today;
    })
    return <TimeOutput time={recentTime} timePeriod="Today" />
}

export default TodayTime;
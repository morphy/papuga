import { scheduleJob } from "node-schedule";

import syncUsers from "./syncUsers";

const scheduleCronTasks = () => {
  scheduleJob("*/15 * * * *", syncUsers);
};

export default scheduleCronTasks;

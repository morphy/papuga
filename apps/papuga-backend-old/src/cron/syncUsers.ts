import { logError, logInfo, logSuccess } from "@pck/utils";

import { syncUsersWithIDP } from "services/user.service";

const syncUsers = async () => {
  logInfo("Cron: syncUsers started");

  try {
    await syncUsersWithIDP();
  } catch (error) {
    logError("Cron: syncUsers encountered an error", error);
    return;
  }

  logSuccess("Cron: syncUsers finished");
};

export default syncUsers;

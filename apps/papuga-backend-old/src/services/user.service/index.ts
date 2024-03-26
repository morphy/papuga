import UserRepository from "repositories/user.repository";

import { logInfo, logSuccess } from "@pck/utils";

import getUserEntriesFromIDP from "services/user.service/getUserEntriesFromIDP";
import getUserEntitiesFromEntries from "services/user.service/getUserEntitiesFromEntries";

export const syncUsersWithIDP = async () => {
  logInfo("Loading users from IDP");
  const userEntries = await getUserEntriesFromIDP();

  logInfo("Converting IDP users into user entities");
  const userEntities = getUserEntitiesFromEntries(userEntries);

  logInfo("Saving into database");
  await UserRepository.upsert(userEntities, ["id"]);

  logSuccess("Users synced with IDP");
};

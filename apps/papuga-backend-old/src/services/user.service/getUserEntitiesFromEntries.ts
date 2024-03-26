import UserEntity from "entities/user.entity";
import { UserEntry } from "./types";

const getUserEntitiesFromEntries = (userEntries: UserEntry[]) =>
  userEntries.map((userEntry) => {
    const user = new UserEntity();
    const createdTimestamp = new Date(userEntry.createdTimestamp);
    const avatar = userEntry?.attributes?.avatar?.[0];

    // TODO: Watch this PR
    // https://github.com/typeorm/typeorm/pull/10458
    // Updated at is currently not being updated because of TypeORM bug

    Object.assign(user, {
      ...userEntry,
      createdTimestamp,
      avatar
    });

    return user;
  });

export default getUserEntitiesFromEntries;

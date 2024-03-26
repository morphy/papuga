import UserEntity from "entities/user.entity";

import { AppDataSource } from "../data-source";

const UserRepository = AppDataSource.getRepository(UserEntity);

export default UserRepository;

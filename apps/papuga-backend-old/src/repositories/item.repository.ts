import { ItemEntity } from "entities/item.entity";

import { AppDataSource } from "../data-source";

const ItemRepository = AppDataSource.getRepository(ItemEntity);

export default ItemRepository;

import Dexie, { /*type PromiseExtended,*/ type Table } from "dexie";

import type { Binder } from "@/db/models/Binder";
import type { Category } from "@/db/models/Category";
import type { History } from "@/db/models/History";
import type { Pictogram } from "@/db/models/Pictogram";
import type { User } from "@/db/models/User";

import populate from "@/db/populate";

export class PickNTalkDB extends Dexie {
  binders!: Table<Binder>;
  categories!: Table<Category>;
  pictograms!: Table<Pictogram>;
  users!: Table<User>;
  history!: Table<History>;

  constructor() {
    super("pick-n-talk");
    this.version(1).stores({
      binders: "uuid, pictograms, users",
      pictograms: "uuid, binder, categories",
      history: "uuid, entityType, entityId, action, performedBy, timestamp",
      categories: "uuid, pictograms",
      users: "uuid, name, role"
    });
  }

  isEmpty(): boolean {
    let empty = false;

    this.binders.count().then(
      count => { empty &&= count === 0; return empty; }
    )

    return true; // This is a placeholder. The actual implementation should return the result of the count check.
  }
}

export const db = new PickNTalkDB();

db.on("populate", populate);
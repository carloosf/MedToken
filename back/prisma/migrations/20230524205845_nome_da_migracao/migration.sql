-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Token" (
    "token" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data" TEXT NOT NULL
);
INSERT INTO "new_Token" ("data", "nome", "token") SELECT "data", "nome", "token" FROM "Token";
DROP TABLE "Token";
ALTER TABLE "new_Token" RENAME TO "Token";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

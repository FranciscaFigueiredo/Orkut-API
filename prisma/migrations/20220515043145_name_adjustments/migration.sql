/*
  Warnings:

  - You are about to drop the `_CommunityToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CommunityToUser" DROP CONSTRAINT "_CommunityToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityToUser" DROP CONSTRAINT "_CommunityToUser_B_fkey";

-- DropTable
DROP TABLE "_CommunityToUser";

-- CreateTable
CREATE TABLE "_community_to_user" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_community_to_user_AB_unique" ON "_community_to_user"("A", "B");

-- CreateIndex
CREATE INDEX "_community_to_user_B_index" ON "_community_to_user"("B");

-- AddForeignKey
ALTER TABLE "_community_to_user" ADD FOREIGN KEY ("A") REFERENCES "communities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_community_to_user" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

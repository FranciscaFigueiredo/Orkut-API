-- CreateTable
CREATE TABLE "_FriendshipRequestToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TestimonialToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FriendshipRequestToUser_AB_unique" ON "_FriendshipRequestToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FriendshipRequestToUser_B_index" ON "_FriendshipRequestToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TestimonialToUser_AB_unique" ON "_TestimonialToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TestimonialToUser_B_index" ON "_TestimonialToUser"("B");

-- AddForeignKey
ALTER TABLE "_FriendshipRequestToUser" ADD FOREIGN KEY ("A") REFERENCES "friendship_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FriendshipRequestToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestimonialToUser" ADD FOREIGN KEY ("A") REFERENCES "testimonials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestimonialToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

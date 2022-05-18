-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_fk1" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- CreateTable
CREATE TABLE "friendship_requests" (
    "id" SERIAL NOT NULL,
    "recipient" INTEGER NOT NULL,
    "sender" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "friendship_requests_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friendships" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "friend_id" INTEGER NOT NULL,

    CONSTRAINT "friendships_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" SERIAL NOT NULL,
    "recipient" INTEGER NOT NULL,
    "sender" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "testimonials_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "friendship_requests" ADD CONSTRAINT "friendship_requests_fk0" FOREIGN KEY ("recipient") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friendship_requests" ADD CONSTRAINT "friendship_requests_fk1" FOREIGN KEY ("sender") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_fk1" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_fk0" FOREIGN KEY ("recipient") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_fk1" FOREIGN KEY ("sender") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

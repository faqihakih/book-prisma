-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50),
    "creator" VARCHAR(50),
    "publisher" VARCHAR(50),
    "id_category" INTEGER,
    "isbn" VARCHAR(50),
    "pages" VARCHAR(100),
    "cover" VARCHAR(255),
    "id_user" INTEGER,
    "descriptions" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "username" VARCHAR(50),
    "email" VARCHAR(100),
    "password" VARCHAR(100),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name_category" VARCHAR(50),
    "icon" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "borrowing" (
    "id" SERIAL NOT NULL,
    "borrower_name" VARCHAR(50) NOT NULL,
    "book_id" INTEGER,
    "user_id" INTEGER,
    "start_date" TIMESTAMP(6),
    "end_date" TIMESTAMP(6),
    "status" VARCHAR(20),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discuss" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER,
    "user_id" INTEGER,
    "discuss" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER,
    "book_id" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_detail" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "ktp" VARCHAR(20),
    "alamat" VARCHAR(100),
    "jenis_kelamin" VARCHAR(10),
    "usia" INTEGER,
    "ttl" DATE,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD FOREIGN KEY ("id_category") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowing" ADD FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowing" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discuss" ADD FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discuss" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_detail" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

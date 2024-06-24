-- CreateTable
CREATE TABLE "authentication" (
    "id" INTEGER NOT NULL,
    "code" VARCHAR,

    CONSTRAINT "authentication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "task_id" INTEGER NOT NULL,
    "task_name" VARCHAR,
    "completed" BOOLEAN NOT NULL,
    "day" TIMESTAMP(6),
    "ordering" INTEGER,
    "task_list_id" INTEGER NOT NULL,
    "day_ordering" INTEGER,

    CONSTRAINT "task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "task_list" (
    "list_id" INTEGER NOT NULL,
    "list_name" VARCHAR,

    CONSTRAINT "task_list_pkey" PRIMARY KEY ("list_id")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_task_list_id_fkey" FOREIGN KEY ("task_list_id") REFERENCES "task_list"("list_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

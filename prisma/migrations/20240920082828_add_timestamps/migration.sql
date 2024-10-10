/*
  Warnings:

  - Added the required column `createTime` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `createTime` DATETIME(3) NOT NULL,
    ADD COLUMN `updateTime` DATETIME(3) NULL;

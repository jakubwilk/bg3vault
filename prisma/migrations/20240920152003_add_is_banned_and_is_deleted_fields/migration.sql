-- AlterTable
ALTER TABLE `User` ADD COLUMN `isBanned` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `isDeleted` BOOLEAN NULL DEFAULT false;

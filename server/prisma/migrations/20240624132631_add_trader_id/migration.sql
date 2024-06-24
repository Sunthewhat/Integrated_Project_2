/*
  Warnings:

  - Added the required column `traderId` to the `cabonOffset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cabonOffset` ADD COLUMN `traderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `cabonOffset` ADD CONSTRAINT `cabonOffset_traderId_fkey` FOREIGN KEY (`traderId`) REFERENCES `trader`(`traderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `cabonOffset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carbonId` on the `cabonOffset` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `cabonOffset_certificateId_key` ON `cabonOffset`;

-- AlterTable
ALTER TABLE `cabonOffset` DROP PRIMARY KEY,
    DROP COLUMN `carbonId`,
    MODIFY `certificateId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`certificateId`);

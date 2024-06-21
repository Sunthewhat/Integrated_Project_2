/*
  Warnings:

  - You are about to drop the column `method` on the `cabonOffset` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `cabonOffset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `unit` to the `cabonOffset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cabonOffset` DROP COLUMN `method`,
    ADD COLUMN `unit` ENUM('cc', 'kg') NOT NULL,
    MODIFY `amount` INTEGER NOT NULL;

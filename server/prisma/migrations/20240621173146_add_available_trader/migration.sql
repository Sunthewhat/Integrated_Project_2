/*
  Warnings:

  - Added the required column `available` to the `trader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trader` ADD COLUMN `available` BOOLEAN NOT NULL;

/*
  Warnings:

  - You are about to drop the `cabonOffset` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cabonOffset` DROP FOREIGN KEY `cabonOffset_traderId_fkey`;

-- DropForeignKey
ALTER TABLE `cabonOffset` DROP FOREIGN KEY `cabonOffset_userId_fkey`;

-- DropTable
DROP TABLE `cabonOffset`;

-- CreateTable
CREATE TABLE `certificate` (
    `certificateId` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `traderId` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `certificate_userId_fkey`(`userId`),
    INDEX `certificate_traderId_fkey`(`traderId`),
    PRIMARY KEY (`certificateId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_traderId_fkey` FOREIGN KEY (`traderId`) REFERENCES `trader`(`traderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

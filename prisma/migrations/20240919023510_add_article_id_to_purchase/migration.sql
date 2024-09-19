/*
  Warnings:

  - You are about to drop the column `bookId` on the `Purchase` table. All the data in the column will be lost.
  - Added the required column `articleId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- まず、一時的なデフォルト値を持つカラムを追加
ALTER TABLE "Purchase" ADD COLUMN "articleId" TEXT DEFAULT 'temporary_default';

-- 既存の行に適切な値を設定
-- 注意: ここでは適切な値を設定する必要があります。例えば：
UPDATE "Purchase" SET "articleId" = 'default_article_id';

-- カラムを NOT NULL に変更
ALTER TABLE "Purchase" ALTER COLUMN "articleId" SET NOT NULL;

-- デフォルト値を削除
ALTER TABLE "Purchase" ALTER COLUMN "articleId" DROP DEFAULT;

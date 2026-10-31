/**
 * Conventional Commits — صيغة موحّدة لرسائل الـ commit.
 *
 * الأنواع المسموحة:
 * - feat: ميزة جديدة
 * - fix: إصلاح خطأ
 * - chore: مهام روتينية (تبعيات، إعدادات)
 * - docs: توثيق
 * - style: تنسيق
 * - refactor: إعادة هيكلة
 * - perf: تحسين أداء
 * - test: اختبارات
 * - ci: CI/CD
 * - build: البناء
 * - revert: تراجع
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "ci",
        "build",
        "revert",
      ],
    ],
    "subject-case": [0],
    "subject-max-length": [2, "always", 100],
    "body-max-line-length": [0],
  },
};
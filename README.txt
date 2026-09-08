COLLEGE LESSON HUB – FRESH STUDENT APP

This package redesigns ONLY the student-facing PWA.
The Teacher Dashboard and Google Sheet/backend are unchanged.

DESIGN:
Home -> Subjects -> Units -> Lectures -> Open Lesson PDF

NO quizzes, activities, teacher controls, student login, or unnecessary menus.

DEPLOYMENT:
1. Replace the student-facing files in the existing GitHub Pages repository with:
   index.html
   styles.css
   manifest.json
   content-config.json
   sw.js
2. Keep the existing Google Sheet CSV URL in content-config.json.
3. Commit/push the files to the same repository.
4. Keep the same GitHub Pages URL.
5. On a phone where the old app was installed, close/reopen the app and refresh once so the new service worker is received.

IMPORTANT:
Do not change the Teacher Dashboard files.
Do not change the Google Sheet structure.
Students continue using the same app URL.

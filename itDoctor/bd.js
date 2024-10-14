const sqlite3 = require("sqlite3").verbose();
const dbName = "later.sqlite";
const db = new sqlite3.Database(dbName);

db.serialize(() => {});
class Article {}

module.exports.export.db = db;
module.exports.Article = Article;

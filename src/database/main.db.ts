import sqlite from "sqlite3";

class Sqlite {
  constructor() {}

  query() {
    const connection = new sqlite.Database("./main.db", (error) => {
      if(error) {
        console.warn(error);
      }

      
      connection.exec(`
        CREATE TABLE users
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          name   VARCHAR(50) NOT NULL,
          age   INTEGER NOT NULL,
          password INTEGER NOT NULL
        );
      `);
      
    });

    connection.
  }
}

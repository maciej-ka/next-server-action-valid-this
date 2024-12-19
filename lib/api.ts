'use server';

import db from "./db";

export const createItem = async () => {
  return new Promise<number>((resolve, reject) => {
    console.dir(this);
    db.run('INSERT INTO items (title) VALUES (?)', ["foo"], function(err) {
      if (err) reject(err)
      console.dir(this);
      resolve(this.lastID)
    })
  });
};

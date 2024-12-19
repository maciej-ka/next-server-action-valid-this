'use server';

import db from "./db";

export const createItem = async () => {
  return new Promise<number>((resolve, reject) => {
    db.run('INSERT INTO items (title) VALUES (?)', ["foo"], function(err) {
      if (err) reject(err)
      resolve(this.lastID)
    })
  });
};

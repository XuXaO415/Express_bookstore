process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../app");
const db = require("../db");
const Book = require("../models/book")

let testBook;

beforeEach(async function() {
    let result = await db.query("SELECT * FROM books");
});

afterEach(async function() {
    await db.query("DELETE FROM books");
});

// afterALL(async function() {
//     await db.end();
// });


describe("POST /:isbn", function() {
    test("Post a book ", async function() {
        const response = await request(app).post(`/book`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({
            books: [testBook],
        });
    });
});

// isbn TEXT PRIMARY KEY,
// amazon_url TEXT,
// author TEXT,
// language TEXT,
// pages INTEGER,
// publisher TEXT,
// title TEXT,
// year INTEGER
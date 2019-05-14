const chai = require("chai");
var expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);
const rewire = require("rewire");
const request = require("supertest");

var app = rewire("./app");
var sandbox = sinon.createSandbox();

describe("app", () => {
    afterEach(() => {
        // app = rewire('./app');
        sandbox.restore();
    });
    context("GET /", () => {
        it("should get /", (done) => {
            request(app).get("/").expect(200).end(function(err, res) {
                if (err) throw err;
                done(err);
            });
        });

        it("should get /results", (done) => {
            request(app).get("/results").expect(200).end(function(err, res) {
                if (err) throw err;
                done(err);
            });
        });

        it("should get /results for star query", (done) => {
            request(app).get("/results?search=Star").expect(200).end(function(err, res) {
                if (err) throw err;
                done(err);
            });
        });

        it("should get /search", (done) => {
            request(app).get("/search").expect(200).end(function(err, res) {
                if (err) throw err;
                done(err);
            });
        });
    });
});

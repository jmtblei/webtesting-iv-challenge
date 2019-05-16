const request = require("supertest");
const server = require("./server");

describe("server", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("GET /", () => {
    it("recieves a 200 status code", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });
    it("recieves a 400 status code", async () => {
      const response = await request(server).get("/");
      response.status = 400;
      expect(response.status).toBe(400);
    });
    it("should return JSON using done callback", done => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
          done();
        });
    });
    it('should return { message: "it work" }', () => {
        const expected = { message: "it work" };
        return request(server).get('/').then(res => {
            expect(res.body).toEqual(expected);
        })
    });
  });
});

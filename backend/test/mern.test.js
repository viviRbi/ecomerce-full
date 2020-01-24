const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const link = supertest('http://localhost:5000')

// describe('GET /mern', () => {
//   it("Should return a 200 response", done => {
//     link
//       .get("/mern")
//       .set('Accept', 'application/json')
//       .expect(200, done)
//   })
//   it("should return an object that had a field call name", done => {
//     link
//       .get('/mern')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.body.every(i => i.name)).to.be.true
//         done()
//       })
//   })
// })
// describe("POST /mern", () => {
//   before(done => {
//     link.post("/mern")
//       .set("Accept", "application/json")
//       // ({}) because it is JSON
//       .send({
//         name: "Lollipop",
//         price: "Red",
//         url: "sdasdsdad"
//       })
//       .end(done)
//   })
//   it("should add an object to the collection and return it", (done) => {
//     link
//       .get("/mern")
//       .set("Accept", "application/json")
//       .end(function (error, response) {
//         expect(response.body[response.body.length - 1].name).to.equal("Lollipop");
//         done()
//       })
//   })
// })

// describe("DELETE /mern", () => {
//   before(done => {
//     const index = "5e288d69e7dd42139fc68ad5"

//     link
//       .delete(`/mern/${index}`)
//       .set('Accept', 'application.json')
//       .end(done)
//   })
//   it("should not have that obj", done => {
//     const index = (err, res) => res.body[res.body.length - 1].index;
//     link
//       .get("/mern")
//       .set("Accept", "application/json")
//       .end((err, res) => {
//         expect(res.body[res.body.length - 1]).not.equal("5e288d69e7dd42139fc68ad5")
//         done();
//       });
//   });
// });

describe("PUT /mern", () => {
  before(done => {
    link
      .put('/mern/5e2a26e4904d742f8bd8108c')
      .send({
        name: "Post",
        price: "$999",
        url: "https://liliputing.com/wp-content/uploads/2010/07/m101z.jpg"
      })
      .set('Accept', 'application/json')
      .end(done)
  })
  it('should had a price', done => {
    link
      .get('/mern')
      .set("Accept", "application/json")
      .end((err, res) => {
        // expect(res.body.find(e => e._id === "5e2a26e4904d742f8bd8108c")).to.have.property('price', '$999');
        expect(res.body.find(e => e._id === "5e2a26e4904d742f8bd8108c")).to.have.a.property('price');
        done()
      })
  })
})

import {
  Example
} from "../../../src/entity";

describe("Routes Example", () => {

  const exampleDefault = new Example({
    name: "teste1",
    age: 20
  });

  const deleteAllRegisters = () => Example.find()
    .then(registerList => Promise.all(registerList.map(x => x.remove())))
    .then(() => Example.$db.compact());

  beforeEach(done => {
    delete exampleDefault._id;
    delete exampleDefault._rev;
    delete exampleDefault._rev_tree;

    deleteAllRegisters()
      .then(() => exampleDefault.save())
      .then(() => done(), done);
  });

  describe("POST /example", () => {

    it("should return a success insertion", done => {
      const example = {
        "name": "teste2",
        "age": 20
      }

      request
        .post('/example')
        .send(example)
        .expect(response => expect(response.body.ok).to.be.true)
        .end(done);
    });

    it("should return a error of validation", done => {
      const exampleWithoutAName = {
        "age": 20
      }

      request
        .post('/example')
        .send(exampleWithoutAName)
        .expect(521)
        .expect(response => {
          expect(response.body.message).to.have.include('name');
          expect(response.body.message).to.have.include('required');
        })
        .end(done);
    });

    it('should return a success execution of update', done => {
      const example = {
        name: exampleDefault.name,
        age: exampleDefault.age,
        _id: exampleDefault._id,
        _rev: exampleDefault._rev
      };
      request.post('/example')
        .send(example)
        .expect(response => {
          expect(response.body.ok).to.be.true;
          expect(response.body.id).to.be.a('string');
          expect(response.body.id).to.eql(example._id);
        })
        .end(done);
    });

  });

  describe("GET /example/:id", () => {

    it('should return a the exampleDefault', done => {

      request.get(`/example/${exampleDefault._id}`)
        .expect(response => {
          expect(response.body._id).to.eql(exampleDefault._id);
          expect(response.body._id).to.be.a('string');
          expect(response.body.name).to.eql(exampleDefault.name);
          expect(response.body.name).to.be.a('string');
          expect(response.body.age).to.eql(exampleDefault.age);
          expect(response.body.age).to.be.a('number');
        })
        .end(done);
    });
  });

  describe("GET /example", () => {

    it('should return a list of examples', done => {

      request.get('/example')
        .expect(response => {
          expect(response.body).to.have.lengthOf(1);
          expect(response.body[0]._id).to.eql(exampleDefault._id);
          expect(response.body[0]._id).to.be.a('string');
          expect(response.body[0].name).to.eql(exampleDefault.name);
          expect(response.body[0].name).to.be.a('string');
          expect(response.body[0].age).to.eql(exampleDefault.age);
          expect(response.body[0].age).to.be.a('number');
        })
        .end(done);
    });
  });

  describe("DELETE /example", () => {

    it('should return a success deletion of example', done => {
      request.delete(`/example/${exampleDefault._id}`)
        .expect(response => {
          expect(response.body.ok).to.be.true;
          expect(response.body.id).to.eql(exampleDefault._id);
        })
        .end(done);
    });


  });

});

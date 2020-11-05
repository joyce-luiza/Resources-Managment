const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Resources', () => {

    describe('/GET Resources', () => {
        it('Get all resources', (done) => {
             chai.request('http://localhost:4004')
                .get('/resources')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                done();
                });
        });
    });
});

describe('/POST Resource', () => {
    it('Post a resource', (done) => {
        const resource = {
            name: "Testando recurso",
            type: "DB",
            creation_date: "02-11-2020"
        }
        chai.request('http://localhost:4004')
        .post('/resources')
        .send(resource)
        .end((err, res) => {
            res.should.have.status(200);
        done();
        });
    });
});

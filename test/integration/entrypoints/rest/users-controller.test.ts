import request from 'supertest';

import app from '../../../../src/configurations/app';

describe('simple error test', () => {
    it('should return users', async (done) => {
        const { status, body } = await request(app).get('/api/v1/users');

        expect(status).toBe(200);

        const { results } = body;
        expect(results.length).toBe(1);

        done();
    });
});

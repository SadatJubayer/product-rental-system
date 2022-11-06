import { daysBetween } from './helpers';

describe('daysBetween()', () => {
    it('Today and tomorrows difference should be 1', () => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const diff = daysBetween(today, tomorrow);
        expect(diff).toEqual(1);
    });

    it('From and to dates should give correct value', () => {
        const from = new Date();
        const to = new Date();
        to.setDate(from.getDate() + 10);

        const diff = daysBetween(from, to);
        expect(diff).toEqual(10);
    });

    it('Should return -1 if TO date is bigger than FROM date', () => {
        const from = new Date();
        const to = new Date();
        to.setDate(from.getDate() - 10);

        const diff = daysBetween(from, to);
        expect(diff).toEqual(-1);
    });
});

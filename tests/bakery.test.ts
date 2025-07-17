import {addCategory, getAllCategory, isCategoryExists, removeCategory} from "../src/firebase/firebaseDBService";
import { getApp, deleteApp } from 'firebase/app';


// describe('BakeryShop.tools', () => {
//
//     let arr: number[];
//     beforeEach(() => {
//         arr = [1, 2, 3];
//     });
//
//     test('getRandomNumber test', () => {
//         expect(getRandomNumber(1, 1)).toBe(1);
//         expect(getRandomNumber(1, 10)).toBeLessThan(10);
//         // expect(getRandomNumber(1,10)).toBeGreaterThan(10);
//         expect(getRandomNumber(1, 10)).not.toBeGreaterThan(10);
//         expect(getRandomNumber(9, 10)).toBe(9);
//
//     })
//
//     test('reverse array', () => {
//         expect(reverseArray(arr)).toEqual([3, 2, 1]);
//     })
//
//     test('dib', () => {
//         expect(div(10, 5)).toBe(2);
//         expect(div(12, 5)).not.toBe(2);
//         expect(() => div(5, 0)).toThrow("Dividing by zero");
//
//     })
//     test('async function echo', () => {
//         expect(echo('Hello')).resolves.toBe('Hello');
//         expect(() => echo('')).rejects.toThrow('Error');
//
//     })
// })
//


const checkItem = (item: unknown) => !!item;


describe('BakeryShop.dbService', () => {
    afterAll(async () => {
        await deleteApp(getApp());
    });




    test('isCategorysExists', async () => {
        const categories = await getAllCategory();
        const results = categories.map(checkItem);

        // Проверяем, что все категории существуют (truthy)
        expect(results.every(Boolean)).toBeTruthy();
    });

    test('addCategory', async () => {
        const shoko = "shoko";
        await addCategory({
            category_name: shoko
        });
        const res = await isCategoryExists(shoko)
        expect(res).toBeTruthy();

    })
    test('removeCategory', async () => {
        await removeCategory('shoko');
        await expect(isCategoryExists("shoko")).resolves.toBeFalsy();
    })
});

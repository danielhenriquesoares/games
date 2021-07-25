import {SwordGames} from "../swordgames";

describe("Sword games testing", () => {
    let swordGames = new SwordGames();
    swordGames.currentTimeSpent = 360;
    swordGames.statistics = {
        totalGamesPlayed: 0,
        history: [],
        aggregatedTime: '00:00:00',
        player1Wins: 0,
        player2Wins: 0
    };

    test("should save to local storage", () => {
        expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    });

    test("it should return formated time string", () => {
        expect(swordGames.timeCounter()).toBe("00:06:00");
    });

    test("it should be 00:00:00 if no params", () => {
        expect(swordGames.timeAccumulator()).toBe('00:00:00');
    });

    test("it should be 00:00:00 if invalid param", () => {
        expect(swordGames.timeAccumulator('aa:00:00')).toBe('00:00:00');
    });

    test("it shoud add to aggregatedTime", () => {
        swordGames.statistics.aggregatedTime = '00:01:00';
        expect(swordGames.timeAccumulator('00:03:31')).toBe('00:04:31');
    });

    test("dummy test", () => {
        expect(true).toBe(true);
    });
});
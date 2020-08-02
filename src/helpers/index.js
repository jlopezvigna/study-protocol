export const removeDuplicates = (array, prop) => {
    return array.filter((obj, pos, arr) => {
        return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
};

export const randomNumber = () => {
    return Math.floor(Math.random() * 90 + 10);
};

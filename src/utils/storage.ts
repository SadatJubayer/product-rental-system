/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadState = (stateName: string) => {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (stateName: string, value: any) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(stateName, serializedState);
    } catch (err) {
        throw new Error("Can't save changes in local storage");
    }
};

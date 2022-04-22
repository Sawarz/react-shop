export const loadState = () => {
    const serialState = localStorage.getItem("appState");
    if (serialState == null) {
        return undefined;
    }
    return JSON.parse(serialState);
}

export const saveState = (state) => {
    const serialState = JSON.stringify(state);
    console.log(serialState);
    localStorage.setItem('appState', serialState);
};
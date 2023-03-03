export const scrollIntoView = (id: string) => {
    let location = document.getElementById(id);
    if (location) location.scrollIntoView();
};

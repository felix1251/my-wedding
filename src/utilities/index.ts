export const scrollIntoView = (id: string) => {
    let location: HTMLElement | null = document.getElementById(id);
    if (location) location.scrollIntoView() as void;
};

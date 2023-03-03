export const scrollIntoView = (id) => {
    let location = document.getElementById(id);
    if(location) location.scrollIntoView({ behavior: "smooth" });
} 
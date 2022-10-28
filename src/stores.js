import { writable } from "svelte/store";

export const ReviewStore = writable([
    { id: 1, rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, labore?" },
    { id: 2, rating: 4, text: "This is a good product" },
    { id: 3, rating: 3, text: "This is an ok product" },
    { id: 4, rating: 2, text: "This is a bad product" },
    { id: 5, rating: 1, text: "This is a terrible product" },
]);
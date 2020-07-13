// In this file you can specify the trial data for your experiment

// number of pic shown, degree of rotation, same or different
const trials = {
    key_press: [
        {
            image: 1,
            question: "Are the figures in the two images the same or different?",
            picture: "1_50_same.jpg",
            rotation: 50,
            expected: "same",
        },
        {
            image: 1,
            question: "Are the figures in the two images the same or different?",
            picture: "1_50_different.jpg",
            rotation: 50,
            expected: "different",
        },
        {
            image: 1,
            question: "Are the figures in the two images the same or different?",
            picture: "1_150_same.jpg",
            rotation: 150,
            expected: "same",
        },
        {
            image: 1,
            question: "Are the figures in the two images the same or different?",
            picture: "1_150_different.jpg",
            rotation: 150,
            expected: "different",
        },
        {
            image: 2,
            question: "Are the figures in the two images the same or different?",
            picture: "2_50_same.jpg",
            rotation: 50,
            expected: "same",
        },
    ],
};

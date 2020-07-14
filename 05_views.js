
// introduction
const intro = magpieViews.view_generator("intro", {
    trials: 1,
    name: 'introduction',
    text: 'Thank you for participating in this experiment and helping us.'
});

// instructions 
const instructions = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions',
    title: 'Experimental instructions',
    text: `You will be presented with images of geometrical figures. Your task is to compare the figures and indicating whether you think the figure is the same in both pictures or whether you think the figure is different in both pictures. Press „f“ on your keyboard to indicate the figures are the same. Press „j“ on your keyboard to indicate they are different.`,
});

// keypress task
const key_press = magpieViews.view_generator('key_press', {
    trials: 48,
    name: "main",
    trial_type: "main",
    pause: 250,
    data: _.shuffle(trials.key_press),
    question: "Is the figure in the image the same or different?",
    key1: 'f',
    key2: 'j',
    f: "same",
    j: "different",
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// submits the results
const thanks = magpieViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#properties-of-trial
*/



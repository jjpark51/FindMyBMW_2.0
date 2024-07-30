import q1indicator from '../assets/q1_6.png'
import q2indicator from '../assets/q2_6.png'
import q3indicator from '../assets/q3_6.png'
import q4indicator from '../assets/q4_6.png'
import q5indicator from '../assets/q5_6.png'
import q6indicator from '../assets/q6_6.png'
export const QList = [
    {
        indicator: q1indicator,
        Qnum: 1,
        num: 'Q1.',
        name: 'What do you value most?',
        answer: ['Customizability', 'Performance', 'Space', 'Popularity','Maintenance Cost']
        ,option: "Drag & Drop"
    },
    {
        indicator: q2indicator,
        Qnum: 2,
        num: 'Q2.',
        name: 'What kind of fuel type do you prefer?',
        answer: ['Gasoline', 'Diesel', 'Plug-in Hybrid', 'Electric', "Not Sure"]
        ,option: "Multi-choice"
    
    },
    {
        indicator: q3indicator,
        Qnum: 3,
        num: 'Q3.',
        name: 'What kind of image do you want your car to be?',
        answer: ['Elegant & Reliable', 'Spacious & Robust', 'Practical & Versatile', 'Sporty & Dynamic']
        ,option: "Multi-choice"
    },
    {
        indicator: q4indicator,
        Qnum: 4,
        num: 'Q4.',
        name: 'What type of driver are you?',
        answer: ['I am a new driver', 'I like quiet & smooth driving', 'I drive long distance', 'I like to enjoy speed', 'I drive on hazardous roads'],
        option: "Multi-choice"
    },

    // {
    //     indicator: q3indicator,
    //     Qnum: 3,
    //     num: 'Q3.',
    //     name: 'How many people will ride your car?',
    //     answer: ['1 or 2', '3', '4', 'More than 5']
    //     ,option: ""
    // },

    {
        indicator: q5indicator,
        Qnum: 5,
        num: 'Q5.',
        name: 'How would you use your vehicle?',
        answer: ['Daily City Commute', 'Outdoor Activities', 'Traveling with Family', 'Going for a drive']
        ,option: "Multi-choice"
    },
    {
        indicator: q6indicator,
        Qnum: 6,
        num: 'Q6.',
        name: 'What features would you like your car to have?',
        answer: ['High Sound Quality', 'Various Customization Options','LED Kidney Grill', "Entertainment Platform", "Comfortable Interior", "Driving Assistance", "Convertible"]
        ,option: "Multi-choice"
    },

]
// CODE here for your Lambda Classes


class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
        speak(){
            console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
        };
};

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
        demo(subject){
            console.log(`Today we are learning about ${subject}`)
        };
        grade(student, subject){
            console.log(`${student} receives a perfect score on ${subject}`)
        };
};

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
        listsSubjects(){
            console.log(this.favSubjects)
        };
        PRAssignment(subject){
            console.log(`${student.name} has submitted a PR for ${subject}`)
        };
        sprintChallenge(subject){
            console.log(`${student.name} has begun a sprint challenge on ${subject}`)
        };
};

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructors = attributes.favInstructors;
    }
        standUp(name, channel){
            console.log(`${name} announces to ${channel}, @channel standy times!`)
        }
        debugsCode(student, subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
        }

}

// **Instructors** - extensions of Person
// **Students** - extensions of Person
// **Project Managers** - extensions of Instructors
// **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const darthSidious = new Instructor({
    name: 'Darth Sidious',
    location: 'Naboo',
    age: 88,
    favLanguage: 'Java',
    specialty: 'Android Development',
    catchPhrase: 'the Dark side welcomes you'
});

const Gandalf = new Instructor({
    name: 'Gandalf',
    location: 'Middle Earth',
    age: 1233,
    favLanguage: 'Elvish',
    specialty: 'Back-End wizardry',
    catchPhrase: 'You shall not pass'
});


const frodo = new Student({
    name: 'Frodo',
    location: 'The Shire',
    age: 50,
    previousBackground: 'Townie',
    className: 'FullStack',   
    favSubjects: 'recursion and invisibility'
})

const arya = new Student({
    name: 'Arya',
    location: 'The House of Black and White',
    age: 17,
    previousBackground: 'Lady of House Stark',
    className: 'DataScience',   
    favSubjects: 'face changing'
})


const hermione = new ProjectManager({
    name: 'Hermione',
    location: 'Hogwarts',
    age: 19,
    favLanguage: 'muggle-speak',
    specialty: 'Certified Unicorn',
    catchPhrase: 'When in doubt, go to the library',
    gradClassName: 'iOS3',
    favInstructors: 'Gandalf'
})

const darthVader = new ProjectManager({
    name: 'Darth Vader',
    location: 'Death Star',
    age: 45,
    favLanguage: 'respiration',
    specialty: 'shadow DOM',
    catchPhrase: 'I see through the lies of the Jedi.',
    gradClassName: 'FullStack7',
    favInstructors: 'Darth Sidious'
})

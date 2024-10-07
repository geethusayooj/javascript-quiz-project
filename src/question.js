class Question {
    // YOUR CODE HERE:
    //
     constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;

     }
     shuffleChoices() {
        for(let i=this.choices.length; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
        }
    }


}
const Question1=new Question() 
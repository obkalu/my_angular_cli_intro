export class Init {

    constructor() {
        // empty
    }

    load() {
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
            console.log('No ToDos Found in localStorage... Creating...');
            var todos = [
                {
                    text : 'Get out of bed'
                },
                {
                    text : 'Say my morning prayer/meditation'
                },
                {
                    text : 'Go for a 30 minutes jogging/work-out session'
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            console.log('Todos exist in localStorage...');
        }

    }
}

window.onload = function(){
    
    const taskField = document.querySelector('#taskfield')
    const addTaskBtn = document.querySelector('#addTaskBtn')
    const allTaskParent = document.querySelector('#allTasks')

    taskField.addEventListener('keypress', function(e){
        if (e.keyCode === 13) {
            createNewTask(allTaskParent, e.target.value)
            this.value = ''
        }
    })
}
    function createNewTask(parent, task) {
        let col = create({'class': 'col-sm-3'})
        let singleTask = create({'class': 'single-task d-flex'})

        let singleTaskP = create('p')
        singleTaskP.innerHTML = task
        singleTask.appendChild(singleTaskP)

        let span = create('span')
        span.innerHTML = '<i class="fas fa-times-circle"></i>'
        span.addEventListener('click', function(){
        parent.removeChild(col)
    })
        singleTask.appendChild(span)
        
        
        col.appendChild(singleTask)
        parent.appendChild(col)

    }
function createTaskControler(parent){
    let controlPanel = create({'class': 'task-control-panel'})

    let colorPallete = createColorPallete()
    controlPanel.appendChild(colorPallete)
    col.appendChild(controlPanel)
}

function createColorPallete(){
    const colors =['red', 'blue', 'yellow', 'tomato', 'redgreen']

    let colorDiv = create({'class': 'd-flex'})
    colors.forEach(color => {
        let div = create({'class': 'color-circle'})
        div.style.background = color
        colorDiv.appendChild(div)
    })

        return colorDiv

}




window.create = function () {

    if (arguments.length === 0) {
        return document.createElement('div');
    }

    if (arguments.length === 1 && typeof arguments[0] != 'object') {
        return document.createElement(arguments[0]);
    }

    var tag = arguments[0];
    var attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        tag = 'div';
    }

    var element = document.createElement(tag);

    for (var i in attr) {
        element.setAttribute(i, attr[i]);
    }

    return element;
}

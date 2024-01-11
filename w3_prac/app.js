function getAttributes(){
    alert(document.querySelector('p').children[0].innerText);
}

function insert_Row(){
    const parent = document.querySelector('#sampleTable');
    const rows = document.querySelectorAll('tr');
    let newRow = document.createElement('tr');
    for (let i=0; i<2; i++){
        let newCol = document.createElement('td');
        newCol.innerText = `Row3 cell${i+1}`;
        newRow.appendChild(newCol);
    }
    parent.insertBefore(newRow, rows[1].nextElementSibling);
}

function changeContent(){
    let r = window.prompt('Enter row number', 1);
    let c = window.prompt('Enter column number', 1);
    while (r>2 || c>2){
        alert('wrong number, again');
        r = window.prompt('Enter row number', 1);
        c = window.prompt('Enter column number', 1);
    }
    const rows = document.querySelectorAll('tr');
    rows[r-1].children[c-1].innerText = 'changed';
}

function createTable(){
    const table = document.querySelector('#myTable');

    Array.from(table.children).forEach(child=>{
        child.remove();
    });

    let r = window.prompt('Enter row number', 1);
    let c = window.prompt('Enter column number', 1);
    
    for (let i=0; i<r; i++){
        let newRow = document.createElement('tr');
        for (let j=0; j<c; j++){
            let newCol = document.createElement('td');
            newCol.innerText = `Row${i+1} Col${j+1}`;
            newRow.appendChild(newCol);
        }
        table.appendChild(newRow);
    }
}

function removecolor(){
    const color = document.querySelector('#colorSelect');
    color.children[color.selectedIndex].remove();
}

function getOptions(){
    const color = document.querySelector('#mySelect');
    let message = `We have ${color.children.length} options`;
    Array.from(color).forEach(option=>{
        message = message + option.innerText;
    })
    window.alert(message);
}
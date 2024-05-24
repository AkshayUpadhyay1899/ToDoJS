let div = document.getElementsByClassName('container');
        let btn = document.getElementById('btn');
        let ulRef = document.getElementById('list');
        btn.addEventListener('click', (e) => {
            let newli = document.createElement('li');
            let text = document.getElementById('task').value;
            if(text.length > 2 && text.length < 31){
                let node = document.createTextNode(text);
                let dltbtn = document.createElement('button');
                dltbtn.textContent = "Delete";
                newli.appendChild(node);
                newli.appendChild(dltbtn);
                newli.setAttribute('id', 'listitem');
                dltbtn.setAttribute('id', 'dltbtn')
                dltbtnX = dltbtn;
                ulRef.insertBefore(newli, document.querySelector('ul li:nth-child(1)'));
                deleteButton(newli, node, dltbtn);
            }            
        });

        function deleteButton(newli, node, dltbtn){
            dltbtn.addEventListener('click', () => {
                newli.parentNode.removeChild(newli);
                
            });
        }
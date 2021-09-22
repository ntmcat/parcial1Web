function agregar(){
    var gusto = document.getElementById('gus').value;
    document.getElementById('info').innerHTML += `<tr><td>${gusto}</td><td>0</td><td><a class="editarbtn" onclick="permitirEditar(this)">Editar</a></td></tr>`;
    document.getElementById('gus').value = "";
};

var editando =false;

function permitirEditar(nodo){


if (editando == false) {
    var td = nodo.parentNode; 
    var tr = td.parentNode; 

    var nContenedor = document.getElementById('contenedorForm');
    var nTr = tr.getElementsByTagName('td');

    var gusto = nTr[0].textContent;
    var porcentaje = nTr[1].textContent;


    var nuevo = '<td class="nokas"><input type="text" name="nombre" id="nombre" value="'+nombre.value+'" size="5"></td>' +

    '<td class="nokas"><input type="text" name="email" id="email" value="'+email.value+'" size="5"></td>' +

    '<td class="nokas"><input type="text" name="tel" id="tel" value="'+tel.value+'" size="5"></td>' +

    '<td><input type="text" class="input1" name="gusto" id="gus" value="'+gusto+'" size="5"></td>'+

    '<td><input type="text" class="input1" name="porcentaje" id="porcentaje" value="'+porcentaje+'" size="5"</td> <td>En edición</td>'

    tr.innerHTML = nuevo;


    nContenedor.innerHTML = '<p class="parrafoFin">Pulse Aceptar para guardar los cambios o cancelar para anularlos</p>'+

    '<div class="botones_fin"><button class="btn1" type="submit">Aceptar</button> <button class="btn2" type="reset" onclick="anular()">Cancelar</button></div>';

    editando = "true";
}

else {
    alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
};

};
    
    
function anular(){
    
    window.location.reload();
    
};


var array
function arraymulti(){
    array = [{username:"Juan", cod:"192102", doc:"1092730657", tipouser:"Estudiante"},
             {username:"Jose", cod:"192103", doc:"1092730557", tipouser:"Estudiante"},
             {username:"Garcia", cod:"192104", doc:"1092730357", tipouser:"Estudiante"},
            ]
    let fecha = new Date();
    console.log(fecha.getTime());
}
function compara(){
    var nombre = $("#nombre").val();
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre SI existe");
        }else{
            console.log("El nombre NO existe");
        }
    }

}
const comidaDB = [
    {
        id: 1,
        produto: 'carne'

    },
    {
        id: 2,
        produto: 'pan'
    },
    {
        id: 3,
        produto: 'queso'   
    }
    
];
const cocineroDB =[
    {
        id: 1,
        name: "Ferran adria"

    },
    {
        id: 2,
        name: "Eneko Atxa"
    },
    {
        id: 3,
        name: "Joan roca"
    }
];
 async function getProductoId(id){
    const comida = comidaDB.find(comida => comida.id===id);
    if (!comida) {
        const error = new Error();
        error.message = "Producto no encontrado";
        throw error;
    }
    return comida;
}

async function getCocineroId(id){
    const cocinero = cocineroDB.find(cocinero => cocinero.id === id);
    if (!cocinero){
        const error = new Error();
        error.message = "El cocinero no existe";
        throw error;
    }
    return cocinero;
}
async function main(){
    try{
        const comida = await getProductoId(2);
        const cocinero = await getCocineroId(comida.id);   
        console.log(`La  comida hecha en ${comida.produto} es la faborita del chef ${cocinero.name}`);

    }catch (ex){
        console.log(ex.message);  
    }
}
main();



    
    
   

import CafeBase from "./CafeBase";


class CafeOscuro extends CafeBase{
    preparar(): string {
        return `${super.preparar()}Café Oscuro`;
    }
    costo(): number {
        return super.costo()+10;
    }
}


export default CafeOscuro;
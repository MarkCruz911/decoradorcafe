import CafeBase from "./CafeBase";


class CafeBlanco extends CafeBase{
    preparar(): string {
        return `${super.preparar()}Café Blanco`;
    }
    costo(): number {
        return super.costo()+7;
    }
}


export default CafeBlanco;
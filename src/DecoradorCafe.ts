import CafeBase from "./CafeBase";

  // Decorador base: DecoradorCafe
  class DecoradorCafe extends CafeBase {
    protected cafe: CafeBase;
  
    constructor(cafe: CafeBase) {
      super();
      this.cafe = cafe;
    }
  
    preparar(): string {
      return this.cafe.preparar();
    }
    costo():number{
        return this.cafe.costo();
    }
  }


export default DecoradorCafe;
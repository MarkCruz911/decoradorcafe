// Decorators.ts
class Cafe {
    preparar(): string {
      return 'Café';
    }
    costo():number{
        return 0;
    }
  }


class CafeOscuro extends Cafe{
    preparar(): string {
        return `${super.preparar()}`;
    }
    costo(): number {
        return super.costo()+10;
    }
}
  
  // Decorador base: DecoradorCafe
  class DecoradorCafe extends Cafe {
    protected cafe: Cafe;
  
    constructor(cafe: Cafe) {
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
  
  // Decorador concreto: CremaDecorator
  class CremaDecorator extends DecoradorCafe {
    preparar(): string {
      return `${super.preparar()} + crema`;
    }
    costo(): number {
        return super.costo()+5;
    }
  }
  
  // Decorador concreto: AzucarDecorator
  class AzucarDecorator extends DecoradorCafe {
    preparar(): string {
      return `${super.preparar()} + azúcar`;
    }
    costo(): number {
        return super.costo()+10;
    }
  }
  // Decorador concreto: HieloDecorator
  class HieloDecorator extends DecoradorCafe {
    preparar(): string {
      return `${super.preparar()} + Hielo`;
    }
    costo(): number {
        return super.costo()+5;
    }
  }
  
  export { Cafe, CremaDecorator, AzucarDecorator,CafeOscuro,HieloDecorator };
  
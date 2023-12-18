import DecoradorCafe from "./DecoradorCafe";

  // Decorador concreto: HieloDecorator
  class HieloDecorator extends DecoradorCafe {
    preparar(): string {
      return `${super.preparar()} + Hielo`;
    }
    costo(): number {
        return super.costo()+5;
    }
  }


export default HieloDecorator;
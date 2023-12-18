import DecoradorCafe from "./DecoradorCafe";

  // Decorador concreto: CremaDecorator
  class CremaDecorator extends DecoradorCafe {
    preparar(): string {
      return `${super.preparar()} + crema`;
    }
    costo(): number {
        return super.costo()+5;
    }
  }

export default CremaDecorator;
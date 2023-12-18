import DecoradorCafe from "./DecoradorCafe";

  // Decorador concreto: AzucarDecorator
  class AzucarDecorator extends DecoradorCafe {
    preparar(): string {
      return `${super.preparar()} + azúcar`;
    }
    costo(): number {
        return super.costo()+10;
    }
  }


  export default AzucarDecorator;
  
import { Product } from '../models/product.interface';
import { faker } from '@faker-js/faker';

export class ProdutcsServices {
  //propierties
  private products: Product[] = [];

  constructor() {
    while (this.products.length < 100) {
      this.products.push(this.generateProduct());
    }
  }

  generateId() {
    let id;
    if (this.products[0]?.id) {
      id = this.products[this.products.length - 1].id + 1;
    } else {
      id = 1;
    }
    return id;
  }

  private generateProduct(): Product {
    return {
      id: this.generateId(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      image: faker.image.url()
    };
  }

  create(newProduct: Product) {
    this.products.push(newProduct);
  }

  delete(id: number) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) throw new Error('Product was not found');
    this.products.splice(index, 1);
  }

  find() {
    return this.products;
  }

  findOne(id: string | number) {
    return this.products.find((product) => product.id === Number(id));
  }

  update(id: number, newProduct: Product) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) throw new Error('Product was not found');
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...newProduct
    };
  }
}

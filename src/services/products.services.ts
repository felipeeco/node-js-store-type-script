import { Product } from '../models/product.interface';
import { faker } from '@faker-js/faker';
import * as boom from '@hapi/boom';

export class ProductsServices {
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
      price: +faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      image: faker.image.url()
    };
  }

  async create(newProduct: Product): Promise<void> {
    return new Promise<void>((resolve) => {
      this.products.push(newProduct);
      resolve();
    });
  }

  async delete(id: number): Promise<void> {
    const index = await this.products.findIndex((product) => product.id === id);

    return new Promise<void>((resolve, reject) => {
      if (index === -1) {
        reject(boom.notFound());
      } else {
        this.products.splice(index, 1);
        resolve();
      }
    });
  }

  async find(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    });
  }

  async findOne(id: string | number): Promise<Product | undefined> {
    return this.products.find((product) => product.id === Number(id));
  }

  async update(id: number, newProduct: Product): Promise<void> {
    const index = await this.products.findIndex((product) => product.id === id);

    return new Promise<void>((resolve, reject) => {
      if (index === -1) {
        reject(boom.notFound());
      }

      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...newProduct
      };
      resolve();
    });
  }
}

import * as boom from '@hapi/boom';
import { faker } from '@faker-js/faker';
import { Product } from '../interfaces/product.interface';
import {
  CreateProductSchema,
  UpdateProductSchema
} from '../schemas/product.schema';

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

  create(newProduct: Product): Promise<void> {
    const { error } = CreateProductSchema.validate(newProduct, {
      abortEarly: false
    });

    return new Promise<void>((resolve, reject) => {
      if (error) {
        reject(boom.badRequest(error));
      } else {
        this.products.push(newProduct);
        resolve();
      }
    });
  }

  delete(id: number): Promise<void> {
    const index = this.products.findIndex((product) => product.id === id);

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
      resolve(this.products);
    });
  }

  findOne(id: number): Product | undefined {
    return this.products.find((product) => product.id === Number(id));
  }

  update(id: number, newProduct: Product): Promise<void> {
    const index = this.products.findIndex((product) => product.id === id);
    const { error } = UpdateProductSchema.validate(newProduct, {
      abortEarly: false
    });

    return new Promise<void>((resolve, reject) => {
      if (index === -1) reject(boom.notFound());
      if (error) reject(boom.badRequest());

      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...newProduct
      };
      resolve();
    });
  }
}

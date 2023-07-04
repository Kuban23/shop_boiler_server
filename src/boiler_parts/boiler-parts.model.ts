import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class BoilerParts extends Model {
  @Column
  boiler_manufacturer: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  parts_manufacturer: string;

  @Column
  // артикул
  vendor_code: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string;

  @Column({ defaultValue: 0 })
  // кол-во товаров на складе
  in_stock: number;

  @Column({ defaultValue: false })
  bestseller: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  // совместимость
  compatibility: string;
}

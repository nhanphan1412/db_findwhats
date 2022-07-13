import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { CityProvince } from '../city-province/city-province.entity';

@Entity()
export class DistrictTown {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  geojson: string;

  @ManyToOne() // plain decorator is enough, type will be sniffer via reflection!
  city_province!: CityProvince;

  districtTownSlug?: string;
}

import { OneToMany } from '@mikro-orm/core';
import { Collection } from '@mikro-orm/core';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { DistrictTown } from '../district-town/district-town.entity';

@Entity()
export class CityProvince {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  geojson: string;

  @OneToMany(() => DistrictTown, (DistrictTown) => DistrictTown.city_province)
  cityDistrict = new Collection<DistrictTown>(this);

  // cityProvince!: CityProvince;

  cityProvinceSlug?: string;
}

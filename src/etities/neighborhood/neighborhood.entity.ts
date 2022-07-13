import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { CityProvince } from '../city-province/city-province.entity';
import { DistrictTown } from '../district-town/district-town.entity';

@Entity()
export class Neighborhood {
  @PrimaryKey()
  id!: string;

  @ManyToOne({
    serializer: (value) => value.id,
    serializedName: 'cityProvinceId',
  })
  cityProvince!: CityProvince;

  @ManyToOne({
    serializer: (value) => value.id,
    serializedName: 'districtTownId',
  })
  districtTown!: DistrictTown;

  @Property()
  name: string;

  @Property()
  geojson: string;

  neighborhoodSlug?: string;
}

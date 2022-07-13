import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { CityProvince } from '../city-province/city-province.entity';
import { DistrictTown } from '../district-town/district-town.entity';

@Entity()
export class Customers {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  phone: number;

  @Property()
  gender: string;

  @Property()
  birthday: Date;

  @ManyToOne({
    serializer: (value) => value.id,
    serializedName: 'livingCityProvinceId',
  })
  livingCityProvince!: CityProvince;

  @ManyToOne({
    serializer: (value) => value.id,
    serializedName: 'livingDistrictTownId',
  })
  livingDistrictTown!: DistrictTown;

  @Property()
  profilePicture: string;
}

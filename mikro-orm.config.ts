import { Options } from '@mikro-orm/core';
import { DistrictTown } from './src/etities/district-town/district-town.entity';
import { CityProvince } from './src/etities/city-province/city-province.entity';
import { Neighborhood } from './src/etities/neighborhood/neighborhood.entity';
import { Customers } from './src/etities/customers/customers.entity';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  entities: [CityProvince, DistrictTown, Neighborhood, Customers],
  host: 'db.yymkcfmwpzqlhfqttjwl.supabase.co',
  dbName: 'postgres',
  type: 'postgresql',
  port: 5432,
  debug: true,
  user: 'postgres',
  password: 'Hoainhan@123',
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    disableForeignKeys: false,
  },
  schemaGenerator: {
    disableForeignKeys: false,
  },
};

export default config;

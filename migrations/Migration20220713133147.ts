import { Migration } from '@mikro-orm/migrations';

export class Migration20220713133147 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "city_province" ("id" serial primary key, "name" varchar(255) not null, "geojson" varchar(255) not null);');

    this.addSql('create table "district_town" ("id" serial primary key, "name" varchar(255) not null, "geojson" varchar(255) not null, "city_province_id" int not null);');

    this.addSql('create table "neighborhood" ("id" varchar(255) not null, "city_province_id" int not null, "district_town_id" int not null, "name" varchar(255) not null, "geojson" varchar(255) not null);');
    this.addSql('alter table "neighborhood" add constraint "neighborhood_pkey" primary key ("id");');

    this.addSql('create table "customers" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "phone" int not null, "gender" varchar(255) not null, "birthday" timestamptz(0) not null, "living_city_province_id" int not null, "living_district_town_id" int not null, "profile_picture" varchar(255) not null);');

    this.addSql('alter table "district_town" add constraint "district_town_city_province_id_foreign" foreign key ("city_province_id") references "city_province" ("id") on update cascade;');

    this.addSql('alter table "neighborhood" add constraint "neighborhood_city_province_id_foreign" foreign key ("city_province_id") references "city_province" ("id") on update cascade;');
    this.addSql('alter table "neighborhood" add constraint "neighborhood_district_town_id_foreign" foreign key ("district_town_id") references "district_town" ("id") on update cascade;');

    this.addSql('alter table "customers" add constraint "customers_living_city_province_id_foreign" foreign key ("living_city_province_id") references "city_province" ("id") on update cascade;');
    this.addSql('alter table "customers" add constraint "customers_living_district_town_id_foreign" foreign key ("living_district_town_id") references "district_town" ("id") on update cascade;');
  }

}

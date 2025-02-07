
import { type SchemaTypeDefinition } from 'sanity'
import chefs from './chefs'
import food from './foods';
import product from './product';
import category from "./category";
import users from './users';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefs,food,product,category,users],
}

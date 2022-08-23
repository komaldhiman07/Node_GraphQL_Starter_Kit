import { GraphQLID, GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): any {
    return Users.find();
  },
};
export const GET_USER_BY_ID = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const query = args;
    return await Users.findOneBy(query);
  },
};

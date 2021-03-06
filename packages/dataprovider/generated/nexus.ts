/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: boolean | null; // Boolean
  }
  NullableIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UUIDFilter: { // input type
    contains?: any | null; // UUID
    endsWith?: any | null; // UUID
    equals?: any | null; // UUID
    gt?: any | null; // UUID
    gte?: any | null; // UUID
    in?: any[] | null; // [UUID!]
    lt?: any | null; // UUID
    lte?: any | null; // UUID
    not?: any | null; // UUID
    notIn?: any[] | null; // [UUID!]
    startsWith?: any | null; // UUID
  }
  UserCreateInput: { // input type
    email: string; // String!
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: string | null; // String
    lastName?: string | null; // String
    roles?: NexusGenInputs['UserRoleCreateManyWithoutUsersInput'] | null; // UserRoleCreateManyWithoutUsersInput
    userSocialMedia?: NexusGenInputs['UserSocialMediaCreateOneWithoutUserInput'] | null; // UserSocialMediaCreateOneWithoutUserInput
    wantsNewsletter: boolean; // Boolean!
    yearOfBirth?: number | null; // Int
  }
  UserCreateManyWithoutRolesInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutRolesInput'][] | null; // [UserCreateWithoutRolesInput!]
  }
  UserCreateWithoutRolesInput: { // input type
    email: string; // String!
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: string | null; // String
    lastName?: string | null; // String
    userSocialMedia?: NexusGenInputs['UserSocialMediaCreateOneWithoutUserInput'] | null; // UserSocialMediaCreateOneWithoutUserInput
    wantsNewsletter: boolean; // Boolean!
    yearOfBirth?: number | null; // Int
  }
  UserFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserOrderByInput: { // input type
    email?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    firstName?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    gender?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    lastName?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    wantsNewsletter?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    yearOfBirth?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  UserRoleCreateInput: { // input type
    id?: string | null; // String
    name: string; // String!
    users?: NexusGenInputs['UserCreateManyWithoutRolesInput'] | null; // UserCreateManyWithoutRolesInput
  }
  UserRoleCreateManyWithoutUsersInput: { // input type
    connect?: NexusGenInputs['UserRoleWhereUniqueInput'][] | null; // [UserRoleWhereUniqueInput!]
    create?: NexusGenInputs['UserRoleCreateWithoutUsersInput'][] | null; // [UserRoleCreateWithoutUsersInput!]
  }
  UserRoleCreateWithoutUsersInput: { // input type
    id?: string | null; // String
    name: string; // String!
  }
  UserRoleFilter: { // input type
    every?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    none?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    some?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
  }
  UserRoleOrderByInput: { // input type
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    name?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  UserRoleScalarWhereInput: { // input type
    AND?: NexusGenInputs['UserRoleScalarWhereInput'][] | null; // [UserRoleScalarWhereInput!]
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserRoleScalarWhereInput'][] | null; // [UserRoleScalarWhereInput!]
    OR?: NexusGenInputs['UserRoleScalarWhereInput'][] | null; // [UserRoleScalarWhereInput!]
    users?: NexusGenInputs['UserFilter'] | null; // UserFilter
  }
  UserRoleUpdateInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
    users?: NexusGenInputs['UserUpdateManyWithoutRolesInput'] | null; // UserUpdateManyWithoutRolesInput
  }
  UserRoleUpdateManyDataInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  UserRoleUpdateManyMutationInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  UserRoleUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['UserRoleUpdateManyDataInput']; // UserRoleUpdateManyDataInput!
    where: NexusGenInputs['UserRoleScalarWhereInput']; // UserRoleScalarWhereInput!
  }
  UserRoleUpdateManyWithoutUsersInput: { // input type
    connect?: NexusGenInputs['UserRoleWhereUniqueInput'][] | null; // [UserRoleWhereUniqueInput!]
    create?: NexusGenInputs['UserRoleCreateWithoutUsersInput'][] | null; // [UserRoleCreateWithoutUsersInput!]
    delete?: NexusGenInputs['UserRoleWhereUniqueInput'][] | null; // [UserRoleWhereUniqueInput!]
    deleteMany?: NexusGenInputs['UserRoleScalarWhereInput'][] | null; // [UserRoleScalarWhereInput!]
    disconnect?: NexusGenInputs['UserRoleWhereUniqueInput'][] | null; // [UserRoleWhereUniqueInput!]
    set?: NexusGenInputs['UserRoleWhereUniqueInput'][] | null; // [UserRoleWhereUniqueInput!]
    update?: NexusGenInputs['UserRoleUpdateWithWhereUniqueWithoutUsersInput'][] | null; // [UserRoleUpdateWithWhereUniqueWithoutUsersInput!]
    updateMany?: NexusGenInputs['UserRoleUpdateManyWithWhereNestedInput'][] | null; // [UserRoleUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['UserRoleUpsertWithWhereUniqueWithoutUsersInput'][] | null; // [UserRoleUpsertWithWhereUniqueWithoutUsersInput!]
  }
  UserRoleUpdateWithWhereUniqueWithoutUsersInput: { // input type
    data: NexusGenInputs['UserRoleUpdateWithoutUsersDataInput']; // UserRoleUpdateWithoutUsersDataInput!
    where: NexusGenInputs['UserRoleWhereUniqueInput']; // UserRoleWhereUniqueInput!
  }
  UserRoleUpdateWithoutUsersDataInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  UserRoleUpsertWithWhereUniqueWithoutUsersInput: { // input type
    create: NexusGenInputs['UserRoleCreateWithoutUsersInput']; // UserRoleCreateWithoutUsersInput!
    update: NexusGenInputs['UserRoleUpdateWithoutUsersDataInput']; // UserRoleUpdateWithoutUsersDataInput!
    where: NexusGenInputs['UserRoleWhereUniqueInput']; // UserRoleWhereUniqueInput!
  }
  UserRoleWhereInput: { // input type
    AND?: NexusGenInputs['UserRoleWhereInput'][] | null; // [UserRoleWhereInput!]
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserRoleWhereInput'][] | null; // [UserRoleWhereInput!]
    OR?: NexusGenInputs['UserRoleWhereInput'][] | null; // [UserRoleWhereInput!]
    users?: NexusGenInputs['UserFilter'] | null; // UserFilter
  }
  UserRoleWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  UserScalarWhereInput: { // input type
    AND?: NexusGenInputs['UserScalarWhereInput'][] | null; // [UserScalarWhereInput!]
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    firstName?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    lastName?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    NOT?: NexusGenInputs['UserScalarWhereInput'][] | null; // [UserScalarWhereInput!]
    OR?: NexusGenInputs['UserScalarWhereInput'][] | null; // [UserScalarWhereInput!]
    roles?: NexusGenInputs['UserRoleFilter'] | null; // UserRoleFilter
    wantsNewsletter?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
    yearOfBirth?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
  }
  UserSocialMediaCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['UserSocialMediaWhereUniqueInput'] | null; // UserSocialMediaWhereUniqueInput
    create?: NexusGenInputs['UserSocialMediaCreateWithoutUserInput'] | null; // UserSocialMediaCreateWithoutUserInput
  }
  UserSocialMediaCreateWithoutUserInput: { // input type
    id?: string | null; // String
    instagram: string; // String!
    twitter: string; // String!
  }
  UserSocialMediaUpdateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['UserSocialMediaWhereUniqueInput'] | null; // UserSocialMediaWhereUniqueInput
    create?: NexusGenInputs['UserSocialMediaCreateWithoutUserInput'] | null; // UserSocialMediaCreateWithoutUserInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['UserSocialMediaUpdateWithoutUserDataInput'] | null; // UserSocialMediaUpdateWithoutUserDataInput
    upsert?: NexusGenInputs['UserSocialMediaUpsertWithoutUserInput'] | null; // UserSocialMediaUpsertWithoutUserInput
  }
  UserSocialMediaUpdateWithoutUserDataInput: { // input type
    id?: string | null; // String
    instagram?: string | null; // String
    twitter?: string | null; // String
  }
  UserSocialMediaUpsertWithoutUserInput: { // input type
    create: NexusGenInputs['UserSocialMediaCreateWithoutUserInput']; // UserSocialMediaCreateWithoutUserInput!
    update: NexusGenInputs['UserSocialMediaUpdateWithoutUserDataInput']; // UserSocialMediaUpdateWithoutUserDataInput!
  }
  UserSocialMediaWhereInput: { // input type
    AND?: NexusGenInputs['UserSocialMediaWhereInput'][] | null; // [UserSocialMediaWhereInput!]
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    instagram?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserSocialMediaWhereInput'][] | null; // [UserSocialMediaWhereInput!]
    OR?: NexusGenInputs['UserSocialMediaWhereInput'][] | null; // [UserSocialMediaWhereInput!]
    twitter?: NexusGenInputs['StringFilter'] | null; // StringFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  UserSocialMediaWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: string | null; // String
    lastName?: string | null; // String
    roles?: NexusGenInputs['UserRoleUpdateManyWithoutUsersInput'] | null; // UserRoleUpdateManyWithoutUsersInput
    userSocialMedia?: NexusGenInputs['UserSocialMediaUpdateOneWithoutUserInput'] | null; // UserSocialMediaUpdateOneWithoutUserInput
    wantsNewsletter?: boolean | null; // Boolean
    yearOfBirth?: number | null; // Int
  }
  UserUpdateManyDataInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: string | null; // String
    lastName?: string | null; // String
    wantsNewsletter?: boolean | null; // Boolean
    yearOfBirth?: number | null; // Int
  }
  UserUpdateManyMutationInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: string | null; // String
    lastName?: string | null; // String
    wantsNewsletter?: boolean | null; // Boolean
    yearOfBirth?: number | null; // Int
  }
  UserUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['UserUpdateManyDataInput']; // UserUpdateManyDataInput!
    where: NexusGenInputs['UserScalarWhereInput']; // UserScalarWhereInput!
  }
  UserUpdateManyWithoutRolesInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutRolesInput'][] | null; // [UserCreateWithoutRolesInput!]
    delete?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    deleteMany?: NexusGenInputs['UserScalarWhereInput'][] | null; // [UserScalarWhereInput!]
    disconnect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    set?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    update?: NexusGenInputs['UserUpdateWithWhereUniqueWithoutRolesInput'][] | null; // [UserUpdateWithWhereUniqueWithoutRolesInput!]
    updateMany?: NexusGenInputs['UserUpdateManyWithWhereNestedInput'][] | null; // [UserUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['UserUpsertWithWhereUniqueWithoutRolesInput'][] | null; // [UserUpsertWithWhereUniqueWithoutRolesInput!]
  }
  UserUpdateWithWhereUniqueWithoutRolesInput: { // input type
    data: NexusGenInputs['UserUpdateWithoutRolesDataInput']; // UserUpdateWithoutRolesDataInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserUpdateWithoutRolesDataInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: string | null; // String
    lastName?: string | null; // String
    userSocialMedia?: NexusGenInputs['UserSocialMediaUpdateOneWithoutUserInput'] | null; // UserSocialMediaUpdateOneWithoutUserInput
    wantsNewsletter?: boolean | null; // Boolean
    yearOfBirth?: number | null; // Int
  }
  UserUpsertWithWhereUniqueWithoutRolesInput: { // input type
    create: NexusGenInputs['UserCreateWithoutRolesInput']; // UserCreateWithoutRolesInput!
    update: NexusGenInputs['UserUpdateWithoutRolesDataInput']; // UserUpdateWithoutRolesDataInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    firstName?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    lastName?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    roles?: NexusGenInputs['UserRoleFilter'] | null; // UserRoleFilter
    userSocialMedia?: NexusGenInputs['UserSocialMediaWhereInput'] | null; // UserSocialMediaWhereInput
    wantsNewsletter?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
    yearOfBirth?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  Gender: "FEMALE" | "MALE" | "OTHER"
  OrderByArg: "asc" | "desc"
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    firstName?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    id: string; // String!
    lastName?: string | null; // String
    logs: string[]; // [String!]!
    wantsNewsletter: boolean; // Boolean!
    yearOfBirth?: number | null; // Int
  }
  UserRole: { // root type
    id: string; // String!
    name: string; // String!
  }
  UserSocialMedia: { // root type
    id: string; // String!
    instagram: string; // String!
    twitter: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  UUID: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BooleanFilter: NexusGenInputs['BooleanFilter'];
  NullableIntFilter: NexusGenInputs['NullableIntFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  StringFilter: NexusGenInputs['StringFilter'];
  UUIDFilter: NexusGenInputs['UUIDFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateManyWithoutRolesInput: NexusGenInputs['UserCreateManyWithoutRolesInput'];
  UserCreateWithoutRolesInput: NexusGenInputs['UserCreateWithoutRolesInput'];
  UserFilter: NexusGenInputs['UserFilter'];
  UserOrderByInput: NexusGenInputs['UserOrderByInput'];
  UserRoleCreateInput: NexusGenInputs['UserRoleCreateInput'];
  UserRoleCreateManyWithoutUsersInput: NexusGenInputs['UserRoleCreateManyWithoutUsersInput'];
  UserRoleCreateWithoutUsersInput: NexusGenInputs['UserRoleCreateWithoutUsersInput'];
  UserRoleFilter: NexusGenInputs['UserRoleFilter'];
  UserRoleOrderByInput: NexusGenInputs['UserRoleOrderByInput'];
  UserRoleScalarWhereInput: NexusGenInputs['UserRoleScalarWhereInput'];
  UserRoleUpdateInput: NexusGenInputs['UserRoleUpdateInput'];
  UserRoleUpdateManyDataInput: NexusGenInputs['UserRoleUpdateManyDataInput'];
  UserRoleUpdateManyMutationInput: NexusGenInputs['UserRoleUpdateManyMutationInput'];
  UserRoleUpdateManyWithWhereNestedInput: NexusGenInputs['UserRoleUpdateManyWithWhereNestedInput'];
  UserRoleUpdateManyWithoutUsersInput: NexusGenInputs['UserRoleUpdateManyWithoutUsersInput'];
  UserRoleUpdateWithWhereUniqueWithoutUsersInput: NexusGenInputs['UserRoleUpdateWithWhereUniqueWithoutUsersInput'];
  UserRoleUpdateWithoutUsersDataInput: NexusGenInputs['UserRoleUpdateWithoutUsersDataInput'];
  UserRoleUpsertWithWhereUniqueWithoutUsersInput: NexusGenInputs['UserRoleUpsertWithWhereUniqueWithoutUsersInput'];
  UserRoleWhereInput: NexusGenInputs['UserRoleWhereInput'];
  UserRoleWhereUniqueInput: NexusGenInputs['UserRoleWhereUniqueInput'];
  UserScalarWhereInput: NexusGenInputs['UserScalarWhereInput'];
  UserSocialMediaCreateOneWithoutUserInput: NexusGenInputs['UserSocialMediaCreateOneWithoutUserInput'];
  UserSocialMediaCreateWithoutUserInput: NexusGenInputs['UserSocialMediaCreateWithoutUserInput'];
  UserSocialMediaUpdateOneWithoutUserInput: NexusGenInputs['UserSocialMediaUpdateOneWithoutUserInput'];
  UserSocialMediaUpdateWithoutUserDataInput: NexusGenInputs['UserSocialMediaUpdateWithoutUserDataInput'];
  UserSocialMediaUpsertWithoutUserInput: NexusGenInputs['UserSocialMediaUpsertWithoutUserInput'];
  UserSocialMediaWhereInput: NexusGenInputs['UserSocialMediaWhereInput'];
  UserSocialMediaWhereUniqueInput: NexusGenInputs['UserSocialMediaWhereUniqueInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyDataInput: NexusGenInputs['UserUpdateManyDataInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserUpdateManyWithWhereNestedInput: NexusGenInputs['UserUpdateManyWithWhereNestedInput'];
  UserUpdateManyWithoutRolesInput: NexusGenInputs['UserUpdateManyWithoutRolesInput'];
  UserUpdateWithWhereUniqueWithoutRolesInput: NexusGenInputs['UserUpdateWithWhereUniqueWithoutRolesInput'];
  UserUpdateWithoutRolesDataInput: NexusGenInputs['UserUpdateWithoutRolesDataInput'];
  UserUpsertWithWhereUniqueWithoutRolesInput: NexusGenInputs['UserUpsertWithWhereUniqueWithoutRolesInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  Gender: NexusGenEnums['Gender'];
  OrderByArg: NexusGenEnums['OrderByArg'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
    createOneUserRole: NexusGenRootTypes['UserRole']; // UserRole!
    deleteManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyUserRole: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    deleteOneUserRole: NexusGenRootTypes['UserRole'] | null; // UserRole
    updateManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyUserRole: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOneUser: NexusGenRootTypes['User'] | null; // User
    updateOneUserRole: NexusGenRootTypes['UserRole'] | null; // UserRole
    upsertOneUser: NexusGenRootTypes['User']; // User!
    upsertOneUserRole: NexusGenRootTypes['UserRole']; // UserRole!
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    userRole: NexusGenRootTypes['UserRole'] | null; // UserRole
    userRoles: NexusGenRootTypes['UserRole'][]; // [UserRole!]!
    userRolesCount: number; // Int!
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersCount: number; // Int!
  }
  User: { // field return type
    email: string; // String!
    firstName: string | null; // String
    gender: NexusGenEnums['Gender'] | null; // Gender
    id: string; // String!
    lastName: string | null; // String
    logs: string[]; // [String!]!
    roles: NexusGenRootTypes['UserRole'][]; // [UserRole!]!
    userSocialMedia: NexusGenRootTypes['UserSocialMedia'] | null; // UserSocialMedia
    wantsNewsletter: boolean; // Boolean!
    yearOfBirth: number | null; // Int
  }
  UserRole: { // field return type
    id: string; // String!
    name: string; // String!
  }
  UserSocialMedia: { // field return type
    id: string; // String!
    instagram: string; // String!
    twitter: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    createOneUserRole: { // args
      data: NexusGenInputs['UserRoleCreateInput']; // UserRoleCreateInput!
    }
    deleteManyUser: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteManyUserRole: { // args
      where?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    deleteOneUserRole: { // args
      where: NexusGenInputs['UserRoleWhereUniqueInput']; // UserRoleWhereUniqueInput!
    }
    updateManyUser: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateManyUserRole: { // args
      data: NexusGenInputs['UserRoleUpdateManyMutationInput']; // UserRoleUpdateManyMutationInput!
      where?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateOneUserRole: { // args
      data: NexusGenInputs['UserRoleUpdateInput']; // UserRoleUpdateInput!
      where: NexusGenInputs['UserRoleWhereUniqueInput']; // UserRoleWhereUniqueInput!
    }
    upsertOneUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertOneUserRole: { // args
      create: NexusGenInputs['UserRoleCreateInput']; // UserRoleCreateInput!
      update: NexusGenInputs['UserRoleUpdateInput']; // UserRoleUpdateInput!
      where: NexusGenInputs['UserRoleWhereUniqueInput']; // UserRoleWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    userRole: { // args
      where: NexusGenInputs['UserRoleWhereUniqueInput']; // UserRoleWhereUniqueInput!
    }
    userRoles: { // args
      after?: NexusGenInputs['UserRoleWhereUniqueInput'] | null; // UserRoleWhereUniqueInput
      before?: NexusGenInputs['UserRoleWhereUniqueInput'] | null; // UserRoleWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserRoleOrderByInput'] | null; // UserRoleOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    }
    userRolesCount: { // args
      after?: NexusGenInputs['UserRoleWhereUniqueInput'] | null; // UserRoleWhereUniqueInput
      before?: NexusGenInputs['UserRoleWhereUniqueInput'] | null; // UserRoleWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserRoleOrderByInput'] | null; // UserRoleOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersCount: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  User: {
    logs: { // args
      from: string; // String!
      to: string; // String!
    }
    roles: { // args
      after?: NexusGenInputs['UserRoleWhereUniqueInput'] | null; // UserRoleWhereUniqueInput
      before?: NexusGenInputs['UserRoleWhereUniqueInput'] | null; // UserRoleWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
      where?: NexusGenInputs['UserRoleWhereInput'] | null; // UserRoleWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Mutation" | "Query" | "User" | "UserRole" | "UserSocialMedia";

export type NexusGenInputNames = "BooleanFilter" | "NullableIntFilter" | "NullableStringFilter" | "StringFilter" | "UUIDFilter" | "UserCreateInput" | "UserCreateManyWithoutRolesInput" | "UserCreateWithoutRolesInput" | "UserFilter" | "UserOrderByInput" | "UserRoleCreateInput" | "UserRoleCreateManyWithoutUsersInput" | "UserRoleCreateWithoutUsersInput" | "UserRoleFilter" | "UserRoleOrderByInput" | "UserRoleScalarWhereInput" | "UserRoleUpdateInput" | "UserRoleUpdateManyDataInput" | "UserRoleUpdateManyMutationInput" | "UserRoleUpdateManyWithWhereNestedInput" | "UserRoleUpdateManyWithoutUsersInput" | "UserRoleUpdateWithWhereUniqueWithoutUsersInput" | "UserRoleUpdateWithoutUsersDataInput" | "UserRoleUpsertWithWhereUniqueWithoutUsersInput" | "UserRoleWhereInput" | "UserRoleWhereUniqueInput" | "UserScalarWhereInput" | "UserSocialMediaCreateOneWithoutUserInput" | "UserSocialMediaCreateWithoutUserInput" | "UserSocialMediaUpdateOneWithoutUserInput" | "UserSocialMediaUpdateWithoutUserDataInput" | "UserSocialMediaUpsertWithoutUserInput" | "UserSocialMediaWhereInput" | "UserSocialMediaWhereUniqueInput" | "UserUpdateInput" | "UserUpdateManyDataInput" | "UserUpdateManyMutationInput" | "UserUpdateManyWithWhereNestedInput" | "UserUpdateManyWithoutRolesInput" | "UserUpdateWithWhereUniqueWithoutRolesInput" | "UserUpdateWithoutRolesDataInput" | "UserUpsertWithWhereUniqueWithoutRolesInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "Gender" | "OrderByArg";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String" | "UUID";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}
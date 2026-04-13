export const UserRoles = {
    Admin: "Admin",
    Masters: "Master Api User",
    ApiUser: "Api User",
} as const;

export type UserRoles = typeof UserRoles[keyof typeof UserRoles];
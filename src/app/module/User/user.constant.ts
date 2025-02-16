export const UserStatus = {
  ACTIVE: 'active',
  IN_PROGRESS: 'in-progress',
  BLOCKED: 'blocked',
} as const;

export const UserSearchableFields = [
  'email',
  'name.firstName',
  'name.lastName',
  'presentAddress',
];

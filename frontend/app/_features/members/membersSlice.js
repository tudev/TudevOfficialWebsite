import { MEMBERS } from "@/app/_shared/MEMBERS";

export const selectAllMembers = () => {
  return MEMBERS;
};

export const selectAllOfficers = () => {
  return MEMBERS.find((member) => member.officer);
};

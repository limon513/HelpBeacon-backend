const BloodGroup = {
  A_pos: "A+",
  B_pos: "B+",
  A_neg: "A-",
  B_neg: "B-",
  AB_pos: "AB+",
  AB_neg: "AB-",
  O_pos: "O+",
  O_neg: "O-",
};

const Roles = {
  VOLUNTER: "volunter",
  ADMIN: "admin",
};

const SoSStatus = {
  ACTIVE: "active",
  RESCUED: "rescued",
};

const VictimStatus = {
  ALIVE: "alive",
  DEAD: "dead",
};

module.exports = { BloodGroup, Roles, SoSStatus, VictimStatus };

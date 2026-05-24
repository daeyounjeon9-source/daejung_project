export const liveFailoverRecovery = () => {
  return {
    recovery: true,
    backup: true,
    stream: "GLOBAL_ACTIVE"
  };
};
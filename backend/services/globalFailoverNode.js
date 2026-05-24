export const globalFailoverNode = () => {
  return {
    backup:true,
    recovery:true,
    nodeSwitch:true
  };
};
const positions = {
  //front
  head: '0% 40%',
  neck: '0% 35%',
  chest: '0% 25%',
  abdomen: '0% 10%',
  pelvis: '0% 0%',
  shoulderRt: '10% 30%',
  shoulderLt: '-10% 30%',
  armRt: '15% 20%',
  armLt: '-15% 20%',
  elbowRt: '17.5% 17.5%',
  elbowLt: '-17.5% 17.5%',
  forearmRt: '15% 12.5%',
  forearmLt: '-15% 12.5%',
  wristRt: '15% 5%',
  wristLt: '-15% 5%',
  handRt: '17.5% 0%',
  handLt: '-17.5% 0%',
  thighRt: '5% -5%',
  thighLt: '-5% -5%',
  kneeRt: '5% -17.5%',
  kneeLt: '-5% -17.5%',
  legRt: '5% -30%',
  legLt: '-5% -30%',
  ankleRt: '5% -40%',
  ankleLt: '-5% -40%',
  footRt: '5% -45%',
  footLt: '-5% -45%',
  //back
  buttocks: '0% 0%',
  bThighRt: '-5% -10%',
  bThighLt: '5% -10%',
};
export var anaconfig = {
  default: {
    outlineColor: '#ff8080',
  },
  /*==============================================================================*/
  /*==============================================================================*/
  /*================ !!! CUSTOMIZATION OF THE FRONT SIDE !!!  ====================*/
  /*==============================================================================*/
  /*==============================================================================*/
  ana1: {
    //head
    isFrontFacing: true,
    hover: 'HEAD', //info of the popup
    url: 'https://www.humananatomyillustrations.com/', //link to any webpage
    target: 'zoom', // use "new_window", "same_window", "modal" with bootstrap only, or "none"
    enabled: true, //true/false to activate/deactivate
    position: positions.head,
  },
  ana2: {
    //eye-rt
    isFrontFacing: true,

    hover: 'EYE [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana3: {
    //eye-lt
    hover: 'EYE [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana4: {
    //ear-rt
    hover: 'EAR [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana5: {
    //ear-lt
    isFrontFacing: true,
    hover: 'EAR [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana6: {
    //nose
    isFrontFacing: true,
    hover: 'NOSE',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana7: {
    //mouth
    isFrontFacing: true,
    hover: 'MOUTH',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana8: {
    //neck
    isFrontFacing: true,
    hover: 'NECK',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.neck,
  },
  ana9: {
    //chest
    isFrontFacing: true,
    hover: 'CHEST',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.chest,
  },
  ana10: {
    //abdomen
    isFrontFacing: true,
    hover: 'ABDOMEN',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.abdomen,
  },
  ana11: {
    //pelvis
    isFrontFacing: true,
    hover: 'PELVIS',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.pelvis,
  },
  ana12: {
    //pubis
    isFrontFacing: true,
    hover: 'PUBIS',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.pelvis,
  },
  ana13: {
    //shoulder-rt
    isFrontFacing: true,
    hover: 'SHOULDER [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.shoulderRt,
  },
  ana14: {
    //shoulder-lt
    isFrontFacing: true,
    hover: 'SHOULDER [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.shoulderLt,
  },
  ana15: {
    //arm-rt
    isFrontFacing: true,
    hover: 'ARM [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.armRt,
  },
  ana16: {
    //arm-lt
    isFrontFacing: true,
    hover: 'ARM [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.armLt,
  },
  ana17: {
    //elbow-rt
    isFrontFacing: true,
    hover: 'ELBOW [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.elbowRt,
  },
  ana18: {
    //elbow-lt
    isFrontFacing: true,
    hover: 'ELBOW [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.elbowLt,
  },
  ana19: {
    //forearm-rt
    isFrontFacing: true,
    hover: 'FOREARM [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.forearmRt,
  },
  ana20: {
    //forearm-lt
    isFrontFacing: true,
    hover: 'FOREARM [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.forearmLt,
  },
  ana21: {
    //wrist-rt
    isFrontFacing: true,
    hover: 'WRIST [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.wristRt,
  },
  ana22: {
    //wrist-lt
    isFrontFacing: true,
    hover: 'WRIST [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.wristLt,
  },
  ana23: {
    //hand-rt
    isFrontFacing: true,
    hover: 'HAND [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.handRt,
  },
  ana24: {
    //hand-lt
    isFrontFacing: true,
    hover: 'HAND [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.handLt,
  },
  ana25: {
    //thigh-rt
    isFrontFacing: true,
    hover: 'THIGH [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.thighRt,
  },
  ana26: {
    //thigh-lt
    isFrontFacing: true,
    hover: 'THIGH [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.thighLt,
  },
  ana27: {
    //knee-rt
    isFrontFacing: true,
    hover: 'KNEE [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.kneeRt,
  },
  ana28: {
    //knee-lt
    isFrontFacing: true,
    hover: 'KNEE [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.kneeLt,
  },
  ana29: {
    //leg-rt
    isFrontFacing: true,
    hover: 'LEG [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.legRt,
  },
  ana30: {
    //leg-lt
    isFrontFacing: true,
    hover: 'LEG [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.legLt,
  },
  ana31: {
    //ankle-rt
    isFrontFacing: true,
    hover: 'ANKLE [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.ankleRt,
  },
  ana32: {
    //ankle-lt
    isFrontFacing: true,
    hover: 'ANKLE [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.ankleLt,
  },
  ana33: {
    //foot-rt
    isFrontFacing: true,
    hover: 'FOOT [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footRt,
  },
  ana34: {
    //foot-lt
    isFrontFacing: true,
    hover: 'FOOT [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footLt,
  },
  /*===============================================================================*/
  /*===============================================================================*/
  /*================  !!! CUSTOMIZATION OF THE BACK SIDE !!!  =====================*/
  /*===============================================================================*/
  /*===============================================================================*/
  ana35: {
    //head-back
    hover: 'HEAD [BACK]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.head,
  },
  ana36: {
    //neck-back
    hover: 'NECK [BACK]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.neck,
  },
  ana37: {
    //back
    hover: 'BACK',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.chest,
  },
  ana38: {
    //loin
    hover: 'LOIN',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.abdomen,
  },
  ana39: {
    //buttocks
    hover: 'BUTTOCKS',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.buttocks,
  },
  ana40: {
    //shoulder-back-rt
    hover: 'SHOULDER [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.shoulderLt,
  },
  ana41: {
    //shoulder-back-lt
    hover: 'SHOULDER [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.shoulderRt,
  },
  ana42: {
    //arm-back-rt
    hover: 'ARM [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.armLt,
  },
  ana43: {
    //arm-back-lt
    hover: 'ARM [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.armRt,
  },
  ana44: {
    //elbow-back-rt
    hover: 'ELBOW [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.elbowLt,
  },
  ana45: {
    //elbow-back-lt
    hover: 'ELBOW [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.elbowRt,
  },
  ana46: {
    //forearm-back-rt
    hover: 'FOREARM [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.forearmLt,
  },
  ana47: {
    //forearm-back-lt
    hover: 'FOREARM [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.forearmRt,
  },
  ana48: {
    //wrist-back-rt
    hover: 'WRIST [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.wristLt,
  },
  ana49: {
    //wrist-back-lt
    hover: 'WRIST [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.wristRt,
  },
  ana50: {
    //hand-back-rt
    hover: 'HAND [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.handLt,
  },
  ana51: {
    //hand-back-lt
    hover: 'HAND [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.handRt,
  },
  ana52: {
    //hamstring-rt
    hover: 'HAMSTRING [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.bThighRt,
  },
  ana53: {
    //hamstring-lt
    hover: 'HAMSTRING [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.bThighLt,
  },
  ana54: {
    //knee-back-rt
    hover: 'KNEE [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.kneeLt,
  },
  ana55: {
    //knee-back-lt
    hover: 'KNEE [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.kneeRt,
  },
  ana56: {
    //calf-rt
    hover: 'CALF [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.legLt,
  },
  ana57: {
    //calf-lt
    hover: 'CALF [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.legRt,
  },
  ana58: {
    //ankle-back-rt
    hover: 'ANKLE [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footLt,
  },
  ana59: {
    //ankle-back-lt
    hover: 'ANKLE [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footRt,
  },
  ana60: {
    //sole-rt
    hover: 'SOLE [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footLt,
  },
  ana61: {
    //sole-lt
    hover: 'SOLE [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footRt,
  },
  ana62: {
    //foot-back-rt
    hover: 'FOOT [BACK] [RT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footLt,
  },
  ana63: {
    //foot-back-lt
    hover: 'FOOT [BACK] [LT]',
    url: 'https://www.humananatomyillustrations.com/',
    target: 'zoom',
    enabled: true,
    position: positions.footRt,
  },
};

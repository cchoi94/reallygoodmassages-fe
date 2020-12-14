import { SpotColors } from 'app/components/anatomy/spotSettings/spotColors';
import { Path } from 'app/Path';
import { Muscles } from 'app/dictionaries/muscles';

interface ConfigAttributes {
  hover?: string;
  pos_X: number;
  pos_Y: number;
  size: number;
  outline: string;
  upColor: string;
  overColor: string;
  url: string;
  target: string;
  enabled: boolean;
}

interface Pins {
  pins: ConfigAttributes[];
}

const { upColor, outline, overColor } = SpotColors;
const {
  INFRASPINATUS,
  INTERCOSTAL,
  LATISSIMUSDORSI,
  LEVATOR,
  RHOMBOID,
  SCALENE,
  SERRATUSANTERIOR,
  STERNOCLEIDOMASTERTOID,
  SUPRASPINATUS,
  TERESMAJOR,
  TRAPEZIUS,
  SUBSCAPULARIS,
  RECTUSABDOMINIS,
  GLUTEUSMAXIMUS,
  QUADRATUSLUMBORUM,
  ILIOPSOAS,
  GLUTEUSMEDIUS,
  CLAVICULARPECMAJOR,
} = Muscles;
/*============================================================================================*/
/*===== In the following section you can add/remove/modify the spots of the front side =======*/
/*============================================================================================*/
// Config A

export const spotsConfigA: Pins = {
  pins: [
    // Left Neck
    {
      pos_X: 375, //check the X, Y coordinates guide in the documentation
      pos_Y: 180,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${STERNOCLEIDOMASTERTOID}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Neck
    {
      pos_X: 430, //check the X, Y coordinates guide in the documentation
      pos_Y: 210,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${STERNOCLEIDOMASTERTOID}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Middle Nick
    {
      pos_X: 401, //check the X, Y coordinates guide in the documentation
      pos_Y: 245,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${STERNOCLEIDOMASTERTOID}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Arm
    {
      pos_X: 230, //check the X, Y coordinates guide in the documentation
      pos_Y: 280,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${INFRASPINATUS},${SUPRASPINATUS},${SCALENE},${LATISSIMUSDORSI}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 280, //check the X, Y coordinates guide in the documentation
      pos_Y: 290,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${INFRASPINATUS},${SUPRASPINATUS},${SCALENE},${CLAVICULARPECMAJOR}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Chest
    {
      pos_X: 290, //check the X, Y coordinates guide in the documentation
      pos_Y: 410,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${SERRATUSANTERIOR},${INTERCOSTAL}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 310, //check the X, Y coordinates guide in the documentation
      pos_Y: 450,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${LATISSIMUSDORSI}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
  ],
};

/*=============================================================================================*/
/*===== In the following section you can add/remove/modify the spots of the back side =========*/
/*=============================================================================================*/
// Config B

export const spotsConfigB: Pins = {
  pins: [
    // Head
    {
      pos_X: 373, //check the X, Y coordinates guide in the documentation
      pos_Y: 140,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${TRAPEZIUS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Arm
    {
      pos_X: 210, //check the X, Y coordinates guide in the documentation
      pos_Y: 280,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${INFRASPINATUS},${SUPRASPINATUS},${SCALENE},${LATISSIMUSDORSI}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 255, //check the X, Y coordinates guide in the documentation
      pos_Y: 290,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${LATISSIMUSDORSI},${SCALENE},${SUPRASPINATUS},${SUBSCAPULARIS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Arm
    {
      pos_X: 570, //check the X, Y coordinates guide in the documentation
      pos_Y: 290,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${SUPRASPINATUS},${SUBSCAPULARIS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Back
    {
      pos_X: 360, //check the X, Y coordinates guide in the documentation
      pos_Y: 280,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${RHOMBOID},${SCALENE}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 350, //check the X, Y coordinates guide in the documentation
      pos_Y: 400,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${TERESMAJOR},${LATISSIMUSDORSI}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 350, //check the X, Y coordinates guide in the documentation
      pos_Y: 440,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${TERESMAJOR},${LATISSIMUSDORSI},${RECTUSABDOMINIS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Back
    {
      pos_X: 450, //check the X, Y coordinates guide in the documentation
      pos_Y: 230,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${LEVATOR}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 450, //check the X, Y coordinates guide in the documentation
      pos_Y: 330,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${RHOMBOID}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 480, //check the X, Y coordinates guide in the documentation
      pos_Y: 390,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${SERRATUSANTERIOR}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 520, //check the X, Y coordinates guide in the documentation
      pos_Y: 440,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${SERRATUSANTERIOR},${INTERCOSTAL}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Loin
    {
      pos_X: 320, //check the X, Y coordinates guide in the documentation
      pos_Y: 510,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${LATISSIMUSDORSI}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 320, //check the X, Y coordinates guide in the documentation
      pos_Y: 570,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${LATISSIMUSDORSI},${RECTUSABDOMINIS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 390, //check the X, Y coordinates guide in the documentation
      pos_Y: 570,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${RECTUSABDOMINIS},${ILIOPSOAS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Loin
    {
      pos_X: 425, //check the X, Y coordinates guide in the documentation
      pos_Y: 510,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${ILIOPSOAS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Buttocks Mid
    {
      pos_X: 400, //check the X, Y coordinates guide in the documentation
      pos_Y: 600,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${GLUTEUSMEDIUS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Buttocks Left
    {
      pos_X: 305, //check the X, Y coordinates guide in the documentation
      pos_Y: 630,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${QUADRATUSLUMBORUM}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 385, //check the X, Y coordinates guide in the documentation
      pos_Y: 630,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${GLUTEUSMAXIMUS},${GLUTEUSMEDIUS},${QUADRATUSLUMBORUM}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 385, //check the X, Y coordinates guide in the documentation
      pos_Y: 700,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${GLUTEUSMAXIMUS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Buttocks Right
    {
      pos_X: 450, //check the X, Y coordinates guide in the documentation
      pos_Y: 610,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${GLUTEUSMEDIUS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      pos_X: 500, //check the X, Y coordinates guide in the documentation
      pos_Y: 660,
      size: 24, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${GLUTEUSMEDIUS}`, //link to any webpage
      target: 'same_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
  ],
};

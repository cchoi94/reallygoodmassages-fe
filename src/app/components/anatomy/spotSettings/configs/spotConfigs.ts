import { SpotColors } from 'app/components/anatomy/spotSettings/spotColors';
import { TherapyGifs } from 'app/dictionaries/therapyGifs';
import { BodyParts } from 'app/dictionaries/bodyParts';
import { Path } from 'app/Path';

interface ConfigAttributes {
  hover: string;
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

/*============================================================================================*/
/*===== In the following section you can add/remove/modify the spots of the front side =======*/
/*============================================================================================*/
// Config A

export const spotsConfigA: Pins = {
  pins: [
    // Left Neck
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 375, //check the X, Y coordinates guide in the documentation
      pos_Y: 180,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${TherapyGifs[BodyParts.NECK]}`, //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Neck
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 430, //check the X, Y coordinates guide in the documentation
      pos_Y: 210,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${TherapyGifs[BodyParts.NECK]}`, //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Middle Nick
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 401, //check the X, Y coordinates guide in the documentation
      pos_Y: 245,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: `${Path.THERAPY}?exercises=${TherapyGifs[BodyParts.NECK]}`, //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Arm
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 230, //check the X, Y coordinates guide in the documentation
      pos_Y: 280,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 280, //check the X, Y coordinates guide in the documentation
      pos_Y: 290,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Chest
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 290, //check the X, Y coordinates guide in the documentation
      pos_Y: 410,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 310, //check the X, Y coordinates guide in the documentation
      pos_Y: 450,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
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
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 373, //check the X, Y coordinates guide in the documentation
      pos_Y: 140,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Arm
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 210, //check the X, Y coordinates guide in the documentation
      pos_Y: 280,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 255, //check the X, Y coordinates guide in the documentation
      pos_Y: 290,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Back
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 360, //check the X, Y coordinates guide in the documentation
      pos_Y: 280,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 350, //check the X, Y coordinates guide in the documentation
      pos_Y: 400,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 350, //check the X, Y coordinates guide in the documentation
      pos_Y: 440,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Back
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 450, //check the X, Y coordinates guide in the documentation
      pos_Y: 230,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 450, //check the X, Y coordinates guide in the documentation
      pos_Y: 330,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 480, //check the X, Y coordinates guide in the documentation
      pos_Y: 390,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 520, //check the X, Y coordinates guide in the documentation
      pos_Y: 440,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Left Loin
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 320, //check the X, Y coordinates guide in the documentation
      pos_Y: 510,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 320, //check the X, Y coordinates guide in the documentation
      pos_Y: 570,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    // Right Arm
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 570, //check the X, Y coordinates guide in the documentation
      pos_Y: 290,
      size: 32, //size of the pin
      outline, //outline color of the pin
      upColor, //color of the pin when drawing load
      overColor, //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
  ],
};

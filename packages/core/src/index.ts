import { VIEW_WIDTH, VIEW_HEIGHT } from 'common/constants/ui';
import UI_MESSAGE from 'common/constants/message';

mg.showUI(__html__, {
  width: VIEW_WIDTH,
  height: VIEW_HEIGHT,
});

mg.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  const { type, data } = msg.msg;
  if (type === UI_MESSAGE.HELLO) {
    const textNode = mg.createText();
    textNode.characters = data;
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  mg.closePlugin();
};

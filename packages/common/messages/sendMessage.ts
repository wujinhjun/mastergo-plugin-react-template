import UI_MESSAGE from '../constants/message';

export type UIMessageType = UI_MESSAGE;

export type MessageType = {
  type: UIMessageType;
  data?: any;
};

/**
 * 向UI发送消息
 */
export const sendMsgToUI = (data: MessageType) => {
  mg.ui.postMessage(data, '*');
};

/**
 * 向插件发送消息
 */
export const sendMsgToPlugin = (data: MessageType) => {
  parent.postMessage(data, '*');
};

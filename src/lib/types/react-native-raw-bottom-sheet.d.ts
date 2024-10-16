declare module 'react-native-raw-bottom-sheet' {
    import { Component, ReactNode } from 'react';
    import { ViewStyle, ModalProps } from 'react-native';
  
    interface RBSheetProps {
      ref?: React.Ref<any>;
      openDuration?: number;
      closeOnDragDown?: boolean;
      useNativeDriver?: boolean;
      customStyles?: {
        wrapper?: ViewStyle;
        draggableIcon?: ViewStyle;
        container?: {}
      };
      customModalProps?: ModalProps;
      customAvoidingViewProps?: any;
      height: number;
      draggable: boolean,
      children: ReactNode,
      dragOnContent: boolean,
      closeOnPressBack: boolean
    }
  
    export default class RBSheet extends Component<RBSheetProps> {
      open: () => void;
      close: () => void;
    }
  }
  
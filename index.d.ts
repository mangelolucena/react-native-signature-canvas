declare module "react-native-signature-canvas" {
  import React from "react";

  type ImageType = "image/jpeg" | "image/svg+xml";

  type DataURL = "Base64";

  type ForwardRef<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

  type SignatureViewProps = {
    webStyle?: string;
    onOK?: (signature: string) => void;
    onEmpty?: () => void;
    onClear?: () => void;
    onBegin?: () => void;
    onEnd?: () => void;
    descriptionText?: string;
    clearText?: string;
    confirmText?: string;
    customHtml?: string | null | undefined;
    autoClear?: boolean;
    imageType?: ImageType;
    dataURL?: DataURL;
    penColor?: string;
    backgroundColor?: string;
    dotSize?: number,
    minWidth?: number,
    androidHardwareAccelerationDisabled?: boolean;
    indicatorColor: string;
  }

  export type SignatureViewRef = {
    readSignature: () => void;
    clearSignature: () => void;
  }

  const SignatureView: ForwardRef<SignatureViewRef, SignatureViewProps>
  export default SignatureView;
}
import {
  PresentationControlProps,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Canvas, GroupProps } from "@react-three/fiber";
import React from "react";

const CanvasChild = ({
  renderComponent,
  config,
}: {
  renderComponent: React.ReactNode;
  config: PresentationControlProps;
}) => {
  return (
    <>
      <PresentationControls
        snap
        global
        rotation={[0, -Math.PI / 2, 0]}
        polar={[0, Math.PI / 6]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
        {...config}
      >
        <Stage environment="forest" shadows={false} adjustCamera={false}>
          {renderComponent}
        </Stage>
      </PresentationControls>
    </>
  );
};

const CanvasHOC =
  (
    ModelComponent: (props: GroupProps) => JSX.Element,
    title: string,
    config?: PresentationControlProps
  ) =>
  (
    props: GroupProps & {
      config?: PresentationControlProps;
    }
  ) => {
    return (
      <Canvas
        dpr={window?.devicePixelRatio}
        flat
        frameloop="demand"
        style={{
          aspectRatio: 1,
        }}
        title={title}
      >
        <CanvasChild
          config={config ?? {}}
          renderComponent={<ModelComponent {...props} />}
        />
      </Canvas>
    );
  };

export default CanvasHOC;

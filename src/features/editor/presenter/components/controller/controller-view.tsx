import React from 'react';
import { Resize } from '@/features/editor/entities/resize';
import { ResizeElement } from '@/features/editor/use-cases/resize-element';
import { ControllerViewState } from './controller-view-state';

interface Props {
  children: React.ReactNode;
  viewState: ControllerViewState;
}

export function ControllerComponent({ children, viewState }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const resize = new Resize();
  const resizeElement = new ResizeElement(viewState.element, resize);

  React.useEffect(() => {
    if (!ref.current) return;

    ref.current.addEventListener('mousedown', onMouseDown);
    ref.current.addEventListener('mousemove', onMouseMove);
    ref.current.addEventListener('mouseup', onMouseUp);
  }, [ref]);

  function onMouseDown() {
    resizeElement.StartResizing();
  }

  function onMouseMove(event: MouseEvent) {
    if (!resize.isResizing) return;

    const { clientX: x, clientY: y } = event;
    console.log(x, y);
    resizeElement.ResizeTo(x, y);
  }

  function onMouseUp() {
    resizeElement.StopResizing();
  }

  return (
    <div ref={ref} className="controller-component">
      {children}
    </div>
  );
}

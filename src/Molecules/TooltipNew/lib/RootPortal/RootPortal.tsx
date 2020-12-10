import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, useForceUpdate } from '../hooks';
import { Props } from './RootPortal.types';

const RootPortal: React.FC<Props> = ({ children }) => {
  const mountNode = useRef<HTMLDivElement | null>(null);
  const portalNode = useRef<HTMLElement | null>(null);
  const forceUpdate = useForceUpdate();

  useIsomorphicLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return;

    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    const { ownerDocument } = mountNode.current;
    if (ownerDocument) {
      portalNode.current = ownerDocument.createElement('root-portal');
      ownerDocument.body.appendChild(portalNode.current);
      forceUpdate();
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (portalNode?.current?.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [forceUpdate]);

  return portalNode.current ? createPortal(children, portalNode.current) : <span ref={mountNode} />;
};

export default RootPortal;

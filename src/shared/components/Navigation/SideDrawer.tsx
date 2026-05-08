import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

type SideDrawerProps = {
  show: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const SideDrawer = ({ children, show, onClick }: SideDrawerProps) => {
  const nodeRef = useRef<HTMLElement>(null);

  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside ref={nodeRef} className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")!,
  );
};

export default SideDrawer;

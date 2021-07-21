import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    if (links.length > 3) setColumns(4);
    else setColumns(links.length);
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${columns}`}>
        {links.map((link, i) => {
          const { label, icon, url } = link;
          return (
            <a key={i} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;

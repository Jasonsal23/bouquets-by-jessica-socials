import React from "react";
import { Icon } from "@iconify/react";

const tiktok = "https://www.tiktok.com/@bouquets.by.jessica";
const instagram = "https://www.instagram.com/bouquets.by.jessicaa";
const facebook = "https://www.facebook.com/p/Bouquets-by-Jessica-61559656554861/";
const whatsapp = "https://api.whatsapp.com/send?phone=7029572311";


export default function Socials() {
  const openLinkInNewTab = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="Socials">
      <div className="Icons" onClick={() => openLinkInNewTab(tiktok)}>
        <Icon icon="icon-park-outline:tiktok" style={{ color: "white" }} />
      </div>
      <div className="Icons" onClick={() => openLinkInNewTab(instagram)}>
        <Icon icon="brandico:instagram" style={{ color: "white" }} />
      </div>
      <div className="Icons" onClick={() => openLinkInNewTab(facebook)}>
        <Icon icon="ic:baseline-facebook" style={{ color: "white" }} />
      </div>
      <div className="Icons" onClick={() => openLinkInNewTab(whatsapp)}>
        <Icon icon="ic:baseline-whatsapp" style={{ color: "white" }} />
        <div className="whatsapp-number">(702) 957-2311</div>
      </div>
    </div>
  );
}
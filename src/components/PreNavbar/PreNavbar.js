import React from "react";
import "../PreNavbar/PreNavbar.css";

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="https://www.mi.com/bd/">XIAOMI BANGLADESH</a>
        <span>|</span>
        <a href="https://c.mi.com/bd/">COMMUNITY</a>
      </div>

      <div>
        <a href="https://buy.mi.com/bd/site/login">SING IN</a>
        <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fbd%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fit%252Fsign%3DNzIyODUxMDljZDA1MDYwN2NiOTY4ZTkyMzY5YmMxOTkzZjQxYzAwZQ%2C%2C&sid=mi_overseabd&_locale=en_US">
          SING UP
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;

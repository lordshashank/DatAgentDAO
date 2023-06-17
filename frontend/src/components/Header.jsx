import { ConnectButton } from "web3uikit";
import { useRouter } from "next/router";
import useWeb3 from "../../utils/useWeb3";
import classes from "../styles/Header.module.css";
import logo from "../../public/logo@2x.png";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  // const { account } = useMoralis();
  const { chainId, userAccount, Moralis, isWeb3Enabled } = useWeb3();
  const router = useRouter();
  const activeClassName = function (path) {
    return `${classes.link} ${router.pathname == path && classes.active}`;
  };

  console.log(userAccount);
  console.log(chainId);
  console.log(isWeb3Enabled);
  return (
    <div className={classes.header}>
      <Link
        className={classes["logo"]}
        href={"/"}
        style={{ all: "unset", cursor: "pointer" }}
      >
        <div className={classes["logo-container"]}>
          <Image src={logo} width={50} height={40} />
          <span>Artelligence</span>
        </div>
      </Link>
      <div className={classes.links}>
        <Link
          className={activeClassName("/ai-conference")}
          href="/ai-conference"
        >
          Ai Conference
        </Link>
      </div>
      <div className={classes["connect-button"]}>
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
};

export default Header;
